import { useState } from "react";
import styled from "styled-components";
import Accordion from "../../components/Accordion";
import { YEARS } from "../../constants/style-constants";

type SidebarProps = {
  isActive: boolean;
};

export default function SideBar({ isActive }: SidebarProps) {
  const [accordionIndex, setAccordionIndex] = useState<number | null>(null);
  const sideBarStyles = {
    display: isActive ? "block" : "none",
  };
  const toggleAccordion = (item: string) => {
    const index = YEARS.indexOf(item);
    if (index === accordionIndex) {
      setAccordionIndex(null);
    } else {
      setAccordionIndex(YEARS.indexOf(item));
    }
  };

  return (
    <SideBarWrapper style={sideBarStyles}>
      {YEARS.map((year) => (
        <Accordion
          key={year}
          handleOpenAccordion={toggleAccordion}
          item={year}
          isActive={accordionIndex === YEARS.indexOf(year)}
        />
      ))}
    </SideBarWrapper>
  );
}

const SideBarWrapper = styled.section`
  width: 100%;
  height: calc(100vh - 5em);
  padding: 1em;
  overflow-y: scroll;
  position: sticky;
  padding-top: 3em;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  background-color: inherit;

  @media (min-width: 50em) {
    top: 5em;
    padding-top: 0;
    display: block !important;
  }
`;
