import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const AboutMe = () => {

  useGSAP(() => {
    gsap.to('.about', {
      scrollTrigger: {
        trigger: 'img',
        start: () => 'top ' + window.innerWidth*0.1,
        end: () => 'bottom ' + window.innerWidth*0.41,
        pin: '.text',
        scrub: true,
        immediateRender: false,
        // markers: true
      },
    })
  })



  return ( 
    <div className="about">
      <h2>About Me</h2>
      <div className="container">
        <img src="./headshot.jpg" alt='developer headshot' />
        <div className="text">
          <h3>A brief intro, who am I?</h3>
          <p>
            I am a creative frontend developer based in Austin, Texas. I am passionate towards creating frontend modern websites and using my work to impact and connect with small businesses.
          </p>
          <p>
            When I am not developing, I love to set my time aside to play the guitar or Dance Dance Revolution at the arcade.
          </p>
        </div>
      </div>
    </div>
   );
}
 
export default AboutMe;