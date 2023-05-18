"use client";

import Image from "next/image";

import { Entity } from "@/types";
import { BookmarkButton } from "./BookmarkButton";
import { AdditionalInfo } from "./AdditionalInfo";

const RegularListItem = ({
  title,
  thumbnail,
  year,
  category,
  rating,
  isBookmarked,
}: Entity) => (
  <li className="relative">
    <Image
      src={thumbnail.regular.large}
      className="rounded-lg w-full"
      width="164"
      height="110"
      alt={title}
    />

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
    <ul className={"grid grid-cols-2 gap-4 mt-6 md:grid-cols-3 lg:grid-cols-4"}>
      {entities.map((item) => (
        <RegularListItem key={item.title} {...item} />
      ))}
    </ul>
  </div>
);
