import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  console.log(ref)
  return ( 
    <div ref={ref}>
      About Me
    </div>
   );
})
 
export default About;