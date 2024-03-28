"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/shadcn/components/ui/dropdown-menu";
import { Button } from "@/shadcn/components/ui/button";
import { TabsDrawer } from "@std/components/Base/TabsDrawer";
import { ThemeDropdown } from "./Base/ThemeDropdown";
import { NameBrand } from "@std/components/Branding";


export const NavigationRoot = ({ children }) => {
    return (
        <div className="flex flex-row items-center w-full z-[2]">
            <div className="hidden md:flex flex-row items-center z-[10]">
                <TabsDrawer />
            </div>
            <nav className="flex items-center justify-between w-full px-8 md:pl-6 sm:pr-12 z-[10]">
                <div className="flex items-center justify-between">
                    <div className="group flex flex-row items-center gap-x-6">
                        <Link href="/" className="font-outfit text-4xl lowercase text-slate-800 group-hover:text-black dark:text-white dark:group-hover:text-gray-300">
                            <NameBrand />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-end space-x-4">
                    <div className="hidden md:flex flex-row items-center space-x-4">
                        {/* Navigation widgets */}
                        {children}
                    </div>
                    <div className="md:hidden">
                        <TabsDrawer />
                    </div>
                    <ThemeDropdown />
                </div>
            </nav>
        </div>
    )
};