const styles = {
    base: "text-gray-800",
    active: "text-gray-800",
    inactive: "text-gray-800",
}

export const NavItem = ({ href, text }: { href: string, text: string }) => {
    return (
        <li className={styles.base}>
            <a className={styles.base} href={href} >{text}</a>
        </li>
    )
}

export default NavItem
