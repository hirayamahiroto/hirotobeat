import { CardImage } from "../atoms/cardImage";
import { CardStatusText } from "../atoms/cardStatusText";
import { CardDescription } from "../atoms/cardDescription";
import { CardTitle } from "../atoms/cardTitle";
import { Blog } from "@/types/blog";
import Link from "next/link";


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
                    <CardTitle title={blog.title} />
                    <CardDescription description={blog.content} />
                    <CardStatusText statusText={blog.publishedAt} />
                </div>
            </Link>
        </li>
    )
}