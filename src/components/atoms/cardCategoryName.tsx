type CardCategoryNameProps = {
    cardCategoryName?: string;
}

const styles = {
    base: "text-sm text-gray-600 font-[family-name:var(--font-geist-sans)]',",
}

export const CardCategoryName = ({ cardCategoryName }: CardCategoryNameProps) => {
    return (
        <p className={ styles.base }>
            Category : { cardCategoryName }
        </p>

    )
}

export default CardCategoryName;
