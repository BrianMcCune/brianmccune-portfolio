import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import CodeIcon from "./CodeIcon";

const Navbar = () => {

  useGSAP(() => {
    gsap.from('.navbar', {
      y: -50,
      duration: 0.8,
      delay: 1
    })
  })

  return ( 
    <div className="navbar">
      <div className="brand">
        <CodeIcon />
        <h1>McCune</h1>
      </div>
        <h2>About</h2>
        <h2>Skills</h2>
        <h2>Projects</h2>
        <button>Let's Talk</button>
    </div>
   );
}
 
export default Navbar;