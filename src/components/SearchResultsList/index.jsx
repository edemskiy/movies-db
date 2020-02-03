import React from "react";
import { SearchResultsWrapper } from "./Styles";
import { SearchResultCard } from "../SearchResultCard";

export function SearchResultsList({ searchResults }) {
  return (
    <SearchResultsWrapper>
      {searchResults.map(item => (
        <SearchResultCard key={item.id} item={item} />
      ))}
    </SearchResultsWrapper>
  );
}
