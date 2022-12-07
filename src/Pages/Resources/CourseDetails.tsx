import { useParams } from "react-router-dom";
import styled from "styled-components";

function CourseDetails() {
  const { id } = useParams();

  return <h2>This is {id?.replaceAll("-", " ")}</h2>;
}

export default CourseDetails;