import styled from "styled-components";


// <---------- Navbar ----------->

export const Menu = styled.div` 
  z-index: 100;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  padding: 1em 0.6em;
  border-bottom: 1px solid ${({theme}) => theme.secondary};
  background-color: ${({ theme }) => theme.background};

  @media (min-width: 50em) {
    display: none;
  }
`;

export const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  max-width: 1400px;
  margin-inline: auto;
  height: 100vh;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  border-bottom: 1px solid hsl(0, 0%, 50%);
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  transition: transform 350ms cubic-bezier(0.01, 1.09, 0.78, 1);

  & .menu {
    display: block;
  }

  & .logo {
    width: fit-content;
    padding: 1rem 0.8rem;
  }

  & .search {
    width: fit-content;
    padding-inline: 1rem;
    font-family: "Raleway";
    cursor: pointer;
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
    flex-direction: row;
    align-items: center;
    width: 100vw;
    position: fixed;
    top: 0;
    height: fit-content;
    padding-inline: 1em;
    transform: translateX(0) !important;

    & > svg {
      display: none;
    }

    & .search {
      margin-left: auto;
      width: fit-content;
      padding-left: 0;
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

export const Wrapper = styled.section`
  max-width: 100vw;
  background-color: ${({ theme }) => theme.background};
`;










