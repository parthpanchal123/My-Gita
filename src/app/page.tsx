import CoverImage from "../../public/cover.jpg"
import Image from "next/image"
import { poppins, kalam, inter } from "../../public/fonts/Fonts"
import Link from "next/link"
import Header from "@/components/Header"
// bg-background bg-no-repeat bg-right-top backdrop-blur-lg bg-cover"
export default function Home() {
  return (
    <div className="h-screen min-w-screen bg-neutral-900 p-2">
      <section className="container relative h-3/5 m-auto drop-shadow-2xl">
        <div className="mt-2 rounded-md absolute inset-0 bg-cover bg-center	 bg-backdrop-blur" style={{ opacity: "0.7" }}></div>
        <div className="flex flex-col absolute inset-0 justify-end items-center">
          <h1 className={`text-3xl md:text-5xl text-center font-extrabold ${kalam.variable} font-display drop-shadow-2xl text-white t-shadow z-50`}>सम्पूर्ण श्रीमद्‍भगवद्‍गीता</h1>
          <h1 className="text-2xl md:text-3xl ${inter.variable} font-sans text-center font-extrabold drop-shadow-2xl text-yellow-200 z-50">The Song of God</h1>
        </div>
      </section >
      <div className="container m-auto max-w-md text-center">
        <h1 className={`mt-5 text-gray-100 text-base flex ${inter.variable} font-sans font-extrabold`}>The Bhagavad Gita, a revered text of old,
          A song of divine wisdom that&apos;s forever told,
          In poetic verses, it reveals life&apos;s deepest truths,
          Guiding souls towards liberation, breaking ego&apos;s roots.</h1>

      </div>
      <div>
        <div className="flex w-full flex-col backdrop-blur-2xl  rounded-md p-4 justify-center items-center">
          <div className="flex gap-5 flex-wrap">
            <Link href={"/verseOfTheDay"}><button className="bg-gradient-to-t from-orange-500 via-orange-300 to-amber-400 text-black font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out">Verse Of The Day</button></Link>
            <Link href={"/chapter"}><button className="bg-gradient-to-t from-orange-500 via-orange-300 to-amber-400 text-black font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out">Chapter Wise</button></Link>
            {/* <button className="bg-gradient-to-t from-orange-500 via-orange-300 to-amber-400 text-black font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out">Specific Shlok</button> */}
          </div>
        </div>
      </div>
    </div>

  )
}
