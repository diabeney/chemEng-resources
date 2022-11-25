import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/reusableComponents";

function Join() {
  return (
    <Container height="100vh" width="100vw" padding="3em">
      <JoinUsWrapper></JoinUsWrapper>
    </Container>
  );
}

const JoinUsWrapper = styled.section`
  width: 100%;
  margin-inline: auto;
  height: 100%;
  border-radius: 4em;
  background-color: ${({ theme }) =>
    theme.mode === "light" ? `hsl(220, 15%, 96%)` : `hsl(220, 15%, 16%)`};
`;

export default Join;
