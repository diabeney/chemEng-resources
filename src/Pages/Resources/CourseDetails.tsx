import useFormattedParams from "../../hooks/useFormattedParams";
import Algebra from "./CoursePages/Algebra";
import AppliedElectricity from "./CoursePages/AppliedElectricity";
import InorganicChemistry from "./CoursePages/InorganicChemistry";
import GeneralPhysics from "./CoursePages/GeneralPhysics";
import BasicElectronics from "./CoursePages/BasicElectronics";
import CalculusAnalysis from "./CoursePages/CalculusAnalysis";
import CommunicationSkills from "./CoursePages/CommunicationSkills";
import OrganicChemistry from "./CoursePages/OrganicChemistry";
import PhysicalChemistry from "./CoursePages/PhysicalChemistry";
import PracticalChemistry from "./CoursePages/PracticalChemistry";
import TechnicalDrawing from "./CoursePages/TechnicalDrawing";
import InformationTechnology from "./CoursePages/InformationTechnology";
import BasicMechanics from "./CoursePages/BasicMechanics";
import styled from "styled-components";
import NextContent from "../../components/NextContent";
import PrevContent from "../../components/PrevContent";

type CoursesComponentProps = {
  name: string;
  element: JSX.Element;
}[];
export const CoursesComponents: CoursesComponentProps = [
  { name: "Algebra", element: <Algebra done={true} /> },
  { name: "Applied Electricity", element: <AppliedElectricity /> },
  {
    name: "Inorganic Chemistry for Engineers",
    element: <InorganicChemistry />,
  },
  { name: "Technical Drawing", element: <TechnicalDrawing /> },
  {
    name: "Practical Chemistry",
    element: <PracticalChemistry />,
  },
  { name: "Organic chemistry for engineers", element: <OrganicChemistry /> },
  { name: "Communication Skills I & II", element: <CommunicationSkills /> },
  { name: "General Physics", element: <GeneralPhysics /> },
  { name: "Calculus with analysis", element: <CalculusAnalysis /> },
  { name: "Basic Mechanics", element: <BasicMechanics /> },
  { name: "Physical Chemistry for engineers", element: <PhysicalChemistry /> },
  { name: "Basic Electronics", element: <BasicElectronics /> },
  {
    name: "Introduction to Information Technology",
    element: <InformationTechnology />,
  },
];

function CourseDetails() {
  const { formattedParams } = useFormattedParams();
  const renderElement = CoursesComponents.find(
    (item) => item.name.toLowerCase() === formattedParams
  );

  const renderElementIndex = CoursesComponents.findIndex((course) => {
    return course.name === renderElement?.name;
  });

  const next =
    renderElementIndex === CoursesComponents.length - 1
      ? 0
      : renderElementIndex + 1;
  const prev =
    renderElementIndex === 0
      ? CoursesComponents.length - 1
      : renderElementIndex - 1;

  if (renderElement)
    return (
      <>
        {renderElement.element}
        <NextAndPrevContainer>
          <PrevContent elementName={CoursesComponents[prev].name} />
          <NextContent elementName={CoursesComponents[next].name} />
        </NextAndPrevContainer>
      </>
    );

  return null;
}

const NextAndPrevContainer = styled.section`
  width: 100%;
  padding: 1em;
  flex-direction: column;
  gap: 1em;
  display: flex;
  justify-content: space-between;

  @media (min-width: 40em) {
    flex-direction: row;
  }
`;

export default CourseDetails;
