import React from "react";



// Importation des composants
import Banner from "../components/Banner";
import HouseList from "../components/HouseList";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";



const Home = () => {
  return (
    <div className="min-h-[1800px]">
      <Banner />
      <HouseList />
      <Login />
      <Signup />
      <About />
    </div>
  )
};

export default Home;
