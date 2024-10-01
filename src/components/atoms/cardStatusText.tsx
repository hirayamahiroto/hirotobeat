
type CardStatusTextProps = {
    statusText: string;
}

const styles = {
    statusText: 'text-sm text-gray-600 font-[family-name:var(--font-geist-sans)]',
}

export const CardStatusText = ({ statusText }: CardStatusTextProps)=> {
    return (
        <p className={ styles.statusText }>
            {statusText}
        </p>
    )
}