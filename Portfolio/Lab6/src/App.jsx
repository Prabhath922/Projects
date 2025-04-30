import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import DarkMode from './components/DarkMode'
import Skills from './components/Skills'
import SkillsSearch from './components/SkillsSearch';
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header/>
      <DarkMode/>
    <div id="home">
      <Home/>
    </div> 
     <div id="about">
      <About />
    </div>
    <div id='skills'>
    <Skills/>
    <SkillsSearch/>
    </div>
    <div id="projects">
      <Projects />
    </div> 
    <div id="footer">
      <Footer />
    </div>
  </main>
  )
}

export default App
