
type CardPublishedAtProps = {
    publishedAt: string;
}

const styles = {
    base: 'text-sm text-gray-600 font-[family-name:var(--font-geist-sans)]',
}

const CardPublishedAt = ({ publishedAt }: CardPublishedAtProps)=> {
    return (
        <p className={ styles.base }>
            {new Date(publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
    )
}

export default CardPublishedAt;
