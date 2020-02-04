import React from "react";

export function PersonPage({ match }) {
  return (
    <div>
      <h1>Person id: {match.params.person_id}</h1>
    </div>
  );
}
