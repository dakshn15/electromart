import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const BlogCard = ({ blog }) => (
  <div className="card flex flex-col h-full">
    <div className="relative h-48 bg-gray-100">
      <Link to={blog.link} className="absolute inset-0">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </Link>
    </div>
    <div className="flex-1 flex flex-col h-full p-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <FaCalendarAlt /> {blog.date}
        </div>
        <h3 className="font-medium text-gray-900 lg:text-xl text-lg mb-2">
          <Link to={blog.link}>{blog.title}</Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>
      </div>
      <Link to={blog.link} className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
        Read More <FaArrowRight className="ml-2 text-sm" />
      </Link>
    </div>
  </div>
);

export default BlogCard;
