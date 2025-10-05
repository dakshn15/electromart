import React from "react";
import BlogCard from "../Common/BlogCard";
import blogData from "../../data/blogData";

const BlogList = () => (
  <section className="lg:py-20 py-10">
    <div className="md:container w-full mx-auto px-4">
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog, idx) => (
          <BlogCard key={idx} blog={blog} />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center md:mt-8 mt-5">
        <div className="flex items-center space-x-2">
          <button className="p-1 h-8 w-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50 disabled">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button className="p-1 h-8 w-8 flex items-center justify-center rounded-md border border-primary bg-primary text-white">1</button>
          <button className="p-1 h-8 w-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">2</button>
          <button className="p-1 h-8 w-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">3</button>
          <span className="px-2 text-gray-500">...</span>
          <button className="p-1 h-8 w-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">8</button>
          <button className="p-1 h-8 w-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default BlogList;
