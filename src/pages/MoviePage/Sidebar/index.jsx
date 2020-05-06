import React from "react";
import { SidebarWrapper, MovieInfo, MovieProperty, PropertyTitle, PropertyValue } from "./Styles";
import { getUnifiedMedia } from "../../../utils/search";

function getRuntimeString(runtimeInMinutes) {
  const hours = (runtimeInMinutes - (runtimeInMinutes % 60)) / 60;
  const minutes = runtimeInMinutes % 60;
  return (hours ? `${hours}h ` : "") + (minutes ? `${minutes}m` : "");
}

function getLocaleDate(dateString) {
  return new Date(dateString).toLocaleString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function getSidebarMovieProps(movie) {
  const countryArr = movie["production_countries"] || movie["origin_country"] || [];
  return Object.keys(movie).length
    ? {
        Budget: movie["budget"] ? `$${movie["budget"].toLocaleString()}` : null,
        Genres: (movie["genres"] || []).map((genre) => genre.name).join(", "),
        Country: countryArr.map((country) => country["iso_3166_1"] || country).join(", "),
        "Release date": getLocaleDate(movie["release_date"]),
        "Box office": movie["revenue"] ? `$${movie["revenue"].toLocaleString()}` : null,
        Runtime: getRuntimeString(movie["runtime"] || movie["episode_run_time"]),
      }
    : null;
}
export function Sidebar({ movie }) {
  const movieProps = getSidebarMovieProps(getUnifiedMedia(movie));
  return (
    <SidebarWrapper>
      <MovieInfo>
        {movieProps &&
          Object.keys(movieProps).map(
            (propName) =>
              movieProps[propName] && (
                <MovieProperty key={propName}>
                  <PropertyTitle>{propName}</PropertyTitle>
                  <PropertyValue>{movieProps[propName]}</PropertyValue>
                </MovieProperty>
              )
          )}
      </MovieInfo>
    </SidebarWrapper>
  );
}
