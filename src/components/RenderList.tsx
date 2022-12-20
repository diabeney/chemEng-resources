import { Link } from "react-router-dom";
import { Paragraph } from "../styles/reusableComponents";

type DataProps = {
  data: string[];
};

function RenderList({ data }: DataProps) {
  if (!data.length)
    return (
      <Paragraph style={{ textAlign: "center" }}>No search content</Paragraph>
    );
  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item}>
            <Link to={`resources/${item.replaceAll(" ", "-").toLowerCase()}`}>
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default RenderList;
