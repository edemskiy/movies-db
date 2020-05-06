import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  position: ${(props) => (props.top === undefined ? "static" : "relative")};
  top: ${(props) => props.top || 0}%;
  left: 50%;
  max-width: 900px;
  transform: translate(-50%, -${(props) => props.top || 0}%);
  transition: all 0.2s;
`;
