import React, { useState } from "react";
import { ResultContainer, Image, Info, Title, About } from "./Styles";
import { Link } from "react-router-dom";

function getItemProps(item) {
  switch (item.media_type) {
    case "movie":
      return {
        imagePath: item["poster_path"],
        name: item["original_title"],
        type: item.media_type,
        info: (item["release_date"] || "").substr(0, 4),
        link: "/movies/"
      };
    case "person":
      return {
        imagePath: item["profile_path"],
        name: item["name"],
        type: item.media_type,
        link: "/persons/"
      };
    case "tv":
      return {
        imagePath: item["poster_path"],
        name: item["original_name"],
        type: item.media_type,
        info: (item["first_air_date"] || "").substr(0, 4),
        link: "/movies/"
      };
  }
}

export function SearchResultCard({ item }) {
  const [isImageLoading, setImageLoading] = useState(true);
  const itemInfo = getItemProps(item);
  return (
    <Link to={itemInfo.link + item.id}>
      <ResultContainer loading={isImageLoading ? 1 : 0}>
        <Image
          src={
            itemInfo.imagePath
              ? `http://image.tmdb.org/t/p/w200${itemInfo.imagePath}`
              : "https://www.sunnxt.com/images/placeholders/placeholder_vertical.gif"
          }
          onLoad={() => setImageLoading(false)}
        />
        <Info>
          <Title>{itemInfo.name}</Title>
          <About>
            {itemInfo.type}
            {itemInfo.info && <>&nbsp;&#8226;&nbsp;{itemInfo.info}</>}
          </About>
        </Info>
      </ResultContainer>
    </Link>
  );
}
