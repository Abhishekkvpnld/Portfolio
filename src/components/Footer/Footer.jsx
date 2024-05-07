import React, { useEffect } from 'react'
import './Footer.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Footer() {

  useEffect(() => {
    Aos.init({ duration: 400 });
  }, [])

  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Abhishek</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">About</a>

          </li>

          <li>
            <a href="#project" className="footer_link">Projects</a>
          </li>


          <li>
            <a href="#home" className="footer_link">Home</a>
          </li>
        </ul>
        <div className="footer_social">
          <a href="https://www.instagram.com/" className="footer_social-link" target='' >
            <i className="bx bxl-instagram" data-Aos='slide-right'></i>
          </a>
          <a href="https://linkedin.com/in/abhishek-kv-77b0b7286" className="footer_social-link" target='' >
            <i className="bx bxl-linkedin" data-Aos='fade-up'></i>
          </a>
          <a href="https://github.com/Abhishekkvpnld" className="footer_social-link" target=''>
            <i className="bx bxl-github"  data-Aos='slide-left'></i>
          </a>
        </div>
        <span className='footer_copy'>
          &#169; Abhishek.kv. All copy-rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer