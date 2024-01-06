import AboutMd from "./md/About.mdx";
import HobbiesMd from "./md/Hobbies.mdx";
import { StandardBox, SkeletonBox, GradientBox, BoxLinks, BoxLink } from "./Boxes";
import { BiLink, BiLogoGithub, BiLogoTwitter, BiMailSend } from 'react-icons/bi';
import { FaLastfm } from 'react-icons/fa';
import { SiCodeberg } from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';

export const SocialsBox = () => {
    return (
        <GradientBox className={`bg-gradient-to-tr from-red-400 to-blue-400`} title="socials">
            Check out my social media and other personal corners on the internet!
            <BoxLinks>
                <BoxLink href="mailto:hello@danny.works" tooltip="email (personal)">
                    <BiMailSend className="text-2xl" />
                </BoxLink>
                <BoxLink href="mailto:dani@hydride.dev" tooltip="email (hydride)">
                    <BiMailSend className="text-2xl text-orange-500 hover:text-orange-600" />
                </BoxLink>
                <BoxLink href="https://github.com/daniwasonline" tooltip="github">
                    <BiLogoGithub className="text-2xl" />
                </BoxLink>
                <BoxLink href="https://codeberg.org/daniaintonline" tooltip="codeberg">
                    <SiCodeberg className="text-2xl" />
                </BoxLink>
                <BoxLink href="https://twitter.com/daniaintonline" tooltip="twitter (x)">
                    <BiLogoTwitter className="text-2xl" />
                </BoxLink>
                <BoxLink href="https://www.last.fm/user/daniaintonline" tooltip="last.fm (spotify)">
                    <FaLastfm className="text-2xl" />
                </BoxLink>
            </BoxLinks>
        </GradientBox>
    );
};

export const About = () => {
    return (
        <StandardBox title="what i do">
            <AboutMd />
        </StandardBox>
    )
};

export const Hobbies = () => {
    return (
        <StandardBox right title="passions">
            <HobbiesMd />
        </StandardBox>
    )
};