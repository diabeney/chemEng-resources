import styled from "styled-components";
import RenderList from "./RenderList";
import { RiArrowRightSLine } from "react-icons/ri";
import { COURSES, CoursesProps } from "../constants/style-constants";

type AccordionProps = {
  item: string;
  isActive: boolean;
  handleOpenAccordion: (item: string) => void;
};

function Accordion({ item, isActive, handleOpenAccordion }: AccordionProps) {
  const accordionArrowStyles = {
    transition: "transform 100ms ease-in",
    transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
  };
  return (
    <>
      <AccordionButton onClick={() => handleOpenAccordion(item)}>
        <h3>{item} Year</h3>
        <span style={accordionArrowStyles}>
          <RiArrowRightSLine />
        </span>
      </AccordionButton>
      {isActive && <RenderList data={COURSES[item as keyof CoursesProps]} />}
    </>
  );
}

const AccordionButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-inline: 1em;
  margin-block: 1.5em;
`;

export default Accordion;
