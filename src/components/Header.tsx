import Link from "next/link";
import { inter } from "../../public/fonts/Fonts"

const Header = () => {
    return <header className={`sticky shadow-lg top-0 flex flex-row justify-center items-center max-w-full px-2 py-4 bg-black ${inter.variable} font-sans text-white text-4xl font-black`}>
        <Link href={"/"}>My-Gita</Link>
    </header>
}

export default Header;