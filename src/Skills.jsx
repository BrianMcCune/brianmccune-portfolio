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
        markers: true
      },
      duration: 0.4, 
      y:250, 
      stagger: 0.05, 
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
      <p>
        My main area of expertise is client side, front end development
      </p>
      <p>
        Building small and medium web applications using React with HTML, CSS, and JS. I also have experience with custom libraries and animations
      </p>
    </div>
   );
}
 
export default Skills;