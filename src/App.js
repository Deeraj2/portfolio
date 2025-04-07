import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Background from "./components/Backgorund";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={toggle ? "lightMode" : "darkMode"}>
      <Header toggle={toggle} setToggle={setToggle} />

      <Experience />
      <Background />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
