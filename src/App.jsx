import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

/** Query  */
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./pages/Home";
import SuperHeores from "./pages/SuperHeroes";
import RQHeroes from "./pages/RQHeroes";
import MainLayout from "./layout/Main.layout";
import HeroDetails from "./pages/HeroDetails";
import DynamicParalle from "./pages/DynamicParalle";
import PaginationQueries from "./pages/PaginationQueries";
const App = () => {
  const ids=[1,2]
  const queryClient = new QueryClient();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/superherores" element={<SuperHeores />} />
          <Route path="/rq-heroes" element={<RQHeroes />} />
          <Route path="/hero-details/:id" element={<HeroDetails />} />
          <Route
            path="/dynamicParalleQueries"
            element={<DynamicParalle ids={ids} />}
          />
          <Route
            path="/pagination-query"
            element={<PaginationQueries />}
          />
        </Route>
      </>
    )
  );
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
