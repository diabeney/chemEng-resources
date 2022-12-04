import { useState } from "react";
import styled from "styled-components";
import Accordion from "../../components/Accordion";
import { YEARS } from "../../constants/style-constants";

export default function SideBar() {
  const [accodionIndex, setAccordionIndex] = useState<number | null>(null);

  const toggleAccordion = (item: string) => {
    const index = YEARS.indexOf(item);
    if (index === accodionIndex) {
      setAccordionIndex(null);
    } else {
      setAccordionIndex(YEARS.indexOf(item));
    }
  };

  return (
    <SideBarWrapper>
      {YEARS.map((year) => (
        <Accordion
          key={year}
          handleOpenAccordion={toggleAccordion}
          item={year}
          isActive={accodionIndex === YEARS.indexOf(year)}
        />
      ))}
    </SideBarWrapper>
  );
}

const SideBarWrapper = styled.section`
  width: 30%;
  height: 100vh;
  padding: 1em;
  overflow-y: scroll;
  position: fixed;
  top: 74px;
  border: 1px solid ${({ theme }) => theme.secondary};
  background-color: inherit;

  h2 {
    /* text-align: center; */
  }
`;
