"use client";

import { useCallback, useMemo, useState } from "react";
import { SearchInput, RegularList } from "@/components";
import { Entity, Category } from "@/types";
import data from "@/data.json";

function getBookmarked() {
  return data.filter((item) => item.isBookmarked);
}

export default function Bookmarkes() {
  const bookmarked = getBookmarked() as Entity[];
  const [search, setSearch] = useState("");
  const filteredEntities = useMemo(
    () =>
      bookmarked.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      ),
    [bookmarked, search]
  );
  const bookmarkedMovies = bookmarked.filter(
    (item) => item.category === Category.Movie
  );
  const bookmarkedSeries = bookmarked.filter(
    (item) => item.category === Category.Series
  );

  const onSearchChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  return (
    <div className="px-4 pb-4 md:px-0">
      <SearchInput
        className="mt-5"
        placeholder="Search for bookmarked shows"
        onChange={onSearchChange}
      />

      {search ? (
        <RegularList
          title={`Found ${filteredEntities.length} results for ‘${search}’`}
          entities={filteredEntities}
          className="mt-5"
        />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
