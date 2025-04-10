import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ListBuyers from "./pages/ListBuyers.jsx";
import VehicleSold from "./pages/vehicleSold.jsx";
import CreateListing from "./pages/createListing.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/buyers",
    element: <ListBuyers />,
  },
  {
    path: "/sold",
    element: <VehicleSold />,
  },
  {
    path: "/create",
    element: <CreateListing />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
