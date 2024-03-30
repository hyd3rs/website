import { FooterBrand } from "@std/components/Branding";
import { Links } from "@std/components/Layout";
import { BiHeart } from "react-icons/bi";

export const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-center md:justify-between gap-4 items-center absolute bottom-0 left-0 bg-[#120820] text-white w-full px-8 md:px-16 py-4">
            <span className="text-2xl">
                designed by
                {" "}
                <FooterBrand />
            </span>
            <span className="dark flex flex-row items-center gap-x-4">
                <Links />
            </span>
        </footer>
    )
};