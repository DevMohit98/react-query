import { useQuery } from "@tanstack/react-query";
const useQueryHook = (queryName, queryFn, props) => {
  return useQuery({
    queryKey: queryName,
    queryFn: queryFn,
    ...props,
  });
};
export default useQueryHook;
