import { ReactNode } from "react";
import styled from "styled-components";

type ListProps = {
  data: string[];
  renderEmpty?: ReactNode;
};

function RenderList({ data, renderEmpty = <h1>Empty list</h1> }: ListProps) {
  if (!data.length) renderEmpty;
  return (
    <AccordionItem style={{ paddingInline: "1em" }}>
      {data.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </AccordionItem>
  );
}

const AccordionItem = styled.ul`
  padding-inline: 1em;
`;

const ListItem = styled.li`
  padding: 0.5em;
  margin-block: 0.3em;
  border-radius: 0.4em;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export default RenderList;
