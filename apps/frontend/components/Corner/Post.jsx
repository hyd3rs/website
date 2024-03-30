import { Button } from "@std/@/shadcn/components/ui/button";
import Link from "next/link";
import { BiArrowBack, BiSolidHome } from "react-icons/bi";
import { FaDotCircle } from "react-icons/fa";
import { StandardButtonLink, InactiveButton } from "@std/components/Interactables";

export const BackToParent = ({ slug, integral }) => {
    return (
        <StandardButtonLink href={slug ? `/corner/p/${slug}` : "/corner"} className="flex flex-row items-center gap-x-2 w-fit">
            {
                slug ? (
                    <>
                        <BiArrowBack /> return to {integral ? "page" : "post"}
                    </>
                ) : (
                    <>
                        <BiArrowBack /> see all posts
                    </>
                )
            }
        </StandardButtonLink>
    );
};

export const Subpages = ({ children }) => {
    return (
        <div className="grid grid-cols-3 gap-2 items-center mb-4 ">
            {children}
        </div>
    );
};

export const SubpageLink = ({ parent, slug, children }) => (
    <StandardButtonLink href={`/corner/p/${parent}/${slug || ""}`} className="w-full">
        {children}
    </StandardButtonLink>
);

export const SubpageSelected = ({ children }) => (
    <InactiveButton className="w-full">
        {children}
    </InactiveButton>
);

export const Head = ({ title, author, description, timestamp, tags, integral, parent }) => {
    const formatted = new Date(timestamp || "2023-12-21").toLocaleDateString("en-GB", {
        dateStyle: "long"
    })
    return (
        <div className="flex flex-col gap-y-4 w-full">
            <div className="w-fit">
                {
                    parent ? <BackToParent slug={parent} integral={integral} /> : <BackToParent />
                }
            </div>
            {
                parent ? (
                    <span className="text-xl font-bold uppercase tracking-widest">subpage</span>
                ) : (
                    <span className="text-xl font-bold uppercase tracking-widest">
                        {
                            integral ? "page" : "post"
                        }
                        {
                            (tags && typeof tags === "object") && (
                                <>
                                    {" "} in {" "}
                                    <span className="text-xl uppercase font-bold text-purple-800 dark:text-purple-500">
                                        {tags?.join(", ")}
                                    </span>
                                </>
                            )
                        }
                    </span>
                )
            }
            <span className="text-4xl md:text-6xl font-bold xl:max-w-[45vw] 2xl:max-w-[33vw]">{title}</span>
            <div className="text-2xl flex flex-row gap-x-2 items-center">
                <span className="font-medium">
                    <b className="semibold lowercase">{author}</b>
                </span>
                <div className="w-[0.2rem] h-[0.2rem] bg-white rounded-full" />
                <span className="font-medium lowercase">
                    {integral && "updated "}{formatted}
                </span>
            </div>
            <div className="my-4 py-1 w-full h-1 bg-purple-950 rounded-full sm:max-w-[50vw] xl:max-w-[45vw] 2xl:max-w-[32.5vw]" />
        </div>
    );
};