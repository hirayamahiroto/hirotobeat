import { Logo } from "../atoms/logo"
import Link from "next/link"

const styles = {
    base: "flex justify-between items-center w-full h-full flex-row  bg-gray-300",
    logo: "flex justify-center",
    nav: "flex justify-center gap-4 text-gray-800 ",
}

export const Header = () => {
    return (
        <header className={styles.base}>
            <Link href="/" className={styles.logo}>
                <Logo />
            </Link>
        </header>
    )
}

export default Header
