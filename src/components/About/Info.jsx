import React from 'react'

function Info() {
    return (
        <div className="about_info grid">

            <div className="about_box"  data-aos='fade-left'>
                <i class='bx bx-award about_icon'></i>
                <h3 className="about_title">Experience</h3>
                <span className="about_subtitle">Fresher</span>
            </div>

            <div className="about_box" data-aos='zoom-in-down'>
            <i class='bx bx-briefcase about_icon'></i>
                <h3 className="about_title">completed</h3>
                <span className="about_subtitle">5+ projects</span>
            </div>

            <div className="about_box" data-aos='fade-right'>
            <i class='bx bx-support about_icon'></i>
                <h3 className="about_title">support</h3>
                <span className="about_subtitle">24/7 </span>
            </div>

        </div>
    )
}

export default Info