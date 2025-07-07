import { MarkdownBar, MarkdownPath } from "@std/components/Base/Markdown";
import { TabsDrawer } from "@std/components/Base/TabsDrawer";
import { StandardButtonLink } from "@std/components/Interactables";
import {
  BiEnvelope,
  BiLogoGithub,
  BiLogoTwitter,
  BiSolidPaperPlane,
  BiSolidUser,
} from "react-icons/bi";
import { FaLastfm } from "react-icons/fa";
import { SiCodeberg } from "react-icons/si";

export default async function BasePage({ children }) {
  return (
    <div className="flex flex-col gap-y-8 md:gap-y-0 h-full">
      <main className="z-0 md:px-6 flex flex-col items-start rounded-t-xl text-left w-full h-full pt-4 amd:py-4 transition-transform ease-in-out duration-250">
        {children}
      </main>
    </div>
  );
}

export const Links = (props) => {
  return (
    <>
      <StandardButtonLink
        icon
        href="mailto:hello@danny.works"
        external
        {...props}
      >
        <BiEnvelope />
      </StandardButtonLink>
      <StandardButtonLink
        icon
        href="https://github.com/daniwasonline"
        external
        {...props}
      >
        <BiLogoGithub />
      </StandardButtonLink>
      <StandardButtonLink
        icon
        href="https://codeberg.org/daniaintonline"
        external
        {...props}
      >
        <SiCodeberg />
      </StandardButtonLink>
      <StandardButtonLink
        icon
        href="https://www.last.fm/user/daniaintonline"
        external
        {...props}
      >
        <FaLastfm />
      </StandardButtonLink>
    </>
  );
};
