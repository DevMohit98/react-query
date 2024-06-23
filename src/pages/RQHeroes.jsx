import { useState } from "react";
import { fetcHSuperHeroes } from "../api";
import useQueryHook from "../hook/query/useQueryHook";
import { NavLink } from "react-router-dom";
import { addSuperHeroMutation } from "../hook/mutation";
const RQHeroes = () => {
  const [addhero, setAddHero] = useState({
    name: "",
    alterego: "",
  });
  const {
    data: superherores,
    error,
    isLoading,
    isError,
    isFetching,
    refetch, // when on button click you want to fetch the data
  } = useQueryHook(["superHeroes"], fetcHSuperHeroes);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddHero((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // add hero muatation
  const { mutate } = addSuperHeroMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(addhero);
    setAddHero({
      name: "",
      alterego: "",
    });
  };
  if (isLoading || isFetching) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something we wrong {error}</h1>;
  }
  return (
    <nav>
      {/* {superherores?.data.map((superhero, index) => {
        return <h1 key={index}>{superhero.name}</h1>;
      })} */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter super hero name"
          value={addhero.name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter alterego name"
          value={addhero.alterego}
          name="alterego"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      {superherores?.data.map((superhero, index) => {
        return (
          <NavLink key={index} to={`/hero-details/${superhero.id}`}>
            {superhero.name}
          </NavLink>
        );
      })}
      <button onClick={refetch}>Fetch Heroes</button>
    </nav>
  );
};
export default RQHeroes;
