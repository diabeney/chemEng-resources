import { useParams } from "react-router-dom";
function useFormattedParams() {
  const { id } = useParams();
  const formatParams = (param: string) =>
    param.replaceAll("-", " ").toUpperCase();
  const formattedParams = formatParams(id!);

  return { formattedParams };
}

export default useFormattedParams;
