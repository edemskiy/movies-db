import styled from "styled-components";

import { device } from "../../../utils/devices";

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
    background: url(${(props) => props.backgroundImage}) no-repeat;
    background-position-y: initial;
    background-size: cover;
    filter: grayscale(20%) contrast(130%);

    @media ${device.xs} {
      background-size: contain;
      background-position-y: top;
      filter: none;
    }
  }
`;

export const CustomBackground = styled.div`
  background-image: radial-gradient(circle at 20% 50%, rgb(0, 0, 0) 0%, rgba(97, 97, 97, 0.85) 100%);
  @media ${device.xs} {
    background-image: none;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  padding: 60px 0;
  @media ${device.xs} {
    flex-direction: column;
    padding: 30px 0;
  }
`;

export const PosterWrapper = styled.div`
  text-align: center;

  @media ${device.xs} {
    text-align: left;
    margin-top: 65px;
  }
`;
export const Poster = styled.img`
  width: 300px;
  @media ${device.md} {
    width: 250px;
  }
  @media ${device.sm} {
    width: 200px;
  }
  @media ${device.xs} {
    width: 30vw;
  }
`;

export const MovieDetails = styled.div`
  margin-left: 40px;
  margin-top: auto;
  margin-bottom: auto;
  color: white;
  @media ${device.xs} {
    margin: 0;
    color: black;
  }
`;

export const Title = styled.h2`
  margin-top: 10px;
  font-size: 2.5rem;
  @media ${device.xs} {
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
  @media ${device.xs} {
    text-align: right;
    color: #5d5d5d;
  }
`;

export const OverviewTitle = styled.h3`
  margin-top: 40px;
  @media ${device.xs} {
    margin-top: 0;
  }
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
