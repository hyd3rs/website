"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IoMdDownload, IoMdMoon, IoMdSunny } from "react-icons/io";
import { BiSun, BiMoon } from "react-icons/bi";

export const NavigationRoot = ({ children }) => {
    const [theme, setTheme] = useState(null);

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
        <nav className="flex items-center justify-between w-full px-8 sm:px-12">
            <div className="group flex flex-row items-center gap-x-6">
                <Link href="/" className="font-outfit text-4xl font-medium lowercase dark:group-hover:text-gray-300">
                    <b className="dark:text-hydro-light hover:text-hydro-dark">dani</b>
                </Link>
                <div className="flex flex-row items-center space-x-4">
                    {/* Navigation widgets */}
                    {children}
                </div>
            </div>
            <div className="hidden d:flex flex-row items-center space-x-4">
                <Link href="/" className="font-outfit text-2xl font-medium lowercase dark:hover:text-gray-100 dark:text-hydro-textDark">
                    home
                </Link>
                <button onClick={() => alert("not out yet ;)")} className="cursor-not-allowed font-outfit text-2xl font-medium lowercase dark:hover:text-gray-100 dark:text-textDark">
                    about
                </button>
            </div>
            <div className="flex flex-row items-center space-x-4">
                <button className="text-3xl dark:text-hydro-textDark dark:hover:text-gray-100" onClick={() => {
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
                            <BiSun className="hover:animate-pulse" />
                        ) : theme === "light" ? (
                            <BiMoon className="hover:animate-pulse" />
                        ) : null
                    }
                </button>
            </div>
        </nav>
    )
};