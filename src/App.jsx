import "./styles/App.css";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import TechStacks from "./components/TechStacks";
import Navbar from "./components/Navbar";
import React, { Suspense } from "react";

const ProjectSection = React.lazy(() => import("./components/ProjectSection"));

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<h1>Loading...</h1>}>
        <ProjectSection />
      </Suspense>
      <TechStacks />
      <About />
      <Contact />
    </>
  );
}

export default App;
