import React, { useState, useEffect } from "react";
import { useRequest } from "../../hooks/request";
import { getPersonDetailsURL, getPersonCredits } from "../../utils/api";
import { FullScreenSpinner } from "../../components/FullScreenSpinner";
import { Header } from "./Header";
import { PersonDetails } from "./PersonDetails";
import { PersonCredits } from "./PersonCredits";

import { PersonInfoBlock } from "./Styles";

export function PersonPage({ match }) {
  const { request, isLoading } = useRequest();
  const [person, setPerson] = useState({});
  const [credits, setCredits] = useState([]);

  const person_id = match.params.person_id;

  useEffect(() => {
    request(getPersonDetailsURL(person_id)).then((data) => setPerson(data));
    request(getPersonCredits(person_id)).then((data) => setCredits(data));
  }, [request, person_id]);

  return isLoading ? (
    <FullScreenSpinner size={60} />
  ) : (
    <>
      <Header person={person} />
      <PersonInfoBlock>
        <PersonCredits person={person} credits={credits} />
        <PersonDetails person={person} />
      </PersonInfoBlock>
    </>
  );
}
