import React from "react";
import { SearchBar } from "./SearchBar";
import { FixedTopBlock, NavBarWrapper, HomeLink, EmptyBlock } from "./Styles";

export function NavBar() {
  return (
    <>
      <FixedTopBlock>
        <NavBarWrapper>
          <HomeLink to="/">
            <i className="fas fa-home"></i>
          </HomeLink>
          <SearchBar />
        </NavBarWrapper>
      </FixedTopBlock>
      <EmptyBlock />
    </>
  );
}
