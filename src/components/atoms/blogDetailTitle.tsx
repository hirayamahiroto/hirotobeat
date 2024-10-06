type blogDetailTittleProps = {
    title: string;
}

const styles = {
    base: 'text-4xl font-bold text-gray-900 mb-4 leading-tight',
}

const BlogDetailTittle = ({ title }: blogDetailTittleProps) => {
    return (
        <h1 className={styles.base}>
            { title }
        </h1>
    )
}

export default BlogDetailTittle;
