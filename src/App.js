import React from 'react'
import "./index.css";
import Header from './components/Header'
import Background from './components/Backgorund';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Header />
        <Background />
        <Skills />
        <Projects />
        <Footer />
    </div>
  )
}

export default App