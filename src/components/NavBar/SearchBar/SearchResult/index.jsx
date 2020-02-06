import React from "react";
import { getImageURL } from "../../../../utils/api";
import { FoundMedia, Image, Info, Title, About } from "./Styles";

export function SearchResult({ item }) {
  return (
    <FoundMedia>
      <Image
        onLoad={e => console.log(e.target)}
        src={getImageURL(item.imagePath, 200)}
      />
      <Info>
        <Title>{item.name}</Title>
        <About>{item.type}</About>
        <About>{item.info}</About>
      </Info>
    </FoundMedia>
  );
}
