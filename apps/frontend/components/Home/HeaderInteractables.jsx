import { Button } from "@std/@shadcn/components/ui/button";
import Link from "next/link";
import { BiLogoGithub, BiLogoTwitter, BiSolidPaperPlane, BiSolidUser } from "react-icons/bi";
import { FaLastfm } from "react-icons/fa";
import { SiCodeberg } from "react-icons/si";

export const HeaderLink = ({ children, href, external, className, icon }) => {
    return (
        <>
            <Link href={href || "/#"} rel={external ? "noreferrer noopener" : ""} target={external ? "_blank" : ""}>
                <Button variant="outline" size={icon ? "icon" : undefined} className={`${className} ${icon ? "text-4xl w-12 h-12 p-2" : "px-4 py-5 text-xl"} ease-in-out duration-300 rounded-2xl border-2 text-black dark:text-white hover:text-white bg-transparent border-slate-800 hover:bg-slate-800 dark:border-purple-900 dark:hover:bg-purple-900 font-medium`}>
                    {children}
                </Button>
            </Link >
        </>
    );
};

export const HeaderRow = () => {
    return (
        <>
            <HeaderLink href="/about" className="flex flex-row items-center gap-x-2">
                <BiSolidUser />
                about me
            </HeaderLink>
            <HeaderLink href="/contact" className="flex flex-row items-center gap-x-2">
                <BiSolidPaperPlane />
                contact
            </HeaderLink>
        </>
    );
};

export const HeaderLinks = () => {
    return (
        <>
            <HeaderLink icon href="https://github.com/daniwasonline" external>
                <BiLogoGithub />
            </HeaderLink>
            <HeaderLink icon href="https://codeberg.org/daniaintonline" external>
                <SiCodeberg />
            </HeaderLink>
            <HeaderLink icon href="https://twitter.com/daniaintonline" external>
                <BiLogoTwitter />
            </HeaderLink>
            <HeaderLink icon href="https://www.last.fm/user/daniaintonline" external>
                <FaLastfm />
            </HeaderLink>
        </>
    );
};