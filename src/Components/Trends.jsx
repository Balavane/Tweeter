import React from "react";
import SearchBar from "./trends/SearchBar";
import TrendList from "./trends/TrendList";
import Links from "./trends/Links";
import FolowList from "./trends/FolowList";

export default function Trends() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <SearchBar />
        <TrendList />
        <FolowList />
        <Links />
      </div>
    </div>
  );
}
