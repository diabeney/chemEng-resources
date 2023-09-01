import {
  Mainheading,
  Paragraph,
  Subheading,
} from "../../../styles/reusableComponents";
import { LevelTag } from "../../../styles/reusableComponents";
import { ListContainer } from "../../../styles/reusableComponents";
import { Lowheading } from "../../../styles/reusableComponents";
import List from "../../../components/List";
import { contentsList } from "../../../constants/data";
function GeneralPhysics() {
  return (
    <>
      <Mainheading>General Physics</Mainheading>
      <Paragraph style={{ paddingBlock: "1em" }}>
        <LevelTag level="General">PHY 170</LevelTag>
      </Paragraph>
      <Paragraph>
        General physics is a broad field of study that encompasses the
        fundamental principles and laws governing the behavior of matter and
        energy. It provides a foundation for understanding various physical
        phenomena and is divided into several branches, including classical
        mechanics, electromagnetism, thermodynamics, optics, and modern physics.
      </Paragraph>
      <ListContainer>
        <Lowheading>Contents on this page</Lowheading>
        <List data={contentsList} />
      </ListContainer>
      <Subheading>{contentsList[0]}</Subheading>
    </>
  );
}

export default GeneralPhysics;
