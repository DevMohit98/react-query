import { useQueries } from "@tanstack/react-query";
import { fetcHSuperHeroeDetails } from "../api";
const DynamicParalle = ({ids}) => {
  const combinedQueries = useQueries({
    queries: ids.map((id) => ({
      queryKey: ['superHero', id],
      queryFn: () => fetcHSuperHeroeDetails(id),
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      }
    },
  });
  console.log(combinedQueries);
  return <h1>Dynamic Parallel Queries</h1>;
};
export default DynamicParalle;
