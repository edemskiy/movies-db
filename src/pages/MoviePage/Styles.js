import styled from "styled-components";
import { device } from "../../utils/devices";
export const MovieInfoBlock = styled.div`
  display: flex;
  @media ${device.sm} {
    flex-direction: column;
  }
`;
