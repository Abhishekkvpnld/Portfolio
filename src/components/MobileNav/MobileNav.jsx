import React, { useState } from 'react'
import './MobileNav.css'
import { motion, AnimatePresence } from 'framer-motion'

const MobileNav = () => {
    const [activeNav, setActiveNav] = useState('#home');
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        hidden: {
            y: 100,
            opacity: 0,
            scale: 0.8,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        },
        exit: {
            y: 100,
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    return (
        <>
            {/* Toggle Button (FAB) */}
            <div className="mobile__nav-toggle" onClick={toggleMenu}>
                <motion.i
                    className={isOpen ? 'uil uil-times' : 'uil uil-apps'}
                    key={isOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                ></motion.i>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile__nav"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="mobile__nav-menu">
                            <div className="mobile__nav-close" onClick={() => setIsOpen(false)}>
                                <i className='uil uil-angle-down'></i>
                            </div>

                            <ul className="mobile__nav-list">
                                <li className="mobile__nav-item">
                                    <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'mobile__nav-link active-link' : 'mobile__nav-link'}>
                                        <i className='uil uil-estate mobile__nav-icon'></i>
                                        <span className="mobile__nav-name">Home</span>
                                    </a>
                                </li>

                                <li className="mobile__nav-item">
                                    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'mobile__nav-link active-link' : 'mobile__nav-link'}>
                                        <i className='uil uil-user mobile__nav-icon'></i>
                                        <span className="mobile__nav-name">About</span>
                                    </a>
                                </li>

                                <li className="mobile__nav-item">
                                    <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'mobile__nav-link active-link' : 'mobile__nav-link'}>
                                        <i className='uil uil-file-alt mobile__nav-icon'></i>
                                        <span className="mobile__nav-name">Skills</span>
                                    </a>
                                </li>

                                <li className="mobile__nav-item">
                                    <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'mobile__nav-link active-link' : 'mobile__nav-link'}>
                                        <i className='uil uil-briefcase-alt mobile__nav-icon'></i>
                                        <span className="mobile__nav-name">Services</span>
                                    </a>
                                </li>

                                <li className="mobile__nav-item">
                                    <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'mobile__nav-link active-link' : 'mobile__nav-link'}>
                                        <i className='uil uil-scenery mobile__nav-icon'></i>
                                        <span className="mobile__nav-name">Projects</span>
                                    </a>
                                </li>

                                <li className="mobile__nav-item">
                                    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'mobile__nav-link active-link' : 'mobile__nav-link'}>
                                        <i className='uil uil-message mobile__nav-icon'></i>
                                        <span className="mobile__nav-name">Contact</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default MobileNav
