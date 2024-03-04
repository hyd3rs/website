import { TabCard } from '@std/components/Base/Tabs';
import { FaPaintBrush } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { BiPaint, BiUser } from 'react-icons/bi';

export default async function BasePage({ children }) {
    return (
        <div className="relative flex flex-col gap-y-8 md:gap-y-0 md:flex-row md:items-start md:justify-between">
            <div className="md:absolute z-[2] flex flex-row justify-center md:flex-col md:items-start md:justify-start gap-x-4 md:gap-x-0 md:gap-y-2 w-[24rem]">
                <TabCard title="About Me" icon={BiUser} href="/" midHover>
                    Who am I?
                </TabCard>
                <TabCard title="Projects" icon={BiPaint} className="bg-green-900 hover:bg-green-950" href="/projects">
                    Take a look at some of my work!
                </TabCard>
            </div>
            <main className="z-[1] flex flex-col items-start text-left w-full md:ml-20">
                {children}
            </main>
        </div>
    )
};

