'use client';

import { MarkdownBar } from "@std/components/Base/Markdown";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { FaHome } from "react-icons/fa";

export default function Error({
    error,
    reset
}) {
    return (
        <>
            <div className="flex flex-col items-start p-8 w-full">
                <h1 className="text-8xl font-semibold text-left text-brand-gradient">404</h1>
                <h2 className="text-2xl font-semibold text-left">This page could not be found.</h2>
                <div className="flex flex-row pt-4 items-center justify-center">
                    <Link href="/" className="flex flex-row gap-x-2 items-center px-4 py-2 rounded-2xl font-medium text-white bg-black hover:bg-gray-800 dark:text-black dark:bg-white dark:hover:bg-gray-200">
                        <BiUser className="text-xl" />
                        Go home
                    </Link>
                </div>
            </div>
        </>
    );
};