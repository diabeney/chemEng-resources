type ListProps = {
  data: string[];
};
function List({ data }: ListProps) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
