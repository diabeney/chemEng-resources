import styled from "styled-components";
import { CardProps } from "../constants/style-constants";
import { Container } from "./reusableComponents";
import { COLORS } from "../constants/style-constants";


// <---------- Navbar ----------->

export const Menu = styled.div`
  z-index: 100;
  position: absolute;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  padding: 0.6em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  background-color: ${({ theme }) => theme.background};

  @media (min-width: 50em) {
    display: none;
  }
`;

export const NavWrapper = styled.nav`
  position: absolute;
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


// <--------- HomePage ------------>

export const Card = styled.article<CardProps>`
  position: relative;
  padding: 0.8em 1em;
  overflow: hidden;
  border-radius: 0.4em;
  color: ${({ color }) => color};


  & section {
    width: fit-content;
    padding: 2em;
    border-radius: 50%;
    background-color: ${({ textColor }) => textColor};
    margin-inline: auto;

    & img {
      width: 3rem;
    }
  }

  h1 {
    font-size: 1.6em !important;
    padding-block: 0.2em;
    line-height: 1.5;
    color: ${({ headingColor }) => headingColor};
  }

  p {
    font-size: 1em;
    text-align: center;
    color: ${({ textColor }) => textColor};
  }
`;

export const CardsContainer = styled.section`
  width: 90%;
  margin-inline: auto;
  z-index: 10;
  position: relative;
  padding: 1em;
  color: ${({ theme }) => theme.foreground};
  display: grid;
  gap: 1.4em;

  @media (min-width: 30em) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 40em) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 60em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ServicesPage = styled.section`
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
  color: ${({ theme }) => theme.foreground};
  & h1 {
    text-align: center;
    font-size: 2.5em;
  }

  & div {
    margin-block: 1em;
    width: fit-content;
    margin-inline: auto;
    background-color: ${({ theme }) => theme.accent};
    padding: 0.4em 1em;
    color: #fff;
    border-radius: 3em;
  }

  @media (min-width: 50em) {
    & h1 {
      font-size: 3em;
      padding-top: 0.5em;
    }

    & div {
      margin-block: 5em;
    }
  }
`;

export const Wrapper = styled.section`
  width: 100vw;
  background-color: ${({ theme }) => theme.background};
`;

export const TextBox = styled.section`
  padding: 1em 0.6em;
  color: ${({ theme }) => theme.foreground};

  & h1 {
    font-size: 2.5em;
    font-weight: 700;
    padding-block: 0.2em;
    font-weight: 800;
  }

  & h2 {
    padding-block: 0.2em;
    font-size: 2em;
  }

  & p {
    padding-block: 0.6em;
    font-weight: 500;
  }

  @media (min-width: 50em) {
    & h1 {
      font-size: 2em;
      line-height: 1;
      margin-top: 1em;
    }
  }

  @media (min-width: 60em) {
    & h1 {
      margin-top: 0;
      font-size: 3.5em;
      font-weight: 600;
      line-height: 1.5;
    }
  }
`;

export const ImageContainer = styled.div`
  padding: 2em 0em;
`;

export const HeroContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1300px;
  margin-inline: auto;
  gap: 1rem;
  top: 0;
  padding-top: 4rem;
  overflow hidden;
  left: 0;
  place-items: center;
  background-color: ${({ theme }) => theme.background};

  @media (min-width: 50em) {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    position: relative;
  }
`;


export const ResourceContainer  = styled.section`
width: 100%;
padding-top: 2em;
display: grid;
gap: 2em;

  @media (min-width: 40em) {
  grid-template-columns: repeat(2 , 1fr);
  }
  @media (min-width: 50em) {
  grid-template-columns: repeat(3,1fr);
}

`

export const ResourceCard = styled.article`
  width: 95%;
  place-self: center;
  padding: 1.2em;
  border-radius: 1em;
  box-shadow: ${({theme}) => theme.mode === 'dark' ? `rgba(255, 255, 255, 0.2)` : `rgba(0, 0, 0, 0.02)`} 0px 1px 3px 0px, ${({theme}) => theme.mode === 'dark' ? `rgba(255, 255, 255, 0.2)` :  `rgba(0, 0, 0, 0.2)`} 0px 0px 0px 1px;

  & section {
    padding : 1em;
    width: fit-content;
    border-radius: .8em;
    color: #ffe;
    background-color: ${({theme}) => theme.accent};
  }

  h2 {
    font-size: 1.5em;
    padding-block: .6em;
  }

  p {
    font-size: 1em;
  }

 
`

export const ProductivityContainer = styled(Container)`
  width: 100%;
  max-width: 1400px;
margin-inline: auto;
  padding-block: 3em;
  background-color: ${({theme}) => theme.mode === 'light' ?  `#Fff` : `hsl(237,23%,10%)`};


  & h1 {
    font-size: 2em;
    line-height: 1.2;
    text-align:center;
    position: relative;
    z-index: 10;
   
  
    & img {
      position: absolute;
      left: 10%;
      top: 50%;
      z-index: -10;
      margin-inline: auto;
    }
    
  }

  & div {
    margin-block: 1em;
    width: fit-content;
    margin-inline: auto;
    background-color: ${COLORS.CARDS.GREEN.headingColor};
    padding: 0.4em 1em;
    color: #fff;
    border-radius: 3em;
  }

   @media (min-width: 50em) {
    & h1 {
      font-size: 3em;
      padding-top: 0.5em;
       width: 70%;
    margin-inline: auto;
    }

    & div {
      margin-block: 5em;
    }
  }
`

export const Activities = styled(Container)`
  width: 100vw;
  min-height: 100vh;
  max-width: 1400px;
  background: linear-gradient(to bottom, hsla(220, 15%, 16%,0.8),hsla(237,63%,0%,.6)), url(${({backgroundImage}) => backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  margin-inline: auto;
  padding-block: 3em;
  display: flex;
  flex-direction: column; 
  gap: 2em;

    div {
      width: 100%;
      padding: .4em .2em;
      position: sticky: 
      top: 0;

      h1 {
        font-size: 2.5em;
        color: white;
      }

      p {
        color: white;
      }
    }

    section {
      width: 100%;
      padding: 1em;
      display: flex;
      flex-direction: column;
      gap: 1em;

      article {
        width: 100%;
        background-color: ${({theme}) => theme.background};
        padding: 1.8em 1.6em;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: .4em;
        border-radius: .4em;
        color: ${({theme}) => theme.accent};
        
        &:hover {
        background-color: ${({theme}) => theme.accent};
          color: ${({theme}) => theme.background};
        }

        
      }
    }
 

    @media (min-width: 50em) {
      flex-direction: row;
      div {
        width: 50%;

        h1 {
          font-size: 3rem;
        }
      }
  
      section {
        width: 50%;
      }
    }
  
  `
