import Link from "next/link";
import { inter } from "../../public/fonts/Fonts"

const Header = () => {
    return <header className={`sticky shadow-xl top-0 z-50 flex flex-row justify-center items-center min-w-full px-2 py-4 bg-black ${inter.variable} font-sans text-white text-4xl font-black`}>
        <Link href={"/"}>Bhagavad Gita</Link>
    </header>
}

export default Header;