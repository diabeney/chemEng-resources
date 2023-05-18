import React from "react";
import {
  Mainheading,
  Paragraph,
  LevelTag,
  Lowheading,
  Subheading,
  Notice,
} from "../../../styles/reusableComponents";
import PageLinks from "../../../components/PageLinks";
import InProgress from "../../../components/InProgress";
import List from "../../../components/List";
import { ListContainer } from "../../../styles/reusableComponents";

const contentsList = ["Topics", "Popular Books", "Useful Resources"];

function CalculusAnalysis({ done }: { done: boolean }) {
  return (
    <>
      {done || <InProgress />}
      <Mainheading>Calculus with Analysis</Mainheading>
      <Paragraph style={{ paddingBlock: ".6rem" }}>
        <LevelTag level="General">MATH 152</LevelTag>
      </Paragraph>
      <Paragraph>
        Calculus with Analysis is a mathematics course that integrates concepts
        from calculus and analysis. It typically covers advanced topics such as
        limits, continuity, differentiation, integration, and sequences and
        series. The course aims to provide students with a deep understanding of
        the fundamental concepts of calculus and their applications in analysis.
      </Paragraph>
      <br />
      <Paragraph>
        Analysis is the branch of mathematics that underpins the theory behind
        calculus, placing it on a firm logical foundation through the
        introduction of the notion of a limit. This course introduces
        differentiation and integration from a rigourous point of view.
      </Paragraph>
      <ListContainer>
        <Lowheading>Contents on this page</Lowheading>
        <List data={contentsList} />
      </ListContainer>
      <Subheading>{contentsList[0]}</Subheading>
      <Lowheading>&bull;Introduction to Real Numbers</Lowheading>
      <Paragraph>
        Subtopics such as Neighbourhoods, limit points, open and closed sets,
        Bolzano-Weierstrass Theorem are discussed. Neighborhoods, limit points,
        open and closed sets, and Bolzano-Weierstrass theorem have various
        applications in chemical engineering, particularly in the fields of
        transport phenomena, reaction engineering, and process control.
      </Paragraph>
      <Lowheading>&bull;Differentiation & Integration</Lowheading>
      <Paragraph>
        Differentiation and integration are fundamental concepts in calculus.
        Differentiation refers to the process of finding the rate at which one
        quantity changes with respect to another, while integration is the
        process of finding the area under a curve.
      </Paragraph>
      <br />
      <Paragraph>
        Differentiation has applications in physics, engineering, and economics,
        where it is used to analyze and model systems that change over time.. In
        chemical engineering, these concepts are used to model and analyze
        various physical and chemical processes. For example, in chemical
        reactor design, differentiation is used to determine the rate of
        reaction and the concentration of reactants and products.
      </Paragraph>
      <br />
      <Paragraph>
        Integration, on the other hand, is the process of finding the area under
        a curve. It has applications in physics, engineering, and finance, where
        it is used to calculate quantities such as work, power, and
        profit.Integration is used to determine the amount of heat required or
        produced in a chemical reaction, which is important in designing heat
        exchangers and other heat transfer equipment.
      </Paragraph>
      <Lowheading>&bull;Sequences and Series</Lowheading>
      <Paragraph>
        In calculus with analysis, sequences and series refer to a set of
        mathematical concepts that deal with the behavior and properties of
        ordered lists of numbers.
      </Paragraph>
      <Paragraph>
        A sequence is an ordered list of numbers that are usually indexed by
        natural numbers. Sequences are used to model various real-life
        phenomena, including population growth, temperature variations, and
        stock prices.
      </Paragraph>
      <Paragraph>
        A series is the sum of the terms of a sequence. Series are used in many
        applications, such as in the calculation of areas, volumes, and work
        done by a force.
      </Paragraph>{" "}
      <br />
      <Paragraph>
        Sequences and series are important mathematical concepts that are used
        in many fields, including chemical engineering. For example, chemical
        engineers use sequences and series to evaluate and monitor the outcome
        of a situation or event. They also use these concepts to analyze data.
        Sequences and series can be used to model many real-world phenomena,
        such
      </Paragraph>
      <br />
      <Paragraph>
        In chemical engineering, Taylor series can be used to solve differential
        equations and evaluate nonelementary integrals. They can also be used to
        model many real-world phenomena, such as population growth, radioactive
        decay, and heat transfer.
      </Paragraph>
      <Subheading>{contentsList[1]}</Subheading>
      <Subheading>{contentsList[2]}</Subheading>
      <Lowheading>Videos</Lowheading>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=WsQQvHm4lSw&t=95s">
          &bull; Organic Chemistry Tutor - Understand Calculus - YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=XdkoTb8PEG0&list=PLHgLUBSREUPl6Ie2hq2NdVdX3z-B8ldOi">
          &bull; Organic Chemistry Tutor - Converging and Diverging Sequences
          Using Limits - YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=GiCojsAWRj0&list=PL0o_zxa4K1BWYThyV4T2Allw6zY0jEumv">
          &bull; Organic Chemistry Tutor - Introduction to Calculus 1 Using
          Limits - YouTube Playlist.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=HfACrKJ_Y2w">
          &bull; FreeCodeCamp - Calculus Full College Course - YouTube Playlist.
        </PageLinks>
      </Paragraph>
      <Lowheading>Articles and PDFs</Lowheading>
      <Paragraph>
        <PageLinks to="https://ocw.mit.edu/ans7870/resources/Strang/Edited/Calculus/Calculus.pdf">
          &bull; Gilbert Strang, MIT - Calculus - [ PDF ].
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://ncert.nic.in/ncerts/l/lemh105.pdf">
          &bull;Continuity and Differentiability - [ PDF ].
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://people.math.osu.edu/fowler.291/sequences-and-series.pdf">
          &bull;Fowler, J, Snapp B - Sequence and Series - [ PDF ].
        </PageLinks>
      </Paragraph>
      <Lowheading>Practice Problems</Lowheading>
      <Notice variant="Info">
        <Lowheading>Note</Lowheading>
        <Paragraph>
          The webpage below contains several practice problems and likely
          examination questions. It is highly recommended!.
        </Paragraph>
      </Notice>
      <Paragraph>
        <PageLinks to="https://tutorial.math.lamar.edu/Problems/CalcI/CalcI.aspx">
          &bull; Paul's Online Notes - Calculus 1 - Webpage.
        </PageLinks>
      </Paragraph>
    </>
  );
}

export default CalculusAnalysis;
