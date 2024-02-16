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

    gsap.from('.subtitle', {opacity: 0, duration: 1, y: 30, delay: 1.5})
  },{})

  return ( 
    <div className="intro">
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