type blogDetailPublishedAtProps = {
    publishedAt: string;
}

const styles = {
    base: 'text-sm text-gray-500 font-light"'
}

const BlogDetailPublishedAt = ({ publishedAt }: blogDetailPublishedAtProps) => {
    return (
        <p className={styles.base}>
            Published on {new Date(publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
    )
}

export default BlogDetailPublishedAt;
