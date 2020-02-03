import React, { useState, useEffect } from "react";
import { useRequest } from "../../hooks/request";
import { API_KEY } from "../../constants/requests";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { SearchResultsList } from "../../components/SearchResultsList";
import { SearchBarWrapper } from "./Styles";

export function HomePage() {
  const { request } = useRequest();
  const [inputTop, setInputTop] = useState(50);
  const [searchResults, setSearchResults] = useState([]);

  function seacrhMedia(event) {
    const query = event.target.value;
    if (!query) {
      setInputTop(50);
      setSearchResults([]);
      return;
    }
    request(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}`
    ).then(data => {
      if (data.results) {
        if (inputTop === 50) setInputTop(0);
        setSearchResults(data.results.slice(0, 10));
      }
    });
  }

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

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
