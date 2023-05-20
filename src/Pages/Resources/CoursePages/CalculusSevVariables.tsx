import { Mainheading } from "../../../styles/reusableComponents";
import { Paragraph } from "../../../styles/reusableComponents";
import { LevelTag } from "../../../styles/reusableComponents";
import {
  ListContainer,
  Lowheading,
  Subheading,
} from "../../../styles/reusableComponents";
import { contentsList } from "../../../constants/data";
import List from "../../../components/List";
import { Notice } from "../../../styles/reusableComponents";
import PageLinks from "../../../components/PageLinks";

const contents = [...contentsList, "Applications"];

function CalculusSevVariables() {
  return (
    <>
      <Mainheading>Calculus with Several Variables</Mainheading>
      <Paragraph style={{ paddingBlock: "1em" }}>
        <LevelTag level="General">MATH 252</LevelTag>
      </Paragraph>
      <Paragraph>
        The course "Calculus of Several Variables" builds upon the concepts
        learned in single variable calculus and extends them to functions of
        multiple variables. It explores the analysis of functions,
        differentiation, and integration in multiple dimensions.
      </Paragraph>
      <ListContainer>
        <Lowheading>Contents on this page</Lowheading>
        <List data={contents} />
      </ListContainer>
      <Subheading>{contents[0]}</Subheading>
      <Lowheading>&bull;Partial Differentiation</Lowheading>
      <Paragraph>
        The course delves into the topic of partial differentiation, which
        involves determining the partial derivatives of functions with respect
        to each variable. Students learn about the gradient vector and its
        properties, enabling them to find the direction of maximum change of a
        function. Higher-order partial derivatives and the chain rule for
        functions of several variables are also covered.
      </Paragraph>
      <Lowheading>&bull;Limits and Continuity</Lowheading>
      <Paragraph>
        Limits and continuity are fundamental concepts in calculus that deal
        with the behavior of functions as their input values approach certain
        values or as they extend to infinity or negative infinity. These
        concepts provide a foundation for understanding the behavior,
        properties, and derivatives of functions. <br /> <br />
        Continuity is a property of functions that describes their smoothness
        and lack of abrupt changes or discontinuities. A function is continuous
        at a point if its value at that point matches the limit of the function
        as the input approaches that point.
      </Paragraph>
      <Notice variant="Info">
        <Lowheading>Note</Lowheading>
        <Paragraph>
          The topics below are subtopics of Multiple Integrals
        </Paragraph>
      </Notice>
      <Lowheading>&bull;Double Integrals</Lowheading>
      <Paragraph>
        A double integral is an extension of the concept of a single integral to
        integrate functions of two variables over a two-dimensional region in
        the Cartesian plane. It is used to calculate the area of a region.
        Double integration in rectangular coordinates is introduced as well as
        double integration in polar coordinates.
      </Paragraph>
      <Lowheading>&bull;Triple Integrals</Lowheading>
      <Paragraph>
        A triple integral is an extension of the concept of a double integral to
        integrate functions of three variables over a three-dimensional region
        in space. It basically allows us to determine volumes between surfaces.
      </Paragraph>
      <Lowheading>&bull;Line & Surface Integrals</Lowheading>
      <Paragraph>
        Line and surface integrals are concepts in multivariable calculus that
        involve integrating functions along curves and surfaces, respectively.
        They are used to calculate various quantities and properties associated
        with curves and surfaces, such as arc length, work done and flux.
      </Paragraph>
      <Subheading>{contents[1]}</Subheading>
      <Subheading>{contents[2]}</Subheading>
      <Lowheading>Videos</Lowheading>
      <Notice variant="Info">
        <Lowheading>Note</Lowheading>
        <Paragraph>
          The youtube playlist below provides graphical introduction to
          multivariable calculus. The concepts are visualized and well explained
          by Dr. Trefor. It is highly recommended!.
        </Paragraph>
        <br />
        <Paragraph>
          <PageLinks to="https://www.youtube.com/watch?v=gsUgDpGWk-M&list=PLHXZ9OQGMqxc_CvEy7xBKRQr6I214QJcd">
            &bull; Dr. Trefor Bazett - What are the big ideas of Multivariable
            Calculus [Full Course Intro] - YouTube Playlist.
          </PageLinks>
        </Paragraph>
      </Notice>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=pHVTZHOqyss">
          &bull; Vectors Academy - Partial Derivatives (Engineering Mathematics)
          - YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=JAf_aSIJryg&pp=ygUrcGFydGlhbCBkZXJpdmF0aXZlcyBlbmdpbmVlcmluZyBtYXRoZW1hdGljcw%3D%3D">
          &bull; Organic Chemistry Tutor - Partial Derivatives, Multivariable
          Calculus - YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=Kp7sSp5Kn7o&pp=ygUrcGFydGlhbCBkZXJpdmF0aXZlcyBlbmdpbmVlcmluZyBtYXRoZW1hdGljcw%3D%3D">
          &bull; Universaldenker Physics - Difference between partial and Total
          derivative - YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=BJ_0FURo9RE&pp=ygUnZG91YmxlIGludGVncmFsIGVuZ2luZWVyaW5nIG1hdGhlbWF0aWNz">
          &bull; Organic Chemistry Tutor - Double Integral- YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=UubU3U2C8WM&pp=ygUnZG91YmxlIGludGVncmFsIGVuZ2luZWVyaW5nIG1hdGhlbWF0aWNz">
          &bull; Professor Dave Explains - Double and Triple Integrals -
          YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=7iy83x8bv6o&pp=ygUnZG91YmxlIGludGVncmFsIGVuZ2luZWVyaW5nIG1hdGhlbWF0aWNz">
          &bull; Organic Chemistry Tutor- Triple Integrals - YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=_60sKaoRmhU&pp=ygUcc3VyZmFjZSBpbnRlZ3JhbCBlbmdpbmVlcmluZw%3D%3D">
          &bull; Khan Academy - Line Integral Introduction - YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=ZIn1rgZVPFw&pp=ygUcc3VyZmFjZSBpbnRlZ3JhbCBlbmdpbmVlcmluZw%3D%3D">
          &bull; Dr. Trefor Bazett - Triple Integral in Cartesian Coordinates -
          YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=WA5_a3C2iqY&t=200s&pp=ygUNbGluZSBpbnRlZ3JhbA%3D%3D">
          &bull; Dr. Trefor Bazett -What is line integral - YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=Tz14rC0XvHI&pp=ygUNbGluZSBpbnRlZ3JhbA%3D%3D">
          &bull; Professor Dave Explains - Evaluating line integrals - YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=Tz14rC0XvHI&pp=ygUNbGluZSBpbnRlZ3JhbA%3D%3D">
          &bull; NiLTime - The beauty of Line Integrals - YouTube.
        </PageLinks>
      </Paragraph>
      <Lowheading>Articles & PDFs</Lowheading>
      <Paragraph>
        <PageLinks to="https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/download/">
          &bull; Multivariable Calculus - MIT OPEN COURSE WARE - [Downloadable]
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://math.libretexts.org/Courses/Oxnard_College/Multivariable_Calculus">
          &bull;Multivariable Calculus - Math LibreTexts - [Full Introductory
          Course]
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.whitman.edu/mathematics/multivariable/multivariable_14_Partial_Differentiation.pdf">
          &bull;Whitman EDU - Partial Derivatives - [PDF]
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.maths.tcd.ie/~richardt/2E1/2E1-ch3.pdf">
          &bull;Maths TCD - Double and Triple Integral - [PDF]
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://liavas.net/courses/mathmethods/files/Surface_integrals.pdf">
          &bull;Liavas.Net - Line and Surface Integrals - [PDF]
        </PageLinks>
      </Paragraph>
      <Lowheading>Practice Problems</Lowheading>
      <Paragraph>
        <PageLinks to="http://www.leadinglesson.com/multivariable-calculus">
          &bull; Leading Lesson - Multivariable Calculus - [PDF]
        </PageLinks>
      </Paragraph>
      <Subheading>{contents[3]}</Subheading>
      <Lowheading>Partial Derivative</Lowheading>
      <Paragraph>
        Partial derivatives are applied in chemical engineering to analyze
        reaction kinetics, calculate thermodynamic properties, study heat
        transfer by determining temperature gradients, analyze mass transfer
        rates, and optimize process variables for maximizing yield, efficiency,
        or profit.
      </Paragraph>
      <Lowheading>Double and Triple Integral</Lowheading>
      <Paragraph>
        Double and triple integrals find applications in chemical engineering
        for calculating mass, momentum, and energy transport, analyzing fluid
        flow properties, determining reaction rates and extents in complex
        systems, and solving material and energy balance equations for systems
        with spatial variations.
      </Paragraph>
      <Lowheading>Line and Surface Integral</Lowheading>
      <Paragraph>
        Line and surface integrals are utilized in chemical engineering to
        analyze fluid flow, calculate heat fluxes and temperature distributions,
        determine mass fluxes and concentrations in mass transfer processes, and
        analyze electric currents, magnetic fields, and potential distributions
        in electrochemical systems.
      </Paragraph>
    </>
  );
}

export default CalculusSevVariables;
