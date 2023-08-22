
import { About, Hobbies, StandardBox } from '@std/components/Home/StaticBoxes';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex flex-col gap-y-4 py-8">
            <div className="flex md:flex-row items-center justify-between w-full py-4">
                <div>
                    <h1 className="text-5xl font-bold">hi there! 👋</h1>
                    <h1 className="text-5xl font-bold">the name&apos;s <span className="text-hydro-light">dani</span>.</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 w-full py-8">
                <About />
                <StandardBox right>
                    
                </StandardBox>
                <StandardBox>
                    
                </StandardBox>
                <Hobbies />
            </div>
        </div>
    )
}
