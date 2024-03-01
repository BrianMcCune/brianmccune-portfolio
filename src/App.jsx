import { ReactLenis } from '@studio-freight/react-lenis'
import './App.css'
import Navbar from './Navbar'
import Intro from './Intro'
import Bio from './Bio'
import AboutMe from './AboutMe'
import Expertise from './Expertise'
import Projects from './Projects'

function App() {
 
  return (
    <ReactLenis root>
      <div className='portfolio'>
        <Navbar />
        <Intro />
        <Bio />
        <AboutMe />
        <Expertise />
        <Projects />
        <div className='testing'>Testing</div>
      </div>
    </ReactLenis>
  )
}

export default App
