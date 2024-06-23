import { NavLink } from "react-router-dom";
const Navbar = () => {
  const style = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "40vw",
  };
  return (
    <nav style={style}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/superherores">Super Heroes</NavLink>
      <NavLink to="/rq-heroes">Rq Heores</NavLink>
      <NavLink to="/dynamicParalleQueries">Dynamic Parallel Queries</NavLink>
      <NavLink to="/pagination-query">paginated Queries</NavLink>
    </nav>
  );
};
export default Navbar;
