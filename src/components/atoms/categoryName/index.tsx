const styles = {
    base: "border-2 border-gray-300 rounded-md p-2",
}

export const CategoryName = ({ link, text }: { link: string, text: string }) => {
    return (
        <li className={styles.base}>
            <a href={link}>{text}</a>
        </li>
    )
}

export default CategoryName