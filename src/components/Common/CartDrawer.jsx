import React, { useRef, useEffect } from "react";
import productImages from "../../utils/imageMap";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";
import QuantityInput from "../ui/QuantityInput";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, dispatch } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (drawerRef.current && !drawerRef.current.contains(e.target) && isOpen) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleQty = (id, delta) => {
    const item = cart.find((item) => item.id === id);
    if (!item) return;
    const newQty = Math.max(1, item.quantity + delta);
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: newQty } });
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Fix image rendering: use require for local images if needed
  // ...existing code...

  return (
    <div
      className={`fixed inset-0 z-20 transition-all duration-300 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <div className="fixed inset-0 bg-black/70" onClick={onClose} />
      <aside
        ref={drawerRef}
        className={`cart-panel fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl z-20 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-bold text-xl">Your Cart ({cart.length})</h2>
            <button onClick={onClose} className="text-2xl hover:text-primary trasition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>

          <div className="overflow-y-auto flex-grow p-4 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center text-gray-500 py-10">Your cart is empty.</div>
            ) : (
              cart.map((item, idx) => (
                <div className="flex space-x-3 border-b pb-4" key={item.id ? item.id : idx}>
                  <Link to="/product-detail" className="w-20 h-24 rounded-md overflow-hidden bg-gray-100 border p-3">
                    <img src={productImages[item.image] || item.image} alt={item.name} className="object-contain h-full w-full" />
                  </Link>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <h4 className="font-semibold">{item.name}</h4>
                      <button
                        type="button"
                        onClick={() => handleRemove(item.id)}
                        className="p-1 rounded hover:bg-red-50 transition-all duration-300 group"
                        title="Remove from cart"
                        aria-label="Remove from cart"
                      >
                        <FaRegTrashCan className="h-4 w-4 text-red-600 group-hover:text-red-700 transition-all duration-300" />
                      </button>
                    </div>
                    {/* Show selected color if present */}
                    {item.color && (
                      <div className="flex items-center gap-2 mb-2">
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
                    <div className="flex justify-between items-center mt-2">
                      <QuantityInput
                        value={item.quantity}
                        onDecrement={() => handleQty(item.id, -1)}
                        onIncrement={() => handleQty(item.id, 1)}
                        min={1}
                        className="max-w-[100px] w-full !p-0"
                      />
                      <span className="font-bold text-primary-dark">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Hide total box if cart is empty */}
          {cart.length > 0 && (
            <div className="border-t p-4">
              <div className="flex justify-between pb-2">
                <span>Subtotal</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pb-2">
                <span>Delivery Fee</span>
                <span className="font-bold">Free</span>
              </div>
              <div className="flex justify-between pb-3 text-lg font-bold">
                <span>Total</span>
                <span className="text-primary-dark">${subtotal.toFixed(2)}</span>
              </div>
              <Link to="/cart" className="btn-primary w-full mb-3" onClick={onClose}>
                Proceed to Checkout
              </Link>
              <Link to="/products" className="btn-outline w-full" onClick={onClose}>
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
