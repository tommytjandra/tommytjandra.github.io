import React from 'react'
import './Hero.css'
import ReactTypingEffect from 'react-typing-effect';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

function Hero() {
  return (
    <div className="hero-container">
      <img src="images/headshot.jpg" alt="headshot.jpg" id="headshot"/>
      <h1>Tommy Tjandra</h1>
      <div className="typed">
        <ReactTypingEffect
          text={["human-computer interaction", "edtech", "software engineering", "psychology"]}
          speed={70}
          eraseSpeed={60}
          eraseDelay={2000}
          typingDelay={2000}
        />
      </div>
      <div className="icons">
          <a href="https://www.linkedin.com/in/tommytjandra" target="_blank" rel="noreferrer">
            <FaLinkedin id="linkedin-icon" size={20}/>
          </a>
          <a href="mailto:stjandra@umich.edu">
            <FaEnvelope id="mail-icon" size={20}/>
          </a>
          <a href="https://github.com/tommytjandra" target="_blank" rel="noreferrer">
            <FaGithub id="github-icon" size={20}/>
          </a>
      </div>
      {/* <div className="icons">
            <FaLinkedin id="linkedin-icon" size={20}/>
            <FaEnvelope id="mail-icon" size={20}/>
            <FaGithub id="github-icon" size={20}/>
      </div> */}
    </div>
  )
}

export default Hero
