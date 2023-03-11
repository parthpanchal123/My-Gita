import CoverImage from "../../public/cover.jpg"
import Image from "next/image"
import { poppins, kalam, inter } from "../../public/fonts/Fonts"
import Link from "next/link"
import Header from "@/components/Header"
// bg-background bg-no-repeat bg-right-top backdrop-blur-lg bg-cover"
export default function Home() {
  return (
    // <div className="w-screen h-screen bg-background bg-no-repeat bg-cover">
    //   <div className='h-screen w-screen backdrop-blur-md'>
    //     <div className="container flex flex-col md:flex-row  md:h-screen justify-center items-center gap-x-5">
    //       <div className="w-full md:w-1/2 md:h-full justify-center items-center">
    //         <Image src={"/cover.jpg"} width={600} height={600} alt="Cover Image" className="w-full rounded-md border-solid border-2 border-white drop-shadow-2xl" />
    //       </div>
    //       <div className="w-full md:w-1/2 md:h-full">
    //         <div className="mb-10">
    //           <h1 className={` text-white ${kalam.variable} font-display font-bold text-5xl sm:text-md`}>सम्पूर्ण श्रीमद्‍भगवद्‍गीता</h1>
    //           <h1 className={` text-black ${poppins.variable} font-display font-bold text-2xl`}>The Song of God</h1>
    //           <h1 className={` mt-2 text-black text-base flex ${poppins.variable} font-display font-bold text-2xl`}>The Bhagavad Gita, a revered text of old,
    //             A song of divine wisdom that's forever told,
    //             In poetic verses, it reveals life's deepest truths,
    //             Guiding souls towards liberation, breaking ego's roots.</h1>
    //         </div>
    //         <div className="flex flex-grow w-full flex-col backdrop-blur-2xl bg-white/30 rounded-md p-4">
    //           <div className="flex flex-row gap-x-5 flex-wrap">
    //             <button className=" bg-white rounded-md px-2 py-2">Random</button>
    //             <button className=" bg-white rounded-md px-2 py-2">Chapter Wise</button>
    //             <button className=" bg-white rounded-md px-2 py-2">Specific Shlok</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="min-w-screen bg-background bg-no-repeat bg-cover overflow-y-auto overflow-x-hidden">
      <div className="h-screen w-screen backdrop-blur-md">
        <div className="container flex flex-col md:flex-row md:min-h-screen justify-center m-auto items-center gap-x-5 sm:gap-y-6 p-2">
          <div className="w-full md:w-1/2 md:h-full flex justify-center items-center">
            <Image src={"/cover.jpg"} width={500} height={500} alt="Cover Image" className="w-full rounded-md border-solid border-2 border-white drop-shadow-2xl" />
          </div>
          <div className="w-full md:w-1/2 md:h-full flex flex-col justify-center items-center">
            <div className="mb-10">
              <h1 className={`text-white underline ${kalam.variable} font-display font-bold text-5xl sm:text-md sn:text-center mt-3`}>सम्पूर्ण श्रीमद्‍भगवद्‍गीता</h1>
              <h1 className={`text-black ${inter.variable} font-sans font-black text-2xl`}>The Song of God</h1>
              <h1 className={`mt-3 text-black text-base flex ${inter.variable} font-sans font-extrabold`}>The Bhagavad Gita, a revered text of old,
                A song of divine wisdom that&apos;s forever told,
                In poetic verses, it reveals life&apos;s deepest truths,
                Guiding souls towards liberation, breaking ego&apos;s roots.</h1>
            </div>
            <div className="flex w-full flex-col backdrop-blur-2xl bg-white/30 rounded-md p-4 justify-center items-start">
              <div className="flex gap-5 flex-wrap">
                <Link href={"/verseOfTheDay"}><button className="bg-gradient-to-t from-orange-500 via-orange-300 to-amber-400 text-black font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out">Verse Of The Day</button></Link>
                <Link href={"/chapter"}><button className="bg-gradient-to-t from-orange-500 via-orange-300 to-amber-400 text-black font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out">Chapter Wise</button></Link>
                <button className="bg-gradient-to-t from-orange-500 via-orange-300 to-amber-400 text-black font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out">Specific Shlok</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
