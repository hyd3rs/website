import AboutMd from "./md/About.mdx";
import HobbiesMd from "./md/Hobbies.mdx";

export const StandardBox = ({ title, children, right }) => (
        <div className={`flex flex-col gap-y-2 px-6 py-8 dark:bg-[#321d4e] bg-[#c6abe9] rounded-xl h-full ${right ? "md:text-right md:items-end md:flex-col-reverse" : "text-left items-start"}`}>
            <h3 className={`tracking-widest text-4xl font-bold`}>{title}</h3>
            <div className="flex flex-col text-xl lg:max-w-[24vw]">
                {children}
            </div>
        </div>
);

export const About = () => {
    return (
        <StandardBox title="what i do">
            <AboutMd />
        </StandardBox>
    )
};

export const Hobbies = () => {
    return (
        <StandardBox right title="hobbies">
            <HobbiesMd />
        </StandardBox>
    )
};