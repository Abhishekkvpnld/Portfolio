import React, { useState } from 'react'
import './Qualification.css'
import download from "../../assets/download.png"
import git from '../../assets/logo_github_icon_143196.png'
import linkedin from '../../assets/linkedin-icon-2048x2048-ya5g47j2.png'
import js from "../../assets/1073596.png"
import react from "../../assets/png-clipart-react-javascript-library-web-development-vue-js-funding-icon-logo-symmetry.png"



function Qualification() {

    const [ToggleState, setToggleState] = useState(null)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My Journey</span>

            <div className="qualification_container container">

                <div className="qualification_tabs ">
                    <button className={ToggleState === 1 ? "qualification_button qualification-active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification_icon"></i>
                        Education
                    </button>

                    <button className={ToggleState === 2 ? "qualification_button qualification-active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(2)}>

                        <i className="uil uil-briefcase-alt qualification_icon"> </i>
                        Experience
                    </button>
                </div>


                <div className="qualification_sections">

                    {/* <div className={ToggleState === 1 || ToggleState === null ? "qualification_content qualification_content-active" : "qualification_content"}> */}

                    {/* <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Web design</h3>
                                <span className="qualification_subtitle">institute---</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i>2023 - present
                                </div>
                            </div>

                            <div>

                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>

                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">designer</h3>
                                <span className="qualification_subtitle">institute---</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i>2020-2021
                                </div>

                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Web development</h3>
                                <span className="qualification_subtitle">institute---</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i>2021-2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <div className="qualification_line"></div>

                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">ui/ux Expert</h3>
                                <span className="qualification_subtitle">institute---</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i>2022-2023
                                </div>

                            </div>
                        </div> */}

                    <div className={ToggleState === 1 || ToggleState === null ? "qualification_content qualification_content-active" : "qualification_content"} >
                        <div className="timeline">
                            <div className="qualification-container left-container">
                                <img src={download} alt="img" className='img1' />
                                <div className="text-box">
                                    <h4>Govt. College of Engineering Kannur</h4>
                                    <small> <i className="uil uil-calendar-alt"></i>2020-23</small>
                                    <p>Achieved a Bachelor of Technology (B.Tech) degree in Mechanical Engineering in 2023, marking the culmination of a dedicated and specialized educational journey.</p>
                                    <span class='left-container-arrow'></span>
                                </div>

                            </div>


                            <div className="qualification-container right-container">
                                <img src={git} alt="img" className='img2' />

                                <div className="text-box">
                                    <h4>Govt. Polytechnic College Mattannur</h4>
                                    <small> <i className="uil uil-calendar-alt"></i>2017-20</small>
                                    <p>Attained a diploma in Mechanical Engineering in the year 2020, showcasing expertise and proficiency in the field.</p>
                                    <span class='right-container-arrow'></span>
                                </div>
                            </div>

                            <div className="qualification-container left-container">
                                <img src={react} alt="img" className='img3' />
                                <div className="text-box">
                                    <h4>KPC Higher Secondary School Pattannur</h4>
                                    <small> <i className="uil uil-calendar-alt"></i>2015-17</small>
                                    <p>Completed +2 education in 2017, further solidifying academic accomplishments and laying the groundwork for future pursuits.</p>
                                    <span class='left-container-arrow'></span>
                                </div>
                            </div>

                            <div className="qualification-container right-container">
                                <img src={linkedin} alt="img" className='img4' />
                                <div className="text-box">
                                    <h4>Koodali Higher Secondary School</h4>
                                    <small> <i className="uil uil-calendar-alt"></i>2014-15</small>
                                    <p>Successfully completed 10th standard in the year 2015, showcasing a foundation of academic achievement and commitment.</p>
                                    <span className='right-container-arrow'></span>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* </div> */}


                    <div className={ToggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content "}  >

                        {/* <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Web design</h3>
                            <span className="qualification_subtitle">institute---</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>2023 - present
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>

                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">designer</h3>
                            <span className="qualification_subtitle">institute---</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>2020-2021
                            </div>

                        </div>
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Web development</h3>
                            <span className="qualification_subtitle">institute---</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i>2021-2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <div className="qualification_line"></div>

                        </div>
                    </div>  */}

                        <div className="timeline2 ">
                            
                            <div className="qualification-container left-container">
                                <img src={js} alt="img" className='img5' />
                                <div className="text-box">
                                    <h4>Fresher</h4>
                                    <small>present</small>
                                    <p>As a recent graduate and aspiring professional, I bring fresh perspectives and a passion for learning to contribute effectively in the dynamic and responsive web-development</p>
                                    <span className='left-container-arrow'></span>
                                </div>
                            </div>


                            <div className="qualification-container right-container">
                                <img src={react} alt="img" className='img6' />
                                <div className="text-box">
                                    <p> actively exploring job opportunities to apply academic knowledge, develop practical skills, and contribute effectively to a professional setting.</p>
                                    <span class='right-container-arrow'></span>
                                </div>
                            </div>

                            {/* <div className="qualification-container left-container">
                            <img src="about.jpg" alt="img" className='img7' />
                            <div className="text-box">
                                <h4>school name</h4>
                                <small>date</small>
                                <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality,</p>
                                <span class='left-container-arrow'></span>
                            </div>
                        </div> */}

                            {/* <div className="qualification-container right-container">
                            <img src="./download.png" alt="img" className='img8' />
                            <div className="text-box">
                                <h4>school name</h4>
                                <small>date</small>
                                <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality,</p>
                                <span class='right-container-arrow'></span>
                            </div>
                        </div> */}
                        </div>

                    </div>

                </div>
            </div>
        </section>

    )
}

export default Qualification