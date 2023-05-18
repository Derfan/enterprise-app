"use client";

import { SearchInput, ScrollableList, RegularList } from "@/components";
import { Entity } from "@/types";
import data from "@/data.json";

function getTrending() {
  return data.filter((item) => item.isTrending);
}
function getRecommended() {
  return data;
}

export default function Home() {
  const trending = getTrending() as Entity[];
  const recommended = getRecommended() as Entity[];

  return (
    <div className="transition-all px-4 pb-4 md:px-0">
      <SearchInput className="mt-5" placeholder="Search for movies" />

      <ScrollableList title="Trending" entities={trending} className="mt-5" />

      <RegularList
        title="Recommended for you"
        entities={recommended}
        className="mt-3"
      />
    </div>
  );
}
