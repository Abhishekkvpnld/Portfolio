import React from 'react';
import { motion } from 'framer-motion';

function WorksItems({ item }) {
  return (
    <motion.div
      className="works_card"
      key={item.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <img src={item.image} alt="" className='work_img' />

      <div className="work_details">
        <h3 className="work_title">{item.title}</h3>
        <div className="work_buttons">
          <a href={item.code} target="_blank" rel="noopener noreferrer" className="work_button btn-github">
            <i className='bx bxl-github'></i> Code
          </a>
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="work_button btn-demo">
            <i className='bx bx-link-external'></i> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default WorksItems;
