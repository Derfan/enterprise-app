"use client";

import { useCallback, useMemo, useState } from "react";
import { SearchInput, RegularList } from "@/components";
import { Category, Entity } from "@/types";
import data from "@/data.json";

function getSeries() {
  return data.filter((item) => item.category === Category.Series);
}

export default function Series() {
  const series = getSeries() as Entity[];
  const [search, setSearch] = useState("");
  const filteredEntities = useMemo(
    () =>
      series.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      ),
    [series, search]
  );
  const title = useMemo(
    () =>
      search
        ? `Found ${filteredEntities.length} results for ‘${search}’`
        : "Series",
    [search, filteredEntities.length]
  );

  const onSearchChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  return (
    <>
      <SearchInput
        className="mt-5"
        placeholder="Search for series"
        onChange={onSearchChange}
      />

      <RegularList title={title} entities={filteredEntities} className="mt-5" />
    </>
  );
}
