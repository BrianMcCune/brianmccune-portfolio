import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Intro = () => {

  const introOne = "HELLO, I'M"
  const introTwo = "BRIAN MCCUNE."
  let intOneArray = introOne.split('')
  let intTwoArray = introTwo.split('')
  
  useGSAP(() => {

    gsap.to('.intro-animation > .container', {duration: 0.5, delay: 1, autoAlpha: 0})
    gsap.to('.intro-animation', {duration: 1, height: 0, delay: 1.2, ease: 'power3.in'})

    gsap.from('.intro-container-one', {duration: 0.4, y:250, delay: 1.83, stagger: 0.05, ease: 'power3.out'})
    gsap.from('.intro-container-two', {duration: 0.4, y:250, delay: 1.93, stagger: 0.05, ease: 'power3.out'})

    gsap.from('.subtitle > p', {y: 40, duration: 0.4, delay: 2.4, opacity: 0})

    gsap.to('.lineOne, .lineTwo, .subtitle', {
      scrollTrigger: {
        trigger: '.intro',
        start: '50% center',
        end: 'center',
        scrub: true,
      },
      opacity: 0,
      // y: 170
      }
    )

    gsap.from('.intro > .container', {
      y: 100,
      duration: 0.8,
      delay: 2.4,
      opacity: 0,
      scale: 0.7
    })

    gsap.to('.container > .circle', {
      scrollTrigger: {
        trigger: '.intro',
        start: 'center center',
        end: '80%',
        scrub: true
      },
      opacity: 0,
      y: 400
      }
    )
  })


  return ( 
    <div className="intro" id="intro">
      <div className='intro-animation'>
        <div className='container'>
          <div className='name'>Brian McCune</div>
        </div>
        <div className='container'>
          <div className='folio'>Web Developer</div>
          <div className='folio'>Portfolio ©</div>
        </div>
      </div>
      <div className="container">
        <div className="circle"></div>
      </div>
      <div className="lineOne">
          {intOneArray.map((index) => {
            return (
              <div className="intro-container-one">
                <span key={intOneArray[index]} className="letter">
                  {index === ' ' ? '\u00A0' : index}
                </span>
              </div>
            )
          })}
      </div>
      <div className="lineTwo">
          {intTwoArray.map((index) => {
            return (
              <div className="intro-container-two">
                <span key={index}>
                  {index === ' ' ? '\u00A0' : index}
                </span>
            </div>
            )
          })}
      </div>
      <div className="subtitle">
        <p>Front End Web Developer & ReactJS Fan <br />Creating modern UI designs.</p>
      </div>
    </div>
   );
}
 
export default Intro