const Page = async ({ children }) => {
    return (
        <div className="flex flex-col items-start gap-y-4 p-8 w-full px-8 md:px-24 md:pb-0 md:max-w-[75vw] 2xl:max-w-[55vw] text-lg">
            {children}
        </div>
    );
};

export default Page;