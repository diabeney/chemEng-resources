import { NavLink } from "react-router-dom";
import { RiMoonLine } from "react-icons/ri";
import { RiSunLine } from "react-icons/ri";
import { RiMenu4Fill } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { ToggleTheme } from "./ThemeWrapper";
import { PrimaryButton } from "../styles/reusableComponents";
import { NavStyles } from "../constants/style-constants";
import { Menu, NavWrapper } from "../styles/styledComponents";

function NavBar() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const { theme, handleTheme } = useContext(ToggleTheme);

  const toggleNavBar = () => {
    setNavIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
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
          <span>engResources</span>
        </div>
        <ul>
          <li>
            <NavLink to="resources">Resources</NavLink>
          </li>
          <li>
            <NavLink to="articles">Articles</NavLink>
          </li>
          <li>
            <NavLink to="contribute">Contribute</NavLink>
          </li>
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
    </>
  );
}

export default NavBar;
