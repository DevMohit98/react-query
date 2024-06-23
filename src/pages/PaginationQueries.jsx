import useQueryHook from "../hook/query/useQueryHook";
import { fetchColors } from "../api";
import { useState } from "react";
const PaginationQueries = () => {
    const queryprops={
        keepPreviousData:true
    }
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(2);
  const {
    isLoading,
    error,
    data: colors,
  } = useQueryHook(["colors", page, perPage], () => fetchColors(page, perPage), queryprops);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>something went wrong</h1>;
  }
  console.log(colors?.data.data);
  return (
    <>
      {colors?.data.data.map((color, index) => {
        return <h1 key={index}>{color.color}</h1>;
      })}
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      <button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
        Previous
      </button>
    </>
  );
};
export default PaginationQueries;
