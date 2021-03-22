import React from 'react'
import './About.css'
import Education from './Education'

function About() {
  return (
    <div className="about-container">
      <h1>About</h1>
      <hr></hr>
      <p>I am currently a software engineer at <a href="https://online.citi.com/US/login.do" target="_blank" rel="noreferrer">Citi</a>. I work on microservices development for Citi's Digital Wealth Management team -- specifically, the trading and investing features. Previously, I interned at Citi for two summers as part of the Global Consumer Technology division: I spent my first internship as a frontend engineer working on Citi’s internal SME finder and I spent my second internship as an iOS engineer working on Citi’s mobile banking app. 
      <br></br><br></br>
      I received my Bachelor of Science in Computer Science from the <a href="http://www.umich.edu/" target="_blank" rel="noreferrer">University of Michigan, Ann Arbor</a>. Go Blue! My interests within the field of computer science are primarily in <a href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction" target="_blank" rel="noreferrer">human-computer interaction (HCI)</a> and <a href="https://en.wikipedia.org/wiki/Computer_vision" target="_blank" rel="noreferrer">computer vision</a>. At Michigan, I took EECS 493: UI Development with Professor <a href="https://www.computer.org/profiles/mark-guzdial" target="_blank" rel="noreferrer">Mark Guzdial</a> and EECS 442: Computer Vision with Professor <a href="https://web.eecs.umich.edu/~justincj/" target="_blank" rel="noreferrer">Justin Johnson</a>.
      <br></br><br></br>
      I will be pursuing my Master of Science in Education, concentrating in Learning Sciences and Technologies, from the <a href="https://www.upenn.edu/" target="_blank" rel="noreferrer">University of Pennsylvania</a> starting Fall 2021. I am looking forward to learning more about edtech and the science of learning!
      <br></br><br></br>
      I am especially passionate about human-computer interaction, education/edtech, and psychology. In my spare time, I am an avid reader, fitness enthusiast, guitarist, and aspiring chef. I also played four years for my high school's varsity basketball team as the starting shooting guard. I am a longtime fan of <a href="https://www.youtube.com/watch?v=U69E64byTDo" target="_blank" rel="noreferrer">Stephen Curry</a> and the Golden State Warriors.</p>
      <h1>Education</h1>
      <hr></hr>
      <Education />
    </div>
  )
}

export default About
