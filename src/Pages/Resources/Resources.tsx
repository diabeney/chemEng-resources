import styled from "styled-components";
import { Wrapper } from "../../styles/styledComponents";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import { RiCloseLine, RiH1, RiMenuUnfoldLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { courses_query } from "../../constants/query";
import { useFetch } from "../../hooks/useFetch";
import { CourseResponse } from "../../types/types";
import { UpdatedCourse } from "../../types/types";

type sideBarContextProps = {
  toggleSideBar: () => void;
};
export const SidebarHandlerContext = createContext({} as sideBarContextProps);

function Resources() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { data, status } = useFetch<CourseResponse[]>(courses_query);
  let updatedCourses: UpdatedCourse | undefined;

  updatedCourses = data && {
    first: data[3],
    second: data[0],
    third: data[2],
    fourth: data[1],
  };
  const toggleSideBar = () => {
    setOpenSidebar((isOpen) => !isOpen);
  };

  console.log(updatedCourses);

  const menuStyles = {
    justifyContent: openSidebar ? "flex-end" : "flex-start",
  };
  return (
    <SidebarHandlerContext.Provider value={{ toggleSideBar }}>
      <Wrapper>
        <ResourcesWrapper>
          <MenuWrapper onClick={toggleSideBar} style={menuStyles}>
            {openSidebar ? (
              <RiCloseLine size={32} color="inherit" />
            ) : (
              <RiMenuUnfoldLine size={32} color="inherit" />
            )}
          </MenuWrapper>
          <SideBar isActive={openSidebar} />
          {status === "Success" ? (
            <OutletContainer>
              <Outlet context={{ courses: updatedCourses }} />
            </OutletContainer>
          ) : (
            <h1>Fetching Data</h1>
          )}
        </ResourcesWrapper>
      </Wrapper>
    </SidebarHandlerContext.Provider>
  );
}

const ResourcesWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin-inline: auto;
  color: ${({ theme }) => theme.foreground};
  background-color: ${({ theme }) => theme.background};
  height: fit-content;
  display: grid;
  @media (min-width: 50em) {
    grid-template-columns: 30% auto;
  }
`;

const MenuWrapper = styled(motion.button)`
  display: flex;
  position: sticky;
  width: 100vw;
  height: 3em;
  top: 0em;
  align-items: center;
  z-index: 10;
  margin-block: auto;
  border: none;
  background: none;
  color: ${({ theme }) => theme.foreground};
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.background};

  @media (min-width: 50em) {
    display: none;
  }
`;

const OutletContainer = styled.div`
  padding: 1em;
  width: 100%;
  margin-inline: auto;
  display: grid;
  @media (min-width: 50em) {
    margin-top: 5em;
    width: 90%;
  }
`;

export default Resources;
