
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { products } from "../../data/productData";
import ProductCard from "../Common/ProductCard";
import LimitedTimeOffer from "../Home/LimitedTimeOffer";

// Dynamically get unique categories and brands from products
const getCategories = products => {
  const cats = Array.from(new Set(products.map(p => p.category).filter(Boolean)));
  return ["All Products", ...cats];
};
const getBrands = products => {
  return Array.from(new Set(products.map(p => p.brand).filter(Boolean)));
};

const ProductList = () => {
  const location = useLocation();
  const categories = getCategories(products);
  const brands = getBrands(products);
  const [view, setView] = useState("grid");
  // Read category from query string
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get("category") || "All Products";
  const [selectedCategories, setSelectedCategories] = useState([initialCategory]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [price, setPrice] = useState(10000);
  const [sort, setSort] = useState("featured");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // Update selectedCategories if query string changes
  useEffect(() => {
    const cat = params.get("category") || "All Products";
    setSelectedCategories([cat]);
  }, [location.search]);

  // Prevent body scroll when sidebar is open (mobile)
  useEffect(() => {
    if (showSidebar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showSidebar]);

  // Filtering logic
  const filteredProducts = products.filter(product => {
    // Category filter
    const categoryMatch = selectedCategories.includes("All Products") || selectedCategories.includes(product.category);
    // Brand filter
    const brandMatch = !selectedBrand || product.brand === selectedBrand;
    // Price filter
    const priceMatch = !product.price || product.price <= price;
    // In stock filter
    const stockMatch = !inStockOnly || product.inStock;
    return categoryMatch && brandMatch && priceMatch && stockMatch;
  });

  // Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "price-low") return (a.price || 0) - (b.price || 0);
    if (sort === "price-high") return (b.price || 0) - (a.price || 0);
    if (sort === "newest") return (b.createdAt || 0) - (a.createdAt || 0);
    return 0;
  });

  // Handlers
  const handleCategoryChange = cat => {
    if (cat === "All Products") {
      setSelectedCategories(["All Products"]);
    } else {
      setSelectedCategories(prev => {
        const filtered = prev.filter(c => c !== "All Products");
        if (filtered.includes(cat)) {
          return filtered.filter(c => c !== cat);
        } else {
          return [...filtered, cat];
        }
      });
    }
  };

  return (
    <>
      <section className="py-10 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-5 xl:gap-8">
            {/* Sidebar Filters - Responsive */}
            {/* Mobile Sidebar Overlay */}
            {showSidebar && (
              <div className="fixed inset-0 bg-black/70 z-40 lg:hidden" onClick={() => setShowSidebar(false)} />
            )}
            <div className={`lg:w-1/4 w-full h-full overflow-y-auto mb-6 lg:mb-0 ${showSidebar ? 'fixed top-0 left-0 w-full h-full z-50 max-w-xs' : 'hidden'} lg:relative lg:block`}>
              <aside className="bg-white p-4 lg:p-6 lg:rounded-lg border w-full h-full overflow-y-auto">
                <div className="flex justify-between items-center mb-4 lg:mb-6 border-b pb-3">
                  <h2 className="font-bold text-lg md:text-xl">Filters</h2>
                  <button className="text-gray-500 hover:text-black text-2xl lg:hidden block" onClick={() => setShowSidebar(false)}>&times;</button>
                </div>
                {/* Category Filter */}
                <div className="mb-4 lg:mb-6">
                  <h3 className="font-semibold mb-2 md:mb-3">Category</h3>
                  <select
                    className="w-full border rounded-md p-2"
                    value={selectedCategories[0]}
                    onChange={e => setSelectedCategories([e.target.value])}
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                {/* Brand Filter */}
                {brands.length > 0 && (
                  <div className="mb-4 lg:mb-6">
                    <h3 className="font-semibold mb-2 md:mb-3">Brand</h3>
                    <select
                      className="w-full border rounded-md p-2"
                      value={selectedBrand}
                      onChange={e => setSelectedBrand(e.target.value)}
                    >
                      <option value="">All Brands</option>
                      {brands.map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                  </div>
                )}
                {/* Price Range */}
                <div className="mb-4 lg:mb-6">
                  <h3 className="font-semibold mb-2 md:mb-3">Max Price</h3>
                  <input
                    type="number"
                    min="0"
                    max="10000"
                    value={price}
                    onChange={e => setPrice(Number(e.target.value))}
                    className="w-full border rounded-md p-2"
                    placeholder="Max Price"
                  />
                </div>
                {/* In Stock Filter */}
                <div>
                  <h3 className="font-semibold mb-2 md:mb-3">Availability</h3>
                  <label className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={e => setInStockOnly(e.target.checked)}
                      className="rounded text-primary focus:ring-primary"
                    />
                    <span>In Stock Only</span>
                  </label>
                </div>
              </aside>
            </div>
            {/* Products Content */}
            <div className="w-full lg:w-3/4">
              {/* Products Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 border-b pb-5">
              <div className="flex items-center gap-3">
                <button
                  className="p-2 px-3 bg-primary/10 text-primary border border-primary rounded lg:hidden block"
                  onClick={() => setShowSidebar(true)}
                  aria-label="Show Filters"
                >
                  {/* Inline SVG filter icon */}
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4.5C2 4.22386 2.22386 4 2.5 4H15.5C15.7761 4 16 4.22386 16 4.5V5.5C16 5.77614 15.7761 6 15.5 6H2.5C2.22386 6 2 5.77614 2 5.5V4.5Z" fill="currentColor"/>
                    <rect x="4" y="8" width="10" height="2" rx="1" fill="currentColor"/>
                    <rect x="6" y="12" width="6" height="2" rx="1" fill="currentColor"/>
                  </svg>
                </button>
                <h2 className="font-bold text-xl md:text-2xl">All Products ({sortedProducts.length})</h2>
              </div>
                <div className="flex flex-1 gap-3 sm:justify-end">
                  {/* View Toggle */}
                  <div className="flex border rounded-md overflow-hidden">
                    <button
                      className={`view-toggle p-2 px-3 ${view === "grid" ? "active bg-primary text-white" : ""}`}
                      onClick={() => setView("grid")}
                      title="Grid View"
                    >
                      {/* SVG Grid Icon */}
                      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="2" y="2" width="6" height="6" rx="1.5" fill="currentColor" /><rect x="12" y="2" width="6" height="6" rx="1.5" fill="currentColor" /><rect x="2" y="12" width="6" height="6" rx="1.5" fill="currentColor" /><rect x="12" y="12" width="6" height="6" rx="1.5" fill="currentColor" /></svg>
                    </button>
                    <button
                      className={`view-toggle p-2 px-3 sm:block hidden ${view === "list" ? "active bg-primary text-white" : ""}`}
                      onClick={() => setView("list")}
                      title="List View"
                    >
                      {/* SVG List Icon */}
                      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="4" y="5" width="12" height="2" rx="1" fill="currentColor" /><rect x="4" y="9" width="12" height="2" rx="1" fill="currentColor" /><rect x="4" y="13" width="12" height="2" rx="1" fill="currentColor" /></svg>
                    </button>
                  </div>
                  <div className="relative">
                    <select
                      className="block w-full border rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      value={sort}
                      onChange={e => setSort(e.target.value)}
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Products List - Grid/List View */}
              {sortedProducts.length === 0 ? (
                <div className="py-10 text-center text-lg text-gray-500">
                  No products found.
                </div>
              ) : view === "grid" ? (
                <div className="grid-view grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-6">
                  {sortedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="list-view flex flex-col gap-5 xl:gap-6">
                  {sortedProducts.map(product => (
                    <ProductCard key={product.id} product={product} listView />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
