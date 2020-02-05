import styled from "styled-components";

export const Title = styled.h2`
  margin-top: 40px;
`;

export const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 20px 0;

  @media screen and (max-width: 576px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
`;
