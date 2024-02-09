import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  console.log(ref)
  return ( 
    <div ref={ref}>
      Child
    </div>
   );
})
 
export default About;