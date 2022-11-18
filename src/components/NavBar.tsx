import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  return (
    <NavWrapper>
      <div className="logo">
        <span>engResources</span>
      </div>
      <ul>
        <li>
          <Link to="articles">Articles</Link>
        </li>
        <li>
          <Link to="resources">Resources</Link>
        </li>
        <li>
          <Link to="contribute">Contribute</Link>
        </li>
        <li>
          <Link to="akahgih">Error</Link>
        </li>
      </ul>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  width: 80vw;
  height: 100vh;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  border-bottom: 1px solid hsl(0, 0%, 50%);

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
      }
    }
  }

  @media (min-width: 50em) {
    width: 100vw;
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
`;

export default NavBar;
