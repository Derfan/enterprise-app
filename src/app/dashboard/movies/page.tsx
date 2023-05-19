"use client";

import { useCallback, useMemo, useState } from "react";
import { SearchInput, RegularList } from "@/components";
import { Category, Entity } from "@/types";
import data from "@/data.json";

function getMovies() {
  return data.filter((item) => item.category === Category.Movie);
}

export default function Movies() {
  const movies = getMovies() as Entity[];
  const [search, setSearch] = useState("");
  const filteredEntities = useMemo(
    () =>
      movies.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      ),
    [movies, search]
  );
  const title = useMemo(
    () =>
      search
        ? `Found ${filteredEntities.length} results for ‘${search}’`
        : "Movies",
    [search, filteredEntities.length]
  );

  const onSearchChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  return (
    <div className="px-4 pb-4 md:px-0">
      <SearchInput
        className="mt-5"
        placeholder="Search for movies"
        onChange={onSearchChange}
      />

      <RegularList title={title} entities={filteredEntities} className="mt-5" />
    </div>
  );
}
