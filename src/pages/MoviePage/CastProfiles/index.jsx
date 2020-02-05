import React from "react";
import { ProfileCard } from "./ProfileCard";
import Container from "@material-ui/core/Container";

import { CastList, Title } from "./Styles";

export function CastProfiles({ cast }) {
  return (
    <Container>
      <Title>Main cast</Title>
      <CastList>
        {cast.map(actor => (
          <ProfileCard key={actor.id} actor={actor}></ProfileCard>
        ))}
      </CastList>
    </Container>
  );
}
