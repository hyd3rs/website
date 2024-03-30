import { Button } from "@/shadcn/components/ui/button";
import Link from "next/link";

export const StandardButtonLink = ({ children, href, external, className, icon }) => {
    return (
        <>
            <Link href={href || "/#"} rel={external ? "noreferrer noopener" : ""} target={external ? "_blank" : ""}>
                <Button variant="outline" size={icon ? "icon" : undefined} className={`${className} ${icon ? "text-4xl w-12 h-12 p-2" : "px-4 py-5 text-xl"} ease-in-out duration-300 rounded-2xl border-2 text-black dark:text-white border-slate-800 hover:bg-slate-800 dark:border-purple-900 dark:hover:bg-purple-900 hover:text-white bg-transparent font-medium`}>
                    {children}
                </Button>
            </Link>
        </>
    );
};

export const InactiveButton = ({ children, className, icon }) => {
    return (
        <Button variant="outline" className={`${className} ${icon ? "text-4xl w-12 h-12 p-2" : "px-4 py-5 text-xl"} cursor-default ease-in-out duration-300 rounded-2xl border-2 border-transparent text-white hover:text-white bg-slate-800 hover:bg-slate-800 hover:dark:bg-purple-900 dark:bg-purple-900 font-medium`}>
            {children}
        </Button>
    );
};