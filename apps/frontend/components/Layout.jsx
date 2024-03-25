import { MarkdownBar, MarkdownPath } from "@std/components/Base/Markdown";
import { TabsDrawer } from "@std/components/Base/TabsDrawer";


export default async function BasePage({ children }) {
    return (
        <div className="flex flex-col gap-y-8 md:gap-y-0 h-full">
            <div className="flex flex-col items-center md:flex-row md:items-start w-full gap-y-8 md:gap-y-0">

            </div>
            <main className="pl-4 z-[1] flex flex-col items-start rounded-t-xl text-left w-full h-full amd:ml-40 pt-4 amd:py-4 transition-transform ease-in-out duration-250">
                {children}
            </main>
        </div>
    )
};

