import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { RiMoonLine } from "react-icons/ri";
import { RiSunLine } from "react-icons/ri";
import { RiMenu4Fill } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { ToggleTheme } from "./ThemeWrapper";
import { PrimaryButton } from "../styles/styledComponents";

function NavBar() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const { theme, handleTheme } = useContext(ToggleTheme);

  const toggleNavBar = () => {
    setNavIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <div
        className="menu"
        style={{ position: "absolute", top: "3%", right: "4%", zIndex: "100" }}
      >
        <RiMenu4Fill
          size={32}
          onClick={toggleNavBar}
          color={theme.foreground}
        />
      </div>
      <NavWrapper
        style={{
          transform: navIsOpen ? "translateX(0)" : "translateX(-100%)",
          zIndex: "101",
        }}
      >
        <RiCloseLine
          style={{
            marginLeft: "auto",
            position: "absolute",
            right: "4%",
            top: "3%",
          }}
          color="inherit"
          size={32}
          onClick={toggleNavBar}
        />
        <div className="logo">
          <span>engResources</span>
        </div>
        <ul>
          <li>
            <NavLink to="articles">Articles</NavLink>
          </li>
          <li>
            <NavLink to="resources">Resources</NavLink>
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

const NavWrapper = styled.nav`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  border-bottom: 1px solid hsl(0, 0%, 50%);
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};

  & .menu {
    display: block;
  }

  & .logo {
    width: fit-content;
    padding: 1rem 0.8rem;
  }

  & .search {
    width: 100vw;
    padding-inline: 1rem;
    font-family: "Raleway";

    & input {
      width: 100%;
      font-family: inherit;
      padding: 0.2rem 0.6rem;
      border: 1px solid ${({ theme }) => theme.foreground};
      background-color: ${({ theme }) => theme.background};
      transition: all 300ms ease;
      color: ${({ theme }) => theme.foreground};

      &:focus {
        border: 1px solid ${({ theme }) => theme.accent};
      }
    }
  }

  & ul {
    display: flex;
    width: 100%;
    height: fit-content;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 0.8rem;

    & li {
      list-style: none;
      border-bottom: 1px solid hsl(0, 0%, 50%);

      & a {
        font-family: "Raleway";
        font-weight: 500;

        &:hover {
          color: ${({ theme }) => theme.accent};
        }
      }
    }
  }

  & .buttons {
    padding: 1rem;
    width: 100vw;
    gap: 1rem;
    margin-left: 0;

    & div {
      aspect-ratio: 1/1;
      width: 2rem;
      height: 2rem;
      margin-block: auto;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.accent};
      cursor: pointer;
      transition: background-color 250ms ease-in;

      &:hover {
        background-color: ${({ theme }) => theme.accent900};
      }
    }
  }

  @media (min-width: 50em) {
    height: fit-content;
    flex-direction: row;
    align-items: center;
    transform: translateX(0) !important;

    & > svg {
      display: none;
    }

    & .search {
      margin-left: auto;
      width: 15rem;

      & input {
        width: 100%;
      }
    }

    & ul {
      width: fit-content;
      height: 100%;
      flex-direction: row;
      align-items: center;
      padding: 0;

      & li {
        border: none;
      }
    }
    & .buttons {
      width: fit-content;
    }
  }
`;

export default NavBar;
