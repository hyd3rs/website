// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

import Link from "next/link";

export const Paragraph = (p) => {
    const children = p.children;
    const props = {
        ...p,
        children: undefined
    }
    return (
        <p className="md:pb-0 text-base max-w-[68vw] md:max-w-[72vw]" {...props}>
            {children}
        </p>
    )
};

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components) {
    const standardHeaderClasses = `first:pb-2 last:pt-2`;
    const gradientClasses = `bg-gradient-to-tr bg-gradient-brand bg-clip-text text-transparent`;
    return {
        // Allows customizing built-in components, e.g. to add styling.
        // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
        p: Paragraph,
        code: ({ children }) => <code className="">{children}</code>,
        h1: ({ children }) => <h1 className={`${standardHeaderClasses} tracking-widest text-4xl md:text-5xl lg:text-6xl font-bold`}>{children}</h1>,
        h2: ({ children }) => <h2 className={`${standardHeaderClasses} tracking-widest text-3xl md:text-4xl lg:text-5xl font-bold`}>{children}</h2>,
        h3: ({ children }) => <h3 className={`${standardHeaderClasses} tracking-widest text-4xl font-bold `}>{children}</h3>,
        h4: ({ children }) => <h4 className={`${standardHeaderClasses} text-xl md:text-2xl lg:text-3xl font-medium`}>{children}</h4>,
        h5: ({ children }) => <h5 className={`${standardHeaderClasses} text-lg md:text-xl lg:text-2xl font-medium`}>{children}</h5>,
        h6: ({ children }) => <h6 className={`${standardHeaderClasses} text-base md:text-lg lg:text-xl font-medium `}>{children}</h6>,
        em: ({ children }) => <b className="bg-gradient-brand gradient-fade-between bg-clip-text text-transparent">{children}</b>,
        a: ({ children, ...props }) => <Link target="_blank" rel="noreferrer noopener" className="dark:text-purple-400 dark:hover:text-purple-500 underline dark:no-underline hover:underline" {...props}>{children}</Link>,
        ...components,
    }
};