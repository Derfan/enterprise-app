import Image from "next/image";
import cns from "classnames";

import { Entity } from "@/types";
import { BookmarkButton } from "./BookmarkButton";
import { AdditionalInfo } from "./AdditionalInfo";
import { PlayOverlay } from "./PlayOverlay";

const ScrollableListItem = ({
  thumbnail,
  title,
  category,
  year,
  rating,
  isBookmarked,
}: Entity) => (
  <li className="group cursor-pointer relative snap-center max-h-[230px]">
    <Image
      src={thumbnail.trending?.large as string}
      className="trransition-all w-[60vw] max-w-[470px] h-auto rounded-lg"
      width="240"
      height="140"
      alt={title}
    />

    <PlayOverlay className="opacity-0 group-hover:opacity-100" />

    <BookmarkButton
      isBookmarked={isBookmarked}
      className="trransition-all absolute top-2 right-2 md:top-4 md:right-6"
    />

    <div className="trransition-all absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/75 to-black/0 rounded-lg md:p-6">
      <AdditionalInfo year={year} category={category} rating={rating} />

      <h4 className="text-sm font-medium mt-1">{title}</h4>
    </div>
  </li>
);

export const ScrollableList = ({
  title,
  entities,
  className = "",
}: {
  title: string;
  entities: Entity[];
  className?: string;
}) => (
  <div
    className={cns(
      "transition-all overflow-hidden mx-[-16px] md:mx-[-24px] lg:mx-[-36px]",
      className
    )}
  >
    <h3 className="transition-all text-xl font-light px-4 md:px-6 lg:px-8">
      {title}
    </h3>
    <ul className="transition-all flex gap-6 mt-6 px-4 pb-3 w-full overflow-x-auto whitespace-nowrap snap-x md:px-6 lg:px-8">
      {entities.map((item) => (
        <ScrollableListItem key={item.title} {...item} />
      ))}
    </ul>
  </div>
);
