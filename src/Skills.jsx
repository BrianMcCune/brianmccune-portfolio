import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  const headline = 'Skills & Experience'
  let headlineArray = headline.split('')

  useGSAP(() => {

    gsap.from('.skills-headline', {
      scrollTrigger: {
        trigger: '.skills',
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
    <div className="skills">
      <div className="headline-container">
      {headlineArray.map((index) => {
          return (
            <div className="skills-headline">
              <span key={headlineArray[index]} className="letter">
                {index === ' ' ? '\u00A0' : index}
              </span>
            </div>
          )
        })}
      </div>
      <div className="container">
        <p className="text-one">
          My main area of expertise is client side, front end development
        </p>
      </div>
      <div className="container">
        <p className="text-two">
          Building small and medium web applications using React with HTML, CSS, and JS. I also have experience with custom libraries and animations
        </p>
      </div>
    </div>
   );
}
 
export default Skills;