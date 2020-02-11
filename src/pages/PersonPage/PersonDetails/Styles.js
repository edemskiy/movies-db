import styled from "styled-components";
import { device } from "../../../utils/devices";

export const PersonDetailsWrapper = styled.div`
  width: 30vw;
  background-color: #eee;
  padding: 10px 20px;
  @media ${device.sm} {
    width: 100%;
    padding: 10px 0;
  }
`;

export const DetailsTitle = styled.h2``;

export const PersonDetail = styled.div`
  margin-top: 10px;
`;

export const DetailTitle = styled.p`
  font-weight: 700;
`;

export const DetailValue = styled.p``;
