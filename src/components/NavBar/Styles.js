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
  align-items: center;
  height: ${navbarHeight}px;
  padding: 8px;
`;

export const HomeLink = styled(NavLink)`
  margin: 0 5px;
  padding: 0 10px;
  font-size: 24px;
  color: #fff;
`;
export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const SearchForm = styled.form`
  background-color: #f1f3f4;
  border-radius: 5px;
  width: 100%;
  max-width: 520px;
  display: flex;
  align-items: center;
`;
export const SearchLabel = styled.label`
  color: #757575;
  padding: 0 8px;
  margin: 0 5px;
  &:hover {
    cursor: pointer;
    color: rgb(0, 0, 0);
  }
`;

export const SearchInput = styled.input`
  padding: 7px 10px;
  width: 100%;
  font-size: 1rem;
  background: none;
  border: none;
`;
export const EmptyBlock = styled.div`
  height: ${navbarHeight}px;
`;
