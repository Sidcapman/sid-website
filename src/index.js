import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import '../src/Components/Sid/Levels/progress.css'
import '../src/Components/Sid/ScrollUpArrow/arrow.css'
import '../src/Components/Sid/Footer/contact.css'
import '../src/Components/TypeWritter/typewritter.css'
import '../src/Components/Sid/About/about.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
