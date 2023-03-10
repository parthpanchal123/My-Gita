import { inter } from "../../public/fonts/Fonts"

const Header = () => {
    return <header className={`sticky top-0 flex flex-row justify-center items-center max-w-full px-2 py-4 bg-black ${inter.variable} font-sans text-white text-4xl font-black`}>
        My-Gita
    </header>
}

export default Header;