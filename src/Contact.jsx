import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

  const headline = "Let's Chat"
  let headlineArray = headline.split('')

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
        markers: true,
        scrub: true,
      },
      opacity: 0,
      y: 200
      }
    )
  })
  
  return ( 
    <div className="contact">
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
              <div>About</div>
              <p>Here's a small bio about myself and what I do.</p>
            </div>
            <div className="contact-expertise">
              <div>Expertise</div>
              <p>Check out the areas of front-end development I am great at.</p>
            </div>
            <div className="contact-projects">
              <div>Projects</div>
              <p>Take a look at some projects I've created, showcasing my skills.</p>
            </div>
            <div className="contact-resume">
              <div>Resume</div>
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