import React from "react";
import Container from "@material-ui/core/Container";

import { DepartmentTitle, Credits, Credit, CreditLink, CreditRole, CreditYear } from "./Styles";

function getHashCredits(credits) {
  if (Object.keys(credits).length === 0) return {};
  let obj = {};
  credits.crew.forEach((credit) => {
    obj[credit["department"]] = obj[credit["department"]] || [];
    obj[credit["department"]].push(credit);
  });
  return { ...obj, Acting: [...credits.cast] };
}

function getCreditJSX(credit) {
  const role = (credit["job"] && `... ${credit["job"]}`) || (credit["character"] && `as ${credit["character"]}`) || "";
  const year = (credit["release_date"] || credit["first_air_date"] || "").substr(0, 4);
  const title = credit["original_title"] || credit["original_name"];

  return (
    <Credit key={credit.id + role}>
      <CreditLink to={`/media/${credit.media_type}/${credit.id}`}>{title}</CreditLink>
      <CreditRole>&nbsp;{role}</CreditRole>
      <CreditYear>&nbsp;({year || "unscheduled"})</CreditYear>
    </Credit>
  );
}

function sortByYear(a, b) {
  const date1 = a["release_date"] || a["first_air_date"] || "";
  const date2 = b["release_date"] || b["first_air_date"] || "";

  if (date1 === "") return -1;
  if (date2 === "") return 1;

  return date1 < date2 ? 1 : -1;
}

export function PersonCredits({ person, credits }) {
  const combinedCredits = getHashCredits(credits);

  const mainCredits = combinedCredits[person["known_for_department"]];
  const restCredits = {
    ...combinedCredits,
    [person["known_for_department"]]: null,
  };

  return (
    <Container maxWidth="sm">
      <DepartmentTitle>{person["known_for_department"]}</DepartmentTitle>
      <Credits>{mainCredits && [...mainCredits.sort(sortByYear)].map(getCreditJSX)}</Credits>
      {Object.keys(restCredits).map(
        (depatrment) =>
          restCredits[depatrment] && (
            <React.Fragment key={depatrment}>
              <DepartmentTitle>{depatrment}</DepartmentTitle>
              <Credits>{[...restCredits[depatrment].sort(sortByYear)].map(getCreditJSX)}</Credits>
            </React.Fragment>
          )
      )}
    </Container>
  );
}
