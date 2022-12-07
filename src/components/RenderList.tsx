import { ReactNode, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarHandlerContext } from "../Pages/Resources/Resources";
import { motion } from "framer-motion";

type ListProps = {
  data: string[];
  renderEmpty?: ReactNode;
};

function RenderList({ data, renderEmpty = <h1>Empty list</h1> }: ListProps) {
  const { toggleSideBar } = useContext(SidebarHandlerContext);

  if (!data.length) renderEmpty;
  return (
    <AccordionItem style={{ paddingInline: "1em" }}>
      {data.map((item) => (
        <ListItem key={item}>
          <Link
            to={item.replace(/\s/gi, "-").toLowerCase()}
            onClick={() => toggleSideBar()}
          >
            {item}
          </Link>
        </ListItem>
      ))}
    </AccordionItem>
  );
}

const AccordionItem = styled(motion.ul)`
  padding-inline: 1em;
`;

const ListItem = styled.li`
  position: relative;
  z-index: 1000;
  width: 100%;
  a {
    display: block;
    width: 100%;
    padding: 0.5em;
    margin-block: 0.3em;
    border-radius: 0.4em;
    &:hover {
      background-color: ${({ theme }) => theme.secondary};
    }
  }
`;

export default RenderList;
