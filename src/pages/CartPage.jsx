import React from "react";
import CommonBanner from "../components/Common/CommonBanner";
import CartSection from "../components/Cart/CartSection";

const CartPage = () => {
  return (
    <>
      <CommonBanner title="Your Cart" />
      <CartSection />
    </>
  );
};

export default CartPage;
