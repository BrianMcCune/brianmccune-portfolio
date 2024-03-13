import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Bio = () => {

  const bioOne = 'I create webpages, keeping up with'

  const bioTwo = 'emerging trends and technologies'

  const bioThree = 'within web development.'

  let bioOneArray = bioOne.split('')
  let bioTwoArray = bioTwo.split('')
  let bioThreeArray = bioThree.split('')

  useGSAP(() => {
    gsap.to('.navbar, .bio, .intro, .about, body', {
      scrollTrigger: {
        trigger: '.bio',
        // start: '70% bottom',
        start: 'center bottom',
        // end: '80% 30%',
        end: 'bottom center',
        // markers: true,
        toggleActions: "restart reverse restart reverse"
      },
      backgroundColor: 'rgb(9, 9, 9)',
      color: 'rgb(241, 241, 241)',
      duration: 0.2,
    })

    gsap.to('button', {
      scrollTrigger: {
        trigger: '.bio',
        start: 'center bottom',
        end: 'bottom center',
        toggleActions: "restart reverse restart reverse"
      },
      backgroundColor: 'rgb(241, 241, 241)',
      color: 'rgb(9, 9, 9)',
      duration: 0.2
    })

    gsap.to('.about-headline', {
      scrollTrigger: {
        trigger: '.bio',
        start: 'center bottom',
        end: 'bottom center',
        toggleActions: "restart reverse restart reverse"
      },
      color: 'rgb(241, 241, 241)',
      duration: 0.2
    })

    gsap.to('.bio', {
      scrollTrigger: {
        trigger: '.bio',
        start: 'center bottom',
        end: 'bottom center',
        toggleActions: "restart reverse restart reverse"
      },
      opacity: 1,
      duration: 0.3,
      color: 'rgb(230, 230, 226)'
    })

    gsap.to('.bio-text', {
      scrollTrigger: {
        trigger: '.bio',
        start: 'top 30%',
        end: '90% bottom',
        scrub: true,
        // markers: true
      },
      color: 'white',
      stagger: 3, 
    })
  })


  return ( 
    <div className="bio">
      <div className="bio-container">
        <div className="one">
          {bioOneArray.map((index) => {
            return (
              <div className="bio-text">
                <span key={bioOneArray[index]} className="letter">
                  {index === ' ' ? '\u00A0' : index}
                </span>
              </div>
            )
          })}
        </div>
        <div className="two">
          {bioTwoArray.map((index) => {
            return (
              <div className="bio-text">
                <span key={bioTwoArray[index]} className="letter">
                  {index === ' ' ? '\u00A0' : index}
                </span>
              </div>
            )
          })}
        </div>
        <div className="three">
          {bioThreeArray.map((index) => {
            return (
              <div className="bio-text">
                <span key={bioThreeArray[index]} className="letter">
                  {index === ' ' ? '\u00A0' : index}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
   );
}
 
export default Bio;