import React from 'react'
import "./About.css"
import AboutImg from '../../assets/about_modern.png'
import Info from './Info'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'

function About() {
    return (
        <section className="about section" id='about'>
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My Introduction</span>

            <div className="about_container container grid">
                <motion.img
                    src={AboutImg}
                    alt=""
                    className="about_img"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                />

                <div className="about_data">
                    <Info />

                    <motion.p
                        className="about_description"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        I'm a MERN stack developer with a mechanical engineering background. Passionate about technology, I've shifted into full-stack development, navigating the intersection of creativity and functionality. I have experience developing React projects and web applications.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <ResumeCard />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About