import { HeaderLinks, HeaderRow } from '@std/components/Home/HeaderInteractables';
import { FaCode } from 'react-icons/fa';

const Home = async () => {
    return (
        <div className="flex flex-col gap-y-8 w-full h-full px-8 md:p-24 md:pb-0">
            <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-y-4 md:gap-y-0 md:gap-x-8 py-4">
                <div className="flex flex-col gap-y-4 font-outfit">
                    <span className="text-8xl font-medium">
                        hi, i&apos;m {" "}
                        <span className="text-purple-600 font-bold">2off</span>.
                    </span>
                    <span className="text-4xl font-medium max-w-[40rem]">
                        i design and develop websites and apps for the modern web.
                    </span>
                    <div className="hidden lg:flex md:flex-row items-center gap-x-4">
                        <HeaderRow />
                        <HeaderLinks />
                    </div>
                    <div className="flex lg:hidden flex-col gap-y-4">
                        <div className="flex flex-row items-center gap-x-4">
                            <HeaderRow />
                        </div>
                        <div className="grid grid-cols-4 gap-4 w-fit">
                            <HeaderLinks />
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex flex-col gap-y-4 md:items-center md:justify-center md:mr-32">
                    <div className="relative">
                        <div className="-mr-12 absolute top-0 right-0 animate-pulse text-purple-500 font-bold md:text-[5rem] lg:text-[8rem] rounded-full">
                            *
                        </div>
                        <FaCode className="md:text-[8rem] lg:text-[12rem] xl:text-[16rem]" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export const metadata = {
    test: "yes"
};

export default Home;