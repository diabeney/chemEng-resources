import React from "react";
import { Mainheading } from "../../../styles/reusableComponents";
import { Subheading } from "../../../styles/reusableComponents";
import { Lowheading } from "../../../styles/reusableComponents";
import { Notice } from "../../../styles/reusableComponents";
import { LevelTag } from "../../../styles/reusableComponents";
import InProgress from "../../../components/InProgress";
import { Paragraph } from "../../../styles/reusableComponents";
import List from "../../../components/List";
import { ListContainer } from "../../../styles/reusableComponents";
import HeadingAndText from "../../../components/HeadingAndText";

type AlgebraProps = {
  done: boolean;
};

const contents = ["Must Learn Topics", "Popular Books", "Useful Resources"];
const TopicsAndDescription = [
  {
    name: "Complex Numbers",
    description:
      "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, esse!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ad!",
  },
  {
    name: "Matrices",
    description:
      "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, esse!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ad!",
  },
  {
    name: "Vectors",
    description:
      "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, esse!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ad!",
  },
];

function Algebra({ done }: AlgebraProps) {
  return (
    <>
      <Mainheading>Algebra</Mainheading>
      <div style={{ paddingBlock: "1em" }}>
        <LevelTag level="General">General</LevelTag>
      </div>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, esse!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ad!
      </Paragraph>
      {done || <InProgress />}
      <ListContainer>
        <Lowheading>Contents on this page</Lowheading>
        <List data={contents} />
      </ListContainer>
      <Subheading>{contents[0]}</Subheading>
      {TopicsAndDescription.map((topic) => (
        <HeadingAndText
          key={topic.name}
          headingType="Low"
          headingText={topic.name}
          paragraph={topic.description}
        />
      ))}
      <Notice variant="Info">
        <Lowheading>Note</Lowheading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          assumenda voluptatibus, sapiente dolor corporis delectus!
        </Paragraph>
      </Notice>
      <Subheading>{contents[1]}</Subheading>
    </>
  );
}

export default Algebra;
