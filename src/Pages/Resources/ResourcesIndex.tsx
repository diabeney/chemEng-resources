import React from "react";
import styled from "styled-components";

function ResourcesIndex() {
  return (
    <div>
      <h2 style={{ fontSize: "3em" }}> Introduction</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        perferendis omnis quia enim perspiciatis a non laboriosam. Asperiores,
        placeat.
      </p>
      <h3 style={{ marginTop: "2em", paddingBlock: "1em", fontSize: "1.5em" }}>
        What is this page?
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        placeat dolorem accusamus eveniet quo corrupti sequi dicta soluta
        ratione, perspiciatis incidunt quisquam maxime ullam esse hic commodi
        vero repellat. Rem!
      </p>
      <Rect
        style={{
          width: "100%",
          marginInline: "auto",
          borderRadius: "1em",
          marginBlock: "2em",
          height: "fit-content",
        }}
      >
        <h3>Who is this page for? </h3>
        <ul>
          <li>&bull; Chemical Engineering Students</li>
          <li>&bull; Thanos and the Black Order</li>
          <li>&bull; Avengers Assemble</li>
          <li>&bull; This is gonna cost us fifty one years</li>
        </ul>
      </Rect>
    </div>
  );
}

const Rect = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 1em;
  padding-block: 1em;

  h3 {
    font-size: 1.5em;
    padding-block: 1em;
  }

  ul {
    width: 100%;
    padding: 0;
    li {
      padding-block: 0.6em;
    }
  }
`;

export default ResourcesIndex;
