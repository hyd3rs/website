
import { About, Hobbies, SocialsBox } from '@std/components/Home/StaticBoxes';
import { BsFillEmojiSmileUpsideDownFill } from 'react-icons/bs';
import { BiLink, BiWinkSmile } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';
import { FreelanceBox, HydrideBox } from '@std/components/Home/ProjectBoxes';
import { OnDiscordTooltip } from '@std/components/Home/tooltips/onDiscord';

export default async function Home() {
    const { status, spotify } = await getData();

    const statusHandle = {
        online: <>am.. <span className="text-green-400 font-bold">online*</span></>,
        offline: <><span className="text-hydro-light font-bold">am not online</span></>,
        dnd: <>am.. <span className="text-red-400 font-bold">busy*</span></>,
        idle: <>am.. <span className="text-yellow-400 font-bold">afk*</span></>
    }

    return (
        <div className="flex flex-col gap-y-4 items-center w-full">
            <div className="flex flex-row items-center gap-x-4 font-outfit">
                <h1 className="text-5xl font-bold">howdy!</h1>
                <BiWinkSmile className="text-4xl" />
            </div>
            <span className="text-2xl font-regular font-outfit">
                I&apos;m a part-time UI/web designer.
            </span>
            {
                spotify.active && (
                    <div>
                        <span className="flex flex-col text-xl font-bold mt-4 text-center">
                            <span className="dark:text-purple-400">{spotify.track?.title || "Unknown"}</span> <span className="dark:text-purple-400">{spotify.track?.artist || "Unknown"}</span>
                        </span>
                    </div>
                )
            }
        </div>
    )
};

export const getData = async () => {
    const datapointSpotify = await fetch(`https://anemo.danny.works/user/spotify`, {
        next: {
            revalidate: 60
        }
    }).then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return {};
        };
    }).catch(e => {
        console.error(`ERROR LOGGED: ` + e)
        return {};
    });

    return {
        spotify: {
            active: datapointSpotify?.response?.active || false,
            track: datapointSpotify?.response?.songInfo || {
                title: null,
                artist: null,
            }
        }
    };
};
