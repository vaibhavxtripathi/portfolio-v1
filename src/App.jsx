import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <ProjectSection />
      <About/>
      <Contact/>
    </>
  );
}

export default App;
