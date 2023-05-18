"use client";

import { SearchInput, RegularList } from "@/components";
import { Entity, Category } from "@/types";
import data from "@/data.json";

function getBookmarked() {
  return data.filter((item) => item.isBookmarked);
}

export default function Bookmarkes() {
  const bookmarked = getBookmarked() as Entity[];
  const bookmarkedMovies = bookmarked.filter(
    (item) => item.category === Category.Movie
  );
  const bookmarkedSeries = bookmarked.filter(
    (item) => item.category === Category.Series
  );

  return (
    <div className="px-4 pb-4 md:px-0">
      <SearchInput className="mt-5" placeholder="Search for bookmarked shows" />

      <RegularList
        title="Bookmarked Movies"
        entities={bookmarkedMovies}
        className="mt-5"
      />

      <RegularList
        title="Bookmarked TV Series"
        entities={bookmarkedSeries}
        className="mt-6"
      />
    </div>
  );
}
