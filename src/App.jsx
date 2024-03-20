import { ReactLenis } from '@studio-freight/react-lenis'
import './App.css'
import Navbar from './Navbar'
import Intro from './Intro'
import Bio from './Bio'
import AboutMe from './AboutMe'
import Expertise from './Expertise'
import Projects from './Projects'
import Contact from './Contact'
import { useEffect, useState } from 'react'

function App() {
  
 
  return (
      <ReactLenis root>
        <div className='portfolio'>
          <Navbar />
          <Intro />
          <Bio />
          <AboutMe id='about' />
          <Expertise id='expertise' />
          <Projects />
          <Contact />
        </div>
      </ReactLenis>
  )
}

export default App
