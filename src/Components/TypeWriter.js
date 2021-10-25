import React from 'react'
import img4 from '../Components/Sid/Images/Validationform-1.png'
//importing typewriter-effect
import Typewriter from 'typewriter-effect'

function TypeWriter() {
  var t = 'Hello  '
  return (
    <div className="exp">
      <div className="App exp-2">
        <div>
          <div>
            <div>Hi, I'm Siddhartha</div>
          </div>
          <div className="temp">
            {t}
            <div>
              <span className="color">
                <Typewriter
                  options={{
                    strings: ['Sidcapman', 'that', 'this'],
                    autoStart: true,
                    loop: true,
                    cursor: '/',
                    deleteSpeed: 50,
                    delay: 200,
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="exp-2">
        <img src="" alt="sid" />
      </div>
    </div>
  )
}

export default TypeWriter
// onInit={(typewriter) => {
//   typewriter

//     .typeString('GeeksForGeeks')

//     .pauseFor(1000)
//     .deleteAll()

//     .typeString('Welcomes You')

//     .pauseFor(1000)
//     .deleteAll()

//     .typeString('Siddhartha')

//     .pauseFor(1000)
//     .deleteAll()

//     .start()
// }}
