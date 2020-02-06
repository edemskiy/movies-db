import React, { useState } from "react";
import { useRequest } from "../../../hooks/request";
import { getSearchURL } from "../../../utils/api";

import {
  SearchFormWrapper,
  SearchForm,
  InputWrapper,
  SearchLabel,
  SearchInput,
  SearchResults
} from "./Styles";
import { SearchResult } from "./SearchResult";

export function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);
  const { request } = useRequest();
  let currRequest = null;

  function seacrhMedia(event) {
    clearTimeout(currRequest);
    const query = event.target.value;
    if (!query) {
      setSearchResults([]);
      return;
    }
    currRequest = setTimeout(() => {
      request(getSearchURL(query)).then(data => {
        if (data.results) {
          setSearchResults(data.results.slice(0, 8));
        }
      });
    }, 500);
  }

  return (
    <SearchFormWrapper>
      <SearchForm searched={searchResults.length}>
        <InputWrapper>
          <SearchLabel htmlFor="search-input">
            <i className="fas fa-search"></i>
          </SearchLabel>
          <SearchInput
            placeholder="search"
            autoComplete="off"
            id="search-input"
            onChange={seacrhMedia}
          />
        </InputWrapper>
        {searchResults && (
          <SearchResults>
            {searchResults.map(item => (
              <SearchResult item={item} />
            ))}
          </SearchResults>
        )}
      </SearchForm>
    </SearchFormWrapper>
  );
}
