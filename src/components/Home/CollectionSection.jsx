import React from "react";
import { Link } from "react-router-dom";
import { collections } from "../../data/collectionData";
import { products } from "../../data/productData";


const getProductCount = categoryName => products.filter(p => p.category === categoryName).length;

const CollectionSection = () => {
  return (
    <section className="lg:py-20 py-10">
      <div className="md:container w-full mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 lg:mb-8 mb-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Our Collections</h2>
          <Link to="/collections" className="text-primary font-medium hover:underline">
            View All Collections
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {collections.map((col, idx) => (
            <div
              key={col.name}
              className={`collection-box flex items-end relative z-[1] h-full w-full p-4 ${idx === 1 ? "lg:row-span-2 lg:col-span-1" : ""} lg:pt-24 pt-20 rounded-lg overflow-hidden`}
            >
              <img
                src={col.image}
                className="absolute top-0 left-0 h-full w-full z-[-1] object-cover"
                alt={col.name}
              />
              <div className="content-box">
                <h3 className="font-medium lg:text-[22px] text-xl mb-3">{col.name}</h3>
                {/* Removed product count display */}
                <Link to={`/products?category=${encodeURIComponent(col.category)}`} className="btn-primary">
                  Shop now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection; 