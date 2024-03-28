import { BiHome } from "react-icons/bi";
import { StandardButtonLink } from "@std/components/Interactables";

export const NotFoundText = () => (
    <>
        <h1 className="text-8xl font-semibold text-left text-brand-gradient">woops...</h1>
        <span className="text-4xl font-medium">
            the page that you&apos;re looking for doesn&apos;t exist!
        </span>
        <span className="text-2xl max-w-[35rem]">
            try checking if the URL that you&apos;re navigating to is correct.
        </span>
    </>
);

export const NotFoundInteractables = () => (
    <div className="flex flex-row pt-4 items-center justify-center">
        <StandardButtonLink href="/" className="flex flex-row items-center gap-x-2">
            <BiHome />
            back to home
        </StandardButtonLink>
    </div>
);