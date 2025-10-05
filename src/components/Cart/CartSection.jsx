import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import imageMap from "../../utils/imageMap";
import QuantityInput from "../ui/QuantityInput";

const initialCart = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    image: imageMap["cart-1.png"],
    price: 24.99,
    quantity: 1,
    desc: "128GB, Space Black",
    link: "/product-detail",
  },
  {
    id: 2,
    name: "Apple Watch Series 8",
    image: imageMap["cart-2.png"],
    price: 6.99,
    quantity: 1,
    desc: "45mm, Silver",
    link: "/product-detail",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    image: imageMap["cart-3.png"],
    price: 5.49,
    quantity: 1,
    desc: "Wireless, Blue",
    link: "/product-detail",
  },
];

const CartSection = () => {
  const { cart, dispatch } = useCart();

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleQty = (id, delta) => {
    const item = cart.find((item) => item.id === id);
    if (!item) return;
    const newQty = Math.max(1, item.quantity + delta);
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: newQty } });
  };

  const handleClear = () => dispatch({ type: "CLEAR_CART" });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = 3.0;
  const total = subtotal + tax;

  return (
    <section className="lg:py-20 py-10">
      <div className="md:container w-full mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Cart Items */}
          <div className="lg:w-2/3">
            <div className="overflow-x-auto border border-gray-200 rounded-md">
              <table className="w-full min-w-[650px] border-collapse">
                <thead>
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold text-white bg-primary rounded-st-md">Product</th>
                    <th className="py-3 px-4 text-center font-semibold text-white bg-primary">Price</th>
                    <th className="py-3 px-4 text-center font-semibold text-white bg-primary">Quantity</th>
                    <th className="py-3 px-4 text-center font-semibold text-white bg-primary rounded-et-md">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cart.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-8 text-center text-gray-500">
                        Your cart is empty.
                      </td>
                    </tr>
                  ) : (
                    cart.map((item) => (
                      <tr key={item.id}>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-4">
                            <button
                              className="text-gray-500 hover:text-red-500 transition-all duration-300 p-1"
                              title="Remove item"
                              aria-label="Remove item"
                              onClick={() => handleRemove(item.id)}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" x2="10" y1="11" y2="17"></line>
                                <line x1="14" x2="14" y1="11" y2="17"></line>
                              </svg>
                            </button>
                            <div className="h-20 w-20 flex-shrink-0 border bg-gray-100 rounded-lg p-2">
                              <img src={item.image} alt="cart-image" className="h-full w-full object-contain" />
                            </div>
                            <div>
                              <h3 className="font-medium mb-1">
                                <Link to={item.link} className="hover:text-primary transition-all duration-300">
                                  {item.name}
                                </Link>
                              </h3>
                              <p className="text-sm text-gray-500">{item.desc}</p>
                              {/* Show selected color if present */}
                              {item.color && (
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-xs text-gray-500">Color:</span>
                                  <span className="text-xs font-medium">{item.color}</span>
                                  {item.colorCode && (
                                    <span
                                      className="inline-block w-4 h-4 rounded-full border border-gray-300"
                                      style={{ backgroundColor: item.colorCode }}
                                    ></span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className="font-semibold">${item.price.toFixed(2)}</span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="col-span-2 flex items-center justify-between md:justify-center">
                            <QuantityInput
                              value={item.quantity}
                              onDecrement={() => handleQty(item.id, -1)}
                              onIncrement={() => handleQty(item.id, 1)}
                              min={1}
                            />
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="font-bold text-primary-dark">${(item.price * item.quantity).toFixed(2)}</div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {/* Cart Actions */}
            <div className="flex flex-wrap gap-4 justify-between md:mt-8 mt-6">
              <Link to="/products" className="inline-flex items-center text-primary hover:text-primary-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Continue Shopping
              </Link>
              <button
                className="inline-flex items-center text-gray-600 hover:text-red-500 transition-all duration-300"
                onClick={handleClear}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
                  <path d="M3 6h18" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
                Clear Cart
              </button>
            </div>
          </div>
          {/* Right Side - Cart Summary  */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 md:p-6 p-4 rounded-md border">
              <h2 className="font-heading font-bold text-xl md:mb-6 mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
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
                <div className="pt-3 border-t border-gray-200 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary-dark">${total.toFixed(2)}</span>
                </div>
              </div>
              <div className="md:mb-6 mb-4">
                <label htmlFor="coupon" className="block mb-2 font-medium md:text-base text-sm">Coupon Code</label>
                <div className="flex">
                  <input
                    type="text"
                    id="coupon"
                    placeholder="Enter coupon code"
                    className="form-input !rounded-tr-none !rounded-br-none"
                  />
                  <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-md transition">
                    Apply
                  </button>
                </div>
              </div>
              <Link to="/checkout" className="btn-primary w-full">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
