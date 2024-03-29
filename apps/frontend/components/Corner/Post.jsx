import { FaDotCircle } from "react-icons/fa";

export const Head = ({ title, author, description, timestamp, tags, integral }) => {
    const formatted = new Date(timestamp || "2023-12-21").toLocaleDateString("en-GB", {
        dateStyle: "long"
    })
    return (
        <div className="flex flex-col gap-y-2 w-fit">
            {
                (tags && typeof tags === "object") && (
                    <span className="text-xl md:text-2xl font-medium">
                        {" "} in {" "}
                        <span className="uppercase font-bold tracking-widest text-purple-800 dark:text-purple-500 group-hover:dark:text-white">{tags?.join(", ")}</span>
                    </span>
                )
            }
            {
                integral && (
                    <span className="uppercase font-medium text-lg tracking-widest text-cyan-500 w-fit">INTEGRAL</span>
                )
            }
            <span className="text-4xl md:text-6xl font-bold">{title}</span>
            <div className="text-2xl flex flex-row gap-x-2 items-center">
                <span className="font-medium">
                    <b className="semibold">{author}</b>
                </span>
                <div className="w-[0.2rem] h-[0.2rem] bg-white rounded-full" />
                <span className="font-medium">
                    {formatted}
                </span>
            </div>
            <div className="my-4 py-1 w-full h-1 bg-purple-950 rounded-full" />
        </div>
    );
};