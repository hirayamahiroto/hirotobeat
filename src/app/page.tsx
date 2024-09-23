import Image from "next/image";
import { Header } from "@/components/organisms/header";
import { getBlogs } from "@/utils/microCms/client";
import { PageTitle } from "@/components/atoms/pageTitle";
import Link from "next/link";

export const revalidate = 60;

type Blog = {
    id: string;
    title: string;
    content: string;
    eyecatch: {
        url: string;
    }
    category: {
        name: string;
    }
    publishedAt: string;
}

const styles = {
  base: "grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)] bg-white",
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

export default async function Home() {
  const BlogArticles = await getBlogs()
  return (
    <div className={styles.base}>
      <Header />
      
      <main className="flex flex-col gap-8 row-start-2 items-center w-11/12 max-w-6xl">
        <div className="md:flex flex-row gap-4 justify-between w-full">
            <PageTitle title="Blog" />
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full list-none">
          {BlogArticles.length === 0 ? (
            <p className="text-gray-600">投稿がありません</p>
          ) : (
            BlogArticles.map((blog: Blog) => (
              <li key={blog.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <Link href={`/blog/${blog.id}`} className="block">
                  <Image 
                    src={blog.eyecatch.url} 
                    alt={blog.title} 
                    className="w-full h-48 object-cover" 
                    width={600} 
                    height={400} 
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-2 font-[family-name:var(--font-geist-mono)] line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-geist-sans)]">
                      Category: {blog.category.name}
                    </p>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-geist-sans)] mb-2">
                      Published on {new Date(blog.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <p className="text-sm text-gray-600 font-[family-name:var(--font-geist-sans)]">
                      {truncateText(blog.content.replace(/<[^>]*>/g, ''), 50)}
                    </p>
                  </div>
                </Link>
              </li>
            ))
          )}
        </ol>
      </main>
    </div>
  );
}