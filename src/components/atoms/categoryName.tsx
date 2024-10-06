const styles = {
    base: "border-2 border-gray-300 rounded-md p-2",
}

type CategoryNameProps = {
    link?: string;
    text?: string;
}

export const CategoryName = ({ link, text }: CategoryNameProps) => {
    return (
        <li className={styles.base}>
            <a href={link}>{text}</a>
        </li>
    )
}

export default CategoryName