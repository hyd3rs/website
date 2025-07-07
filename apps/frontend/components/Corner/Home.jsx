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
    <h1 className="text-6xl font-semibold text-left text-brand-gradient">
      my <span className="text-purple-600 font-bold">corner*</span>
    </h1>
    <span className="text-3xl font-medium lg:max-w-[60vw] 2xl:max-w-[50vw]">
      i occasionally post here about projects that i&apos;m working on or random
      things that i find interesting.
    </span>
  </>
);

export const PostsContainer = ({ children }) => (
  <div className="pt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
    {children}
  </div>
);

export const Post = ({
  slug,
  title,
  author,
  children,
  integral,
  timestamp,
  updated,
  tags,
}) => {
  const processedTimestamp = new Date(
    timestamp || "2024-01-01"
  ).toLocaleDateString("en-GB", {
    dateStyle: "long",
    timeZone: "UTC",
  });
  const processedUpdated = new Date(updated || "2024-01-01").toLocaleDateString(
    "en-GB",
    {
      dateStyle: "long",
      timeZone: "UTC",
    }
  );
  return (
    <Link href={`/corner/p/${slug || "#"}`}>
      <Card className="group ease-in-out duration-300 rounded-2xl border-2 text-black dark:text-white border-slate-800 hover:bg-slate-800 dark:border-purple-900 dark:hover:bg-purple-900 hover:text-white bg-transparent font-medium h-full flex flex-col justify-center">
        <CardHeader>
          <CardTitle>
            <div className="flex flex-row items-center gap-x-2">
              {integral && (
                <span className="uppercase font-medium text-base tracking-widest text-cyan-500 w-fit">
                  INTEGRAL
                </span>
              )}
              <span>{title || "No title provided"}</span>
            </div>
          </CardTitle>
          <CardDescription className="group-hover:text-slate-300 dark:group-hover:text-slate-400">
            by{" "}
            <span className="text-black group-hover:text-white dark:text-white font-bold">
              {author || "No author provided"}
            </span>
            {tags && typeof tags === "object" && (
              <span>
                {" "}
                |{" "}
                <span className="uppercase font-medium tracking-widest text-purple-800 dark:text-purple-500 dark:group-hover:text-white">
                  {tags?.join(", ")}
                </span>
              </span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{children || "No description provided"}</p>
        </CardContent>
        <CardFooter className="flex flex-col items-start text-left">
          <p>
            Published <b>{processedTimestamp}</b>
            {updated && (
              <>
                {" "}
                (updated <b>{processedUpdated}</b>)
              </>
            )}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};
