"use client";

import { useEffect, useState } from "react";

export const ColourProvider = ({ children }) => {
    const [ themeOption, setThemeOption ] = useState(null);

    // when state of local storage changes, update theme
    useEffect(() => {
        // check if window exists
        if (typeof window !== "undefined") {
            const theme = window.localStorage.getItem("theme");
            if (theme) {
                setThemeOption(theme);
            } else {
                setThemeOption("dark");
                window.localStorage?.setItem("theme", "dark");
            };
        };
    }, [
        typeof window !== "undefined" && window.localStorage.getItem("theme")
    ]);

    useEffect(() => {
        if (themeOption == "light") {
            document.documentElement.classList.remove("dark")
        } else {
            document.documentElement.classList.add("dark")
        };
    }, [themeOption]);


    return (
        <>
            {children}
        </>
    )
};