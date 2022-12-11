import useSerializedParams from "../../hooks/useSerializedParams";
import Algebra from "./CoursePages/Algebra";
const values = [{ name: "Algebra", element: <Algebra done={true} /> }];

function CourseDetails() {
  const { serializedParams } = useSerializedParams();
  const renderElement = values.find(
    (item) => item.name.toUpperCase() === serializedParams
  );

  if (renderElement) return renderElement.element;
  return null;
}

export default CourseDetails;
