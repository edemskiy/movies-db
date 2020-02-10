import React from "react";
import { getImageURL } from "../../../../utils/api";
import { FoundMedia, Image, Info, Title, About } from "./Styles";

export function SearchResult({ item }) {
  return (
    <FoundMedia>
      <Image src={getImageURL(item.imagePath, 200)} />
      <Info>
        <Title>{item.name}</Title>
        <About>{item.media_type}</About>
        <About>{item.release_year}</About>
      </Info>
    </FoundMedia>
  );
}
