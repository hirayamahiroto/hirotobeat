import React from "react";
import BlogDetailTitle from "../atoms/blogDetailTitle";
import BlogDetailPublishedAt from "../atoms/blogDetailPublishedAt";
import BlogDetailCategoryName from "../atoms/blogDetailCategoryName";
import BlogDetailContent from "../atoms/blogDetailContent";

import { Blog } from "@/types/blog";

type BlogDetailProps = {
  blog: Pick<Blog, "title" | "publishedAt" | "category" | "eyecatch" | "content">;
};

const styles = {
  wrapper: "max-w-4xl mx-auto px-4 py-16",
  base: 'bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100"',
};

const BlogDetail = ({ blog }: BlogDetailProps) => {
  return (
    <div className={styles.wrapper}>
      <article className={styles.base}>
        <div className="p-8">
          <BlogDetailTitle title={blog.title} />
          <BlogDetailPublishedAt publishedAt={blog.publishedAt} />
          <BlogDetailCategoryName categoryName={blog.category.name} />
          <BlogDetailContent content={blog.content} />
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
