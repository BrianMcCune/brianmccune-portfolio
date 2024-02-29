import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// import Javascript from "./javascript.svg"

const Expertise = () => {

  const headline = 'Expertise'
  let headlineArray = headline.split('')

  useGSAP(() => {

    gsap.fromTo('.expertise-circle', {y: 80}, {
      scrollTrigger: {
        trigger: '.expertise',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        // pin: '.expertise',
        // markers: true
      },
      y: -120,
      opacity: 0.01,
      scale: 0.9
    })

    gsap.to('.headline-container, .expertise-info', {
      scrollTrigger: {
        trigger: '.expertise',
        start: 'center center',
        end: 'bottom top',
        scrub: true,
        // pin: '.expertise',
        // markers: true
      },
      y: 100,
      // opacity: 0.02,
      // scale: 0.9
    })

    gsap.from('.expertise-headline', {
      scrollTrigger: {
        trigger: '.expertise',
        toggleActions: 'play none none none',
        // scrub: true,
        // markers: true
      },
      duration: 0.4, 
      y:250, 
      stagger: 0.05, 
      ease: 'power3.out'
    })

    gsap.from('.container > .text-one', {
      scrollTrigger: {
        trigger: '.container > .text-one',
        toggleActions: 'play none none none',
        // scrub: true,
        // markers: true
      },
      duration: 0.5, 
      y: 60, 
      opacity: 0, 
      ease: 'power3.out'
    })

    gsap.from('.container > .text-two', {
      scrollTrigger: {
        trigger: '.container > .text-two',
        toggleActions: 'play none none none',
        // scrub: true,
        // markers: true
      },
      duration: 0.5, 
      y: 60, 
      opacity: 0, 
      ease: 'power3.out'
    })

  })


  return ( 
    <div className="expertise">
      <div className="expertise-circle"></div>
      <div className="headline-container">
        {headlineArray.map((index) => {
          return (
            <div className="expertise-headline">
              <span key={headlineArray[index]} className="letter">
                {index === ' ' ? '\u00A0' : index}
              </span>
            </div>
          )
        })}
      </div>
      <div className="expertise-info">
        <div className="expertise-text">
          <h3>Biggest Strengths</h3>
          <div className="container">
            <p className="text-one">
              My main area of expertise is client side, front end development. Through web development, I create the biggest impact and I am always eager to learn new technologies to expand my skills.
            </p>
          </div>
          <h3>Experiences</h3>
          <div className="container">
            <p className="text-two">
              I have built small and medium web applications using React with HTML, CSS, and JS for small companies surrounding the Austin area. I also have experience with custom libraries and animations.
            </p>
          </div>
        </div>
        <div className="expertise-list">
          <p>JavaScript</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>ReactJS</p>
          <p>ThreeJS</p>
          <p>NodeJS</p>
          <p>GSAP</p>
          <p>Git</p>
        </div>
      </div>
    </div>
   );
}
 
export default Expertise;