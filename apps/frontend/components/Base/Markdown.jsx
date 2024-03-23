"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MarkdownBar = ({ children, path }) => {
    return (
        <div className="flex flex-row items-center justify-between w-full border-purple-900 border-4 rounded-full px-4 py-2">
            <div className="flex flex-row items-center gap-x-2">
                <Link href="/" className="font-mono hover:bg-gray-300 dark:hover:bg-gray-800 p-2 rounded-lg">
                    dani
                </Link>
                {
                    path?.map(s => {
                        return (
                            <>
                                <span>
                                    /
                                </span>
                                <button className="font-mono hover:bg-gray-300 dark:hover:bg-gray-800 p-2 rounded-lg">
                                    {s}
                                </button>
                            </>
                        );
                    })
                }
                {
                    children && (
                        <>
                            <span>
                                /
                            </span>
                            <button className="font-mono hover:bg-gray-300 dark:hover:bg-gray-800 p-2 rounded-lg">
                                {children}
                            </button>
                        </>
                    )
                }
                {
                    !children && path?.length === 0 && (
                        <span>
                            /
                        </span>
                    )
                }
            </div>
        </div>
    )
};

export const MarkdownPath = () => {
    const pathname = usePathname();
    const clean = pathname === "/" ? [] : pathname.split("/").filter(f => f.trim() !== "");
    return (
        <div className="w-full px-8">
            <MarkdownBar path={clean}>
            </MarkdownBar>
        </div>
    )
};