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
    filter: grayscale(20%) contrast(130%);

    @media screen and (max-width: 576px) {
      background-size: contain;
      filter: none;
    }
  }
`;

export const CustomBackground = styled.div`
  background-image: radial-gradient(
    circle at 20% 50%,
    rgb(0, 0, 0) 0%,
    rgba(97, 97, 97, 0.85) 100%
  );
  @media screen and (max-width: 576px) {
    background-image: none;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  padding: 40px 0;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const PosterWrapper = styled.div`
  text-align: center;

  @media screen and (max-width: 576px) {
    text-align: left;
    margin-top: 65px;
  }
`;
export const Poster = styled.img`
  width: 300px;
  @media screen and (max-width: 992px) {
    width: 250px;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
  }
  @media screen and (max-width: 576px) {
    width: 30vw;
  }
`;

export const MovieDetails = styled.div`
  margin-left: 40px;
  color: white;
  @media screen and (max-width: 576px) {
    margin: 0;
    color: black;
  }
`;

export const Title = styled.h2`
  margin-top: 10px;
  font-size: 2.5rem;
  @media screen and (max-width: 576px) {
    margin-top: -50px;
    margin-left: 35%;
    text-align: right;
    font-size: 1.7rem;
  }
`;

export const ReleaseYear = styled.p`
  margin: 5px;
  color: #e0e0e0;
  font-weight: 300;
  @media screen and (max-width: 576px) {
    text-align: right;
    color: #5d5d5d;
  }
`;

export const OverviewTitle = styled.h3`
  margin-top: 40px;
`;

export const Overview = styled.p`
  margin-top: 10px;
`;

export const MainCrew = styled.div`
  margin-top: 40px;
`;

export const CrewMember = styled.div`
  margin: 5px 0;
`;
export const JobTitle = styled.span`
  font-weight: 500;
`;
export const Name = styled.span``;
