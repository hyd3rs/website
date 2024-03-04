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
            Press or click to search on Musixmatch
        </span>} arrow>
            <Link target="_blank" rel="noreferrer noopener" href={`https://www.musixmatch.com/search/${struct.track?.title || "Unknown"} ${struct.track?.artist || "Unknown"}`} className="flex flex-row items-center gap-x-2 px-4 py-2 bg-purple-900 hover:bg-purple-950 rounded-full font-bold">
                <PiVinylRecord className="text-2xl animate-spin" />
                <div>
                    <span className="text-white font-medium">{struct.track?.title || "Unknown"}</span> &middot; <span className="text-white font-medium">{struct.track?.artist || "Unknown"}</span>
                </div>
                <div className="hidden w-4 h-4 bg-green-500 rounded-full animate-pulse" />
            </Link>
        </Tooltip>
    );
};