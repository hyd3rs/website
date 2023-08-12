"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IoMdDownload, IoMdMoon, IoMdSunny } from "react-icons/io";

export const NavigationRoot = () => {
    const [ theme, setTheme ] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            // get the current theme from local storage
            const currentTheme = localStorage.getItem("theme");

            // if the current local storage item can be found
            if (currentTheme) {
                // set the theme state to the current local storage item

                // if the current local storage item isn't "dark" or "light", set it to "dark"
                if (currentTheme !== "dark" && currentTheme !== "light") {
                    localStorage.setItem("theme", "dark");
                };

                setTheme(currentTheme || "dark");
            } else {
                // if the current local storage item can't be found, set it to "dark"
                localStorage.setItem("theme", "dark");
            };

            // set the theme state to the current local storage item
            setTheme(currentTheme || "dark");
        };
    }, []);
    return (
        <nav className="flex items-center justify-between w-full">
            <div className="group flex flex-row items-center">
                <Link href="/" className="font-outfit text-4xl font-medium lowercase dark:group-hover:text-gray-300">
                    <b className="dark:text-[#8761f1] dark:hover:text-[#6749b9]">hydro</b>
                </Link>
            </div>
            <div className="flex flex-row items-center space-x-4">
                <Link href="/" className="font-outfit text-2xl font-medium lowercase dark:hover:text-gray-300 dark:text-white">
                    home
                </Link>
                <Link href="/about" className="font-outfit text-2xl font-medium lowercase dark:hover:text-gray-300 dark:text-white">
                    about
                </Link>
            </div>
            <div className="flex flex-row items-center space-x-4">
                <button className="text-3xl dark:text-white dark:hover:text-gray-300" onClick={() => {
                    if (typeof window !== "undefined") {
                        // get the current theme from local storage
                        const currentTheme = localStorage.getItem("theme");

                        // if the current local storage item can be found
                        if (currentTheme) {
                            // if the current local storage item is "dark"
                            if (currentTheme === "dark") {
                                // set the local storage item to "light"
                                localStorage.setItem("theme", "light");
                                // otherwise, if the current local storage item is "light"
                            } else if (currentTheme === "light") {
                                // set the local storage item to "dark"
                                localStorage.setItem("theme", "dark");
                            }
                        } else {
                            // if the current local storage item can't be found, set it to "dark"
                            localStorage.setItem("theme", "dark");
                        };

                        // reload 
                        window.location.reload();
                    };
                }}>
                    {
                        theme === "dark" ? (
                            <IoMdSunny />
                        ) : theme === "light" ? (
                            <IoMdMoon />
                        ) : null
                    }
                </button>
            </div>
        </nav>
    )
};