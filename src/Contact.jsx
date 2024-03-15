import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-scroll";
import { useRef } from "react";

const Contact = () => {

  const aboutRef = useRef(null)

  const headline = "Let's Chat"
  let headlineArray = headline.split('')

  const createHoverEffect = (element) => {
    gsap.to(element.current, { 
      duration: 0.15, 
      ease: 'power1.in',
      y: -37,
      color: 'rgb(110, 110, 85)'
    });
    console.log(element)
  }

  const removeHoverEffect = (element) => {
    gsap.to(element.current, { 
      duration: 0.15,
      ease: 'power1.in', 
      color: 'rgb(9, 9, 9)',
      y: 0
    });
  }

  useGSAP(() => {
    gsap.from('.contact-headline', {
      scrollTrigger: {
        trigger: '.contact',
        toggleActions: 'play none none none',
      },
      duration: 0.4, 
      y:250, 
      stagger: 0.05, 
      ease: 'power3.out',
      delay: 0.1,
    })

    gsap.from('.contact-circle', {
      scrollTrigger: {
        trigger: '.contact',
        start: '-30%',
        // markers: true,
        scrub: true,
      },
      opacity: 0,
      y: 200
      }
    )
  })
  
  return ( 
    <div className="contact" id="contact">
      <div className="contact-container">
        <div className="container">
          <div className="headline-container">
            {headlineArray.map((index) => {
              return (
                <div className="contact-headline">
                  <span key={headlineArray[index]} className="letter">
                    {index === ' ' ? '\u00A0' : index}
                  </span>
                </div>
              )
            })}
          </div>
          <div className="email">BrianMmccune@gmail.com</div>
          <div className="social-media-icons">
            <div>
              <a href="https://www.linkedin.com/in/mccuneb/" target="_blank">
              <FontAwesomeIcon className='fontawesomeicon' style={{fontSize: '35px', color: 'rgb(9, 9, 9)'}} icon={faLinkedin} />
              </a>
            </div>
            <div>
              <a href="https://github.com/Brian4755" target="_blank">
              <FontAwesomeIcon className='fontawesomeicon' style={{fontSize: '35px', color: 'rgb(9, 9, 9)'}} icon={faGithub} />
              </a>
            </div>
          </div>
          <div className='summary-container'>
            <div className="contact-about">
              <Link to="about" offset={90} className="contact-link">
                <div className="container">
                  <div className="about-title"
                    ref={aboutRef} 
                    onMouseEnter={() => {createHoverEffect(aboutRef)
                    }}
                    onMouseLeave={() => removeHoverEffect(aboutRef)}>
                    About
                  </div>
                </div>
              </Link>
              <p>Here's a small bio about myself and what I do.</p>
            </div>
            <div className="contact-expertise">
            <Link to="expertise" offset={-70}className="contact-link"><div>Expertise</div></Link>
              <p>Check out the areas of front-end development I am great at.</p>
            </div>
            <div className="contact-projects">
            <Link to="projects" offset={115} className="contact-link"><div>Projects</div></Link>
              <p>Take a look at some projects I've created, showcasing my skills.</p>
            </div>
            <div className="contact-resume">
            <a href="./Resume.pdf" target="_blank"><div className="resume">Resume</div></a>
              <p>See my work history and my achievements from my resume.</p>
            </div>
          </div>
        </div>
        <div className="copyright">© 2024 Brian McCune</div>
        <div className="contact-circle"></div>
      </div>
    </div>
   );
  }
 
export default Contact;