import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return ( 
    <div className="contact">
      <div className="container">
        <div className="contact-headline">Let's Chat</div>
        <div className="email">BrianMmccune@gmail.com</div>
        <div className="social-media-icons">
          <div>
            <a href="https://www.linkedin.com/in/mccuneb/" target="_blank">
            <FontAwesomeIcon style={{fontSize: '35px', color: 'rgb(9, 9, 9)'}} icon={faLinkedin} />
            </a>
          </div>
          <div>
            <a href="https://github.com/Brian4755" target="_blank">
            <FontAwesomeIcon style={{fontSize: '35px', color: 'rgb(9, 9, 9)'}} icon={faGithub} />
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
    </div>
   );
}
 
export default Contact;