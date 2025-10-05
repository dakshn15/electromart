import React from "react";
import CommonBanner from "../components/Common/CommonBanner";
import ProductList from "../components/ProductList/ProductList";


const ProductListPage = () => {
    return (
        <>
            <CommonBanner title="Products" />
            <ProductList />
        </>
    )
};

export default ProductListPage;
