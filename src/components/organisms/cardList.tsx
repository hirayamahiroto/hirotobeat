import { Card } from "@/components/molecules/card";
import { Blog } from "@/types/blog";

type BlogProps = {
    blogs?: Blog[];
}

const styles = {
    cardList: 'grid grid-cols-1 md:grid-cols-2 gap-6 w-full list-none',
}

export const CardList = ({ blogs }: BlogProps) => {
    return (
        <ol className={ styles.cardList }>
            {blogs && blogs.length === 0 ? (
                <p className="text-gray-600">投稿がありません</p>
            ) : blogs ? (
                blogs.map((blog: Blog) => (
                    <Card key={blog.id} blog={blog} />
                ))
            ) : (
                <p className="text-gray-600">ブログデータを取得できませんでした</p>
            )}
        </ol>
    );
}