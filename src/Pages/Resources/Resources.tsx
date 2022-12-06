import styled from "styled-components";
import { Wrapper } from "../../styles/styledComponents";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import { RiCloseLine, RiMenuUnfoldLine } from "react-icons/ri";

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
  display: block;
  max-width: 1400px;
  margin-inline: auto;
  color: ${({ theme }) => theme.foreground};
  background-color: ${({ theme }) => theme.background};
  height: 300vh;
  @media (min-width: 50em) {
    display: grid;
    grid-template-columns: 30% 1fr;
    top: 5em;
  }
`;

const MenuWrapper = styled.button`
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
  width: 100%;
  height: 100%;
  margin-top: 5em;
  padding: 2em;
  @media (min-width: 50em) {
  }
`;

export default Resources;
