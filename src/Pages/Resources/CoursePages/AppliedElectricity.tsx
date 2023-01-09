import { Mainheading } from "../../../styles/reusableComponents";
import InProgress from "../../../components/InProgress";
import { LevelTag } from "../../../styles/reusableComponents";
import { Paragraph } from "../../../styles/reusableComponents";
import { contentsList } from "../../../constants/data";
import { ListContainer } from "../../../styles/reusableComponents";
import { Lowheading } from "../../../styles/reusableComponents";
import List from "../../../components/List";
import { Subheading } from "../../../styles/reusableComponents";

function AppliedElectricity() {
  return (
    <>
      <InProgress />
      <Mainheading>Applied Electricity</Mainheading>
      <Paragraph>
        <LevelTag level="General">EE 151</LevelTag>
      </Paragraph>
      <br />
      <Paragraph>
        Applied electricity refers to the practical application of electrical
        principles and technologies in various fields and industries. It
        includes the use of electricity for power generation, transmission, and
        distribution, as well as the application of electrical principles in
        fields such as electronics, electromechanics, and electrical
        engineering.
      </Paragraph>
      <ListContainer>
        <Lowheading>Contents on this page</Lowheading>
        <List data={contentsList} />
      </ListContainer>
      <Subheading>{contentsList[0]}</Subheading>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quis
        doloremque fugiat corporis? Reiciendis, explicabo?
      </Paragraph>
    </>
  );
}

export default AppliedElectricity;
