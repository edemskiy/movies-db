import styled from "styled-components";
import { device } from "../../../utils/devices";

export const Title = styled.h2`
  margin-top: 40px;
  @media ${device.sm} {
    margin-top: 10px;
  }
`;

export const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 20px 0;
  @media ${device.sm} {
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
`;
