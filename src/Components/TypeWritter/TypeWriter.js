import React from 'react'
import img4 from './1234-removebg-preview.png'
//importing typewriter-effect
import Typewriter from 'typewriter-effect'
import cu from './cursor.png'
function TypeWriter() {
  var t = "I'm"
  return (
    <div className="exp">
      <div className="App">
        <div>
          <div>Hello, I'm Siddhartha</div>
          <div className="below-name">
            <div>
              <span className="color">
                <Typewriter
                  options={{
                    strings: [
                      'Computer Science Engineer',
                      'Front End Developer',
                      'Tech Junkie',
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: '_',
                    pauseFOr: 3400,
                    deleteSpeed: 50,
                    delay: 150,
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="exp-2">
        <img className="image" src={img4} alt="sid" />
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
