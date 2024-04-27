import React, { useEffect } from 'react'
import './Skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Skills() {

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <section className="skills section" id='skills' data-Aos='fade-up'>
      <h2 className="section_title" >Skills</h2>
      <span className="section_subtitle">My Technical Level</span>

      <div className="skills_container container grid">
        <Frontend />

        <Backend />
      </div>
    </section>
  )
}

export default Skills