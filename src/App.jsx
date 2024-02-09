import './App.css'
import Home from './Home'
import About from './About'
import Skill from './Skill'
import Project from './Project'
import Contact from './Contact'
import { useRef, useEffect, useCallback } from 'react'






function App() {


  useEffect(() => {
    window.addEventListener('wheel', (e) => handleOnWheel(e));
    return () => {
      window.removeEventListener('wheel', (e) => handleOnWheel(e))
    }
  })
  
  const ref = useRef(null)
  const refone = useRef(null)

  function handleScroll() {
    // ref.current.scrollIntoView()
    console.log(ref)
  }

  const handleOnWheel = (e) => {
      console.log(e.deltaY)
        if (e.deltaY < 0) {
          console.log('up')
          refone.current.scrollIntoView()
        } if (e.deltaY > 0) {
          console.log('down')
          ref.current.scrollIntoView()
        }
  }

  return (
    <div className='portfolio'>
      <Home handleOnWheel={handleOnWheel} ref={refone}/>
      <About ref={ref}/>
      <button onClick={handleScroll()}>click</button>
      <Skill />
      <Project />
      <Contact />
    </div>
  )
}

export default App
