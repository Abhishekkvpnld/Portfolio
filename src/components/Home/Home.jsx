import React, { useEffect } from 'react'
import './Home.css'
import Social from '../Home/Social'
import Data from './Data'
import ScrollDown from './ScrollDown'
import Aos from 'aos';
import 'aos/dist/aos.css'


function Home() {

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false
    });
  }, [])

  return (
    <section className='home section home_section' id='home'>
      <div className="home_container container grid">
        <div className="home_content grid">

          <div className="home_social-wrapper" data-aos="fade-right" data-aos-delay="200">
            <Social />
          </div>

          <div className="home_img" data-aos="zoom-in" data-aos-delay="400"></div>

          <div className="home_data-wrapper" data-aos="fade-up" data-aos-delay="600">
            <Data />
          </div>

        </div>

        <div data-aos="fade-up" data-aos-delay="800">
          <ScrollDown />
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="home_decorations">
        {/* Soft Blobs */}
        <div className="decoration decoration-1"></div>
        <div className="decoration decoration-2"></div>
        <div className="decoration decoration-3"></div>

        {/* Floating Icons */}
        <i className='bx bxl-react home_floating-icon icon-react'></i>
        <i className='bx bxl-javascript home_floating-icon icon-js'></i>
        <i className='bx bxl-nodejs home_floating-icon icon-node'></i>
        <i className='bx bxl-html5 home_floating-icon icon-html'></i>
        <i className='bx bxl-css3 home_floating-icon icon-css'></i>
        <i className='bx bxl-mongodb home_floating-icon icon-mongo'></i>
        <i className='bx bxl-git home_floating-icon icon-git'></i>

      </div>
    </section>
  )
}

export default Home