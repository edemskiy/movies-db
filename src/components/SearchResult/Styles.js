import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const scaleUp = keyframes`
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
`;

export const ResultContainer = styled.div`
  display: flex;
  border: 1px solid grey;
  animation: ${scaleUp} 0.25s;
`;

export const Image = styled.img`
  height: 100px;
  width: 67px;
`;

export const Info = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const About = styled.div``;
