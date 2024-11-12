import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import headshot from './assets/headshot.jpg';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const headline = "About Me";
  let headlineArray = headline.split('');

  useGSAP(() => {
    // let mm = gsap.matchMedia();

    gsap.from('.about-headline', {
      scrollTrigger: {
        trigger: '.about > .container',
        toggleActions: 'play none none none',
      },
      duration: 0.4, 
      y: 250, 
      stagger: 0.05, 
      ease: 'power3.out'
    });

    // mm.add("(min-width: 768px)", () => {
      gsap.from('.img-container', {
        scrollTrigger: {
          trigger: '.self-image',
          toggleActions: 'play none none none',
        },
        scale: 0.5,
        duration: 0.8,
      });

      // gsap.set('.img-container', { scale: 1 });

      gsap.to('.img-container', {
        scrollTrigger: {
          trigger: '.img-container',
          // start: () => 'top ' + (-window.innerWidth * 0.27 + 240),
          // end: () => 'bottom ' + (window.innerWidth * 0.09 + 430),
          start: 'top-=200rem top',
          end: 'top top-=200rem',
          pin: '.text',
          scrub: true,
          // markers: true,
        },
      });

      // ScrollTrigger.refresh();
    // });

    // window.addEventListener("resize", ScrollTrigger.refresh);

    // return () => {
    //   mm.revert();
    //   window.removeEventListener("resize", ScrollTrigger.refresh);
    // };
  });

  return ( 
    <div className="about" id="about">
      <div className="headline-container">
        {headlineArray.map((index) => {
          return (
            <div className="about-headline" key={index}>
              <span className="letter">
                {index === ' ' ? '\u00A0' : index}
              </span>
            </div>
          );
        })}
      </div>
      <div className="container">
        <div className="img-container">
          <img className="self-image" src={headshot} alt="developer headshot" />
        </div>
        <img className="mobile-image" src={headshot} alt="developer headshot" />
        <div className="text">
          <h3>Intro and hobbies</h3>
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
