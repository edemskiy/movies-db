import styled from "styled-components";
import { device } from "../../../utils/devices";

export const Background = styled.div`
  width: 100%;
  background-color: #eee;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 60px 20px;
  width: 100%;
  @media ${device.xs} {
    flex-direction: column;
    padding: 30px 0;
  }
`;

export const ImageContainer = styled.div`
  text-align: center;
`;

export const ProfileImage = styled.img`
  width: 300px;
  @media ${device.md} {
    width: 250px;
  }
  @media ${device.sm} {
    width: 200px;
  }
  @media ${device.xs} {
    width: 40vw;
  }
`;

export const PersonInfo = styled.div`
  margin-left: 40px;
  @media ${device.xs} {
    margin-left: 0;
  }
`;

export const Name = styled.h1`
  margin-top: 10px;
  @media ${device.xs} {
    text-align: center;
  }
`;

export const BiographyTitle = styled.h2`
  margin-top: 30px;
`;

export const Biography = styled.div`
  margin-top: 10px;
`;

export const Paragraph = styled.p`
  margin-bottom: 10px;
`;
