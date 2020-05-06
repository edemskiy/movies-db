import React from "react";
import Box from "@material-ui/core/Box";
import { SearchResultCard } from "../SearchResultCard";

export function SearchResultsList({ searchResults }) {
  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" mt={"10px"}>
      {searchResults.map((item) => (
        <SearchResultCard key={item.id} item={item} />
      ))}
    </Box>
  );
}
