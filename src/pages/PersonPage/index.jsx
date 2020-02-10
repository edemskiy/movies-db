import React, { useState, useEffect } from "react";
import { useRequest } from "../../hooks/request";
import { getPersonDetailsURL } from "../../utils/api";
import { FullScreenSpinner } from "../../components/FullScreenSpinner";
import { Header } from "./Header";

export function PersonPage({ match }) {
  const { request, isLoading } = useRequest();
  const [person, setPerson] = useState({});

  const person_id = match.params.person_id;

  useEffect(() => {
    request(getPersonDetailsURL(person_id)).then(data => setPerson(data));
  }, [request, person_id]);

  return isLoading ? (
    <FullScreenSpinner size={60} />
  ) : (
    <>
      <Header person={person} />
      {/* <MovieInfoBlock>
        <CastProfiles cast={cast} />
        <Sidebar movie={movie} />
      </MovieInfoBlock> */}
    </>
  );
}
