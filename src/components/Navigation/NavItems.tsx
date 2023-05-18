"use client";

import cns from "classnames";

import { HomeIcon, MoviesIcon, SeriesIcon, BookmarksIcon } from "./icons";
import { NavItem } from "./NavItem";

const items = [
  {
    href: "/dashboard/home",
    Icon: ({ className = "" }: { className?: string }) => (
      <HomeIcon className={cns("w-4 h-4 md:w-5 md:h-5", className)} />
    ),
  },
  {
    href: "/dashboard/movies",
    Icon: ({ className = "" }: { className?: string }) => (
      <MoviesIcon className={cns("w-4 h-4 md:w-5 md:h-5", className)} />
    ),
  },
  {
    href: "/dashboard/series",
    Icon: ({ className = "" }: { className?: string }) => (
      <SeriesIcon className={cns("w-4 h-4 md:w-5 md:h-5", className)} />
    ),
  },
  {
    href: "/dashboard/bookmarks",
    Icon: ({ className = "" }: { className?: string }) => (
      <BookmarksIcon
        className={cns("w-[14px] h-4 md:w-[17.5px] md:h-5", className)}
      />
    ),
  },
];

export const NavItems = () => (
  <ul className="transition-all flex items-center gap-6 md:gap-x-8 lg:flex-col lg:gap-10 lg:my-[75px]">
    {items.map((item, idx) => (
      <NavItem key={idx} {...item} />
    ))}
  </ul>
);
