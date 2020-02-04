import React, { useState, useEffect } from "react";
import { useRequest } from "../../hooks/request";
import {
  getMovieDetailsURL,
  getImageURL,
  getMovieCrewURL
} from "../../constants/requests";
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
  Overview,
  MajorCrew,
  CrewMember,
  JobTitle,
  Name
} from "./Styles";
import { Box } from "@material-ui/core";

export function MoviePage({ match }) {
  const { request } = useRequest();
  const [movie, setMovie] = useState({});
  const [crew, setCrew] = useState([]);
  //const [actors, setActors] = useState([]);
  useEffect(() => {
    request(getMovieDetailsURL(match.params.movie_id)).then(data =>
      setMovie(data)
    );
    request(getMovieCrewURL(match.params.movie_id)).then(data => {
      setCrew([
        data.crew.filter(p => p.job === "Director")[0],
        data.crew.filter(p => p.job.match(/writer|screenplay|consultant/i))[0],
        data.crew.filter(p => p.job.match(/composer|music/i))[0]
      ]);
    });
  }, [request, match]);

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
              <MajorCrew>
                {crew.map(member => (
                  <CrewMember key={member.credit_id}>
                    <JobTitle>{member.job}:&nbsp;</JobTitle>
                    <Name>{member.name}</Name>
                  </CrewMember>
                ))}
              </MajorCrew>
            </MovieDetails>
          </Box>
        </Container>
      </CustomBackground>
    </Backdrop>
  );
}
