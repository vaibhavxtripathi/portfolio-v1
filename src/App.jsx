import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact/>
    </>
  );
}

export default App;
