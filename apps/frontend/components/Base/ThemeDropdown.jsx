import { useTheme } from "next-themes";
import { BiSun, BiSolidSun, BiMoon, BiSolidMoon, BiAdjust, BiSolidPaintRoll } from "react-icons/bi";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@shadcn/components/ui/dropdown-menu";
import { Button } from "@std/@shadcn/components/ui/button";

export const ThemeDropdown = ({ children }) => {
    const { setTheme, theme, resolvedTheme } = useTheme();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="ease-in-out duration-300 rounded-2xl w-12 h-12 border-2 text-black dark:text-white hover:text-white bg-transparent border-slate-800 hover:bg-slate-800 dark:border-purple-900 dark:hover:bg-purple-900 p-2">
                    <BiSolidPaintRoll className="text-3xl" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-2xl mt-2 p-2 dark:bg-background border-2 border-slate-800 dark:border-purple-900">
                <DropdownMenuItem onClick={() => setTheme("light")} className="text-lg font-medium flex flex-row items-center gap-x-2 rounded-2xl">
                    <BiSolidSun />
                    light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className="text-lg font-medium flex flex-row items-center gap-x-2 rounded-2xl">
                    <BiSolidMoon />
                    dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className="text-lg font-medium flex flex-row items-center gap-x-2 rounded-2xl">
                    <BiAdjust />
                    system
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};