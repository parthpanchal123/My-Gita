import { inter } from "../../utils/fonts/Fonts";
import ResNavbar from "./ResNavBar";

const Header = () => {
    return <header className={`sticky shadow-xl top-0 z-50 flex flex-row justify-center items-center min-w-full px-4 py-2 bg-neutral-900 opacity-95 ${inter.variable} font-sans text-white text-4xl font-black`}>
        <ResNavbar />
    </header>
}

export default Header;