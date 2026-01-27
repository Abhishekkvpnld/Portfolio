import React from 'react';

function SkillCategory({ title, skills }) {
    return (
        <div className="skills_content" data-aos="fade-up">
            <h3 className="skills_title">{title}</h3>
            <div className="skills_box">
                <div className="skills_group">
                    {skills.map((skill, index) => (
                        <div className="skills_data" key={index} data-aos="zoom-in" data-aos-delay={index * 50}>
                            <i className={skill.icon}></i>
                            <div>
                                <h3 className="skills_name">{skill.name}</h3>
                                {/* <span className="skills_level">{skill.level}</span> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SkillCategory;
