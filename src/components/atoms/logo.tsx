import Image from "next/image"

const styles = {
    base: "flex justify-start w-full  bg-gray-300",
}

export const Logo = () => {
    return (
        <div className={styles.base}>
            <Image src="/images/logo.png" alt="logo" width={297} height={90} />
        </div>
    )
}

export default Logo
