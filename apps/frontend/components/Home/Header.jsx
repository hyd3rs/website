import { Links } from '@std/components/Layout';
import { BiLogoGithub, BiLogoTwitter, BiSolidBook, BiSolidPaperPlane, BiSolidUser } from "react-icons/bi";
import { StandardButtonLink as HeaderLink } from "@std/components/Interactables";
import { NameBrand } from '@std/components/Branding';

export const Header = () => (
    <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-y-4 lg:gap-y-0 lg:gap-x-8 py-4">
        <MainContent />
        <BigBook />
    </div>
);

export const MainContent = () => (
    <div className="flex flex-col gap-y-4 font-outfit">
        <span className="text-8xl font-medium">
            hi, i&apos;m {" "}
            <NameBrand />.
        </span>
        <span className="text-4xl font-medium sm:max-w-[40rem]">
            i design and develop websites and apps for the modern web.
        </span>
        <Interactables />
    </div>
);

export const BigBook = () => (
    <div className="hidden lg:flex flex-col gap-y-4 lg:items-center lg:justify-center lg:mr-32">
        <div className="relative">
            <div className="-mr-16 -mt-8 absolute top-0 right-0 animate-pulse text-purple-500 font-bold md:text-[5rem] lg:text-[8rem] rounded-full">
                *
            </div>
            <BiSolidBook className="text-purple-400 rotate-[15deg] md:text-[8rem] lg:text-[12rem] xl:text-[16rem]" />
        </div>
    </div>
);

export const NavigationRow = () => (
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

export const Interactables = () => (
    <div className="flex flex-col gap-y-4 items-center sm:items-start">
        <div className="grid xl:hidden grid-cols-5 gap-4 w-fit">
            <Links />
        </div>
        <div className="flex flex-row items-center gap-x-4">
            <NavigationRow />
        </div>
    </div>
);