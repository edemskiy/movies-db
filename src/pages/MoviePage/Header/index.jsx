import React from "react";

import { getUnifiedMedia } from "../../../utils/search";
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
  const media = getUnifiedMedia(movie);
  return (
    <Backdrop backgroundImage={getImageURL(media.backdrop_path, 1280)}>
      <CustomBackground>
        <Container>
          <ContentWrapper>
            <PosterWrapper>
              <Poster src={getImageURL(media.poster_path, 300)} />
            </PosterWrapper>
            <MovieDetails>
              <Title>{media.name}</Title>
              <ReleaseYear>{media.release_date.substr(0, 4)}</ReleaseYear>
              <OverviewTitle>Overview</OverviewTitle>
              <Overview>{media.overview}</Overview>
              {!!crew.length && (
                <MainCrew>
                  {crew.map(member => (
                    <CrewMember key={member.credit_id}>
                      <JobTitle>{member.job}:&nbsp;</JobTitle>
                      <Name>{member.name}</Name>
                    </CrewMember>
                  ))}
                </MainCrew>
              )}
            </MovieDetails>
          </ContentWrapper>
        </Container>
      </CustomBackground>
    </Backdrop>
  );
}
