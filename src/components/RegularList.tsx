"use client";

import Image from "next/image";

import { Entity } from "@/types";
import { BookmarkButton } from "./BookmarkButton";
import { AdditionalInfo } from "./AdditionalInfo";
import { PlayOverlay } from "./PlayOverlay";

const RegularListItem = ({
  title,
  thumbnail,
  year,
  category,
  rating,
  isBookmarked,
}: Entity) => (
  <li className="group cursor-pointer relative">
    <div className="relative">
      <Image
        src={thumbnail.regular.large}
        className="rounded-lg w-full"
        width="164"
        height="110"
        alt={title}
      />

      <PlayOverlay className="opacity-0 group-hover:opacity-100" />
    </div>

    <AdditionalInfo
      year={year}
      category={category}
      rating={rating}
      className="mt-2"
    />

    <h4 className="text-sm font-medium mt-1">{title}</h4>

    <BookmarkButton
      isBookmarked={isBookmarked}
      className="absolute top-2 right-2"
    />
  </li>
);

export const RegularList = ({
  title = "",
  entities,
  className = "",
}: {
  title: string;
  entities: Entity[];
  className?: string;
}) => (
  <div className={className}>
    <h3 className="text-xl font-light">{title}</h3>
    <ul
      className={
        "grid grid-cols-2 gap-4 mt-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
      }
    >
      {entities.map((item) => (
        <RegularListItem key={item.title} {...item} />
      ))}
    </ul>
  </div>
);
