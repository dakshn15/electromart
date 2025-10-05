
import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, dispatch } = useWishlist();

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };

  return (
    <section className="py-10 lg:py-20">
      <div className="md:container w-full mx-auto px-4">
        <div className="overflow-x-auto border border-gray-200 rounded-md">
          <table className="lg:w-full min-w-[850px] border-collapse">
            <thead>
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-white bg-primary rounded-st-md">Product</th>
                <th className="py-3 px-4 text-center font-semibold text-white bg-primary">Price</th>
                <th className="py-3 px-4 text-center font-semibold text-white bg-primary">Stock Status</th>
                <th className="py-3 px-4 text-center font-semibold text-white bg-primary rounded-et-md">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {wishlist.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-gray-500">Your wishlist is empty.</td>
                </tr>
              ) : (
                wishlist.map((item) => (
                  <tr key={item.id}>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-4">
                        <div className="h-20 w-20 flex-shrink-0 border bg-gray-100 rounded-lg p-2">
                          <img src={item.image} alt="wishlist-image" className="h-full w-full object-contain rounded-md" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">
                            <Link to={item.link} className="hover:text-primary transition-all duration-300">{item.name}</Link>
                          </h3>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="font-semibold">${item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      {item.inStock ? (
                        <span className="text-green-600 bg-green-100 px-2 py-1 rounded border border-green-600 text-xs font-medium">In Stock</span>
                      ) : (
                        <span className="text-red-600 bg-red-100 px-2 py-1 rounded border border-red-600 text-xs font-medium">Out of Stock</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex flex-row justify-center gap-2">
                        {item.inStock ? (
                          <button className="btn-primary px-3 py-2 font-medium text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                              <circle cx="8" cy="21" r="1" />
                              <circle cx="19" cy="21" r="1" />
                              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                            </svg>
                            Add to Cart
                          </button>
                        ) : (
                          <button className="inline-flex items-center justify-center bg-gray-300 text-gray-500 cursor-not-allowed px-3 py-2 rounded-md transition text-sm font-medium" disabled>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
                              <circle cx="8" cy="21" r="1" />
                              <circle cx="19" cy="21" r="1" />
                              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                            </svg>
                            Sold Out
                          </button>
                        )}
                        <button
                          className="inline-flex items-center justify-center text-red-500 hover:text-red-700 px-3 py-2 rounded-md transition-all duration-300 text-sm font-medium"
                          onClick={() => handleRemove(item.id)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1">
                            <path d="M3 6h18" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1="10" x2="10" y1="11" y2="17" />
                            <line x1="14" x2="14" y1="11" y2="17" />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* Wishlist Actions */}
        <Link to="/products" className="inline-flex items-center text-primary lg:mt-8 mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Continue Shopping
        </Link>
      </div>
    </section>
  );
};

export default Wishlist;
