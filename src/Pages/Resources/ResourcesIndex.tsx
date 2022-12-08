import { ListContainer } from "../../styles/reusableComponents";
import { Mainheading } from "../../styles/reusableComponents";
import { Paragraph } from "../../styles/reusableComponents";
import { Subheading } from "../../styles/reusableComponents";
import { Lowheading } from "../../styles/reusableComponents";
import { LevelTag } from "../../styles/reusableComponents";
import { Notice } from "../../styles/reusableComponents";
import { ContentInProgress } from "../../styles/reusableComponents";
import List from "../../components/List";

const contents = [
  "What is this page?",
  "Who this page is for?",
  "What to look out for.",
  "Conventions used.",
];

function ResourcesIndex() {
  return (
    <div>
      <Mainheading>Introduction</Mainheading>
      <Paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
        aspernatur labore enim officiis iusto maxime aliquid est itaque.
        Tempore, aliquid.
      </Paragraph>
      <ListContainer>
        <Lowheading>Contents on this page</Lowheading>
        <List data={contents} />
      </ListContainer>
      <Subheading>What is this page?</Subheading>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quidem
        odit minima minus sit! Voluptate. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Aliquam illo explicabo, esse porro blanditiis nulla.
      </Paragraph>
      <Subheading>Who is this page for?</Subheading>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quidem
        odit minima minus sit! Voluptate. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Aliquam illo explicabo, esse porro blanditiis nulla.
      </Paragraph>
      <Subheading>What to look out for</Subheading>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quidem
        odit minima minus sit! Voluptate. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Aliquam illo explicabo, esse porro blanditiis nulla.
      </Paragraph>
      <Subheading>Conventions used</Subheading>
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
        molestiae.
      </Paragraph>
      <Lowheading>&bull;Tags</Lowheading>
      <div style={{ paddingBlock: "1em" }}>
        <LevelTag level="General">General</LevelTag>|
        <LevelTag level="Specific">Specific</LevelTag>
      </div>
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
        nobis? <LevelTag level="General">General</LevelTag> denotes a Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Harum, deserunt
        whereas <LevelTag level="Specific">Specific</LevelTag> denotes Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Placeat, unde!
      </Paragraph>
      <Lowheading>2. Notice</Lowheading>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga recusandae
        magni ut, quia quisquam voluptatum.
      </Paragraph>
      <Lowheading>&bull;Info</Lowheading>
      <Notice variant="Info">
        <Lowheading>This is an info</Lowheading>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
          amet!
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sint, distinctio.
        </Paragraph>
      </Notice>
      <Lowheading>&bull;Warning</Lowheading>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, amet!
      </Paragraph>
      <Notice variant="Warning">
        <Lowheading>This is a Warning</Lowheading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ducimus, consequatur.
        </Paragraph>
      </Notice>
      <Lowheading>&bull;In Progess</Lowheading>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, amet!
      </Paragraph>
      <ContentInProgress variant="In Progress">
        <Lowheading>This is content is still in progress</Lowheading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ducimus, consequatur.
        </Paragraph>
      </ContentInProgress>
    </div>
  );
}

export default ResourcesIndex;
