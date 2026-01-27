import React from 'react';
import { motion } from 'framer-motion';

function Info() {
    return (
        <div className="about_info grid">
            <motion.div
                className="about_box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
            >
                <i className='bx bx-award about_icon'></i>
                <h3 className="about_title">Experience</h3>
                <span className="about_subtitle">Fresher</span>
            </motion.div>

            <motion.div
                className="about_box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
            >
                <i className='bx bx-briefcase about_icon'></i>
                <h3 className="about_title">Completed</h3>
                <span className="about_subtitle">10+ Projects</span>
            </motion.div>

            <motion.div
                className="about_box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
            >
                <i className='bx bx-support about_icon'></i>
                <h3 className="about_title">Support</h3>
                <span className="about_subtitle">24/7 Available</span>
            </motion.div>
        </div>
    )
};

export default Info;