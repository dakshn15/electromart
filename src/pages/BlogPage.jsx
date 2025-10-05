import React from "react";
import CommonBanner from "../components/Common/CommonBanner";
import BlogList from "../components/BlogList/BlogList";

const BlogPage = () => {
  return (
    <>
      <CommonBanner title="Blogs" />
      <BlogList />
    </>
  );
};

export default BlogPage;
