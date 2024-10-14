type BlogDetailCategoryNameProps = {
    categoryName?: string;
}

const styles = {
    base: 'text-sm text-gray-500 mb-8 font-light'
}

const BlogDetailCategoryName = ({ categoryName }: BlogDetailCategoryNameProps) => {
    return (
        <p className={styles.base}>
            Category: { categoryName }
        </p>
    )
}

export default BlogDetailCategoryName;
