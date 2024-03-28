import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shadcn/components/ui/card";
import Link from "next/link";

export const Header = () => (
    <>
        <h1 className="text-6xl font-semibold text-left text-brand-gradient">my corner</h1>
        <span className="text-3xl font-medium lg:max-w-[60vw] 2xl:max-w-[50vw]">
            i occasionally post here about projects that i&apos;m working on or random things that i find interesting.
        </span>
    </>
);

export const PostsContainer = ({ children }) => (
    <div className="pt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {children}
    </div>
);

export const Post = ({ slug, title, author, children, timestamp }) => {
    const processedTimestamp = new Date(timestamp || "2024-01-01").toLocaleDateString("en-GB", {
        dateStyle: "long"
    });
    return (
        <Link href={`/corner/post/${slug || "#"}`}>
            <Card className="group ease-in-out duration-300 rounded-2xl border-2 text-black dark:text-white border-slate-800 hover:bg-slate-800 dark:border-purple-900 dark:hover:bg-purple-900 hover:text-white bg-transparent font-medium">
                <CardHeader>
                    <CardTitle>{title || "No title provided"}</CardTitle>
                    <CardDescription className="group-hover:text-slate-300 dark:group-hover:text-slate-400">by <span className="text-black group-hover:text-white dark:text-white font-bold">{author || "No author provided"}</span></CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{children || "No description provided"}</p>
                </CardContent>
                <CardFooter>
                    <p>Published <b>{processedTimestamp}</b></p>
                </CardFooter>
            </Card>
        </Link>
    )
};