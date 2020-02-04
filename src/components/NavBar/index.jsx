import React from "react";

import {
  FixedTopBlock,
  NavBarWrapper,
  HomeLink,
  SearchBar,
  SearchForm,
  SearchLabel,
  SearchInput,
  EmptyBlock
} from "./Styles";

export function NavBar() {
  return (
    <>
      <FixedTopBlock>
        <NavBarWrapper>
          <HomeLink to="/">
            <i className="fas fa-home"></i>
          </HomeLink>
          <SearchBar>
            <SearchForm>
              <SearchLabel htmlFor="search-input">
                <i className="fas fa-search"></i>
              </SearchLabel>
              <SearchInput
                placeholder="search"
                autoComplete="off"
                id="search-input"
              />
            </SearchForm>
          </SearchBar>
        </NavBarWrapper>
      </FixedTopBlock>
      <EmptyBlock />
    </>
  );
}
