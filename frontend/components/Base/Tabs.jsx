import { FaHome, FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";

export const TabCard = ({ title, children, className, href, icon, midHover }) => {
    const Icon = icon || FaQuestionCircle;
    return (
        <>
            <Link href={href || "#"} className={`text-white relative flex group transition-all ease-in-out duration-500 flex-col items-start gap-y-0 md:px-4 md:hover:py-4 rounded-2xl`}>
                <span className={`opacity-0 hidden md:inline-block md:group-hover:opacity-100 max-w-96 transition-all ease-in-out duration-500 delay-250 text-3xl font-medium`}>
                    {title}
                </span>
                <span className={`opacity-0 hidden md:inline-block md:group-hover:opacity-100 max-w-96 transition-all ease-in-out duration-500 delay-250 text-xl font-regular`}>
                    {children}
                </span>
                <div className={`hidden md:flex -z-[100] absolute top-0 left-0 w-16 h-16 ${midHover ? `md:group-hover:w-48` : "md:group-hover:w-80"} md:group-hover:h-24 ease-in-out duration-500 rounded-2xl drop-shadow-2xl ${className || "bg-purple-900 hover:bg-purple-950"}`}>
                    <div className="md:group-hover:opacity-0 ease-in-out duration-200 w-full h-full flex justify-center items-center">
                        <Icon className="text-center text-2xl" />
                    </div>
                </div>
                <div className={`flex md:hidden p-4 ${className || "bg-purple-900 hover:bg-purple-950"} rounded-2xl`}>
                    <Icon className="text-3xl" />
                </div>
            </Link>
        </>
    );
};