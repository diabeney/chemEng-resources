import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export type PrevAndNextContentProps = {
  elementName: string;
};

function NextContent({ elementName }: PrevAndNextContentProps) {
  return (
    <NextContentContainer
      to={`/resources/${elementName.replace(/\s/gi, "-").toLowerCase()}`}
    >
      <h1>Next Page</h1>
      <p>{elementName}</p>
    </NextContentContainer>
  );
}

export const NextContentContainer = styled(Link)`
  width: 100%;
  padding: 1em;
  border-radius: 1em;
  background-color: ${({ theme }) => theme.secondary};
  border: 2px solid ${({ theme }) => theme.accent};
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.accent900};
    background-color: ${({ theme }) => theme.secondary500};
  }

  h1 {
    text-align: right;
    padding-block: 0.6em;
  }

  @media (min-width: 50em) {
    width: 15rem;

    h1 {
      text-align: left;
    }
  }
`;

export default NextContent;
