"use client";

import { SearchInput, RegularList } from "@/components";
import { Category, Entity } from "@/types";
import data from "@/data.json";

function getSeries() {
  return data.filter((item) => item.category === Category.Series);
}

export default function Series() {
  const series = getSeries() as Entity[];

  return (
    <div className="px-4 pb-4 md:px-0">
      <SearchInput className="mt-5" placeholder="Search for series" />

      <RegularList title="Series" entities={series} className="mt-5" />
    </div>
  );
}
