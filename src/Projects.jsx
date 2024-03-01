import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { projectData } from "./project-data";

const Projects = () => {

  const headline = 'Projects'
  let headlineArray = headline.split('')

  useGSAP(() => {

    gsap.from('.projects-headline', {
      scrollTrigger: {
        trigger: '.projects',
        toggleActions: 'play none none none',
        // scrub: true,
        // markers: true
      },
      duration: 0.4, 
      y:250, 
      stagger: 0.05, 
      ease: 'power3.out',
      delay: 0.1
    })

    gsap.to('.navbar, .projects, .expertise', {
      scrollTrigger: {
        trigger: '.projects',
        start: '-20% top',
        end: 'bottom center',
        toggleActions: "restart reverse restart reverse",
        // markers: true
      },
      backgroundColor: 'rgb(9, 9, 9)',
      color: 'rgb(241, 241, 241)',
      duration: 0.2,
    })

    gsap.to('button', {
      scrollTrigger: {
        trigger: '.projects',
        start: '-20% top',
        end: 'bottom center',
        toggleActions: "restart reverse restart reverse"
      },
      backgroundColor: 'rgb(241, 241, 241)',
      color: 'rgb(9, 9, 9)',
      duration: 0.2
    })

    gsap.to('.projects', {
      scrollTrigger: {
        trigger: '.projects',
        start: '-20% top',
        end: 'bottom center',
        toggleActions: "restart reverse restart reverse"
      },
      opacity: 1,
      duration: 0.3,
      color: 'rgb(230, 230, 226)'
    })
  })

  return ( 
    <div className="projects">
      <div className="headline-container">
        {headlineArray.map((index) => {
          return (
            <div className="projects-headline">
              <span key={headlineArray[index]} className="letter">
                {index === ' ' ? '\u00A0' : index}
              </span>
            </div>
          )
        })}
      </div>
      <div className="projects-list">
        {projectData.map((index) => {
          return (
            <div className="project-image-container">
              <img className="project-image" src={index.image} />
            </div>
          )
        })}
      </div>
    </div>
   );
}
 
export default Projects;