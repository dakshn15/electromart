import React, { useState } from "react";
import CartDrawer from "../components/Common/CartDrawer";

export function useCartDrawer() {
  const [cartOpen, setCartOpen] = useState(false);
  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  const CartDrawerComponent = (
    <CartDrawer isOpen={cartOpen} onClose={closeCart} />
  );

  return { cartOpen, openCart, closeCart, CartDrawerComponent };
}
