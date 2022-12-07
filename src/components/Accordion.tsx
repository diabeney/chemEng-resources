import styled from "styled-components";
import RenderList from "./RenderList";
import { RiArrowRightSLine } from "react-icons/ri";
import { COURSES, CoursesProps } from "../constants/style-constants";
import { motion } from "framer-motion";

type AccordionProps = {
  item: string;
  isActive: boolean;
  handleOpenAccordion: (item: string) => void;
};

function Accordion({ item, isActive, handleOpenAccordion }: AccordionProps) {
  const accordionArrowStyles = {
    transition: "transform 100ms cubic-bezier(0.01, 1.09, 0.78, 1)",
    transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
  };
  return (
    <>
      <AccordionButton onClick={() => handleOpenAccordion(item)} layout>
        <h3>{item} Year</h3>
        <span style={accordionArrowStyles}>
          <RiArrowRightSLine />
        </span>
      </AccordionButton>
      {isActive && <RenderList data={COURSES[item as keyof CoursesProps]} />}
    </>
  );
}

const AccordionButton = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-inline: 1em;
  margin-block: 1.5em;
  cursor: pointer;
`;

export default Accordion;