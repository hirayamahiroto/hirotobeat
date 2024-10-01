import { Header } from "@/components/organisms/header";
import { getBlogs } from "@/utils/microCms/client";
import { PageTitle } from "@/components/atoms/pageTittle";
import { CardList } from "@/components/organisms/cardList";

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

export default async function Home() {
  const BlogArticles = await getBlogs()
  
  return (
    <div className={styles.base}>
      <Header />
      
      <main className="flex flex-col gap-8 row-start-2 items-center w-11/12 max-w-6xl">
        <div className="md:flex flex-row gap-4 justify-between w-full">
            <PageTitle title="Blog" />
        </div>

        {/* ブログ記事一覧 */}
        <CardList blogs={BlogArticles} />

      </main>
    </div>
  );
}