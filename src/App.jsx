import './App.css'
import Home from './Home'
import About from './About'
import Skill from './Skill'
import Project from './Project'
import Contact from './Contact'
import { useRef, useEffect, useCallback, useState } from 'react'
import { debounce } from 'lodash'



function App() {

  useEffect(() => {
    window.addEventListener('wheel', debouncedOnChange);
    return () => {
      window.removeEventListener('wheel', debouncedOnChange)
    }
  }, [])
  
  const ref = useRef(null)
  const refone = useRef(null)

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

  const debouncedOnChange = debounce(handleOnWheel, 150)

  return (
    <div className='portfolio'>
      <Home ref={refone}/>
      <About ref={ref}/>
      <Skill />
      <Project />
      <Contact />
    </div>
  )
}

export default App
