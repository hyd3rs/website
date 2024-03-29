export function useMDXComponents(components) {
    return {
        p: ({ children }) => <p className="text-xl">{children}</p>,
        h2: ({ children }) => <h2 className="text-3xl md:text-4xl font-bold">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl md:text-3xl font-bold">{children}</h3>,
        ...components,
    }
};