import React, { useEffect } from "react";
import { useRequest } from "../../hooks/request";
import { API_KEY } from "../../constants/requests";

export function MoviePage({ match }) {
  const { request } = useRequest();
  useEffect(() => {
    request(
      `https://api.themoviedb.org/3/movie/${match.params.movie_id}?api_key=${API_KEY}&language=en-US`
    ).then(data => console.log(data));
  }, []);
  return (
    <div>
      <h1>{`Movie id: ${match.params.movie_id}`}</h1>
    </div>
  );
}
