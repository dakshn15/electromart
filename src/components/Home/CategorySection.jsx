import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/categoryData";

const CategorySection = () => {
  return (
    <section className="lg:py-20 py-10 bg-gray-50">
      <div className="md:container w-full mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 lg:mb-8 mb-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Product Categories</h2>
          <Link to={'/collections'} className="text-primary font-medium hover:underline">View All
            Categories</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6 gap-5 ">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/products?category=${category.name}`}
              className="bg-white border lg:p-6 p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-300"
            >
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 p-3">
                {category.icon}
              </div>
              <h3 className="font-medium text-gray-900 text-lg">{category.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{category.productCount} Products</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection; 