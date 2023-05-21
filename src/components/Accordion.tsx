import styled from "styled-components";
import RenderSidebarList from "./RenderSidebarList";
import { RiArrowRightSLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { CoursesProps, COURSES } from "../constants/data";

type AccordionProps = {
  item: keyof CoursesProps;
  isActive: boolean;
  handleOpenAccordion: (item: keyof CoursesProps) => void;
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
      {isActive && <RenderSidebarList data={COURSES[item]} />}
    </>
  );
}

const AccordionButton = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-block: 1.5em;
  cursor: pointer;
`;

export default Accordion;
