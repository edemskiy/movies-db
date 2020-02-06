import styled from "styled-components";
import { NavLink } from "react-router-dom";

const navbarHeight = 50;

export const FixedTopBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${navbarHeight}px;
  z-index: 9999;
  border-bottom: 1px solid #757575;
  background-color: #313131;
`;

export const NavBarWrapper = styled.div`
  display: flex;
  height: ${navbarHeight}px;
  padding: 8px;
`;

export const HomeLink = styled(NavLink)`
  margin: auto 5px;
  padding: 0 10px;
  font-size: 24px;
  color: #fff;
`;

export const EmptyBlock = styled.div`
  height: ${navbarHeight}px;
`;
