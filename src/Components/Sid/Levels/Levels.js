import React from 'react'
import Progress from './ProgressComponenet'
import { ProfciencyData } from './Proficiencydata'
import Aos from 'aos'
import 'aos/dist/aos.css'
function ProgressLevels() {
  // Aos.init({
  //   delay: 100,
  //   duration: 1200,
  // })
  return (
    <div className="main-container" id="levels">
      {ProfciencyData.map((maindata) => {
        return (
          <div
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              padding: '1rem 3rem',
              overflowX: 'hidden',
            }}>
            <span
              style={{
                position: 'relative',
                left: '10rem',
              }}>
              {maindata.language}
            </span>
            <Progress data={maindata} />
          </div>
        )
      })}
    </div>
  )
}

export default ProgressLevels
