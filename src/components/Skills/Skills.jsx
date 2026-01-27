import React, { useState } from 'react'
import './Skills.css'
import { skillsData } from './SkillsData';
import { motion, AnimatePresence } from 'framer-motion';

function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="skills section" id='skills'>
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical Level</span>

      <div className="skills_container container">
        {/* Category Tabs */}
        <div className="skills_tabs">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`skills_tab ${activeTab === index ? 'skills_active-tab' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {category.title}
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="skills_content-area">
          <motion.div
            className="skills_grid"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {skillsData[activeTab].skills.map((skill, index) => (
              <motion.div
                className="skill_card"
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="skill_icon-box">
                  <i className={`${skill.icon} skill_icon`}></i>
                </div>
                <h3 className="skill_name">{skill.name}</h3>
                <span className="skill_level">{skill.level}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills