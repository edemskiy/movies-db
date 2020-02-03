import React from "react";

export function MoviePage({ match }) {
  return (
    <div>
      <h1>{`Movie id: ${match.params.movie_id}`}</h1>
    </div>
  );
}
