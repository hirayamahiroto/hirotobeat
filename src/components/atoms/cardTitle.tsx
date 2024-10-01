

export type CardTitleProps = {
    title: string;
}

const styles = {
    cardTitle: 'text-xl font-bold text-gray-800 mb-2 font-[family-name:var(--font-geist-mono)] line-clamp-2',
}

export const CardTitle = ({ title }: CardTitleProps) => { 
    return (
        <h2 className={ styles.cardTitle}>{title}</h2>
    )
}