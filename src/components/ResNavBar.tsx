"use client"

import React, { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

function ResNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className={`sticky shadow-xl top-0 z-50 flex flex-row justify-center items-center min-w-full px-4 py-2 bg-neutral-900 opacity-95 text-white text-4xl font-black`}>
            <nav className="w-screen">
                <div className="flex flex-row justify-between items-center">
                    <div className="justify-between items-center flex-grow">
                        <Link href={"/"} className="text-underline text-orange-300">Bhagavad Gita</Link>
                    </div>
                    <div className="justify-end mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-md flex justify-between items-center  md:justify-center  h-16">
                            <div className="flex items-center">
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline justify-center space-x-4">
                                        <Link
                                            href="/"
                                            className="transition ease-out hover:drop-shadow-2xl hover:bg-neutral-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            href="/chapter"
                                            className=" hover:bg-neutral-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Chapters
                                        </Link>

                                        <Link
                                            href="/verseOfTheDay"
                                            className="text-gray-300 hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
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
                                    className="hover:bg-neutral-800 text-white block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    Home
                                </Link>

                                <Link
                                    href="/chapter"
                                    className="text-gray-300 hover:bg-neutral-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    Chapters
                                </Link>

                                <Link
                                    href="/verseOfTheDay"
                                    className="text-gray-300 hover:bg-neutral-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    Verse Of The Day
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav >
        </header>
    );
}

export default ResNavBar;