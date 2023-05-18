import Image from "next/image";
import cns from "classnames";

import { Category, Entity } from "@/types";

const iconsByCategory = {
  [Category.Movie]: "/category-movie.svg",
  [Category.Series]: "/category-tv.svg",
};

export const AdditionalInfo = ({
  year,
  category,
  rating,
  className = "",
}: {
  year: Entity["year"];
  category: Category;
  rating: Entity["rating"];
  className?: string;
}) => {
  const iconSrc = iconsByCategory[category];

  return (
    <p
      className={cns(
        "flex items-center gap-x-[6px] text-xs font-light opacity-75",
        className
      )}
    >
      <span>{year}</span>
      <span className="block w-[2px] h-[2px] bg-pure-white/50 rounded-full" />
      <span className="flex items-center gap-x-1">
        <Image src={iconSrc} width="12" height="12" alt={category} />
        {category}
      </span>
      <span className="block w-[2px] h-[2px] bg-pure-white/50 rounded-full" />
      <span>{rating}</span>
    </p>
  );
};
