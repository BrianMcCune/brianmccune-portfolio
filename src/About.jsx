import { forwardRef } from "react";


// const About = (props) => {


//   return ( 
//     <div ref={props.ref}>
//       <div className="aboutTitle">Web Developer</div>
//       <div className="aboutIntro">Front End Developer / ReactJS Focused / THREEJS Fan </div>
//       <div className="aboutBio"></div>
//     </div>
//    );
// }
 
// export default About;

const About = forwardRef((props, ref) => {
  console.log(ref)
  return ( 
    <div ref={ref}>
      Child
    </div>
   );
})
 
export default About;