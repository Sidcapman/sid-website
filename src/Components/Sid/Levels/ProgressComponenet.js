import React from 'react'
import Aos from 'aos'
const Progress = ({ data }) => {
  Aos.init({
    delay: 90,
    duration: 2000,
  })
  return (
    <div className="second-container">
      <div
        className="progress-complete"
        style={{ width: `${data.level}` }}
        data-aos="fade-right">
        <div className="progress-liquid"></div>
      </div>
      <span className="progress-title">{data.level}</span>
    </div>
  )
}

export default Progress
