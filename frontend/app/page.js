
import { About, Hobbies, SocialsBox } from '@std/components/Home/StaticBoxes';
import { BsFillEmojiSmileUpsideDownFill } from 'react-icons/bs';
import { BiLink } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';
import { HydrideBox } from '@std/components/Home/ProjectBoxes';
import { OnDiscordTooltip } from '@std/components/Home/tooltips/onDiscord';

export default async function Home() {
    const { status, spotify } = await getData();

    const statusHandle = {
        online: <>am <span className="text-green-400">online</span>!</>,
        offline: <><span className="text-hydro-light">ain&apos;t online</span>.</>,
        dnd: <>am <span className="text-red-400">busy</span>.</>,
        idle: <>am <span className="text-yellow-400">afk</span>.</>
    }

    return (
        <div className="flex flex-col gap-y-4 py-8">
            <div className="flex md:flex-row items-center justify-between w-full py-4">
                <div>
                    <div className="flex flex-row items-center gap-x-4">
                        <h1 className="text-5xl font-bold">howdy!</h1>
                        <BsFillEmojiSmileUpsideDownFill className="text-5xl" />
                    </div>
                    <span className="text-5xl font-bold">the name&apos;s dani, and i {" "}
                        <OnDiscordTooltip>
                            {statusHandle[status]}
                        </OnDiscordTooltip>
                    </span>
                    {
                        spotify.active && (
                            <div className="mt-2">
                                <span className="text-xl font-bold mt-4">
                                    (listening to <span className="text-purple-400">{spotify.track?.title || "Unknown"}</span> by <span className="text-purple-400">{spotify.track?.artist || "Unknown"}</span>)
                                </span>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 w-full py-8">
                <About />
                <HydrideBox />
                <SocialsBox />
                <Hobbies />
            </div>
        </div>
    )
};

export const getData = async () => {
    const datapointInfo = await fetch(`https://anemo.danny.works/user/information`, {
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
        status: datapointInfo?.response?.discord?.status?.mode || "offline",
        spotify: {
            active: datapointSpotify?.response?.active || false,
            track: datapointSpotify?.response?.songInfo || {
                title: null,
                artist: null,
            }
        }
    };
};
