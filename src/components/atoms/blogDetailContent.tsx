type blogDetailDescriptionProps = {
    content?: string;
}

const styles = {
    base: 'prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-strong:text-gray-900'
}

const BlogDetailDescription = ({ content }: blogDetailDescriptionProps) => {
    return (
        <div 
            className={styles.base}
            dangerouslySetInnerHTML={{ __html: content! }} 
        />
    )
}

export default BlogDetailDescription
