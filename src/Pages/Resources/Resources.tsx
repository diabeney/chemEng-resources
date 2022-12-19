import styled from "styled-components";
import { Wrapper } from "../../styles/styledComponents";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import { RiCloseLine, RiMenuUnfoldLine } from "react-icons/ri";
import { motion } from "framer-motion";

type sideBarContextProps = {
  toggleSideBar: () => void;
};
export const SidebarHandlerContext = createContext({} as sideBarContextProps);

function Resources() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSideBar = () => {
    setOpenSidebar((isOpen) => !isOpen);
  };

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
          <OutletContainer>
            <Outlet />
          </OutletContainer>
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
    grid-template-columns: 30% 1fr;
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
  padding: 2em;
  width: 100%;
  margin-inline: auto;
  @media (min-width: 50em) {
    margin-top: 5em;
    width: 90%;
  }
`;

export default Resources;
