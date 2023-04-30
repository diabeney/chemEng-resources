import { ReactNode, useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarHandlerContext } from "../Pages/Resources/Resources";
import { motion } from "framer-motion";
import { YearCourseProps } from "../constants/style-constants";

type ListProps = {
  data: YearCourseProps;
  renderEmpty?: ReactNode;
};

const setDone = (data: YearCourseProps, courses: string[]) => {
  const updatedCourses = data.map((item) => {
    if (courses.includes(item.course)) {
      return {
        ...item,
        done: true,
      };
    } else {
      return item;
    }
  });
  return updatedCourses;
};

function RenderSidebarList({
  data,
  renderEmpty = <h1>Empty list</h1>,
}: ListProps) {
  const { toggleSideBar } = useContext(SidebarHandlerContext);
  const updatedCourses = setDone(data, ["Algebra", "Calculus with Analysis"]);

  if (!data.length) renderEmpty;

  return (
    <AccordionItem style={{ paddingInline: "0" }}>
      {updatedCourses.map((item) => (
        <ListItem key={item.course} done={item.done}>
          <Link
            to={item.course.replace(/\s/gi, "-").toLowerCase()}
            onClick={() => toggleSideBar()}
          >
            {item.course}
          </Link>
        </ListItem>
      ))}
    </AccordionItem>
  );
}

const AccordionItem = styled(motion.ul)`
  position: relative;
  z-index: 1;
`;

type ListItemProps = {
  done: boolean;
};

const ListItem = styled.li<ListItemProps>`
  position: relative;
  z-index: 1000;
  width: 100%;
  a {
    display: block;
    width: 100%;
    padding: 0.5em;
    margin-block: 0.3em;
    border-radius: 0.4em;
    color: ${({ done, theme }) =>
      done ? theme.foreground : theme.secondary500};
    &:hover {
      background-color: ${({ theme }) => theme.secondary};
    }
  }
`;

export default RenderSidebarList;
