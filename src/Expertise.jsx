import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";
// import Javascript from "./javascript.svg"

const Expertise = () => {
  ScrollTrigger.refresh()
  const letterRef = useRef(null)
  const headline = 'Expertise'
  let headlineArray = headline.split('')
  const javascript = 'Javascript'.split('')

  console.log(javascript)

  const createHoverEffect = (e, key) => {
    // let prevLetterTwo = e.target.id - 2
    // let prevLetter = e.target.id - 1
    // let nextLetter = parseInt(e.target.id) + 1
    // let nextLetterTwo = parseInt(e.target.id) + 2
    // const element = document.getElementById(prevLetter);
    // const elementPrev = document.getElementById(prevLetterTwo);
    // const elementtwo = document.getElementById(nextLetter);
    // const elementtwoNext = document.getElementById(nextLetterTwo);
    
    // gsap.to(e.target, {
    //   scale: 1.3,
    //   ease: 'none',
    //   duration: 0.15
    // });

    // gsap.to(element, {
    //   scale: 1.2,
    //   ease: 'none',
    //   duration: 0.15,
    // });

    // gsap.to(elementPrev, {
    //   scale: 1.1,
    //   ease: 'none',
    //   duration: 0.15,
    // });
    // gsap.to(elementtwoNext, {
    //   scale: 1.1,
    //   ease: 'none',
    //   duration: 0.15,
    // });
    // gsap.to(elementtwo, {
    //   scale: 1.2,
    //   ease: 'none',
    //   duration: 0.15,
    // });
  }

  const removeHoverEffect = (e) => {
    // let prevLetterTwo = e.target.id - 2
    // let prevLetter = e.target.id - 1
    // let nextLetter = parseInt(e.target.id) + 1
    // let nextLetterTwo = parseInt(e.target.id) + 2
    // const element = document.getElementById(prevLetter);
    // const elementPrev = document.getElementById(prevLetterTwo);
    // const elementtwo = document.getElementById(nextLetter);
    // const elementtwoNext = document.getElementById(nextLetterTwo);


    // gsap.to(e.target, {
    //   scale: 1,
    //   ease: 'none',
    //   duration: 0.15,
    // });

    // gsap.to(element, {
    //   scale: 1,
    //   ease: 'none',
    //   duration: 0.15,
    // });

    // gsap.to(elementtwo, {
    //   scale: 1,
    //   ease: 'none',
    //   duration: 0.15,
    // });
    // gsap.to(elementtwoNext, {
    //   scale: 1,
    //   ease: 'none',
    //   duration: 0.15,
    // });
    // gsap.to(elementPrev, {
    //   scale: 1,
    //   ease: 'none',
    //   duration: 0.15,
    // });
  }

  useGSAP(() => {
    ScrollTrigger.refresh()
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
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
    })

    gsap.from('.expertise-headline', {
      scrollTrigger: {
        trigger: '.expertise',
        toggleActions: 'play none none none',
      },
      duration: 0.4, 
      y:250, 
      stagger: 0.05, 
      ease: 'power3.out',
      delay: 0.1
    })

    gsap.from('.strengths', {
      scrollTrigger: {
        trigger: '.strengths',
        toggleActions: 'play none none none',
      },
      duration: 0.5, 
      y: 60, 
      opacity: 0, 
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

    gsap.from('.experiences', {
      scrollTrigger: {
        trigger: '.experiences',
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
    ScrollTrigger.refresh()
  })


  return ( 
    <div className="expertise">
      <div className="circle-container">
        <div className="expertise-circle"></div>
      </div>
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
          <h3 className="strengths">Biggest Strengths</h3>
          <div className="container">
            <p className="text-one">
              My main area of expertise is client side, front end development. Through web development, I create the biggest impact and I am always eager to learn new technologies to expand my skills.
            </p>
          </div>
          <h3 className="experiences">Experiences</h3>
          <div className="container">
            <p className="text-two">
              I have built small and medium web applications using React with HTML, CSS, and JS for small companies surrounding the Austin area. I also have experience with custom libraries and animations.
            </p>
          </div>
        </div>
        <div className="expertise-list">

          <div className="expertise-languages" ref={letterRef}>
            {javascript.map((index, key) => {
              return (
                <p key={index} className="letter" id={key} onMouseEnter={(e) => {createHoverEffect(e)}}onMouseLeave={(e) => removeHoverEffect(e)}>
                  {index}
                </p>
              )
            })}
          </div>


          {/* <p>JavaScript</p> */}
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