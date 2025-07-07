"use client";
/*
    note to self:
    don't spend 3 hours on this shit again
*/

import { Transition } from '@headlessui/react';
import { StandardTabCard, TabCard } from '@std/components/Base/Tabs';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BiMenu, BiPaint, BiPencil, BiUser, BiX } from 'react-icons/bi';
import { PiHandWaving } from 'react-icons/pi';

export const Tabs = ({ standard, invisible, setOpen }) => {
    const Card = standard ? StandardTabCard : TabCard;
    return (
        <>
            <Card title="hello!" icon={PiHandWaving} href="/" className="border-cyan-900 group-hover:bg-cyan-900" invisible={invisible} setOpen={setOpen}>
                thanks for stopping by!
            </Card>
            <Card title="projects" href="https://hydride.dev/projects" external icon={BiPaint} className="border-green-900 group-hover:bg-green-900" invisible={invisible} setOpen={setOpen}>
                find my previous works here.
            </Card>
            <Card title="my corner" icon={BiPencil} href="/corner" className="border-red-900 group-hover:bg-red-900" invisible={invisible} setOpen={setOpen}>
                i dump thoughts n&apos; stuff here tbh
            </Card>
        </>
    );
};

export const TabsDrawer = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Transition
                show={open}
                className="hidden md:block bg-black bg-opacity-[0.2] dark:bg-opacity-75 absolute z-3 top-0 left-0 w-full h-full"
                enter="transition-opacity ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                onClick={(() => setOpen(false))}
            />
            <div className="hidden md:block md:relative">
                <div className="flex flex-col gap-y-4 transition-all ease-in-out duration-500">
                    <div className="z-5 pl-8 sm:pl-12">
                        <button onClick={(() => setOpen(!open))} className={`transition-all ease-in-out duration-300 z-10 text-black dark:text-white hidden md:flex flex-col items-center justify-center p-2 h-12 w-12 rounded-2xl border-2 bg-transparent border-slate-900 hover:text-white hover:bg-slate-900 dark:border-purple-900 dark:hover:bg-purple-900`}>
                            {
                                open ? <BiX className="text-3xl" /> : <BiMenu className="text-3xl" />
                            }
                        </button>
                    </div>
                    <Transition
                        show={open}
                        enter="transition-opacity ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        className="mt-0 absolute hidden px-8 sm:px-12 h-fit z-3 md:flex flex-row justify-center md:flex-col md:items-start md:justify-start gap-x-4 md:gap-x-0 md:gap-y-2 w-fit md:min-w-[24rem]"
                    >
                        <div className="-z-3 invisible flex-col items-center justify-center p-4 h-16 w-16 rounded-2xl" />
                        <Tabs setOpen={setOpen} />
                    </Transition>
                    <Transition
                        show={open}
                        className="bg-gray-900 rounded-2xl absolute hidden px-8 ml-8 mt-24 sm:px-4 sm:py-10 h-fit z-2 md:aflex flex-row justify-center md:flex-col md:items-start md:justify-start gap-x-4 md:gap-x-0 md:gap-y-2 w-fit drop-shadow-2xl"
                        enter="transition-opacity ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="-z-1 hidden flex-col items-center justify-center p-4 h-16 w-16 rounded-2xl mb-4" />
                        <Tabs standard invisible />
                    </Transition>
                </div>
            </div>
            <div className="md:hidden h-fit z-2 flex flex-row justify-evenly gap-x-4 md:gap-x-0 md:gap-y-2">
                <Tabs />
            </div>
        </>
    );
};