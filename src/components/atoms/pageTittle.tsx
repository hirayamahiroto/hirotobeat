
const styles = {
    base: "flex justify-center items-center text-9xl font-bold text-gray-800",
}

export const PageTitle = ({ title }: { title: string }) => {
    return (
        <h1 className={styles.base}>{title}</h1>
    )
}

export default PageTitle