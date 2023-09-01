import { Mainheading } from "../../../styles/reusableComponents";
import { Paragraph } from "../../../styles/reusableComponents";
import { LevelTag } from "../../../styles/reusableComponents";
import { ListContainer } from "../../../styles/reusableComponents";
import { Lowheading } from "../../../styles/reusableComponents";
import List from "../../../components/List";
import { Subheading } from "../../../styles/reusableComponents";
import { contentsList } from "../../../constants/data";
import { BooksContainer } from "../../../styles/reusableComponents";
import Book from "../../../components/Books";
import PageLinks from "../../../components/PageLinks";
import { Notice } from "../../../styles/reusableComponents";

const contents = [...contentsList, "Applications"];
const booksData = [
  {
    title: "Elementary Principles of Chemical Processes",
    author: "Rousseau R.W, Felder M.",
    imgUrl:
      "https://cdn.asaha.com/assets/thumbs/02f/02fb136bd2bdd3c1625e2557d1d52d22.jpg",
  },
];

function ChemicalProcessCalculations() {
  return (
    <>
      <Mainheading>Chemical Process Calculations I & II</Mainheading>
      <Paragraph style={{ paddingBlock: "1em" }}>
        <LevelTag level="General">CHE 251 & CHE 252</LevelTag>
      </Paragraph>
      <Paragraph>
        Chemical Process Calculations I and II are courses that focus on the
        quantitative aspects of chemical engineering. These courses introduce
        the principles and techniques for solving various calculations related
        to chemical processes, including material balances, energy balances, and
        conversion calculations.
      </Paragraph>
      <ListContainer>
        <Lowheading>Contents on this page</Lowheading>
        <List data={contents} />
      </ListContainer>
      <Subheading>{contents[0]}</Subheading>
      <Notice variant="Warning">
        <Lowheading>Warning</Lowheading>
        <Paragraph>
          The majority of the courses you'd take as a chemical engineering major
          can be made much easier for you if you are proficient in CPC. It is
          best to approach it seriously.
        </Paragraph>
      </Notice>
      <Lowheading>&bull;Conversions</Lowheading>
      <Paragraph>
        Through a combination of theory and practical applications, students
        will learn how to convert between different units of measurement,
        calculate yield and selectivity for chemical processes, scale up or down
        processes while maintaining their integrity, perform stoichiometric
        calculations, and determine the extent of reaction in a reactive system.
      </Paragraph>
      <Lowheading>&bull;Material Balances</Lowheading>
      <Paragraph>
        Material balances involve the application of the principle of mass
        conservation to analyze the flow rates and compositions of materials
        within chemical processes, considering both steady-state and
        unsteady-state conditions. Students learn how to formulate material
        balance equations and perform calculations to determine the steady-state
        flow rates and compositions. The concept of degrees of freedom analysis
        is introduced to assess the number of independent variables and
        equations in a system, enabling students to solve material balance
        problems effectively and ensure proper process control.
      </Paragraph>
      <Lowheading>&bull;Energy balance</Lowheading>
      <Paragraph>
        Energy balance involves the analysis and calculation of energy transfers
        within chemical processes, focusing on the conservation of energy and
        heat transfer mechanisms. Through this course, students gain a thorough
        understanding of the principles and equations used to quantify energy
        inputs and outputs enabling them to optimize process efficiency, design
        energy-efficient systems, and ensure proper heat management in chemical
        engineering applications.
      </Paragraph>
      <Subheading>{contents[1]}</Subheading>
      <BooksContainer>
        {booksData.map((item) => (
          <Book {...item} key={item.title} />
        ))}
      </BooksContainer>
      <Subheading>{contents[2]}</Subheading>
      <Lowheading>Videos</Lowheading>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=v6k395j7Qr0">
          &bull; Chemical Engineer - Unit Conversion Basics - YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=WfSFEFvCkyc">
          &bull; Yiheng Wang - Conversion of Units - YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=mgR6egNSoJc">
          &bull; LearnChemE - Unit Conversions (Practice)- YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=10qbOTikL1k&list=PLD4476BAFA5A65111">
          &bull; LearnChemE - Material Balances - YouTube Playlist.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=7vSzIUckkmk&pp=ygUlbWF0ZXJpYWwgYmFsYW5jZSBjaGVtaWNhbCBlbmdpbmVlcmluZw%3D%3D">
          &bull; The H Factor - Material Balances for Single-Unit Non-Reactive
          Processes: Drying Example - YouTube.
        </PageLinks>
      </Paragraph>
      <Notice variant="Info">
        <Lowheading>Highly Recommended</Lowheading>
        <Paragraph>
          This YouTube playlist consists of extensive explanation of all the
          subtopics in energy balance like how to read and use steam tables,
          psychrometric and humidity charts, Interpolation etc.
        </Paragraph>
        <br />
        <Paragraph>
          <PageLinks to="https://www.youtube.com/watch?v=RF778F-D6p8&list=PL4xAk5aclnUiDazeSqz59Zb9NC1a2AK0q">
            &bull; LearnChemE - Energy balances - YouTube Playlist.
          </PageLinks>
        </Paragraph>
      </Notice>
      <Subheading> {contents[3]} </Subheading>
      <Subheading>&bull; Material Balance</Subheading>
      <Lowheading>Unit Conversions</Lowheading>
      <Paragraph>
        Unit conversions are essential for correctly measuring and representing
        process variables, such as mass, volume, temperature, and pressure,
        ensuring accurate calculations and effective communication within the
        field of chemical engineering.
      </Paragraph>
      <Lowheading>Yield, Selectivity & Scaling</Lowheading>
      <Paragraph>
        e understanding and calculation of yield and selectivity enable chemical
        engineers to assess the efficiency and effectiveness of chemical
        reactions and processes, allowing for optimization and improvement of
        product yields and desired outcomes.Scaling considerations are crucial
        for designing chemical processes that can be effectively operated at
        different scales, from laboratory to industrial production.
      </Paragraph>
      <Subheading>&bull;Energy balance</Subheading>
      <Paragraph>
        Energy balance calculations are fundamental in chemical engineering for
        analyzing and optimizing energy transfers within processes. By
        quantifying energy inputs, outputs, and transformations, engineers can
        design energy-efficient systems, optimize heat integration, and ensure
        proper management of energy resources.
        <br />
        <br />
        Understanding enthalpy changes and heat capacities is essential for
        analyzing and controlling heat transfer processes, designing efficient
        heat exchangers, and optimizing temperature profiles in chemical
        reactors and systems.
      </Paragraph>
    </>
  );
}

export default ChemicalProcessCalculations;
