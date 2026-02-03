import React, { useEffect, useState } from 'react'
import './Services.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Services() {
  const [ToggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, [])

  return (
    <section className="services section" id="services" >
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What i offer</span>

      <div className="services_container container grid"  >
        <div className="services_content"  >
          <div className='services_card-name'>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">Front-End  <br /> Development </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right"></i>
          </span>


          <div className={ToggleState === 1 ? 'services_modal active-modal' : 'services_modal'}>
            <div className="services_modal-content">
              <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services_modal-title"> Front-End Development</h3>
              <p className="services_modal-description">I provide front-end development services, transforming design concepts into interactive and visually appealing websites.focus on modern design trends and a commitment to detail, I bring a versatile skill set to enhance digital interfaces.</p>

              <ul className='services_modal-services grid'>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Creating responsive and user-friendly interfaces.
                  </p>
                </li>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Implementing designs using HTML, CSS, and JavaScript.
                  </p>
                </li>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Utilizing front-end frameworks like React,Bootstrap ect.
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>


        <div className="services_content">
          <div className='services_card-name'>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">Back-End<br /> Development</h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(2)}>View More
            <i className="uil uil-arrow-right"></i>
          </span>

          <div className={ToggleState === 2 ? 'services_modal active-modal' : 'services_modal'}>
            <div className="services_modal-content">
              <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services_modal-title">Back-End Development</h3>
              <p className="services_modal-description">I work on the behind-the-scenes of websites and apps, creating the systems that store and manage data. Using languages like Python or Node.js, I build the engines that make everything run smoothly. </p>

              <ul className='services_modal-services grid'>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Designing and developing server-side logic and applications.
                  </p>
                </li>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Working with server-side language such as Node.js.
                  </p>
                </li>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Managing databases and data storage.
                  </p>
                </li>

              </ul>
            </div>
          </div>

        </div>

        <div className="services_content">
          <div className='services_card-name'>
            <i className="uil uil-edit services_icon"></i>
            <h3 className="services_title">Full-Stack <br />Web Development</h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(3)}>View More
            <i className="uil uil-arrow-right"></i>
          </span>

          <div className={ToggleState === 3 ? 'services_modal active-modal' : 'services_modal'}>

            <div className="services_modal-content">
              <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services_modal-title">Full-Stack Web Development</h3>
              <p className="services_modal-description">
                I specialize in full-stack development, covering both the visible part of websites and the behind-the-scenes functionality. From crafting user interfaces with HTML, CSS, and JavaScript to managing databases and server logic using language like Node.js, I ensure a complete and seamless web experience.</p>

              <ul className='services_modal-services grid'>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Building end-to-end web applications from concept to deployment.
                  </p>
                </li>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Integrating front-end and back-end components for seamless functionality.
                  </p>
                </li>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Ensuring a smooth user experience through effective communication between client and server.
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div className='services_card-name'>
            <i className="uil uil-cloud-database-tree services_icon"></i>
            <h3 className="services_title">Database <br />Management</h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(4)}>View More
            <i className="uil uil-arrow-right"></i>
          </span>

          <div className={ToggleState === 4 ? 'services_modal active-modal' : 'services_modal'}>

            <div className="services_modal-content">
              <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services_modal-title">Database Management</h3>
              <p className="services_modal-description">
                Database management involves organizing, storing, and retrieving data efficiently. My role include maintaining the integrity of data to support applications and business operations.</p>

              <ul className='services_modal-services grid'>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Designing and creating database schemas.
                  </p>
                </li>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Writing queries to retrieve and manipulate data.
                  </p>
                </li>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Integrating databases with the back-end of the application.
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div className='services_card-name'>
            <i className="uil uil-code-branch services_icon"></i>
            <h3 className="services_title">Version <br /> Control </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(5)}>View More
            <i className="uil uil-arrow-right"></i>
          </span>

          <div className={ToggleState === 5 ? 'services_modal active-modal' : 'services_modal'}>

            <div className="services_modal-content">
              <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services_modal-title">Version Control</h3>
              <p className="services_modal-description"> It helps track changes in software development, allowing multiple people to work on a project simultaneously. With tools like Git, I can see who made what changes, go back to previous versions if needed, and collaborate smoothly with a team, ensuring a seamless and organized development process.</p>

              <ul className='services_modal-services grid'>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Using version control systems like Git to track changes and collaborate with other developers.
                  </p>
                </li>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Managing code repositories on platforms like GitHub or GitLab.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div className='services_card-name'>
            <i className="uil uil-cloud-compute services_icon"></i>
            <h3 className="services_title">DevOps <br /> Operations</h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(6)}>View More
            <i className="uil uil-arrow-right"></i>
          </span>

          <div className={ToggleState === 6 ? 'services_modal active-modal' : 'services_modal'}>
            <div className="services_modal-content">
              <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services_modal-title">DevOps Operations</h3>
              <p className="services_modal-description">
                I streamline development and deployment processes using modern DevOps practices. From setting up CI/CD pipelines to managing cloud infrastructure, I ensure applications are delivered faster and more reliably.
              </p>

              <ul className='services_modal-services grid'>
                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Setting up automated CI/CD pipelines for seamless deployment.
                  </p>
                </li>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Managing cloud infrastructure on AWS/Azure.
                  </p>
                </li>

                <li className="services_modal-services">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Implementing monitoring and logging solutions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services;