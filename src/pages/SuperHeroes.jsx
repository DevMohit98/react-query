import axios from "axios";
import { useEffect, useState } from "react";
const SuperHeores = () => {
  const [superHeroes, setSuperHeroes] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchSuperHeroes = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:4000/superheroes");
      console.log(response);
      setSuperHeroes(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchSuperHeroes();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {superHeroes.map((superhero, index) => {
        return (
          <div key={index}>
            <h1>Name is {superhero.name}</h1>
          </div>
        );
      })}
    </>
  );
};
export default SuperHeores;
