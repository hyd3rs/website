import { Tooltip } from "@mui/joy";
import Link from "next/link";

export const StandardBox = ({ title, children, right }) => (
    <div className={`flex flex-col gap-y-2 px-6 py-8 dark:bg-[#321d4e] bg-[#c6abe9] rounded-xl h-full ${right ? "md:text-right md:items-end" : "text-left items-start"} justify-center`}>
        <h3 className={`tracking-widest text-4xl font-bold`}>{title}</h3>
        <div className="flex flex-col text-xl lg:max-w-[24vw]">
            {children}
        </div>
    </div>
);

export const StyleableBox = ({ title, children, right, className }) => (
    <div className={`flex flex-col gap-y-2 px-6 py-8 rounded-xl h-full ${right ? "md:text-right md:items-end md:flex-col-reverse" : "text-left items-start"} ${className}`}>
        <h3 className={`tracking-widest text-4xl font-bold`}>{title}</h3>
        <div className="flex flex-col text-xl lg:max-w-[24vw]">
            {children}
        </div>
    </div>
);

export const SkeletonBox = ({ title, children, right, className, paddingEnabled = true }) => (
    <div className={`flex flex-col gap-y-2 ${paddingEnabled && "px-6 py-8"} rounded-xl h-full ${className}`}>
        {children}
    </div>
);

export const GradientBox = ({ title, children, links, right, className }) => (
    <SkeletonBox className={`p-[2px] ${className}`} paddingEnabled={false}>
        <div className={`flex flex-col gap-y-4 w-full h-full dark:bg-[#1f1825] bg-[#f5f3ff] rounded-xl px-6 py-8 text-center ${right ? "lg:text-right lg:items-end" : "lg:text-left lg:items-start"}`}>
            <div className="flex flex-col gap-y-2">
                <h3 className="tracking-widest text-3xl font-bold">{title}</h3>
                <span className="text-xl">{children}</span>
            </div>
        </div>
    </SkeletonBox>
);

export const BoxLinks = ({ children, right }) => (
    <div className={`flex flex-row gap-x-4 pt-4 items-center justify-center ${right ? "lg:justify-end" : "lg:justify-start"}`}>
        {children}
    </div>  
);

export const BoxLink = ({ href, children, tooltip }) => {
    const core = (
        <Link href={href} target="_blank" rel="noreferrer noopener" className="dark:text-purple-400 dark:hover:text-purple-500 hover:underline">
            {children}
        </Link>
    );

    if (tooltip) return (
        <Tooltip sx={{
            backgroundColor: "#FFFFF",
        }} variant="soft" title={<span className="font-sans font-medium">
            {tooltip}
        </span>} arrow>
            {core}
        </Tooltip>
    );

    return core;
};