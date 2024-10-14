
const styles = {
    wrapper: 'md:flex flex-row gap-4 justify-between w-full',
    base: "flex justify-center items-center text-8xl font-bold text-gray-800",
}

export const PageTitle = ({ title }: { title: string }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.base}>{title}</h1>
        </div>
    )
}

export default PageTitle
