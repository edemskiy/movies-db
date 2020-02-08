import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CardContainer = styled.div`
  margin: 10px;
  max-width: 138px;
  box-shadow: 0px 2px 5px 0px #00000057;
`;

export const PictureLink = styled(NavLink)`
  display: block;
  width: 138px;
  height: 180px;
  overflow: hidden;
  transition: opacity 0.2s;
  opacity: ${props => (props.loading ? 0 : 1)};
`;
export const ProfilePicture = styled.img`
  width: 100%;
  height: auto;
`;

export const Info = styled.div`
  margin: 5px;
`;
export const Name = styled.p`
  font-weight: 700;
  &:hover {
    color: #0f37cc;
  }
`;
export const Charachter = styled.p`
  margin-top: 3px;
  font-size: 0.9rem;
`;
