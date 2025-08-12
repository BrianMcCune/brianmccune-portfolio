import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Bio = () => {
// create line of black rounded edges that move up and gets pinned to screen. upon center text have animation while scroll with text still centered
  const bioOne = 'I create webpages, keeping up with'

  const bioTwo = 'emerging trends and technologies'

  const bioThree = 'within web development.'

  let bioOneArray = bioOne.split('')
  let bioTwoArray = bioTwo.split('')
  let bioThreeArray = bioThree.split('')

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.bio',
        // markers: true,
        start: 'center bottom',
        end: '90% top',
        scrub: true,
        stagger: 0
      }
    })

    tl.to('.bio, .intro, .about, .screen-adapt-text', {
      backgroundColor: 'rgb(9, 9, 9)',
      color: 'rgb(241, 241, 241)',
      duration: 0.3
    })

    tl.to('button, .underline', {
      backgroundColor: 'rgb(241, 241, 241)',
      color: 'rgb(9, 9, 9)',
    }, 0)

    tl.to('h2, h1, .about-headline', {
      color: 'rgb(241, 241, 241)'
    }, 0)

    tl.to('.navbar, .bio, .intro, .about', {
      backgroundColor: 'rgb(9, 9, 9)',
      color: 'rgb(241, 241, 241)',
      duration: 0.4
    })

    tl.to('.navbar, .bio, .intro, .about, .screen-adapt-text', {
      color: 'rgb(9, 9, 9)',
      backgroundColor: 'rgb(241, 241, 241)',
      duration: 0.3
    })

    tl.to('button, .underline', {
      backgroundColor: 'rgb(9, 9, 9)',
      color: 'rgb(241, 241, 241)',
    }, 1)

    tl.to('.about-headline', {
      color: 'rgb(110, 110, 85)'
    }, 1)

    tl.to('h2, h1', {
      color: 'rgb(9, 9, 9)'
    }, 1)

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
        <div className="screen-adapt-text">{bioOne} {bioTwo} {bioThree}</div>
      </div>
    </div>
   );
}
 
export default Bio;