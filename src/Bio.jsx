import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Bio = () => {

  useGSAP(() => {
    gsap.to('.navbar, .bio, .intro, .about', {
      scrollTrigger: {
        trigger: '.bio',
        start: '-300px',
        end: '550px',
        // markers: true,
        toggleActions: "restart reverse restart reverse"
      },
      backgroundColor: 'rgb(15, 15, 13)',
      color: 'rgb(230, 230, 226)',
      duration: 0.2,
    })

    gsap.to('button', {
      scrollTrigger: {
        trigger: '.bio',
        start: '-150px',
        end: 'bottom',
        toggleActions: "restart reverse restart reverse"
      },
      backgroundColor: 'rgb(230, 230, 226)',
      color: 'rgb(15, 15, 13)',
      duration: 0.2
    })

    gsap.to('.bio > h2', {
      scrollTrigger: {
        trigger: '.bio',
        start: '-150px',
        end: 'bottom',
        toggleActions: "restart reverse restart reverse"
      },
      opacity: 1,
      duration: 0.3,
      color: 'rgb(230, 230, 226)'
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