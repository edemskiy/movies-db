import React from "react";
import {
  PersonDetailsWrapper,
  DetailsTitle,
  PersonDetail,
  DetailTitle,
  DetailValue
} from "./Styles";
import { Container } from "@material-ui/core";

function getLocaleDate(dateString) {
  return dateString
    ? new Date(dateString).toLocaleString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      })
    : null;
}

function getPersonDetails(person) {
  return person
    ? {
        "Known for": person["known_for_department"],
        Birthdate: getLocaleDate(person["birthday"]),
        "Day of death": getLocaleDate(person["deathday"]),
        "Place of birth": person["place_of_birth"],
        "Official site": person["homepage"]
      }
    : null;
}

export function PersonDetails({ person }) {
  const details = getPersonDetails(person);
  return (
    <PersonDetailsWrapper>
      <Container maxWidth="sm">
        <DetailsTitle>Personal Info</DetailsTitle>
        {Object.keys(details).map(
          propName =>
            details[propName] && (
              <PersonDetail key={propName}>
                <DetailTitle>{propName}</DetailTitle>
                <DetailValue>{details[propName]}</DetailValue>
              </PersonDetail>
            )
        )}
      </Container>
    </PersonDetailsWrapper>
  );
}
