import { ReactLenis } from '@studio-freight/react-lenis'
import './App.css'
import Navbar from './Navbar'
import Intro from './Intro'
import Bio from './Bio'
import AboutMe from './AboutMe'
import Skills from './Skills'

function App() {
 
  return (
    <ReactLenis root>
      <div className='portfolio'>
        <Navbar />
        <Intro />
        <Bio />
        <AboutMe />
        <Skills />
        <div className='spacer'></div>
      </div>
    </ReactLenis>
  )
}

export default App
