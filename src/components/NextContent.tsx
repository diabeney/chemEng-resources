import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";

export type PrevAndNextContentProps = {
  elementName: string;
  year: string;
};

function NextContent({ elementName, year }: PrevAndNextContentProps) {
  return (
    <NextContentContainer
      to={`/courses-overview/${year}/${elementName
        .replace(/\s/gi, "-")
        .toLowerCase()}`}
    >
      <section>
        <h1>Next Page</h1>
        <p>{elementName}</p>
      </section>
      <div>
        <RiArrowRightLine />
      </div>
    </NextContentContainer>
  );
}

export const NextContentContainer = styled(Link)`
  width: 100%;
  padding: 0.6em;
  border-radius: 1em;
  display: grid;
  grid-template-columns: auto 20%;
  gap: 1em;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }

  h1 {
    color: ${({ theme }) => theme.accent};
    padding-block: 0.4em;
  }

  div {
    display: flex;
    align-items: center;
  }

  p {
    font-size: 1em;
  }

  @media (min-width: 50em) {
    max-width: 20rem;

    h1 {
      text-align: left;
    }
  }
`;

export default NextContent;
