
import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <div className="loading-container">
      {/* Animated background gradient */}
      <div className="loading-bg"></div>

      {/* Floating particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Main loader content */}
      <div className="loader-content">
        {/* Multi-ring spinner */}
        <div className="spinner-wrapper">
          <div className="spinner-ring ring-1"></div>
          <div className="spinner-ring ring-2"></div>
          <div className="spinner-ring ring-3"></div>
          <div className="spinner-core"></div>
        </div>

        {/* Animated text */}
        <div className="loading-text">
          <span className="loading-name">Abhishek KV</span>
          <div className="loading-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
