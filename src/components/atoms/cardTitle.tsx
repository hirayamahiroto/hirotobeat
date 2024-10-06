

export type CardTitleProps = {
    title: string;
}

const styles = {
    base: 'text-xl font-bold text-gray-800 mb-2 font-[family-name:var(--font-geist-mono)] line-clamp-2',
}

const CardTitle = ({ title }: CardTitleProps) => { 
    return (
        <h2 className={ styles.base}>{title}</h2>
    )
}

export default CardTitle;
