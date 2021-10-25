import NavigationComponent from './Components/NavigationComponent'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TypeWriter from './Components/TypeWriter'
import About from './Components/Sid/About'
import Achievements from './Components/Sid/Achievements'
import Contact from './Components/Sid/Contact'
import Projects from './Components/Sid/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'
import SecondNav from './Components/SecondNav'

function App() {
  return (
    <div>
      {/* <NavigationComponent /> */}
      <SecondNav />
      <TypeWriter />
      <About />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  )
}

export default App
