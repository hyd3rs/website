import { BiMusic } from "react-icons/bi";
import Link from "next/link";
import { PiVinylRecord } from "react-icons/pi";
import { Tooltip } from "@std/app/Client";

export const NavMusic = async () => {
    const spotify = await fetch(`https://anemo.danny.works/user/spotify`, {
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

    const struct = {
        active: spotify?.response?.active || false,
        track: spotify?.response?.songInfo || {
            title: null,
            artist: null,
        }
    };

    if (!struct?.active) return null;

    return (
        <Tooltip variant="soft" title={<span className="font-sans font-medium text-base text-black">
            Press or click to search on Apple Music
        </span>} arrow>
            <Link target="_blank" rel="noreferrer noopener" href={`https://music.apple.com/gb/search?term=${struct.track?.title || "Unknown"} ${struct.track?.artist || "Unknown"}`} className="transition-all ease-in-out duration-300 flex flex-row items-center gap-x-2 px-4 py-2 border-2 border-slate-800 hover:bg-slate-800 dark:border-purple-900 dark:hover:bg-purple-900 rounded-2xl font-bold hover:text-white dark:text-white">
                <PiVinylRecord className="text-2xl animate-spin" />
                <div className="hidden md:block">
                    <span className="font-medium">{struct.track?.title || "Unknown"}</span> <span className="hidden md:inline-block">&middot;</span> <span className="font-medium">{struct.track?.artist || "Unknown"}</span>
                </div>
                <span className="font-medium md:hidden">
                    Tap to find current song
                </span>
                <div className="hidden w-4 h-4 bg-green-500 rounded-full animate-pulse" />
            </Link>
        </Tooltip>
    );
};