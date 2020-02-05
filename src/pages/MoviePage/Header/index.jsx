import React from "react";

import { getImageURL } from "../../../utils/api";
import Container from "@material-ui/core/Container";

import {
  Poster,
  Backdrop,
  CustomBackground,
  ContentWrapper,
  PosterWrapper,
  MovieDetails,
  Title,
  ReleaseYear,
  OverviewTitle,
  Overview,
  MainCrew,
  CrewMember,
  JobTitle,
  Name
} from "./Styles";

export function Header({ movie, crew }) {
  return (
    <Backdrop backgroundImage={getImageURL(movie.backdrop_path, 1280)}>
      <CustomBackground>
        <Container>
          <ContentWrapper>
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
              <MainCrew>
                {crew.map(member => (
                  <CrewMember key={member.credit_id}>
                    <JobTitle>{member.job}:&nbsp;</JobTitle>
                    <Name>{member.name}</Name>
                  </CrewMember>
                ))}
              </MainCrew>
            </MovieDetails>
          </ContentWrapper>
        </Container>
      </CustomBackground>
    </Backdrop>
  );
}
