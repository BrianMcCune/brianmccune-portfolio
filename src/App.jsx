import './App.css'
import Home from './Home'
import About from './About'
import Skill from './Skill'
import Project from './Project'
import Contact from './Contact'

function App() {

  function handleOnWheel(e) {
    e.preventDefault()
    console.log('this works')
  }

  return (
    <div className='portfolio'>
      <Home onClick={(e) => handleOnWheel(e)}/>
      <About />
      <button onWheel={(e) => handleOnWheel(e)}>click</button>
      <Skill />
      <Project />
      <Contact />
    </div>
  )
}

export default App
