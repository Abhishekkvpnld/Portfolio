import React, { useEffect } from 'react'
import './Home.css'
import Social from '../Home/Social'
import Data from './Data'
import ScrollDown from './ScrollDown'
import Aos from 'aos';
import 'aos/dist/aos.css'


function Home() {

useEffect(()=>{
Aos.init({duration:500});
},[])

  return (
    <section className='home section home_section' id='home'>
      <div className="home_container container grid">
        <div className="home_content grid">
         
          <Social/>
          <div className="home_img"> </div>
          <Data />

        </div>

       <ScrollDown/>
      </div>
    </section>
  )
}

export default Home