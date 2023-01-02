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
      "In mathematics, a complex number is a number that can be written in the form a + bi, where a and b are real numbers and i is the imaginary unit. Complex numbers are also used to solve equations that have no real solutions, such as quadratic equations with negative discriminants. They are used in geometry to represent rotations and translations in the plane. Complex numbers are used in chemical engineering in a variety of ways. For example, they may be used to solve equations that arise in the design of chemical plants or in the analysis of chemical reactions. They may also be used to represent oscillating or rotating systems, such as mixing tanks or chemical reactors.",
  },
  {
    name: "Matrix algebra",
    description:
      "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, esse!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ad!",
  },
  {
    name: "Vector algebra and application",
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
        Algebra is a branch of mathematics in which letters and symbols are used
        to represent numbers and quantities in equations and formulas. It is
        used to manipulate and simplify expressions and to solve systems of
        equations. Understanding algebra is also important for studying other
        subjects in engineering, such as calculus and differential equations.
      </Paragraph>
      {done || <InProgress />}
      <ListContainer>
        <Lowheading>Contents on this page</Lowheading>
        <List data={contents} />
      </ListContainer>
      <Subheading>{contents[0]}</Subheading>
      <Lowheading>&bull;Complex Numbers</Lowheading>
      <Paragraph>
        In mathematics, a complex number is a number that can be written in the
        form <b>(a + bi)</b>, where <b>a</b> and <b>b</b> are real numbers and i
        is the imaginary unit. <br />
        <br />
        In chemical engineering, they may be used to solve equations that arise
        in the design of chemical plants or in the analysis of chemical
        reactions. They may also be used to represent oscillating or rotating
        systems, such as mixing tanks or chemical reactors.
      </Paragraph>
      <Lowheading>&bull;Matrix algebra</Lowheading>
      <Paragraph>
        A matrix is a rectangular array of numbers or symbols, arranged in rows
        and columns.
        <br />
        <br />
        Matrices are used in the development of mathematical models for chemical
        processes. For example, they can be used to represent the rates of
        chemical reactions or the transport of heat and mass in a chemical
        system.
      </Paragraph>
      <Notice variant="Info">
        <Lowheading>Note</Lowheading>
        <Paragraph>
          An article on the applications of matrices in chemical engineering can
          be found{" "}
          <a
            target="_blank"
            href="https://pubs.acs.org/doi/10.1021/ie50548a027"
            className="page__link"
          >
            here
          </a>
        </Paragraph>
      </Notice>
      <Lowheading>&bull;Vector algebra and application</Lowheading>
      <Paragraph>
        Vector algebra is a branch of mathematics that deals with vectors and
        vector-valued functions. A vector is a mathematical object that has both
        magnitude and direction.
        <br />
        <br />
        Vectors are used in chemical engineering in the following ways:
        <br />
        <br />
        1. Vector algebra is used to represent and analyze physical quantities
        that have both magnitude and direction, such as flow rate,
        concentration, and temperature. For example, vectors can be used to
        describe the flow of fluids in a chemical plant or the distribution of
        heat and mass in a chemical reactor.
        <br />
        <br />
        2. Vector algebra is used to describe the movement and transportation of
        materials in chemical processes. For example, vectors can be used to
        represent the flow of materials through pipes, tanks, and other process
        equipment.
        <br />
        <br />
        3. Vector algebra is used to represent geometric shapes and
        transformations in space. For example, vectors can be used to describe
        the geometry of process equipment or the movement of materials within a
        chemical plant.
      </Paragraph>
      <Subheading>{contents[1]}</Subheading>
    </>
  );
}

export default Algebra;
