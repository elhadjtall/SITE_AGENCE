import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import HouseContextProvider
import { HouseContextProvider } from "./components/HouseContext.jsx";

import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
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
