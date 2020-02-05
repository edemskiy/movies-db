import styled, { keyframes } from "styled-components";

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
  flex-direction: column;
  margin: 5px;
  padding: 8px;
  width: 166px;
  border-radius: 5px;
  animation: ${scaleUp} 0.3s;
  transition: all 0.25s;

  &:hover {
    box-shadow: 0px 4px 10px 3px #0000007a;
    transform: scale(1.05);
  }
  @media screen and (max-width: 480px) {
    padding: 0px;
    width: 150px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 229px;
`;

export const Image = styled.img`
  width: 100%;
  height: 225px;
  border-radius: 5px;
  opacity: ${props => (props.loading ? "0" : "1")};
  transition: opacity 0.3s;
`;

export const Info = styled.div`
  display: flex;
  margin: 5px 3px 0 3px;
  flex-direction: column;
  font-size: 0.95rem;
`;

export const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const About = styled.div``;
