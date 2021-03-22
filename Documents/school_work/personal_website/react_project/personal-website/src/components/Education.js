import React from 'react'
import School from './School'
import './Education.css'

function Education() {
  return (
    <div className="education-container">
      <School
        src="images/penn_logo.png"
        name="University of Pennsylvania"
        degree="M.S.Ed., Learning Sciences and Technologies"
      />
      <School
        src="images/michigan_logo.png"
        name="University of Michigan"
        degree="B.S., Computer Science"
      />
    </div>
  )
}

export default Education
