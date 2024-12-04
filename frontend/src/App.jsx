import React, {useState} from "react";
import './App.css';
import { Outlet } from "react-router-dom";
import Navitems from "./components/NavItems";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navitems />
      {/* code bootstrap qui affiche le contenu maximale  */}
      <div className="min-vh-100">
        <Outlet/>
      </div>
    </>
  )
}

export default App;