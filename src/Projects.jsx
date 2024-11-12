import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { projectData } from "./project-data";

const Projects = () => {

  // ScrollTrigger.refresh()

  const elementRefs = useRef([]);
  let mm = gsap.matchMedia();
  let counter
  let tl

  mm.add("(min-width: 768px)", () => {
    if (counter === 2) {
      window.location.reload()
    }
    counter = 1
    // ScrollTrigger.refresh()
  })

  mm.add("(max-width: 767px)", () => {
    if (counter === 1) {
      window.location.reload()
    }
    counter = 2
    // ScrollTrigger.refresh()
  })

  const createHoverEffect = (element, index) => {
    mm.add("(min-width: 768px)", () => {
      const backgroundColors = ['rgb(200, 221, 233)', 'rgb(235, 194, 96)', 'rgb(120, 171, 219)', 'rgb(248, 191, 95)']

      gsap.to(element, { 
        scale: 1.05, 
        duration: 0.2, 
        ease: 'none',
        background: backgroundColors[index]
      });
      
      gsap.to(`.project-image-container:nth-child(${index + 1}) > a > .project-image`, { 
        scale: 0.95, 
        duration: 0.2, 
        ease: 'none',
      });

      gsap.to(`.project-image-container:nth-child(${index + 1}) > a > .project-tech`, {
        opacity: 1,
        duration: 0.2,
      })
    })
  };

  const removeHoverEffect = (element) => {
    mm.add("(min-width: 768px)", () => {
      gsap.to(element, { 
        scale: 0.95, 
        duration: 0.2,
        ease: 'none', 
        background: 'rgb(241, 241, 241)'
      });

      gsap.to(`.project-image`, { 
        scale: 1.05, 
        duration: 0.2,
        ease: 'none', 
      });

      gsap.to('.project-tech', {
        opacity: 0,
        duration: 0.2,
      })
    })
  };

  const headline = 'Projects'
  let headlineArray = headline.split('')

  useGSAP(() => {
    gsap.from('.projects-headline', {
      scrollTrigger: {
        trigger: '.projects',
        start: 'top center',
        toggleActions: 'play none none none',
      },
      duration: 0.4, 
      y:250, 
      stagger: 0.05, 
      ease: 'power3.out',
      delay: 0.1
    })

    if (counter === 1) {
      // ScrollTrigger.refresh()
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.projects',
          start: 'center bottom',
          end: '+=2250px',
          scrub: true,
          stagger: 0
        }
      })
      // ScrollTrigger.refresh()
    } else {
      // ScrollTrigger.refresh()
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.projects',
          start: 'top center',
          end: 'bottom top',
          scrub: true,
          stagger: 0
        }
      })
      // ScrollTrigger.refresh()
    }

    tl.to('.projects', {
      backgroundColor: 'rgb(9, 9, 9)',
      duration: 0.1,
      stagger: 0
    }, 0)

    tl.to('.expertise, .contact, .navbar', {
      backgroundColor: 'rgb(9, 9, 9)',
      color: 'rgb(241, 241, 241)',
      duration: 0.1,
    }, 0)

    tl.to('h2, h1', {
      color: 'rgb(241, 241, 241)',
      duration: 0.1,
    }, 0)

    tl.to('button, .underline', {
      backgroundColor: 'rgb(241, 241, 241)',
      color: 'rgb(9, 9, 9)',
    }, 0)

    tl.to('.projects-headline, .contact-headline, .fontawesomeicon', {
      color: 'rgb(241, 241, 241)'
    }, 0)

    tl.to('.navbar, .expertise, .contact, body', {
      backgroundColor: 'rgb(9, 9, 9)',
      color: 'rgb(241, 241, 241)',
      duration: 0.8
    })

    tl.to('.projects', {
      color: 'rgb(9, 9, 9)',
      duration: 0.8
    }, 0.2)

    tl.to('.projects, .navbar, .expertise, .contact, body', {
      color: 'rgb(9, 9, 9)',
      backgroundColor: 'rgb(241, 241, 241)',
      duration: 0.1
    })

    tl.to('h2, h1', {
      color: 'rgb(9, 9, 9)',
      duration: 0.1,
    })

    tl.to('button, .underline', {
      backgroundColor: 'rgb(9, 9, 9)',
      color: 'rgb(241, 241, 241)',
    }, 1)

    tl.to('.projects-headline, .contact-headline', {
      color: 'rgb(110, 110, 85)'
    }, 1)

    tl.to('.fontawesomeicon', {
      color: 'rgb(9, 9, 9)'
    }, 1)

    mm.add("(min-width: 768px)", () => {

      gsap.to('.project-image-container', {
        xPercent: -310,
        ease: 'none',
        scrollTrigger: {
          trigger: '.projects',
          start: 'top+=125rem top',
          end: '+=1500',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          // markers: true,
        },
      })
    })
  })

  return ( 
    <div className="projects" id="projects">
      <div className="headline-container">
        {headlineArray.map((index) => {
          return (
            <div className="projects-headline" key={index}>
              <span className="letter">
                {index === ' ' ? '\u00A0' : index}
              </span>
            </div>
          )
        })}
      </div>
      <div className="projects-list">
        {projectData.map((project, index) => {
          return (
            <div className="project-image-container" 
              key={index}
              ref={(el) => {elementRefs.current[index] = el}}
              onMouseEnter={() => {createHoverEffect(elementRefs.current[index], index)}}
              onMouseLeave={() => removeHoverEffect(elementRefs.current[index])}>
              <a href={project.deployment} target="_blank">
                <div className="project-name">{project.title}</div>
                <div className="project-tech">{project.usedTech}</div>
                {/* <img className="project-image" src={project.image} /> */}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Projects;
