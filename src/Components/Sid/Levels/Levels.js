import React from 'react'
import Progress from './ProgressComponenet'
import { ProfciencyData } from './Proficiencydata'
function ProgressLevels() {
  return (
    <div className="main-container" id="levels">
      {ProfciencyData.map((maindata) => {
        return (
          <div style={{ alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ position: 'relative', left: '10rem' }}>
              {' '}
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
