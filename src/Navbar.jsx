import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import CodeIcon from "./CodeIcon";
import { Link } from "react-scroll";

const Navbar = () => {

  useGSAP(() => {
    gsap.from('.navbar', {
      y: -50,
      duration: 0.8,
      delay: 2.4
    })
  })

  return ( 
    <div className="navbar">
      <div className="brand">
        <CodeIcon />
        <h1>McCune</h1>
      </div>
        <h2><Link to="about">About</Link></h2>
        {/* <h2>Expertise</h2> */}
        <h2><Link to="expertise" offset={-70}>Expertise</Link></h2>
        <h2>Projects</h2>
        <button>Let's Chat</button>
    </div>
   );
}
 
export default Navbar;