import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const FullScreenWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function FullScreenSpinner({ size }) {
  return (
    <FullScreenWrapper>
      <CircularProgress size={size} color="black" />
    </FullScreenWrapper>
  );
}
