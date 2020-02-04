import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100%;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: url(${props => props.backgroundImage}) no-repeat;
    background-size: cover;
    filter: opacity(100) grayscale(100%) contrast(130%);
  }
`;

export const CustomBackground = styled.div`
  background-image: radial-gradient(
    circle at 20% 50%,
    rgb(0, 0, 0) 0%,
    rgba(97, 97, 97, 0.85) 100%
  );
`;

export const PosterWrapper = styled.div`
  width: 100%;
`;
export const Poster = styled.img`
  width: 100%;
  min-width: 140px;
  max-width: 300px;
`;

export const MovieDetails = styled.div`
  margin-left: 40px;
  color: white;
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const ReleaseYear = styled.p`
  margin: 5px;
  color: #afafaf;
  font-weight: 300;
`;

export const OverviewTitle = styled.h3`
  margin-top: 40px;
`;

export const Overview = styled.p`
  margin-top: 10px;
`;
