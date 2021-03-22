import React from 'react'
import './School.css'

function School(props) {
  return (
    <div className="school-container">
      <img src={props.src} alt={props.src}/>
      <div className="school-info">
        <b><p>{props.name}</p></b>
        <p>{props.degree}</p>
      </div>
    </div>
  )
}

export default School
