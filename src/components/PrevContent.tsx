import styled from "styled-components";
import { NextContentContainer } from "./NextContent";
import { PrevAndNextContentProps } from "./NextContent";
import { RiArrowLeftLine } from "react-icons/ri";

function PrevContent({ elementName }: PrevAndNextContentProps) {
  return (
    <PrevContentContainer
      to={`/resources/${elementName.replace(/\s/gi, "-").toLowerCase()}`}
    >
      <div>
        <RiArrowLeftLine />
      </div>
      <section>
        <h1>Previous Page</h1>
        <p>{elementName}</p>
      </section>
    </PrevContentContainer>
  );
}

const PrevContentContainer = styled(NextContentContainer)`
  grid-template-columns: 20% auto;
  div {
  }

  h1 {
    text-align: left;
  }
`;

export default PrevContent;
