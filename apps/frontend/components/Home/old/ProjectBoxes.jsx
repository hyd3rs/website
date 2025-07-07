import { BoxLink, BoxLinks, GradientBox } from './Boxes';
import { BiLink, BiMailSend } from 'react-icons/bi';

export const HydrideBox = () => {
    return (
        <GradientBox className={`bg-linear-to-tr bg-gradient-hydride-brand`} title={
            <>
                the <span className="dark:text-transparent dark:bg-clip-text dark:bg-gradient-hydride-brand">hydride collective</span>
            </>
        } right>
            diverse group of devs, sysadmins, artists, and designers. we build and break things with a passion.
            <BoxLinks right>
                <BoxLink href="https://hydride.dev" tooltip="hydride website">
                    <BiLink className="text-2xl" />
                </BoxLink>
                <BoxLink href="https://www.hydride.dev/contact" tooltip="send us an email">
                    <BiMailSend className="text-2xl" />
                </BoxLink>
            </BoxLinks>
        </GradientBox>
    );
};

export const FreelanceBox = () => {
    return (
        <GradientBox className={`bg-linear-to-tr bg-gradient-hydride-brand`} title={
            <>
                hire my <span className="dark:text-transparent dark:bg-clip-text dark:bg-gradient-hydride-brand">freelance</span> work!
            </>
        } right>
                Want to hire me or see my work? Use the links below to contact my team and I <b>or</b> view some of the work that we&apos;ve done for clients.
            <BoxLinks right>
                <BoxLink href="https://www.hydride.dev/projects" tooltip="team portfolio">
                    <BiLink className="text-2xl" />
                </BoxLink>
                <BoxLink href="https://www.hydride.dev/contact" tooltip="send us a message">
                    <BiMailSend className="text-2xl" />
                </BoxLink>
            </BoxLinks>
        </GradientBox>
    );
};