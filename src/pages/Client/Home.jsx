import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { Flor } from "../../components/Client/Flor/Flor";
import Navbar from "../../components/Client/Navbar/Navbar";
import Hero from "../../components/Client/Hero/Hero";
import Mision from "../../components/Client/Mision/Mision";
import About from "../../components/Client/About/About";
import "./Home.scss";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(".content", {
      x: () => scrollPosition * 0.5,
      y: () => scrollPosition * 0.5,
    });
  }, [scrollPosition]);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Mision />
      <div className="content">
        <Canvas camera={{ position: [5, 12, 12] }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Flor scale={34} position={[-6, 0, 0]} className="model" />
        </Canvas>
      </div>
    </>
  );
};
