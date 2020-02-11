import React, { useState, useEffect } from "react";
import { useRequest } from "../../hooks/request";
import { getSearchURL } from "../../utils/api";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { SearchResultsList } from "../../components/SearchResultsList";
import { SearchBarWrapper } from "./Styles";

export function HomePage() {
  const { request } = useRequest();
  const [inputTop, setInputTop] = useState(50);
  const [searchResults, setSearchResults] = useState([]);

  let currRequest = null;

  function seacrhMedia(event) {
    clearTimeout(currRequest);
    const query = event.target.value;
    if (!query) {
      setInputTop(50);
      setSearchResults([]);
      return;
    }
    currRequest = setTimeout(() => {
      request(getSearchURL(query)).then(data => {
        if (data.results) {
          if (inputTop === 50) setInputTop(0);
          setSearchResults(data.results.slice(0, 10));
        }
      });
    }, 800);
  }

  return (
    <Container>
      <Box height="100vh">
        <SearchBarWrapper top={inputTop}>
          <TextField
            placeholder="Search for a movie, TV-show, actor, etc..."
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={seacrhMedia}
          />
          <SearchResultsList searchResults={searchResults} />
        </SearchBarWrapper>
      </Box>
    </Container>
  );
}
