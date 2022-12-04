import NavBar from "../../components/NavBar";
import styled from "styled-components";
import { Wrapper } from "../../styles/styledComponents";
import SideBar from "./SideBar";
import { useState } from "react";

const testArr = ["hello", "world", "print", "later"];

function Resources() {
  return (
    <Wrapper>
      <ResourcesWrapper>
        <NavBar />
        <SideBar />
      </ResourcesWrapper>
    </Wrapper>
  );
}

const ResourcesWrapper = styled.div`
  color: ${({ theme }) => theme.foreground};
  background-color; ${({ theme }) => theme.background};
  height: 300vh;
  position: relative;
`;

export default Resources;
