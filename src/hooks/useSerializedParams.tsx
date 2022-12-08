import { useParams } from "react-router-dom";
function useSerializedParams() {
  const { id } = useParams();
  const serializeParams = (param: string) =>
    param.replaceAll("-", " ").toUpperCase();
  const serializedParams = serializeParams(id!);

  return { serializedParams };
}

export default useSerializedParams;
