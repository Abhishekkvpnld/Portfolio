import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services'
import Qualification from './components/Qualification/Qualification';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Scrollup from './components/Scrollup/Scrollup';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">

        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Projects/>
        <Contact />

      </main>

      <Footer />
      <Scrollup />
    </div>
  );
}

export default App;
