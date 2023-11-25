import React, { useEffect } from 'react'
import './Projects.css'
import Works from './Works' 
import Aos from 'aos';
import 'aos/dist/aos.css'

function Projects() {

useEffect(()=>{
Aos.init({duration:200});
},[])

  return (
    <section className="work_section" id="project" data-Aos='zoom-in'>
        <h2 className="section_title">Projects</h2>
    <span className="section_subtitle">Most recent work</span>
    <Works/>
    </section>
  )
}

export default Projects