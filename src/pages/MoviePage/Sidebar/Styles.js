import styled from "styled-components";
import { device } from "../../../utils/devices";

export const SidebarWrapper = styled.div`
  width: 30vw;
  height: auto;
  padding: 10px;
  background-color: #efefef;
  @media ${device.sm} {
    width: 100%;
  }
`;

export const MovieInfo = styled.div`
  margin-left: 15px;
`;

export const MovieProperty = styled.div`
  margin-top: 10px;
`;
export const PropertyTitle = styled.p`
  font-weight: 700;
`;
export const PropertyValue = styled.p``;
