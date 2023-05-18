import useFormattedParams from "../../hooks/useFormattedParams";
import NextContent from "../../components/NextContent";
import PrevContent from "../../components/PrevContent";
import styled from "styled-components";
import Algebra from "./CoursePages/Algebra";
import AppliedElectricity from "./CoursePages/AppliedElectricity";
import InorganicChemistry from "./CoursePages/InorganicChemistry";
import TechnicalDrawing from "./CoursePages/TechnicalDrawing";
import PracticalChemistry from "./CoursePages/PracticalChemistry";
import OrganicChemistry from "./CoursePages/OrganicChemistry";
import CommunicationSkills from "./CoursePages/CommunicationSkills";
import GeneralPhysics from "./CoursePages/GeneralPhysics";
import CalculusAnalysis from "./CoursePages/CalculusAnalysis";
import BasicElectronics from "./CoursePages/BasicElectronics";
import BasicMechanics from "./CoursePages/BasicMechanics";
import PhysicalChemistry from "./CoursePages/PhysicalChemistry";
import InformationTechnology from "./CoursePages/InformationTechnology";
import CalculusSevVariables from "./CoursePages/CalculusSevVariables";

/* apparently, exporting the course components from an external file causes vite 
hmr to update infinitely. the reason still unclear for now. so we're exporting the 
components from this file rather
*/

export const CoursesComponents = [
  { name: "Algebra", element: <Algebra done={false} /> },
  { name: "Applied Electricity", element: <AppliedElectricity /> },
  { name: "Inorganic Chemistry", element: <InorganicChemistry /> },
  { name: "Technical Drawing", element: <TechnicalDrawing /> },
  {
    name: "Practical Chemistry",
    element: <PracticalChemistry />,
  },
  { name: "Organic chemistry for engineers", element: <OrganicChemistry /> },
  { name: "Communication Skills I & II", element: <CommunicationSkills /> },
  { name: "General Physics", element: <GeneralPhysics /> },
  {
    name: "Calculus with analysis",
    element: <CalculusAnalysis done={true} />,
  },
  { name: "Basic Mechanics", element: <BasicMechanics /> },
  { name: "Physical Chemistry for engineers", element: <PhysicalChemistry /> },
  { name: "Basic Electronics", element: <BasicElectronics /> },
  {
    name: "Introduction to Information Technology",
    element: <InformationTechnology />,
  },
  {
    name: "Calculus of Several Variables",
    element: <CalculusSevVariables />,
  },
];

function CourseDetails() {
  const { formattedParams } = useFormattedParams();
  const renderElement = CoursesComponents.find(
    (item) => item.name.toLowerCase() === formattedParams
  );

  const renderElementIndex = CoursesComponents.findIndex(
    (course) => course.name === renderElement?.name
  );
  const next =
    renderElementIndex === CoursesComponents.length - 1
      ? null
      : renderElementIndex + 1;
  const prev = renderElementIndex === 0 ? null : renderElementIndex - 1;

  if (renderElement)
    return (
      <>
        {renderElement.element}
        <NextAndPrevContainer>
          {prev !== null && (
            <PrevContent elementName={CoursesComponents[prev].name} />
          )}
          {next !== null && (
            <NextContent elementName={CoursesComponents[next].name} />
          )}
        </NextAndPrevContainer>
      </>
    );

  return null;
}

const NextAndPrevContainer = styled.section`
  width: 100%;
  padding: 1em;
  flex-direction: column;
  gap: 1rem;
  display: flex;

  @media (min-width: 40em) {
    flex-direction: row;
  }
`;

export default CourseDetails;
