import React from "react";
import "./styles/App.css";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";
import About from "./components/About";
import TechStacks from "./components/TechStacks";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <ProjectSection />
        <TechStacks />
        <About />
        <Contact />
    </>
  );
}

export default App;
