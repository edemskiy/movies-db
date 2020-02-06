import styled from "styled-components";
import { device } from "../../../utils/devices";

export const SidebarWrapper = styled.div`
  width: 30vw;
  height: auto;
  padding: 10px;
  background-color: grey;
  @media ${device.sm} {
    width: 100%;
  }
`;
