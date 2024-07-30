"use client";

import { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import ChapterBg from "../../public/mandala.svg";

function ResNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className={`sticky shadow-xl top-0 z-50 flex flex-row justify-center items-center min-w-full px-4 py-2 bg-neutral-900 opacity-95 text-white text-4xl font-black`}
    >
      <nav className="w-screen">
        <div className="flex flex-row justify-between items-center">
          <div className="justify-between items-center flex-grow">
            <div className="flex flex-row gap-x-1 justify-start items-center">
              <ChapterBg className="text-orange text-opacity-25 dark:text-opacity-25 rounded-full" />
              <Link href={"/"} className="text-underline text-orange-300">
                My-Gita
              </Link>
            </div>
          </div>
          <div className="justify-end mx-auto px-4 sm:px-6 lg:px-2">
            <div className="max-w-lg flex justify-between items-center  md:justify-center  h-16">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline justify-center space-x-4">
                    <Link
                      href="/"
                      className="flex items-center gap-x-1 justify-center transition ease-out hover:drop-shadow-2xl hover:bg-neutral-800 text-white px-3 py-2 rounded-md text-base font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="solid"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#FFD580"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                      Home
                    </Link>
                    <Link
                      href="/chapter"
                      className="flex items-center gap-x-1 justify-center hover:bg-neutral-800 text-white px-3 py-2 rounded-md text-base font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="solid"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#FFD580"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                      Chapters
                    </Link>

                    <Link
                      href="/verseOfTheDay"
                      className="flex items-center gap-x-1 justify-center text-gray-300 hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="solid"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#FFD580"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                      Verse Of The Day
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className=" transition ease-in bg-neutral-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/"
                  className="flex items-center gap-x-1 justify-start hover:bg-neutral-800 text-white px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="solid"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#FFD580"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Home
                </Link>

                <Link
                  href="/chapter"
                  className="flex items-center gap-x-1 justify-start text-gray-300 hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="solid"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#FFD580"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  Chapters
                </Link>

                <Link
                  href="/verseOfTheDay"
                  className="flex items-center gap-x-1 justify-start text-gray-300 hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="solid"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#FFD580"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  Verse Of The Day
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </header>
  );
}

export default ResNavBar;
