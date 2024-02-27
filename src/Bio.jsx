import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Bio = () => {

  const bio = 'I create webpages, keeping up with emerging trends and technologies within web development.'

  useGSAP(() => {
    gsap.to('.navbar, .bio, .intro, .about', {
      scrollTrigger: {
        trigger: '.bio',
        start: '70% bottom',
        end: '80% 30%',
        // markers: true,
        toggleActions: "restart reverse restart reverse"
      },
      backgroundColor: 'rgb(9, 9, 9)',
      color: 'rgb(241, 241, 241)',
      duration: 0.2,
    })

    gsap.to('button', {
      scrollTrigger: {
        trigger: '.bio',
        start: '70% bottom',
        end: '80% 30%',
        toggleActions: "restart reverse restart reverse"
      },
      backgroundColor: 'rgb(241, 241, 241)',
      color: 'rgb(9, 9, 9)',
      duration: 0.2
    })

    gsap.to('.bio > h2', {
      scrollTrigger: {
        trigger: '.bio',
        start: '70% bottom',
        end: '80% 30%',
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
        {bio}
      </h2>
    </div>
   );
}
 
export default Bio;