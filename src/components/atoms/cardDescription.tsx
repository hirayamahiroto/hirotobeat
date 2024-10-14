
type CardDescriptionProps = {
    description: string;
}

const styles = {
    base: 'text-sm text-gray-600 font-[family-name:var(--font-geist-sans)]',
}

const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
};  

const CardDescription = ({ description }: CardDescriptionProps) => {
    return (
        <p className={ styles.base }>
            {truncateText(description.replace(/<[^>]*>/g, ''), 50)}
        </p>

    )
}

export default CardDescription;
