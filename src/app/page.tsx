'use client';

import { useState, useEffect } from 'react';
import { Header } from "@/components/organisms/header";
import { getBlogs } from "@/app/action";
import { PageTitle } from "@/components/atoms/pageTittle";
import { CardList } from "@/components/organisms/cardList";

const styles = {
  base: "grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)] bg-white",
}

export default function Home() {
  const [blogArticles, setBlogArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const blogs = await getBlogs();
        setBlogArticles(blogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className={styles.base}>
      <Header />
      
      <main className="flex flex-col gap-8 row-start-2 items-center w-11/12 max-w-6xl">
        <div className="md:flex flex-row gap-4 justify-between w-full">
            <PageTitle title="Blog" />
        </div>

        {loading ? (
          <p className='text-2xl font-semibold text-gray-500'>Loading...</p>
        ) : blogArticles.length === 0 ? (
          <p className='text-2xl font-semibold text-gray-500'>現在、記事が投稿されていません。</p>
        ) : (
          <CardList blogs={blogArticles} />
        )}

      </main>
    </div>
  );
}