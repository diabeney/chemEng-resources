import React from "react";
import styled from "styled-components";
import { NextContentContainer } from "./NextContent";
import { PrevAndNextContentProps } from "./NextContent";

function PrevContent({ elementName }: PrevAndNextContentProps) {
  return (
    <PrevContentContainer
      to={`/resources/${elementName.replace(/\s/gi, "-").toLowerCase()}`}
    >
      <h1>Previous Page</h1>
      <p>{elementName}</p>
    </PrevContentContainer>
  );
}

const PrevContentContainer = styled(NextContentContainer)`
  text-align: left;
`;

export default PrevContent;
