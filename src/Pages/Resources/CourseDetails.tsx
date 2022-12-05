import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();
  return <h2>This is {id}</h2>;
}

export default CourseDetails;
