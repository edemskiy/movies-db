import React from "react";
import { getImageURL } from "../../../utils/api";
import Container from "@material-ui/core/Container";
import {
  Background,
  HeaderWrapper,
  ImageContainer,
  ProfileImage,
  PersonInfo,
  Name,
  BiographyTitle,
  Biography,
  Paragraph,
} from "./Styles";

export function Header({ person }) {
  return (
    <Background>
      <Container>
        <HeaderWrapper>
          <ImageContainer>
            <ProfileImage src={getImageURL(person.profile_path, 300)} />
          </ImageContainer>
          <PersonInfo>
            <Name>{person.name}</Name>
            <BiographyTitle>Biography</BiographyTitle>
            <Biography>
              {(person.biography || "").split("\n").map((paragraph, i) => (
                <Paragraph key={i}>{paragraph}</Paragraph>
              ))}
            </Biography>
          </PersonInfo>
        </HeaderWrapper>
      </Container>
    </Background>
  );
}
