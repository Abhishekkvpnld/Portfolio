import React, { Suspense, lazy } from 'react';
import './App.css';
import Loading from './components/Loading/Loading';

// Lazy-loaded components
const Header = lazy(() => import('./components/Header/Header'));
const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Services = lazy(() => import('./components/Services/Services'));
const Qualification = lazy(() => import('./components/Qualification/Qualification'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Scrollup = lazy(() => import('./components/Scrollup/Scrollup'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
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
  );
}

export default App;
