import NextHead from 'next/head';
import Image from "next/future/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const routes = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About' },
    { path: '/portfolio', title: 'Portfolio' },
];

export default function Head() {
    const router = useRouter();
    const [disabledNav, setDisabledNav] = useState(false);

    useEffect(() => {
        if (router.pathname === '/_error') {
            setDisabledNav(true);
        } else {
            setDisabledNav(false);
        }
    }, [router.pathname]);

    return (
        <>
            <NextHead>
                <title>Danny</title>
            </NextHead>
            <div className="py-6 sm:py-12">
                <div className="flex flex-col sm:flex-row py-4 rounded-2xl justify-center items-center gap-y-4 sm:justify-evenly">
                    <Link href="/">
                        <a className="flex flex-row items-center gap-x-4 px-4 py-2 rounded-xl">
                            <Image alt="Avatar" className="w-10 rounded-full" height="64" width="64" src="/coffeedog.png" />
                            <div className="flex flex-col gap-x-2">
                                <h1 className="font-AegixHeader text-gray-100 font-bold text-xl">Hydro</h1>
                            </div>
                        </a>
                    </Link>
                    <div className="flex flex-row items-center gap-x-4 px-4 py-2 rounded-xl">
                        {
                            routes.map(({ path, title }) => (
                                <div key={path}>
                                    {
                                        disabledNav ? (
                                            <>
                                                {
                                                    path === "/" ? (
                                                        <Link href="/">
                                                            <a className={`
                                                                ${router.pathname === path ? 'bg-slate-800' : 'hover:bg-slate-700'} 
                                                                ${router.pathname === "/_error" ? "bg-slate-900 hover:bg-slate-800" : ""} 
                                                                text-gray-100 font-AegixHeader font-bold text-lg px-4 py-2 rounded-xl
                                                                transition ease-in-out duration-500
                                                                hidden sm:flex flex-row items-center gap-x-2
                                                            `}>
                                                                <FontAwesomeIcon icon={faArrowLeft} />
                                                                Back
                                                            </a>
                                                        </Link>
                                                    ) : (
                                                        <button className={`
                                                            ${router.pathname === path ? 'bg-slate-800' : 'hover:bg-slate-800'} 
                                                            ${router.pathname === "/_error" ? "hover:bg-slate-900" : ""} 
                                                            text-gray-100 font-AegixHeader font-bold text-lg px-4 py-2 rounded-xl
                                                            transition ease-in-out duration-500 disabled:cursor-not-allowed
                                                            hidden
                                                        `} disabled>
                                                            {title}
                                                        </button>
                                                    )
                                                }
                                            </>
                                        ) : (
                                            <Link href={path}>
                                                <a className={`
                                                    ${router.pathname === path ? 'bg-slate-800' : 'hover:bg-slate-800'} 
                                                    ${router.pathname === "/_error" ? "hover:bg-slate-900" : ""} 
                                                    text-gray-100 font-AegixHeader font-bold text-lg px-4 py-2 rounded-xl
                                                    transition ease-in-out duration-500
                                                `}>
                                                    {title}
                                                </a>
                                            </Link>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};