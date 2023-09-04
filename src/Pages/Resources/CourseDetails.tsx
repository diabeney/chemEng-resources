import useFormattedParams from "../../hooks/useFormattedParams";
import NextContent from "../../components/NextContent";
import PrevContent from "../../components/PrevContent";
import styled from "styled-components";
import CoursePage from "../../components/CoursePage";
import { useOutletContext } from "react-router-dom";
import { UpdatedCourse } from "../../types/types";

type OutletPropsContext = {
  courses: UpdatedCourse;
};

function CourseDetails() {
  const { currentCourse, activeYear } = useFormattedParams();
  const { courses } = useOutletContext<OutletPropsContext>();

  if (activeYear) {
    const activeYearCourses =
      courses[activeYear as keyof UpdatedCourse].courses;

    const renderElement = activeYearCourses.find(
      (item) => item.course_title.toLowerCase() === currentCourse
    );

    const renderElementIndex = activeYearCourses.findIndex(
      (course) => course.course_title === renderElement?.course_title
    );
    const next =
      renderElementIndex === activeYearCourses.length - 1
        ? null
        : renderElementIndex + 1;
    const prev = renderElementIndex === 0 ? null : renderElementIndex - 1;
    return (
      <>
        {renderElement ? (
          <>
            <CoursePage {...renderElement} />
            <NextAndPrevContainer>
              {prev !== null && (
                <PrevContent
                  elementName={activeYearCourses[prev].course_title}
                  year={activeYear}
                />
              )}
              {next !== null && (
                <NextContent
                  year={activeYear}
                  elementName={activeYearCourses[next].course_title}
                />
              )}
            </NextAndPrevContainer>
          </>
        ) : (
          <h1>{currentCourse.toLocaleUpperCase()} has not been updated yet</h1>
        )}
      </>
    );
  }

  return <h1>This course has not been updated yet</h1>;
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
