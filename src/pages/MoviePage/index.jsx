import React, { useState, useEffect } from "react";
import { useRequest } from "../../hooks/request";
import { getMovieDetailsURL, getMovieCrewURL } from "../../utils/api";
import { Header } from "./Header";

export function MoviePage({ match }) {
  const { request } = useRequest();
  const [movie, setMovie] = useState({});
  const [crew, setCrew] = useState([]);
  const [actors, setActors] = useState([]);

  const movie_id = match.params.movie_id;

  function getMainCrew(crew) {
    return [
      crew.filter(p => p.job === "Director")[0],
      crew.filter(p => p.job.match(/writer|screenplay|consultant/i))[0],
      crew.filter(p => p.job.match(/composer|^music$/i))[0]
    ].filter(Boolean);
  }
  useEffect(() => {
    request(getMovieDetailsURL(movie_id)).then(movie => setMovie(movie));
    request(getMovieCrewURL(movie_id)).then(data => {
      setActors(data.cast.slice(0, 10));
      setCrew(getMainCrew(data.crew));
    });
  }, [request]);

  return (
    <>
      <Header movie={movie} crew={crew} />
    </>
  );
}
