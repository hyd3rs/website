
import { About, Hobbies, SocialsBox } from '@std/components/Home/StaticBoxes';
import { BsFillEmojiSmileUpsideDownFill } from 'react-icons/bs';
import { BiLink, BiSmile, BiWinkSmile } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';
import { FreelanceBox, HydrideBox } from '@std/components/Home/ProjectBoxes';
import { OnDiscordTooltip } from '@std/components/Home/tooltips/onDiscord';
import { MarkdownBar } from '@std/components/Base/Markdown';

const Home = async () => {
    return (
        <div className="flex flex-col gap-y-8 w-full h-full items-center justify-center text-center px-8">
            <div className="flex flex-col gap-y-4 py-4">
                <div className="flex flex-row items-center gap-x-4 font-outfit">
                    <h1 className="text-5xl font-bold">howdy!</h1>
                    <BiSmile className="text-4xl" />
                </div>
                <h2 className="text-3xl font-medium">
                    
                </h2>
            </div>
        </div>
    )
};

export const metadata = {
    test: "yes"
};

export default Home;