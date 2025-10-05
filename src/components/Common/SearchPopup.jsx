import React, { useState, useRef, useEffect } from "react";
import { FaTimes, FaSearch } from "react-icons/fa";

const recentSearchesDefault = ["Laptops", "Headphones", "Smartphones", "Cameras"];

const SearchPopup = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState("");
  const [recentSearches, setRecentSearches] = useState(recentSearchesDefault);
  const containerRef = useRef(null);

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

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      setRecentSearches((prev) => [search, ...prev.filter((item) => item !== search)].slice(0, 4));
      setSearch("");
      // TODO: trigger search logic
      onClose();
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
            onChange={(e) => setSearch(e.target.value)}
            placeholder="What are you looking for?"
            className="w-full form-input pe-10"
            autoFocus={isOpen}
          />
          <button type="submit" className="absolute right-4 top-3 flex" aria-label="Search">
            <FaSearch className="text-gray-400" />
          </button>
        </form>

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
