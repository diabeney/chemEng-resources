import styled from "styled-components";
import RenderList from "./RenderList";
// import { CoursesComponents } from "../constants/data";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { CoursesComponents } from "../Pages/Resources/CourseDetails";
type SearchProps = {
  handleOpenSearchbar: () => void;
};

export default function Searchbar({ handleOpenSearchbar }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const searchDivRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) null;
    else {
      inputRef.current.focus();
    }
  }, []);

  const handleOpenModal = (e: MouseEvent) => {
    if (e.target === inputRef.current || e.target === searchDivRef.current) {
      return null;
    } else {
      handleOpenSearchbar();
    }
  };

  const filterSearchInput = (value: string) => {
    setSearchQuery(value);
    let newArray: string[] = [];
    if (!!value.length) {
      let filteredArray = CoursesComponents.filter((course) =>
        course.name.match(new RegExp(`${value}`, "ig"))
      );
      let foundCourses = filteredArray.map((item) => item.name);
      newArray = [...foundCourses];
    } else newArray = [];
    setSearchResults(newArray);
  };
  return (
    <SearchWrapper onClick={(e) => handleOpenModal(e)}>
      <div ref={searchDivRef}>
        <form>
          <input
            type="text"
            placeholder="Search courses"
            ref={inputRef}
            value={searchQuery}
            onChange={(e) => filterSearchInput(e.target.value)}
          />
        </form>
        <SearchResults>
          <RenderList data={searchResults} />
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

    li a {
      padding: 1rem 0.6rem;
      margin-block: 0.6rem;
      border-radius: 0.2em;
      border: 1px solid ${({ theme }) => theme.secondary500};
      color: ${({ theme }) => theme.foreground};
      display: block;
      width: 100%;

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
`;
