import gsap from "gsap";
import { useGSAP } from '@gsap/react';

const Intro = () => {

  const introOne = "HI THERE, I'M"
  const introTwo = "BRIAN MCCUNE."
  let intOneArray = introOne.split('')
  console.log(intOneArray)
  let intTwoArray = introTwo.split('')
  
  useGSAP(() => {

    gsap.from('.intro-container-one', {duration: 0.4, y:250, delay: 0.3, stagger: 0.05, ease: 'power3.out'})
    gsap.from('.intro-container-two', {duration: 0.4, y:250, delay: 0.4, stagger: 0.05, ease: 'power3.out'})

    gsap.from('.subtitle > p', {y: 40, duration: 0.4, delay: 1.4, opacity: 0})

    gsap.to('.lineOne, .lineTwo, .subtitle', {
      scrollTrigger: {
        trigger: '.intro',
        start: '50% center',
        end: 'center',
        scrub: true,
      },
      opacity: 0,
      y: 170
      }
    )

    gsap.from('.intro > .container', {
      y: 100,
      duration: 0.8,
      delay: 0.8,
      opacity: 0
    })

    gsap.fromTo('.circle', {opacity:0.1}, {
      scrollTrigger: {
        trigger: '.intro',
        start: 'center center',
        end: '150%',
        scrub: true,
        // markers: true
      },
      opacity: 0,
      y: 620
      }
    )
  },{})


  return ( 
    <div className="intro">
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