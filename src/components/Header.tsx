import Link from "next/link";
import { inter } from "../../public/fonts/Fonts"
import ResNavbar from "./ResNavBar";

const Header = () => {
    return <header className={`sticky shadow-xl top-0 z-50 flex flex-row justify-center items-center min-w-full px-4 py-2 bg-neutral-900 opacity-95 ${inter.variable} font-sans text-white text-4xl font-black`}>
        {/* <Link href={"/"} className="text-underline text-orange-300">Bhagavad Gita</Link> */}
        <ResNavbar />
        {/* <div className="  flex flex-grow text-white justify-items-end justify-end">
            <Link href={"/"}>
                <button className="border border-gray-500 hover:bg-orange-300 hover:text-black transition-all ease-in text-white text-sm bg-neutral-800 hover:cursor-pointer p-2 rounded-md">Home</button>
            </Link>
        </div> */}
    </header>
}

export default Header;