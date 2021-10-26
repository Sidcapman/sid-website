import React from 'react'

const Progress = ({ data }) => {
  return (
    <div className="second-container">
      <div className="progress-complete" style={{ width: `${data.level}` }}>
        <div className="progress-liquid"></div>
      </div>
      <span className="progress-title">{data.level}</span>
    </div>
  )
}

export default Progress
