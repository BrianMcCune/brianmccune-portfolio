import './App.css'
import Home from './Home'
import About from './About'
import Skill from './Skill'
import Project from './Project'
import Contact from './Contact'
import { useRef, useState, forwardRef } from 'react'

function App() {

  // let counter = 0
  const [currentWindow, setCurrentWindow] = useState()
  
  const ref = useRef(null)

  function handleScroll() {
    // myRef.current.scrollIntoView()
    console.log(myRef.current)
  }

  const handleOnWheel = () => {

    // if (counter === 1) {
    //   return
    // } else if (counter === 0) {
    //   console.log('this')
    //   counter ++
    // }

    if (currentWindow) {
      console.log(window.scrollY, currentWindow)
      if (window.scrollY > currentWindow) {
        console.log('down')
      } if (window.scrollY < currentWindow) {
        console.log('up')
      }
    }
    setCurrentWindow(window.scrollY)
    console.log(currentWindow)
  }


  return (
    <div className='portfolio'>
      <Home handleOnWheel={handleOnWheel}/>
      <About ref={ref}/>
      <button onClick={handleScroll}>click</button>
      <Skill />
      <Project />
      <Contact />
    </div>
  )
}

export default App
