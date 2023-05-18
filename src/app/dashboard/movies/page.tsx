"use client";

import { SearchInput, RegularList } from "@/components";
import { Category, Entity } from "@/types";
import data from "@/data.json";

function getMovies() {
  return data.filter((item) => item.category === Category.Movie);
}

export default function Movies() {
  const movies = getMovies() as Entity[];

  return (
    <div className="px-4 pb-4 md:px-0">
      <SearchInput className="mt-5" placeholder="Search for movies" />

      <RegularList title="Movies" entities={movies} className="mt-5" />
    </div>
  );
}
