import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { RiMoonLine } from "react-icons/ri";
import { RiSunLine } from "react-icons/ri";
import { useContext } from "react";
import { ToggleTheme } from "./ThemeWrapper";
import { PrimaryButton } from "../styles/styledComponents";

function NavBar() {
  const { theme, handleTheme } = useContext(ToggleTheme);
  return (
    <NavWrapper>
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
  );
}

const NavWrapper = styled.nav`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  border-bottom: 1px solid hsl(0, 0%, 50%);
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  transition: all 250ms ease-in;
  & .logo {
    width: fit-content;
    padding: 1rem 0.8rem;
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
  }

  & .buttons {
    width: fit-content;
    margin-left: auto;
  }
`;

export default NavBar;
