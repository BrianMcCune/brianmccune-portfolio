import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Bio = () => {

  useGSAP(() => {
    gsap.to('.bio', {
      scrollTrigger: {
        trigger: '.bio',
        start: 'top center'
      },
      // color: black,
      x: 50,
      duration: 5
    })
  })


  return ( 
    <div className="bio">
      <h2>
        I create webpages, keeping up with emerging trends and technologies within web development.
      </h2>
    </div>
   );
}
 
export default Bio;