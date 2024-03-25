import { FaHome, FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";

export const TabCard = ({ title, children, className, href, icon, midHover, setOpen }) => {
    const Icon = icon || FaQuestionCircle;
    return (
        <>
            <Link href={href || "#"} className={`text-white relative flex group transition-all ease-in-out duration-500 flex-col items-start gap-y-0 md:px-4 md:py-8 md:hover:py-4 md:hover:mb-16 rounded-2xl`} onClick={(() => {
                if (setOpen) setOpen(false);
            })}>
                <div className="bg-transparent absolute flex flex-col min-w-96 w-32 opacity-0 group-hover:opacity-100 group-hover:w-96">
                    <span className={`opacity-0 hidden md:inline-block md:group-hover:opacity-100 transition-all ease-in-out duration-500 delay-250 md:text-[0.000000000000000000000001rem] group-hover:md:text-3xl font-medium`}>
                        {title}
                    </span>
                    <span className={`opacity-0 hidden md:inline-block md:group-hover:opacity-100 transition-all ease-in-out duration-500 delay-250 text-xl md:text-[0.000000000000000000000001rem] group-hover:md:text-xl font-regular`}>
                        {children}
                    </span>
                </div>
                <div className={`hidden md:flex group -z-[100] absolute top-0 left-0 w-12 h-12 ${midHover ? `md:group-hover:w-48` : "md:group-hover:w-80"} md:group-hover:h-24 ease-in-out duration-500 rounded-2xl drop-shadow-2xl border-2 bg-transparent text-black dark:text-white ${className || "bg-purple-900 border-purple-900 md:group-hover:bg-purple-900"}`}>
                    <div className="md:group-hover:opacity-0 ease-in-out duration-200 w-full h-full flex justify-center items-center">
                        <Icon className="text-center text-2xl" />
                    </div>
                </div>
                <div className={`ease-in-out duration-200 flex md:hidden w-12 h-12 items-center justify-center border-2 ${className || "bg-purple-900 border-purple-900 md:group-hover:bg-purple-900"} rounded-2xl`}>
                    <Icon className="text-3xl" />
                </div>
            </Link>
        </>
    );
};

export const StandardTabCard = ({ title, children, className, href, icon, midHover, invisible, setOpen }) => {
    const Icon = icon || FaQuestionCircle;
    return (
        <>
            <Link href={href || "#"} className={`${invisible ? "invisible" : ""} text-white relative flex group transition-all ease-in-out duration-500 flex-col items-start gap-y-0 rounded-2xl`} onClick={(() => {
                if (setOpen) setOpen(false);
            })}>
                <div className={`flex p-4 ${className || "bg-purple-900 hover:bg-purple-950"} rounded-2xl`}>
                    <Icon className="text-3xl" />
                </div>
            </Link>
        </>
    );
};