import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";

type SearchProps = {
  handleOpenSearchbar: () => void;
};

export default function Searchbar({ handleOpenSearchbar }: SearchProps) {
  return (
    <SearchWrapper onClick={handleOpenSearchbar}>
      <div>
        <form>
          <section>
            <RiSearchLine />
          </section>
          <input type="search" placeholder="Search courses" />
        </form>
      </div>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 5em 0.8em;
  z-index: 1000;
  overflow-x: hidden;
  backdrop-filter: blur(4px);
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? `hsla(237,23%,8%,.8)` : `hsla(0,0%,20%,.6)`};
  overflow: hidden;

  div {
    width: 100%;
    padding: 1em 0.4em;
    background-color: ${({ theme }) =>
      theme.mode === "dark" ? theme.secondary500 : theme.secondary};
    border-radius: 0.6em;
    min-height: 15rem;

    form {
      width: 90%;
      display: flex;
      margin-inline: auto;
      border-bottom: 1px solid
        ${({ theme }) => (theme.mode === "light" ? theme.foreground : "#fef")};
          
      color: ${({ theme }) =>
        theme.mode === "light" ? theme.foreground : "#fef"};} 
      section {
        aspect-ratio: 1/1;
        width: 3rem;
        display: grid;
        place-content: center;
      }

      input {
        width: 90%;
        display: block;
        margin-inline: auto;
        height: 3rem;
        padding: 0.4rem 0.6rem;
        background: transparent;
        border: none;
        color: ${({ theme }) =>
          theme.mode === "light" ? theme.foreground : "#fef"};

        :focus {
          border: none;
          outline: none;
        }
      }
    }
  }

  @media (min-width: 50em) {
    padding: 2em 2em;

    div {
      width: 50%;
      margin-inline: auto;
    }
  }

  /* backdrop-filter: blur(3px); */
`;
