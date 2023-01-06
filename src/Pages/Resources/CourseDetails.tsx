import { CoursesComponents } from "../../constants/data";
import useFormattedParams from "../../hooks/useFormattedParams";
import NextContent from "../../components/NextContent";
import PrevContent from "../../components/PrevContent";
import styled from "styled-components";

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
  gap: 1em;
  display: flex;

  @media (min-width: 40em) {
    flex-direction: row;
  }
`;

export default CourseDetails;
