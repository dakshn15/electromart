import React from "react";
import { useCompare } from "../../context/CompareContext";
import imageMap from "../../utils/imageMap";

const Compare = () => {
  const { compare, dispatch } = useCompare();
  return (
    <section className="lg:py-20 py-10">
      <div className="md:container w-full mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
          <div className="bg-gray-50 p-4 border-b">
            <div className="flex flex-wrap items-center gap-4">
              <label className="font-medium">Compared Products:</label>
              <span className="font-semibold">{compare.length}</span>
              <div className="ml-auto">
                <button type="button" className="text-red-600 hover:text-red-800 font-medium py-2 transition-all duration-300 flex items-center" onClick={() => dispatch({ type: "CLEAR_COMPARE" })}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1">
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  </svg>
                  Clear All
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="py-3 lg:px-6 px-4 text-left font-semibold text-gray-700 min-w-[130px]">Feature</th>
                  {compare.map(product => (
                    <th key={product.id} className="py-3 pl-6 pr-10 text-center font-semibold text-gray-700">
                      <div className="relative">
                        <button className="absolute top-1/2 -translate-y-1/2 -right-8 text-gray-400 hover:text-red-500 transition-all duration-300 rounded border bg-white h-6 w-6 flex items-center justify-center shadow-sm" onClick={() => dispatch({ type: "REMOVE_FROM_COMPARE", payload: product.id })}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </button>
                        {/* Only show product name here, not in table body */}
                        {product.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y">
                {/* Product Image */}
                <tr>
                  <td className="py-3 lg:px-6 px-4 font-medium text-gray-700">Image</td>
                  {compare.map(product => (
                    <td key={product.id} className="py-3 lg:px-6 px-4 text-center min-w-[180px]">
                      <div className="h-20 w-20 lg:h-28 lg:w-28 flex-shrink-0 mx-auto border bg-gray-100 rounded-lg p-2">
                        <img src={product.image || imageMap[product.imageKey]} alt={product.name} className="h-full w-full object-contain" />
                      </div>
                    </td>
                  ))}
                </tr>
                {/* Product Price */}
                <tr>
                  <td className="py-3 lg:px-6 px-4 font-medium text-gray-700">Price</td>
                  {compare.map(product => (
                    <td key={product.id} className="py-3 lg:px-6 px-4 text-center font-bold lg:text-lg text-base min-w-[180px]">${product.price.toFixed(2)}</td>
                  ))}
                </tr>
                {/* Product Category */}
                <tr>
                  <td className="py-3 lg:px-6 px-4 font-medium text-gray-700 min-w-[180px]">Category</td>
                  {compare.map(product => (
                    <td key={product.id} className="py-3 lg:px-6 px-4 text-center text-sm text-gray-600">{product.category}</td>
                  ))}
                </tr>
                {/* Product Rating */}
                <tr>
                  <td className="py-3 lg:px-6 px-4 font-medium text-gray-700 min-w-[180px]">Rating</td>
                  {compare.map(product => (
                    <td key={product.id} className="py-3 lg:px-6 px-4 text-center">
                      <span className="font-semibold text-yellow-600">{product.rating}</span>
                    </td>
                  ))}
                </tr>
                {/* Product Stock */}
                <tr>
                  <td className="py-3 lg:px-6 px-4 font-medium text-gray-700 min-w-[180px]">Stock</td>
                  {compare.map(product => (
                    <td key={product.id} className="py-3 lg:px-6 px-4 text-center">
                      {product.inStock ? <span className="text-green-600 font-semibold">In Stock</span> : <span className="text-red-500 font-semibold">Out of Stock</span>}
                    </td>
                  ))}
                </tr>
                {/* Removed Description row as requested */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compare;
