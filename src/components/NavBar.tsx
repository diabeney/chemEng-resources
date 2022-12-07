import { Link, NavLink } from "react-router-dom";
import { RiMoonLine } from "react-icons/ri";
import { RiSunLine } from "react-icons/ri";
import { RiMenu4Fill } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { ToggleTheme } from "./ThemeWrapper";
import { PrimaryButton } from "../styles/reusableComponents";
import { NavStyles } from "../constants/style-constants";
import { Menu, NavWrapper } from "../styles/styledComponents";
import styled from "styled-components";

const NavLinks = ["Resources", "Articles", "Contribute"];

function NavBar() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const { theme, handleTheme } = useContext(ToggleTheme);

  const toggleNavBar = () => {
    setNavIsOpen((isOpen) => !isOpen);
  };

  return (
    <NavContainer>
      <Menu>
        <RiMenu4Fill
          size={32}
          onClick={toggleNavBar}
          color={theme.foreground}
        />
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
            ChemEngResources
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
                  to={link.toLowerCase()}
                >
                  {link}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="search">
          <input type="search" placeholder="Search" />
        </div>
        <div className="buttons flex ">
          <div onClick={handleTheme} className="flex flex-cen">
            {theme.mode === "light" ? (
              <RiMoonLine color={theme.background} />
            ) : (
              <RiSunLine color={theme.foreground} />
            )}
          </div>
          <PrimaryButton variant="primary">Log In</PrimaryButton>
          <PrimaryButton variant="sec">Sign Up</PrimaryButton>
        </div>
      </NavWrapper>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100vw;
  max-width: 1400px;
  margin-inline: auto;
  position: relative;

  @media (min-width: 50em) {
    height: auto;
  }
`;

export default NavBar;
