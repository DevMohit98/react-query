import Navbar from "../component/navbar.component";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return(
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default MainLayout;
