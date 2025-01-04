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
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import About from "./pages/About.jsx";

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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/about",
        element: <About />,
      }

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
