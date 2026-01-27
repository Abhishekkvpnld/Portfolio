import React, { Suspense, lazy } from 'react';
import './App.css';
import Preloader from './components/Preloader/Preloader';

// Lazy-loaded components
const Header = lazy(() => import('./components/Header/Header'));
const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const Skills = lazy(() => import('./components/Skills/Skills'));
// Services component commented out or removed? User didn't mention it recently, but it was in the list.
const Services = lazy(() => import('./components/Services/Services'));
const Qualification = lazy(() => import('./components/Qualification/Qualification'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Scrollup = lazy(() => import('./components/Scrollup/Scrollup'));

function App() {
  return (
    <>
      <Preloader />
      <div className="App">
        <Suspense fallback={<div />}>
          <Header />
          <main className="main">
            <Home />
            <About />
            <Skills />
            <Services />
            <Qualification />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <Scrollup />
        </Suspense>
      </div>
    </>
  );
}

export default App;
