import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { projectData } from "./project-data";
import { useRef } from "react";

const Projects = () => {

  const imgRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(imgRef.current, { scale: 1.2, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(imgRef.current, { scale: 1, duration: 0.3 });
  };

  const headline = 'Projects'
  let headlineArray = headline.split('')

  useGSAP(() => {

    gsap.from('.projects-headline', {
      scrollTrigger: {
        trigger: '.projects',
        start: 'top center',
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

    gsap.to('.navbar, .expertise', {
      scrollTrigger: {
        trigger: '.projects',
        start: '-20% top',
        end: '200% top',
        toggleActions: "restart reverse restart reverse",
        // markers: true
      },
      backgroundColor: 'rgb(9, 9, 9)',
      color: 'rgb(241, 241, 241)',
      duration: 0.2,
    })

    gsap.to('.projects', {
      scrollTrigger: {
        trigger: '.projects',
        start: '-20% top',
        end: '200% top',
        toggleActions: "restart reverse restart reverse",
        // markers: true
      },
      backgroundColor: 'rgb(9, 9, 9)',
      duration: 0.2,
    })

    gsap.to('button', {
      scrollTrigger: {
        trigger: '.projects',
        start: '-20% top',
        end: '200% top',
        toggleActions: "restart reverse restart reverse"
      },
      backgroundColor: 'rgb(241, 241, 241)',
      color: 'rgb(9, 9, 9)',
      duration: 0.2
    })

    gsap.to('.project-image-container', {
      xPercent: -325,
      ease: 'none',
      scrollTrigger: {
        trigger: '.projects',
        start: '13.5% top',
        pin: true,
        scrub: 1,
        end: '+=1500',
        // markers: true
      },
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
          console.log({index})
          return (
          <div className="project-image-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={imgRef}>
            <a href={index.deployment} target="_blank">
              <div className="project-title">{index.title}</div>
              <div className="project-tech">{index.usedTech}</div>
              <img className="project-image" src={index.image} />
            </a>
          </div>
          )
        })}
      </div>
    </div>
   );
}
 
export default Projects;