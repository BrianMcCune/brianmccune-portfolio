import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import CodeIcon from "./CodeIcon";
import { useRef } from "react";


const Navbar = (props) => {

  const aboutRef = useRef(null)
  const expertiseRef = useRef(null)
  const projectsRef = useRef(null)


  const createHoverEffect = (element) => {
    gsap.to(element.current, { 
      width: '100%',
      duration: 0.2
    });
  }

  const removeHoverEffect = (element) => {
    gsap.to(element.current, { 
      x: '100%',
      duration: 0.2,
      onComplete: () => {
        gsap.set(element.current, { x: 0, width: 0 });
      }
    })
  }

  // useGSAP(() => {
  //   gsap.from('.navbar', {
  //     y: -50,
  //     duration: 0.8,
  //     delay: 2.4
  //   })
  // })

  return ( 
    <div className="navbar">
      <div className="brand">
        <CodeIcon />
        <Link to="intro" className="link"><h1>McCune</h1></Link>
      </div>
      <Link to="about" offset={90} className="link">
        <h2 className="navbar-about" onMouseEnter={() => {createHoverEffect(aboutRef)}} onMouseLeave={() => removeHoverEffect(aboutRef)}>
          About
          <div className="underline" ref={aboutRef}></div>
        </h2>
      </Link>
      <Link to="expertise" offset={-70}className="link">
        <h2 className="navbar-expertise" onMouseEnter={() => {createHoverEffect(expertiseRef)}} onMouseLeave={() => removeHoverEffect(expertiseRef)}>
          Expertise
          <div className="underline" ref={expertiseRef}></div>
        </h2>
      </Link>
      <Link to="projects" offset={115} className="link">
        <h2 className="navbar-projects" onMouseEnter={() => {createHoverEffect(projectsRef)}} onMouseLeave={() => removeHoverEffect(projectsRef)}>
          Projects
          <div className="underline" ref={projectsRef}></div>
        </h2>
      </Link>
      <Link to="contact" className="link">
      <button onClick={() => handleOnClick()}>Let's Chat</button>
      </Link>
    </div>
   );
}
 
export default Navbar;