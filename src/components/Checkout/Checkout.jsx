import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";

const TAX_RATE = 0.08;

const Checkout = () => {
  const { cart, dispatch: cartDispatch } = useCart();
  const { user, addOrder } = useUser();
  const [form, setForm] = useState({
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    delivery: "standard",
    payment: "card",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const [showCardFields, setShowCardFields] = useState(form.payment === "card");

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = +(subtotal * TAX_RATE).toFixed(2);
  const shipping = form.delivery === "express" ? 5.99 : 0;
  const total = +(subtotal + tax + shipping).toFixed(2);

  const validate = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "First name is required.";
    if (!form.lastName) newErrors.lastName = "Last name is required.";
    if (!form.phone) newErrors.phone = "Phone is required.";
    if (!form.address) newErrors.address = "Address is required.";
    if (!form.city) newErrors.city = "City is required.";
    if (!form.zip) newErrors.zip = "Postal code is required.";
    if (cart.length === 0) newErrors.cart = "Your cart is empty.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSuccessMsg("");
    if (name === "payment") {
      setShowCardFields(value === "card");
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Place order
    addOrder({
      id: `#FM-${Math.floor(Math.random()*100000000)}`,
      date: new Date().toLocaleDateString(),
      status: "Processing",
      total: `$${total}`,
      items: cart,
      address: form.address,
      city: form.city,
      zip: form.zip,
      phone: form.phone,
      delivery: form.delivery,
      payment: form.payment,
    });
    cartDispatch({ type: "CLEAR_CART" });
    setSuccessMsg("Order placed successfully!");
  };

  return (
    <section className="py-10 lg:py-20">
      <div className="md:container w-full mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Checkout Forms */}
          <div className="lg:w-2/3">
            <form id="checkout-form" className="md:space-y-8 space-y-6" onSubmit={handleSubmit} noValidate>
              {/* 1. Customer Information */}
              <div>
                <h2 className="font-semibold md:text-xl text-lg md:mb-4 mb-3">1. Customer Information</h2>
                <div className="bg-gray-50 border md:p-6 p-4 rounded-lg shadow-sm">
                  {/* Email Field */}
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-medium md:text-base text-sm">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" id="email" className="form-input" required />
                    <p className="text-sm text-gray-500 mt-1">We'll send order confirmation to this email</p>
                  </div>
                  {/* Delivery Method */}
                  <div>
                    <label className="block mb-2 font-medium md:text-base text-sm">Delivery Method <span className="text-red-500">*</span></label>
                    <div className="space-y-3">
                      <div className="radio-btn flex items-center p-3 border rounded-md">
                        <input type="radio" id="delivery-standard" name="delivery-method" value="standard" className="text-primary focus:ring-primary mr-2" defaultChecked />
                        <label htmlFor="delivery-standard" className="flex-1 flex flex-col md:flex-row md:items-center justify-between w-full">
                          <span className="font-medium">Standard Delivery (1-2 days)</span>
                          <span className="font-medium text-primary-dark">Free</span>
                        </label>
                      </div>
                      <div className="radio-btn flex items-center p-3 border rounded-md">
                        <input type="radio" id="delivery-express" name="delivery-method" value="express" className="text-primary focus:ring-primary mr-2" />
                        <label htmlFor="delivery-express" className="flex-1 flex flex-col md:flex-row md:items-center justify-between w-full">
                          <span className="font-medium">Express Delivery (Same Day)</span>
                          <span className="font-medium text-primary-dark">$5.99</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2. Shipping Information */}
              <div>
                <h2 className="font-semibold md:text-xl text-lg md:mb-4 mb-3">2. Shipping Information</h2>
                <div className="bg-gray-50 border md:p-6 p-4 rounded-lg shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block mb-2 font-medium md:text-base text-sm">First Name <span className="text-red-500">*</span></label>
                      <input type="text" id="first-name" name="firstName" className="form-input" required value={form.firstName} onChange={handleChange} onBlur={handleBlur} />
                      {errors.firstName && touched.firstName && <div className="text-red-500 text-xs mt-1">{errors.firstName}</div>}
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block mb-2 font-medium md:text-base text-sm">Last Name <span className="text-red-500">*</span></label>
                      <input type="text" id="last-name" name="lastName" className="form-input" required value={form.lastName} onChange={handleChange} onBlur={handleBlur} />
                      {errors.lastName && touched.lastName && <div className="text-red-500 text-xs mt-1">{errors.lastName}</div>}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="phone" className="block mb-2 font-medium md:text-base text-sm">Phone Number <span className="text-red-500">*</span></label>
                    <input type="tel" id="phone" name="phone" className="form-input" required value={form.phone} onChange={handleChange} onBlur={handleBlur} />
                    {errors.phone && touched.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
                  </div>
                  <div className="mt-4">
                    <label htmlFor="address" className="block mb-2 font-medium md:text-base text-sm">Address <span className="text-red-500">*</span></label>
                    <input type="text" id="address" name="address" className="form-input" required value={form.address} onChange={handleChange} onBlur={handleBlur} />
                    {errors.address && touched.address && <div className="text-red-500 text-xs mt-1">{errors.address}</div>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label htmlFor="city" className="block mb-2 font-medium md:text-base text-sm">City <span className="text-red-500">*</span></label>
                      <input type="text" id="city" name="city" className="form-input" required value={form.city} onChange={handleChange} onBlur={handleBlur} />
                      {errors.city && touched.city && <div className="text-red-500 text-xs mt-1">{errors.city}</div>}
                    </div>
                    <div>
                      <label htmlFor="zip" className="block mb-2 font-medium md:text-base text-sm">Postal Code <span className="text-red-500">*</span></label>
                      <input type="text" id="zip" name="zip" className="form-input" required value={form.zip} onChange={handleChange} onBlur={handleBlur} />
                      {errors.zip && touched.zip && <div className="text-red-500 text-xs mt-1">{errors.zip}</div>}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block mb-2 font-medium md:text-base text-sm">Delivery Method <span className="text-red-500">*</span></label>
                    <select name="delivery" className="form-input" value={form.delivery} onChange={handleChange}>
                      <option value="standard">Standard Delivery (Free)</option>
                      <option value="express">Express Delivery ($5.99)</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <label className="block mb-2 font-medium md:text-base text-sm">Payment Method <span className="text-red-500">*</span></label>
                    <select name="payment" className="form-input" value={form.payment} onChange={handleChange}>
                      <option value="card">Credit/Debit Card</option>
                      <option value="paypal">PayPal</option>
                      <option value="cod">Cash on Delivery</option>
                    </select>
                  </div>
                  {showCardFields && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cardNumber" className="block mb-2 font-medium md:text-base text-sm">Card Number <span className="text-red-500">*</span></label>
                        <input type="text" id="cardNumber" name="cardNumber" className="form-input" value={form.cardNumber || ""} onChange={handleChange} />
                      </div>
                      <div>
                        <label htmlFor="cardName" className="block mb-2 font-medium md:text-base text-sm">Name on Card <span className="text-red-500">*</span></label>
                        <input type="text" id="cardName" name="cardName" className="form-input" value={form.cardName || ""} onChange={handleChange} />
                      </div>
                      <div>
                        <label htmlFor="cardExpiry" className="block mb-2 font-medium md:text-base text-sm">Expiry Date <span className="text-red-500">*</span></label>
                        <input type="text" id="cardExpiry" name="cardExpiry" className="form-input" value={form.cardExpiry || ""} onChange={handleChange} placeholder="MM/YY" />
                      </div>
                      <div>
                        <label htmlFor="cardCVV" className="block mb-2 font-medium md:text-base text-sm">CVV <span className="text-red-500">*</span></label>
                        <input type="text" id="cardCVV" name="cardCVV" className="form-input" value={form.cardCVV || ""} onChange={handleChange} />
                      </div>
                    </div>
                  )}
                  {errors.cart && <div className="text-red-500 text-xs mt-1">{errors.cart}</div>}
                </div>
              </div>
              {/* Show order success message at the top if order placed */}
              {successMsg && (
                <div className="mb-6 p-4 rounded bg-green-100 text-green-800 text-center font-semibold border border-green-300">
                  {successMsg}
                </div>
              )}
            </form>
          </div>
          {/* Right Side - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 border rounded-lg shadow-sm sticky top-[20px]">
              <div className="md:px-6 p-4 border-b">
                <h2 className="font-bold text-xl">Order Summary</h2>
              </div>
              {/* Order Items */}
              <div className="md:p-6 p-4 divide-y space-y-4 max-h-[360px] overflow-y-auto">
                {cart.length === 0 ? (
                  <div className="text-center text-gray-500">Your cart is empty.</div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex items-start gap-3 not-last:pb-4">
                      <div className="h-20 w-20 flex-shrink-0 border bg-gray-100 rounded-lg p-2">
                        <img src={item.image} alt="cart-image" className="h-full w-full object-contain" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium mb-2">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.quantity} × ${item.price.toFixed(2)}</p>
                      </div>
                      <div className="font-semibold text-right">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))
                )}
              </div>
              <div className="md:p-6 p-4 border-t">
                {/* Coupon Code */}
                <div className="pb-4 mb-4 border-b">
                  <div className="flex">
                    <input type="text" placeholder="Coupon code" className="p-2 form-input rounded-tr-none rounded-br-none" />
                    <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-md transition">Apply</button>
                  </div>
                </div>
                {/* Order Totals */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total</span>
                    <span className="text-primary-dark">${total.toFixed(2)}</span>
                  </div>
                </div>
                {/* Terms */}
                <div className="md:mb-6 mb-4">
                  <div className="checkbox flex items-start">
                    <input type="checkbox" id="terms" className="rounded border-gray-300 text-primary focus:ring-primary mt-1 mr-2" required />
                    <label htmlFor="terms" className="flex-1 text-sm">
                      I agree to the <a href="/terms-condition.html" className="text-primary hover:underline">Terms & Conditions</a>, <a href="/privacy-policy.html" className="text-primary hover:underline">Privacy Policy</a>, and <a href="/shipping-return.html" className="text-primary hover:underline">Refund Policy</a>
                    </label>
                  </div>
                </div>
                {/* Security Information */}
                <button type="submit" form="checkout-form" className="btn-primary w-full" disabled={Object.keys(validate()).length > 0 || successMsg}>Place Order</button>
                <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2 flex-shrink-0">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Secure checkout - Your data is protected
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
