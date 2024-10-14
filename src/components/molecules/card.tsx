import  CardImage  from "../atoms/cardImage";
import CardPublishedAt from "../atoms/cardPublishedAt";
import CardDescription from "../atoms/cardDescription";
import  CardTitle  from "../atoms/cardTitle";
import { Blog } from "@/types/blog";
import Link from "next/link";
import CardCategoryName from "../atoms/cardCategoryName";


export type CardProps = {
    blog: Blog;
}

const styles = {
    card: 'bg-gray-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1',
    cardBody: 'p-4',
}

export const Card = ({ blog }: CardProps) => {
    return (
        <li className={styles.card}>
            <Link href={`/blog/${blog.id}`} passHref>
                <CardImage imageUrl={blog.eyecatch?.url} altText={blog.title} />
                <div className={styles.cardBody}>
                    <CardPublishedAt publishedAt={blog.publishedAt} />
                    <CardCategoryName cardCategoryName={blog.category.name} />
                    <CardTitle title={blog.title} />
                    <CardDescription description={blog.content} />
                </div>
            </Link>
        </li>
    )
}