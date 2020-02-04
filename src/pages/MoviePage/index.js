import React, { useState, useEffect } from "react";
import { useRequest } from "../../hooks/request";
import { getMovieDetailsURL, getImageURL } from "../../constants/requests";
import Container from "@material-ui/core/Container";
import {
  Poster,
  Backdrop,
  CustomBackground,
  PosterWrapper,
  MovieDetails,
  Title,
  ReleaseYear,
  OverviewTitle,
  Overview
} from "./Styles";
import { Box } from "@material-ui/core";

export function MoviePage({ match }) {
  const { request } = useRequest();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    request(getMovieDetailsURL(match.params.movie_id)).then(data =>
      setMovie(data)
    );
  }, [request, match]);

  useEffect(() => console.log(movie), [movie]);
  return (
    <Backdrop backgroundImage={getImageURL(movie.backdrop_path, 1280)}>
      <CustomBackground>
        <Container>
          <Box py={"40px"} display="flex">
            <PosterWrapper>
              <Poster src={getImageURL(movie.poster_path, 300)} />
            </PosterWrapper>
            <MovieDetails>
              <Title>{movie.original_title}</Title>
              <ReleaseYear>
                {(movie.release_date || "").substr(0, 4)}
              </ReleaseYear>
              <OverviewTitle>Overview</OverviewTitle>
              <Overview>{movie.overview}</Overview>
            </MovieDetails>
          </Box>
        </Container>
      </CustomBackground>
    </Backdrop>
  );
}
