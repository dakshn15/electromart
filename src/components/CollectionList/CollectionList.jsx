import React from "react";
import imageMap from "../../utils/imageMap";
import { Link } from "react-router-dom";

// TODO: Replace with dynamic data if needed
const featuredCollections = [
  {
    name: "Smartphone Essentials",
    image: imageMap.collectionMain1,
    description: "A curated selection of the latest smartphones and must-have accessories for everyday use.",
  },
  {
    name: "Weekend Gadgets",
    image: imageMap.collectionMain2,
    description: "Everything you need for a tech-filled weekend, from smartwatches to wireless earbuds.",
  },
];

const allCollections = [
  {
    name: "Smartphones",
    image: imageMap.collectionPage2,
    category: "Mobile Phones"
  },
  {
    name: "Laptops",
    image: imageMap.collectionPage5,
    category: "Laptops"
  },
  {
    name: "Headphones",
    image: imageMap.collectionPage1,
    category: "Audio"
  },
  {
    name: "Smart TVs",
    image: imageMap.collectionPage3,
    category: "SmartTVs"
  },
  {
    name: "Cameras",
    image: imageMap.collectionPage2,
    category: "Cameras"
  },
  {
    name: "Gaming Consoles",
    image: imageMap.collectionPage6,
    category: "GamingConsoles"
  },
];

const CollectionListSection = () => (
  <section className="collection-list-sec pb-10 lg:pb-20">
    {/* Featured Collections */}
    <div className="bg-white py-10 lg:py-20">
      <div className="md:container w-full mx-auto px-4">
        <h2 className="font-bold text-2xl md:text-3xl lg:mb-8 mb-4">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCollections.map((col, idx) => (
            <div key={col.name} className="relative group overflow-hidden rounded-xl">
              <img
                src={col.image}
                alt={col.name}
                className="w-full h-80 object-cover transition duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end sm:p-6 p-4 text-white">
                <div className="transform transition duration-300 group-hover:-translate-y-2">
                  <h3 className="font-heading font-bold text-xl md:text-2xl mb-2">{col.name}</h3>
                  <p className="max-w-md mb-4">{col.description}</p>
                  <Link to={'/products'} className="btn-primary">
                    Shop Collection
                    <i className="fas fa-arrow-right text-sm"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="md:container w-full mx-auto px-4">
      {/* All Collections Grid */}
      <div>
        <h2 className="font-bold text-2xl md:text-3xl lg:mb-8 mb-4">Browse All Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-6">
          {allCollections.map((col) => (
            <Link to={`/products?category=${encodeURIComponent(col.category)}`}
              key={col.name}
              className="group border shadow-md rounded-xl overflow-hidden relative"
            >
              <div className="relative overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={col.image}
                    alt={`${col.name} Collection`}
                    className="w-full h-60 object-cover transition duration-500 transform group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-4 relative">
                <div className="absolute right-2 w-8 h-8 rounded-full top-2 bg-primary/10"></div>
                <div className="absolute right-10 w-4 h-4 rounded-full top-8 bg-primary/10"></div>
                <h3 className="font-heading font-bold md:text-xl text-lg text-black text-center">{col.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CollectionListSection;
