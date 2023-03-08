import Image from "next/image"
import { poppins, kalam, jost } from "../../public/fonts/Fonts"
// bg-background bg-no-repeat bg-right-top backdrop-blur-lg bg-cover"
export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col bg-background bg-no-repeat bg-cover">
      <div className='h-screen backdrop-blur-md'>
        <div className="flex flex-row flex-wrap h-5/6 justify-center items-center space-x-5">
          <div>
            <Image src="/cover.jpg" alt="Cover Image" width={700} height={700} className="rounded-md border-solid border-2 border-white drop-shadow-2xl" />
          </div>
          <div className="flex flex-col">
            <div>
              <h1 className={` text-white ${kalam.variable} font-display font-bold text-5xl sm:text-md`}>सम्पूर्ण श्रीमद्‍भगवद्‍गीता</h1>
              <h1 className={` text-black ${poppins.variable} font-display font-bold text-2xl`}>The Song of God</h1>
            </div>
            <div className="bg-white bg-blur h-50">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

