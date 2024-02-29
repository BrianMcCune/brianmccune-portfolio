import { ReactLenis } from '@studio-freight/react-lenis'
import './App.css'
import Navbar from './Navbar'
import Intro from './Intro'
import Bio from './Bio'
import AboutMe from './AboutMe'
import Expertise from './Expertise'

function App() {
 
  return (
    <ReactLenis root>
      <div className='portfolio'>
        <Navbar />
        <Intro />
        <Bio />
        <AboutMe />
        <Expertise />
        <div className='spacer'></div>
      </div>
    </ReactLenis>
  )
}

export default App
