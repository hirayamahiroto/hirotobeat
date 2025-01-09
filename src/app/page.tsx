"use server";

import { Header } from "@/components/organisms/header";
import { PageTitle } from "@/components/atoms/pageTittle";
import { CardList } from "@/components/organisms/cardList";
import { useBlogs } from "@/hooks/blog/server";
import { Blog } from "@/types/blog";

const styles = {
  base: "grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)] bg-white",
};

export default async function Home() {
  const blogArticles = await useBlogs();
  let loading = true;

  if (blogArticles) {
    loading = false;
    blogArticles.sort(
      (a: Blog, b: Blog) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  return (
    <div className={styles.base}>
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center w-11/12 max-w-6xl">
        <div className="md:flex flex-row gap-4 justify-between w-full">
          <PageTitle title="Blog" />
        </div>

        {loading ? (
          <p className="text-2xl font-semibold text-gray-500">Loading...</p>
        ) : blogArticles.length === 0 ? (
          <p className="text-2xl font-semibold text-gray-500">現在、記事が投稿されていません。</p>
        ) : (
          <CardList blogs={blogArticles} />
        )}
      </main>
    </div>
  );
}
