import React, { useState } from "react";
import { getUnifiedMedia } from "../../utils/search";
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

export function SearchResultCard({ item }) {
  const [isImageLoading, setImageLoading] = useState(true);
  const itemInfo = getUnifiedMedia(item);
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
