import React from "react";
import {
  SidebarWrapper,
  MovieInfo,
  MovieProperty,
  PropertyTitle,
  PropertyValue
} from "./Styles";

function getRuntimeString(minutes) {
  return `${(minutes - (minutes % 60)) / 60}h ${minutes % 60}m`;
}

function getLocaleDate(dateString) {
  return new Date(dateString).toLocaleString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

function getSidebarMovieProps(movie) {
  return Object.keys(movie).length
    ? {
        Budget: movie["budget"]
          ? `$${movie["budget"].toLocaleString()}`
          : "No info",
        Genres: movie["genres"].map(genre => genre.name).join(", "),
        Country: movie["production_countries"]
          .map(country => country["iso_3166_1"])
          .join(", "),
        "Release date": getLocaleDate(movie["release_date"]),
        "Box office": movie["revenue"]
          ? `$${movie["revenue"].toLocaleString()}`
          : "No info",
        Runtime: getRuntimeString(movie["runtime"])
      }
    : null;
}
export function Sidebar({ movie }) {
  const movieProps = getSidebarMovieProps(movie);
  return (
    <SidebarWrapper>
      <MovieInfo>
        {movieProps &&
          Object.keys(movieProps).map(propName => (
            <MovieProperty key={propName}>
              <PropertyTitle>{propName}</PropertyTitle>
              <PropertyValue>{movieProps[propName]}</PropertyValue>
            </MovieProperty>
          ))}
      </MovieInfo>
    </SidebarWrapper>
  );
}
