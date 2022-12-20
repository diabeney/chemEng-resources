import styled from "styled-components";
import List from "./List";
import { MouseEvent, useEffect, useRef } from "react";
type SearchProps = {
  handleOpenSearchbar: () => void;
};

export default function Searchbar({ handleOpenSearchbar }: SearchProps) {
  const divRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) null;
    else {
      inputRef.current.focus();
    }
  }, []);
  const handleOpenModal = (e: MouseEvent) => {
    if (e.target === inputRef.current || e.target === divRef.current) {
      return null;
    } else {
      handleOpenSearchbar();
    }
  };
  return (
    <SearchWrapper onClick={(e) => handleOpenModal(e)}>
      <div ref={divRef}>
        <form>
          <input type="text" placeholder="Search courses" ref={inputRef} />
        </form>
        <SearchResults>
          <List
            data={[
              "Algebra",
              "Calculus of several Variables",
              "Communication Skills",
            ]}
          />
        </SearchResults>
      </div>
    </SearchWrapper>
  );
}

const SearchResults = styled.section`
  width: 100%;
  padding: 1em;

  ul {
    width: 100%;
    padding: 0;

    li {
      padding: 1rem 0.6rem;
      margin-block: 0.6rem;
      border-radius: 0.2em;
      border: 1px solid ${({ theme }) => theme.secondary500};
      color: ${({ theme }) => theme.foreground};

      &:hover {
        background-color: ${({ theme }) => theme.accent};
        color: #fff;
      }
    }
  }
`;

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

  div {
    width: 100%;
    padding: 1em 0.4em;
    background-color: ${({ theme }) =>
      theme.mode === "light" ? theme.secondary : theme.secondary500};
    border-radius: 0.6em;
    min-height: 15rem;
    position: relative;
    z-index: 10001;

    form {
      width: 90%;
      display: flex;
      margin-inline: auto;

      border-bottom: 1px solid
        ${({ theme }) => (theme.mode === "light" ? theme.foreground : "#fef")};
      color: ${({ theme }) =>
        theme.mode === "light" ? theme.foreground : "#fef"};
    }

    input {
      width: 100%;
      display: block;
      margin-inline: auto;
      height: 3rem;
      padding: 0.4rem 0.6rem;
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.foreground};

      :focus {
        border: none;
        outline: none;
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
