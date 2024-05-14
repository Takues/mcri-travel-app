import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ExamplePage from "./pages/ExamplePage/ExamplePage";
import PackingPage from "./pages/PakingPage/PakingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "example",
    element: <ExamplePage />,
  },
  {
    path: "packing",
    element: <PackingPage />,
  },
  // {
  //   path: "flights",
  //   element: <FlightInfo />,
  // },
  // {
  //   path: "sightseeing",
  //   element: <Sightseeing />,
      // },
]);
