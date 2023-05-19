"use client";

import { useCallback, useMemo, useState } from "react";
import cns from "classnames";
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
  const [search, setSearch] = useState("");
  const filteredEntities = useMemo(
    () =>
      recommended.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      ),
    [recommended, search]
  );
  const title = useMemo(
    () =>
      search
        ? `Found ${filteredEntities.length} results for ‘${search}’`
        : "Recommended for you",
    [search, filteredEntities.length]
  );

  const onSearchChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  return (
    <div className="transition-all px-4 pb-4 md:px-0">
      <SearchInput
        className="mt-5"
        placeholder="Search for movies"
        onChange={onSearchChange}
      />

      {search ? null : (
        <ScrollableList title="Trending" entities={trending} className="mt-5" />
      )}

      <RegularList
        title={title}
        entities={filteredEntities}
        className={cns({ "mt-3": !search }, { "mt-5": search })}
      />
    </div>
  );
}
