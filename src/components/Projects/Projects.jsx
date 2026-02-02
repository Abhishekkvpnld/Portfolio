import React from 'react'
import './Projects.css'
import Works from './Works'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <motion.section
      className="work_section  flex items-center justify-center flex-col"
      id="project"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">Most recent work</span>
      <Works />
    </motion.section>
  )
}

export default Projects