import React from "react";
import { getSearchedItemProps } from "../../../../utils/search";
import { getImageURL } from "../../../../utils/api";
import { FoundMedia, Image, Info, Title, About } from "./Styles";
import { Link } from "react-router-dom";
export function SearchResult({ item }) {
  const itemInfo = getSearchedItemProps(item);
  return (
    <Link to={itemInfo.link + item.id}>
      <FoundMedia>
        <Image
          onLoad={e => console.log(e.target)}
          src={getImageURL(itemInfo.imagePath, 200)}
        />
        <Info>
          <Title>{itemInfo.name}</Title>
          <About>{itemInfo.type}</About>
          <About>{itemInfo.info}</About>
        </Info>
      </FoundMedia>
    </Link>
  );
}
