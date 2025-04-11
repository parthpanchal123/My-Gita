import Link from "next/link";
import { kalam, inter } from "../../utils/fonts/Fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/home-cover.webp"
          alt="Background"
          layout="fill"
          priority
          className="object-cover object-[center_30%]"
          style={{ opacity: "0.6" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/30 to-neutral-900"></div>
        
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl text-center font-extrabold ${kalam.variable} font-display text-white mb-4 animate-fade-in`}>
            सम्पूर्ण श्रीमद्‍भगवद्‍गीता
          </h1>
          <h2 className={`text-2xl md:text-3xl lg:text-4xl text-center font-bold ${inter.variable} font-sans text-yellow-200 mb-8 animate-slide-up [animation-delay:200ms]`}>
            The Song of God
          </h2>
          <p className={`max-w-2xl text-center text-gray-200 ${inter.variable} font-sans text-lg md:text-xl leading-relaxed mb-12 animate-slide-up [animation-delay:400ms]`}>
            Discover the timeless wisdom of the Bhagavad Gita, a divine dialogue between Lord Krishna and Arjuna that illuminates the path to dharma, self-realization, and eternal truth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center animate-slide-up [animation-delay:600ms]">
            <Link href="/verseOfTheDay">
              <button className="group relative px-8 py-4 bg-gradient-to-tr from-orange-600 to-orange-400 rounded-lg text-white font-semibold shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  Verse of the Day
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift"></div>
              </button>
            </Link>
            <Link href="/chapter">
              <button className="group relative px-8 py-4 bg-gradient-to-tr from-amber-500 to-yellow-400 rounded-lg text-white font-semibold shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                  Explore Chapters
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 animate-fade-in [animation-delay:800ms]">
            <div className="text-orange-400 mb-4 transform transition-transform duration-300 hover:rotate-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Original Sanskrit</h3>
            <p className="text-gray-300">Read the verses in their original Sanskrit form with accurate transliteration.</p>
          </div>

          <div className="bg-neutral-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 animate-fade-in [animation-delay:1000ms]">
            <div className="text-orange-400 mb-4 transform transition-transform duration-300 hover:rotate-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Word-by-Word Meanings</h3>
            <p className="text-gray-300">Understand each word with detailed translations and contextual meanings.</p>
          </div>

          <div className="bg-neutral-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 animate-fade-in [animation-delay:1200ms]">
            <div className="text-orange-400 mb-4 transform transition-transform duration-300 hover:rotate-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Expert Commentary</h3>
            <p className="text-gray-300">Access insightful commentaries from renowned scholars and spiritual masters.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
