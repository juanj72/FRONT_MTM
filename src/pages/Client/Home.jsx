import React, { useEffect, useState } from "react";
import Navbar from "../../components/Client/Navbar/Navbar";
import Hero from "../../components/Client/Hero/Hero";
import Mision from "../../components/Client/Mision/Mision";
import About from "../../components/Client/About/About";
import Galeria from "../../components/Client/Galeria/Galeria";
import Card from "../../components/Client/Card/Card";
import './Home.scss';

export const Home = () => {

  return (
    <> 
      <Navbar />
      <Hero />
      <About />
      <Card />
      <Mision />
      <Galeria />
    </>
  );
};
