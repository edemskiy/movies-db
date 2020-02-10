import React, { useState, useRef } from "react";
import { useRequest } from "../../../hooks/request";
import { getSearchURL } from "../../../utils/api";
import { SearchResult } from "./SearchResult";
import { getUnifiedMedia } from "../../../utils/search";
import { Link } from "react-router-dom";

import {
  SearchFormWrapper,
  SearchForm,
  InputWrapper,
  SearchLabel,
  SearchInput,
  SearchResults
} from "./Styles";

export function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);
  const { request } = useRequest();
  const searchInput = useRef();
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

  function clearInput() {
    setSearchResults([]);
    searchInput.current.value = "";
  }

  function getLinkedSearchResultComponent(item) {
    let unifiedItem = getUnifiedMedia(item);
    return (
      <Link
        key={unifiedItem.id}
        to={unifiedItem.link + unifiedItem.id}
        onClick={clearInput}
      >
        <SearchResult item={unifiedItem} />
      </Link>
    );
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
            ref={searchInput}
            onChange={seacrhMedia}
          />
        </InputWrapper>
        {searchResults && (
          <SearchResults>
            {searchResults.map(item => getLinkedSearchResultComponent(item))}
          </SearchResults>
        )}
      </SearchForm>
    </SearchFormWrapper>
  );
}
