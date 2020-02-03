import React from "react";
import { ResultContainer, Image, Info, Title, About } from "./Styles";

function getItemProps(item) {
  switch (item.media_type) {
    case "movie":
      return {
        imagePath: item["poster_path"],
        name: item["original_title"],
        type: item.media_type,
        info: (item["release_date"] || "").substr(0, 4)
      };
    case "person":
      return {
        imagePath: item["profile_path"],
        name: item["name"],
        type: item.media_type,
        info: item["known_for"].map(movie => movie.original_title).join(", ")
      };
    case "tv":
      return {
        imagePath: item["poster_path"],
        name: item["original_name"],
        type: item.media_type,
        info: (item["first_air_date"] || "").substr(0, 4)
      };
  }
}

export function SearchResult({ item }) {
  const itemInfo = getItemProps(item);
  return (
    <ResultContainer>
      <Image
        onLoad={e => console.log(e.target)}
        src={`http://image.tmdb.org/t/p/w200${itemInfo.imagePath}`}
      />
      <Info>
        <Title>{itemInfo.name}</Title>
        <About>{itemInfo.type}</About>
        <About>{itemInfo.info}</About>
      </Info>
    </ResultContainer>
  );
}
