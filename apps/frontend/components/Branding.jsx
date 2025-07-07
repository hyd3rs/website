"use client";

import Link from "next/link";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";

export const NameBrand = ({ corner }) => (
  <span className="font-semibold">
    dani<span className="text-purple-600 font-bold">*</span>
  </span>
);

export const NavBrand = ({ corner }) => (
  <>
    <div className="group hidden md:flex flex-row items-center gap-x-2 font-outfit text-4xl lowercase font-semibold">
      <Link
        href="/"
        className="text-slate-800 hover:text-black dark:text-white dark:hover:text-gray-300"
      >
        dani
        {corner ? (
          "'s "
        ) : (
          <span className="text-purple-600 group-hover:text-purple-700 font-bold">
            *
          </span>
        )}
      </Link>
      {corner && (
        <Link
          className="text-purple-600 hover:text-purple-700 font-bold"
          href="/corner"
        >
          corner*
        </Link>
      )}
    </div>
    <div className="group flex md:hidden flex-row items-center gap-x-2 font-outfit text-4xl lowercase text-slate-800 group-hover:text-black dark:text-white dark:group-hover:text-gray-300 font-semibold">
      <Link href="/">
        dani
        <span className="text-purple-600 group-hover:text-purple-700 font-bold">
          *
        </span>
      </Link>
    </div>
  </>
);

export const CornerBrand = () => (
  <span className="group ttransition-all ease-in-out duration-300 font-semibold text-purple-500">
    corner*
  </span>
);

export const FooterBrand = () => (
  <Link
    href="https://github.com/daniwasonline/website"
    target="_blank"
    rel="noreferrer noopener"
    className="font-semibold hover:text-slate-300"
  >
    dani<span className="text-purple-600 font-bold">*</span>
  </Link>
);

export const NavTitle = () => {
  //const layout = useSelectedLayoutSegment();
  const [layout, post] = useSelectedLayoutSegments();
  return (
    <div className="group flex flex-row items-center gap-x-6">
      <NavBrand corner={layout === "corner"} />
    </div>
  );
};
