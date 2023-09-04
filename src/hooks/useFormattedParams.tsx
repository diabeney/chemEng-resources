import { useParams } from "react-router-dom";
function useFormattedParams() {
  const { id, year } = useParams();
  const formatParams = (param: string) =>
    param.replaceAll("-", " ").toLowerCase();
  const currentCourse = formatParams(id!);
  const activeYear = year || new Date().getFullYear().toString();

  return { currentCourse, activeYear };
}

export default useFormattedParams;
