import Algebra from "../Pages/Resources/CoursePages/Algebra";
import AppliedElectricity from "../Pages/Resources/CoursePages/AppliedElectricity";
import InorganicChemistry from "../Pages/Resources/CoursePages/InorganicChemistry";
import GeneralPhysics from "../Pages/Resources/CoursePages/GeneralPhysics";
import BasicElectronics from "../Pages/Resources/CoursePages/BasicElectronics";
import CalculusAnalysis from "../Pages/Resources/CoursePages/CalculusAnalysis";
import CommunicationSkills from "../Pages/Resources/CoursePages/CommunicationSkills";
import OrganicChemistry from "../Pages/Resources/CoursePages/OrganicChemistry";
import PhysicalChemistry from "../Pages/Resources/CoursePages/PhysicalChemistry";
import PracticalChemistry from "../Pages/Resources/CoursePages/PracticalChemistry";
import TechnicalDrawing from "../Pages/Resources/CoursePages/TechnicalDrawing";
import InformationTechnology from "../Pages/Resources/CoursePages/InformationTechnology";
import BasicMechanics from "../Pages/Resources/CoursePages/BasicMechanics";

type CoursesComponentProps = {
  name: string;
  element: JSX.Element;
}[];

export const contentsList = ["Topics", "Popular Books", "Useful Resources"];

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
];
