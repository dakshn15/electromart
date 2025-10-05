import React from "react";
import { Link } from "react-router-dom";

const Error = () => (
  <section className="py-10 lg:py-20 h-screen flex items-center">
    <div className="md:container w-full mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Error Illustration */}
        <h2 className="text-7xl md:text-9xl font-bold text-black mb-4">404</h2>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Oops! Page Not Found</h3>
        <p className="text-gray-600 md:mb-8 mb-6 max-w-xl mx-auto">
          We couldn't find the page you're looking for. The page may have moved, or it might no longer be available.
        </p>
        <div className="flex flex-wrap flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            Go to Homepage
          </Link>
          <Link to="/products" className="btn-outline">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Error;
