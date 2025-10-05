import React from "react";
import CommonBanner from "../components/Common/CommonBanner";
import CollectionListSection from "../components/CollectionList/CollectionList";

const WishlistPage = () => {
  return (
    <>
      <CommonBanner title="collection list" />
      <CollectionListSection />
    </>
  );
};

export default WishlistPage;
