import { Link, NavLink } from "react-router-dom";
import { RiMoonLine } from "react-icons/ri";
import { RiSunLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { ToggleTheme } from "./ThemeWrapper";
import { PrimaryButton } from "../styles/reusableComponents";
import { NavStyles } from "../constants/style-constants";
import { Menu, NavWrapper } from "../styles/styledComponents";
// import { RiSearch2Line } from "react-icons/ri";
import styled from "styled-components";
import Searchbar from "./Searchbar";

const NavLinks = ["Courses Overview"];

function NavBar() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const { theme, handleTheme } = useContext(ToggleTheme);
  const [openSearch, setOpenSearch] = useState(false);

  const toggleNavBar = () => {
    setNavIsOpen((isOpen) => !isOpen);
  };

  const toggleSearchbox = () => {
    setOpenSearch((isOpen) => !isOpen);
  };

  return (
    <>
      <NavContainer>
        {openSearch && <Searchbar handleOpenSearchbar={toggleSearchbox} />}
        <Menu>
          <Link to="/" className="cheesa">
            CHEESA | E-Library
          </Link>
          <span onClick={toggleNavBar}>
            <p style={{ color: "inherit" }}>Menu</p>
          </span>
        </Menu>
        <NavWrapper
          style={{
            transform: navIsOpen ? "translateX(0)" : "translateX(-100%)",
            zIndex: "101",
          }}
        >
          <RiCloseLine
            style={NavStyles.CloseStyles}
            color="inherit"
            size={32}
            onClick={toggleNavBar}
          />
          <div className="logo">
            <Link
              onClick={() => {
                setNavIsOpen(false);
              }}
              to="/"
            >
              CHEESA | E-Library
            </Link>
          </div>
          <ul>
            {NavLinks.map((link) => {
              return (
                <li key={link}>
                  <NavLink
                    onClick={() => {
                      setNavIsOpen(false);
                    }}
                    to={link.toLowerCase().replaceAll(" ", "-")}
                  >
                    {link}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <SearchButton onClick={toggleSearchbox} className="search">
            {/* <RiSearch2Line size={20} /> */}
            {/* <span>
              <p>Search</p>
            </span> */}
          </SearchButton>
          <div className="buttons flex ">
            <div onClick={handleTheme} className="flex flex-cen">
              {theme.mode === "light" ? (
                <RiMoonLine color={theme.background} />
              ) : (
                <RiSunLine color={theme.foreground} />
              )}
            </div>
            <PrimaryButton href="https://cheesa.vercel.app" variant="primary">
              Cheesa Website
            </PrimaryButton>
          </div>
        </NavWrapper>
      </NavContainer>
    </>
  );
}

const SearchButton = styled.div`
  display: flex;
  gap: 0.4em;
  justify-content: center;
  align-items: center;
`;

const NavContainer = styled.div`
  /* height: 100vh; */
  width: 100vw;
  max-width: 1400px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  .cheesa {
    position: absolute;
    color: ${({ theme }) => theme.foreground};
    left: 10px;
    top: 15px;
  }
  @media (min-width: 50em) {
    height: auto;
    .cheesa {
      display: none;
    }
  }
`;
export default NavBar;
