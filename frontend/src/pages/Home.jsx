import React from "react";



// Importation des composants
import Banner from "../components/Banner";
import HouseList from "../components/HouseList";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="min-h-[1800px]">
      <Banner />
      <HouseList />
    </div>
  )
};

export default Home;
