import React, { useState } from 'react'
import './Qualification.css'
import { educationData, experienceData } from './QualificationData'
import { motion } from 'framer-motion'

function Qualification() {
    const [toggleState, setToggleState] = useState(1); // 1 = Experience, 2 = Education

    const toggleTab = (index) => {
        setToggleState(index)
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <section className="qualification section  flex items-center justify-center flex-col" id="qualification">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My Journey</span>

            <div className="qualification_container container">

                {/* Modern Toggle Switch */}
                <div className="qualification_tabs">
                    <div
                        className={`qualification_button ${toggleState === 1 ? "qualification_active" : ""}`}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-briefcase-alt qualification_icon"></i>
                        Experience
                    </div>

                    <div
                        className={`qualification_button ${toggleState === 2 ? "qualification_active" : ""}`}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-graduation-cap qualification_icon"></i>
                        Education
                    </div>
                </div>

                <div className="qualification_sections">
                    {/* Experience Content */}
                    {toggleState === 1 && (
                        <motion.div
                            className="qualification_content q_content_active"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {experienceData.map((item, index) => (
                                <motion.div
                                    className="qualification_data"
                                    key={`exp-${index}`}
                                    variants={itemVariants}
                                >
                                    {/* Left Side */}
                                    {index % 2 === 0 ? (
                                        <>
                                            <div className="qualification_card_wrapper">
                                                <h3 className="qualification_title">{item.title}</h3>
                                                <span className="qualification_subtitle">{item.subtitle}</span>
                                                <div className="qualification_calender">
                                                    <i className="uil uil-calendar-alt"></i> {item.date}
                                                </div>
                                                <p className="qualification_desc">{item.description}</p>
                                            </div>

                                            <div>
                                                <span className="qualification_rounder"></span>
                                                <span className="qualification_line"></span>
                                            </div>
                                            <div></div>
                                        </>
                                    ) : (
                                        <>
                                            <div></div>
                                            <div>
                                                <span className="qualification_rounder"></span>
                                                <span className="qualification_line"></span>
                                            </div>
                                            <div className="qualification_card_wrapper">
                                                <h3 className="qualification_title">{item.title}</h3>
                                                <span className="qualification_subtitle">{item.subtitle}</span>
                                                <div className="qualification_calender">
                                                    <i className="uil uil-calendar-alt"></i> {item.date}
                                                </div>
                                                <p className="qualification_desc">{item.description}</p>
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* Education Content */}
                    {toggleState === 2 && (
                        <motion.div
                            className="qualification_content q_content_active"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {educationData.map((item, index) => (
                                <motion.div
                                    className="qualification_data"
                                    key={`edu-${index}`}
                                    variants={itemVariants}
                                >
                                    {index % 2 === 0 ? (
                                        <>
                                            <div className="qualification_card_wrapper">
                                                <h3 className="qualification_title">{item.title}</h3>
                                                <span className="qualification_subtitle">{item.subtitle}</span>
                                                <div className="qualification_calender">
                                                    <i className="uil uil-calendar-alt"></i> {item.date}
                                                </div>
                                                <p className="qualification_desc">{item.description}</p>
                                            </div>

                                            <div>
                                                <span className="qualification_rounder"></span>
                                                <span className="qualification_line"></span>
                                            </div>
                                            <div></div>
                                        </>
                                    ) : (
                                        <>
                                            <div></div>
                                            <div>
                                                <span className="qualification_rounder"></span>
                                                <span className="qualification_line"></span>
                                            </div>
                                            <div className="qualification_card_wrapper">
                                                <h3 className="qualification_title">{item.title}</h3>
                                                <span className="qualification_subtitle">{item.subtitle}</span>
                                                <div className="qualification_calender">
                                                    <i className="uil uil-calendar-alt"></i> {item.date}
                                                </div>
                                                <p className="qualification_desc">{item.description}</p>
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Qualification