import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getImageURL } from "../../../../utils/api"; // :(

import {
  CardContainer,
  PictureLink,
  ProfilePicture,
  Info,
  Name,
  Charachter
} from "./Styles";

export function ProfileCard({ actor }) {
  const [isImageLoading, setImageLoading] = useState(true);
  return (
    <CardContainer>
      <PictureLink
        to={`/persons/${actor.id}`}
        loading={isImageLoading ? 1 : 0}
        onLoad={() => setImageLoading(false)}
      >
        <ProfilePicture src={getImageURL(actor.profile_path, 200)} />
      </PictureLink>
      <Info>
        <Link to={`/persons/${actor.id}`}>
          <Name>{actor.name}</Name>
        </Link>
        <Charachter>{actor.character}</Charachter>
      </Info>
    </CardContainer>
  );
}
