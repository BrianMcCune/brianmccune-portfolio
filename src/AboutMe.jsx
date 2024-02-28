import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const AboutMe = () => {

  const headline = "About Me"
  let headlineArray = headline.split('')

  useGSAP(() => {

    gsap.from('.about-headline', {
      scrollTrigger: {
        trigger: '.about > .container',
        toggleActions: 'play none none none',
        // markers: true
      },
      duration: 0.4, 
      y:250, 
      stagger: 0.05, 
      ease: 'power3.out'
    })

    gsap.to('.about', {
      scrollTrigger: {
        trigger: 'img',
        start: () => 'top ' + (window.innerWidth*0.01+ 130),
        end: () => 'bottom ' + (window.innerWidth*0.31 + 130),
        pin: '.text',
        scrub: true,
        // immediateRender: false,
        // markers: true
      },
    })

    gsap.from('img', {
      scrollTrigger: {
        trigger: 'img',
        toggleActions: 'play none none none',
        // markers: true
      },
      scale: 0.9
    })

    gsap.set('img', {
      scale: 1
    })

  })



  return ( 
    <div className="about">
      <div className="headline-container">
        {headlineArray.map((index) => {
          return (
            <div className="about-headline">
              <span key={headlineArray[index]} className="letter">
                {index === ' ' ? '\u00A0' : index}
              </span>
            </div>
          )
        })}
      </div>
      <div className="container">
        <div className="img-container">
          <img src="./headshot.jpg" alt='developer headshot' />
        </div>
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