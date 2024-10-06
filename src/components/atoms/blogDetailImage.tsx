import Image from 'next/image'

type blogDetailImageProps = {
    eyecatchUrl?: string;
    title?: string;
}

const styles = {
    base: 'rounded-lg mb-8',
}

const BlogDetailImage = ({ eyecatchUrl, title }: blogDetailImageProps) => {
    return (
        <Image
        src={`${eyecatchUrl}?fm=webp`}
        alt={title? title : ''}
        width={1200}
        height={800}
        className={styles.base}
    />
)
}

export default BlogDetailImage;
