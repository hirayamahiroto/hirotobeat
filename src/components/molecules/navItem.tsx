import { NavItem } from "../atoms/navItem"

const navItems = [
    { href: "/", text: "Home" },
    { href: "/", text: "About" },
    { href: "/", text: "Contact" },
]

const styles = {
    base: "text-gray-800 flex-row flex gap-4 pl-10 pr-10",
    active: "text-gray-800",
    inactive: "text-gray-800",
}

export const Nav = () => {
    return (
        <ul className={styles.base}>
            {navItems.map((item) => (
                <NavItem key={item.href} href={item.href} text={item.text} />
            ))}
        </ul>
    )
}

export default Nav