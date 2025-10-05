import React from "react";
import { Link, useParams } from "react-router-dom";
import imageMap from "../../utils/imageMap";
import blogs from "../../data/blogData.jsx";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaWhatsapp, FaShareNodes } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Article = () => {
   const { slug } = useParams();
   const blog = blogs.find(blog => {
     const blogSlug = blog.link.split("/blogs/")[1] || blog.link.split("/blogs/")[1];
     return blogSlug === slug;
   });
   if (!blog) {
     return <div className="text-center py-20 text-xl">blog not found.</div>;
   }

  return (
    <section className="py-10 lg:py-20">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Article Header */}
        <div className="lg:mb-10 mb-6">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded text-sm font-medium mb-5">
            {blog.category || "Tech Tips"}
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            {blog.title}
          </h2>
          <div className="flex flex-wrap items-center text-gray-600 mb-6 sm:gap-5 gap-3">
            <div className="flex items-center">
              <img src={blog.authorImg || imageMap.team1} alt={blog.author || "Author"} className="w-10 h-10 rounded-full mr-3" />
              <span className="text-base">{blog.author || "Emma Wilson"}</span>
            </div>
            <div className="flex flex-wrap items-center sm:gap-5 gap-3">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                <span>{blog.readTime || "6 min read"}</span>
              </div>
            </div>
          </div>
          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden max-h-[450px] h-full mb-6">
            <img src={blog.image} alt="article-banner" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Article Body - dynamic sections */}
        <div>
          {blog.body ? (
            blog.body.map((section, idx) => {
              if (section.type === "heading") {
                return <h3 key={idx} className="text-xl font-bold text-gray-900 mb-4">{section.content}</h3>;
              }
              if (section.type === "paragraph") {
                return <p key={idx} className="mb-4">{section.content}</p>;
              }
              if (section.type === "list") {
                return (
                  <ul key={idx} className="list-disc ps-5 space-y-2 mb-8">
                    {section.items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                );
              }
              if (section.type === "tags") {
                return (
                  <div key={idx} className="flex flex-wrap gap-2 lg:mt-10 mt-6">
                    {section.tags.map(tag => (
                      <span key={tag} className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">{tag}</span>
                    ))}
                  </div>
                );
              }
              // Skip rendering images in body
              return null;
            })
          ) : (
            <p className="mb-4">{blog.details || blog.excerpt}</p>
          )}
        </div>
        {/* Author Bio */}
        <div className="lg:mt-10 mt-6 bg-gray-50 md:p-6 p-4 rounded-lg">
          <div className="flex flex-col sm:flex-row md:gap-6 gap-4">
            <img src={blog.authorImg || imageMap.team1} alt={blog.author || "Author"} className="w-24 h-24 rounded-full object-cover" />
            <div>
              <h3 className="font-heading font-semibold text-xl mb-2">About the Author</h3>
              <p className="text-gray-700 mb-4">{blog.authorBio || "Emma Wilson is a certified electronics technician, tech writer, and sustainability advocate. She specializes in device maintenance, repair techniques, and reducing electronic waste. When she's not writing for Techzonix, she teaches electronics maintenance workshops and runs a tech repair community center."}</p>
              <div className="flex gap-3">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-primary text-lg hover:text-primary-dark"><FaXTwitter className="text-lg" /></a>
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark"><FaFacebookF className="text-lg" /></a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark"><FaInstagram className="text-lg" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* Share Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 items-center justify-between border-t border-b py-6">
          <h3 className="font-heading font-medium">Share this article:</h3>
          <div className="flex flex-wrap gap-3">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] text-white p-2 rounded-full hover:opacity-90 transition flex items-center justify-center"><FaFacebookF className="text-lg" /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white p-2 rounded-full hover:opacity-90 transition flex items-center justify-center"><FaXTwitter className="text-lg" /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-[#0A66C2] text-white p-2 rounded-full hover:opacity-90 transition flex items-center justify-center"><FaLinkedinIn className="text-lg" /></a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white p-2 rounded-full hover:opacity-90 transition flex items-center justify-center"><FaWhatsapp className="text-lg" /></a>
            <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer" className="bg-[#E60023] text-white p-2 rounded-full hover:opacity-90 transition flex items-center justify-center"><FaPinterestP className="text-lg" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white p-2 rounded-full hover:opacity-90 transition flex items-center justify-center"><FaShareNodes className="text-lg" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
