import { Paragraph } from "../styles/reusableComponents";

type ListProps = {
  data: string[];
};
function List({ data }: ListProps) {
  if (!data.length)
    return (
      <Paragraph style={{ textAlign: "center" }}>No content here </Paragraph>
    );
  return (
    <ul>
      {data.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
