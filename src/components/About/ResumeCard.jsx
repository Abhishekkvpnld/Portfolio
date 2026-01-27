import React from 'react';
import './ResumeCard.css';
import CV from "../../assets/Resume.pdf";

const ResumeCard = () => {
    return (
        <a href={CV} download="Abhishek_KV_Resume.pdf" className="resume_card">
            <div className="resume_icon_box">
                <i className='bx bxs-file-pdf resume_icon'></i>
            </div>

            <div className="resume_details">
                <h3 className="resume_filename">Abhishek_Resume.pdf</h3>
                <span className="resume_size">1.2 MB • Click to Download</span>
            </div>

            <div className="resume_download_icon">
                <i className='bx bx-download'></i>
            </div>

            {/* Hover Glow Effect */}
            <div className="resume_glow"></div>
        </a>
    );
};

export default ResumeCard;
