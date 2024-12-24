import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import HouseContextProvider
import { HouseContextProvider } from "./components/HouseContext.jsx";

// Import des pages
import Home from "./pages/Home.jsx";
import PropertyDetail from "./pages/PropertyDetail.jsx"; // Importez la page PropertyDetail

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/property/:id", // Route pour les détails d'une propriété
        element: <PropertyDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <HouseContextProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </HouseContextProvider>
);
