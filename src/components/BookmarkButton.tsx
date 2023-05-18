import Image from "next/image";
import cns from "classnames";

export const BookmarkButton = ({
  isBookmarked,
  className = "",
}: {
  isBookmarked: boolean;
  className?: string;
}) => (
  <button
    type="button"
    className={cns(
      "rounded-full bg-dark-blue/50 px-[10px] py-[9px]",
      className
    )}
  >
    <Image
      src={isBookmarked ? "/bookmark-full.svg" : "/bookmark-empty.svg"}
      width="12"
      height="14"
      alt="bookmark"
    />
  </button>
);
