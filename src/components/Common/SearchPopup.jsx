import React, { useState, useRef, useEffect } from "react";
import { FaTimes, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/productData";

const recentSearchesDefault = ["Laptops", "Headphones", "Smartphones", "Cameras"];

const SearchPopup = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState("");
  const [recentSearches, setRecentSearches] = useState(recentSearchesDefault);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef(null);
  const navigate = useNavigate();

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
      if (containerRef.current && !containerRef.current.contains(e.target) && isOpen) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  const filteredProducts = search
    ? products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    : [];

  const handleNavigateTo = (link) => {
    onClose();
    setSearch("");
    setActiveIndex(-1);
    navigate(link);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    setRecentSearches((prev) => [search, ...prev.filter((item) => item !== search)].slice(0, 4));
    const chosen = activeIndex >= 0 ? filteredProducts[activeIndex] : filteredProducts[0];
    if (chosen) {
      handleNavigateTo(chosen.link);
    } else {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (filteredProducts.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filteredProducts.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const chosen = activeIndex >= 0 ? filteredProducts[activeIndex] : filteredProducts[0];
      if (chosen) handleNavigateTo(chosen.link);
    }
  };

  const handleRecentClick = (item) => {
    setSearch(item);
  };

  const handleClearAll = () => {
    setRecentSearches([]);
  };

  return (
    <div
      className={`fixed flex items-center justify-center inset-0 z-50 transition-all duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      } bg-black/40`}
      style={{ backdropFilter: isOpen ? "blur(2px)" : "none" }}
    >
      <div
        ref={containerRef}
        className="search-popup relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 md:p-6 p-4 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center md:mb-5 mb-4">
          <h3 className="text-xl font-bold text-gray-800">Search Products</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-primary transition-colors"
            aria-label="Close search"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        <form className="relative mb-6" onSubmit={handleSearch}>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setActiveIndex(-1);
            }}
            placeholder="What are you looking for?"
            className="w-full form-input pe-10"
            autoFocus={isOpen}
            onKeyDown={handleKeyDown}
          />
          <button type="submit" className="absolute right-4 top-3 flex" aria-label="Search">
            <FaSearch className="text-gray-400" />
          </button>
        </form>

        {search && (
          <div className="mb-5">
            {filteredProducts.length > 0 ? (
              <ul className="border border-gray-200 rounded-lg divide-y divide-gray-100 overflow-hidden">
                {filteredProducts.slice(0, 8).map((item, idx) => (
                  <li
                    key={item.id}
                    className={`flex items-center gap-3 px-3 py-2 cursor-pointer ${
                      idx === activeIndex ? "bg-gray-100" : "hover:bg-gray-50"
                    }`}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleNavigateTo(item.link)}
                  >
                    <img src={item.image} alt={item.name} className="h-10 w-10 rounded object-cover" loading="lazy" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-800 truncate">{item.name}</p>
                      <p className="text-xs text-gray-500 truncate">{item.category}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-900">${item.price}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-sm text-gray-500">No products found</div>
            )}
          </div>
        )}

        <div className="flex justify-between items-center mb-4">
          <h4 className="font-medium text-gray-700">Recent Searches</h4>
          <button
            type="button"
            className="text-sm text-primary hover:text-primary-dark"
            onClick={handleClearAll}
            disabled={recentSearches.length === 0}
          >
            Clear all
          </button>
        </div>

        <div className="flex flex-wrap gap-2 md:mb-8 mb-5">
          {recentSearches.length === 0 ? (
            <span className="text-gray-400 text-sm">No recent searches</span>
          ) : (
            recentSearches.map((item) => (
              <button
                key={item}
                type="button"
                className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition"
                onClick={() => handleRecentClick(item)}
              >
                {item}
              </button>
            ))
          )}
        </div>

        <button className="w-full btn-primary" onClick={handleSearch}>
          Search Now
        </button>
      </div>
    </div>
  );
};

export default SearchPopup;
