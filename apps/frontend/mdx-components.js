import Link from "next/link";
import md5 from "md5";
import { BiLink } from "react-icons/bi";

const hashifyElement = (i) => md5(i || Math.random());

const Header = ({ children, className }) => {
    const hash = hashifyElement(children)
    return (<div className="flex flex-row items-center gap-x-2">
        <span id={hash || "unk_id"} className={className}>
            {children}
        </span>
        <Link href={`#${hash}`} className="hover:text-slate-500 dark:hover:text-slate-300">
            <BiLink />
        </Link>
    </div>)
};

export function useMDXComponents(components) {
    return {
        p: ({ children }) => <p className="text-xl" id={hashifyElement(children)}>{children}</p>,
        h1: ({ children }) => <Header className="text-4xl md:text-5xl font-bold">{children}</Header>,
        h2: ({ children }) => <Header className="text-3xl md:text-4xl font-bold my-2">{children}</Header>,
        h3: ({ children }) => <Header className="text-xl md:text-2xl font-bold">{children}</Header>,
        a: ({ children, href }) => <Link id={hashifyElement(children)} href={href} target="_blank" rel="noreferrer noopener" className="font-medium text-purple-800 hover:text-purple-900 dark:text-purple-500 dark:hover:text-purple-600">{children}</Link>,
        ul: ({ children }) => <ul className="ml-4 list-disc">{children}</ul>,
        ...components,
    }
};