import React, { useState } from "react";
import {
  ResultContainer,
  ImageContainer,
  Image,
  Info,
  Title,
  About
} from "./Styles";
import { Link } from "react-router-dom";
import { getImageURL } from "../../utils/api";

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
    default:
      return {};
  }
}

export function SearchResultCard({ item }) {
  const [isImageLoading, setImageLoading] = useState(true);
  const itemInfo = getItemProps(item);
  return (
    <Link to={itemInfo.link + item.id}>
      <ResultContainer>
        <ImageContainer>
          <Image
            loading={isImageLoading ? 1 : 0}
            src={getImageURL(itemInfo.imagePath, 200)}
            onLoad={() => setImageLoading(false)}
          />
        </ImageContainer>
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
