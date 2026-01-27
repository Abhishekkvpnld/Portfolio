import React from 'react'

function Social() {
  return (
    <div className="home_social">
      <a
        href="https://leetcode.com/u/Abhishekkvpnld/"
        className="home_social-icon leetcode"
        target='_blank'
        rel="noopener noreferrer"
        title='LeetCode'
        data-Aos='fade-right'
      >
        <i className="bx bx-code-alt"></i>
      </a>
      <a
        href="https://linkedin.com/in/abhishek-kv-77b0b7286"
        className="home_social-icon linkedin"
        target='_blank'
        rel="noopener noreferrer"
        title='LinkedIn'
        data-Aos='fade-right'
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/Abhishekkvpnld"
        className="home_social-icon github"
        target='_blank'
        rel="noopener noreferrer"
        title='GitHub'
        data-Aos='fade-right'
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  )
};

export default Social;