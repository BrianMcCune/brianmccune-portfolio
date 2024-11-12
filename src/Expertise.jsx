import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";

const Expertise = () => {
  const letterRef = useRef(null);
  const headline = 'Expertise';
  let headlineArray = headline.split('');

  const createHoverEffect = (e) => {
    // Your hover effect logic here
  };

  const removeHoverEffect = (e) => {
    // Your hover effect reset logic here
  };

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.fromTo('.expertise-circle', { y: 80 }, {
        scrollTrigger: {
          trigger: '.expertise',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
        y: -120,
        opacity: 0.01,
        scale: 0.9
      });
    });

    gsap.from('.expertise-headline', {
      scrollTrigger: {
        trigger: '.expertise',
        toggleActions: 'play none none none',
      },
      duration: 0.4,
      y: 250,
      stagger: 0.05,
      ease: 'power3.out',
      delay: 0.1
    });

    gsap.from('.strengths', {
      scrollTrigger: {
        trigger: '.strengths',
        toggleActions: 'play none none none',
      },
      duration: 0.5,
      y: 60,
      opacity: 0,
      ease: 'power3.out'
    });

    gsap.from('.container > .text-one', {
      scrollTrigger: {
        trigger: '.container > .text-one',
        toggleActions: 'play none none none',
      },
      duration: 0.5,
      y: 60,
      opacity: 0,
      ease: 'power3.out'
    });

    gsap.from('.experiences', {
      scrollTrigger: {
        trigger: '.experiences',
        toggleActions: 'play none none none',
      },
      duration: 0.5,
      y: 60,
      opacity: 0,
      ease: 'power3.out'
    });

    gsap.from('.container > .text-two', {
      scrollTrigger: {
        trigger: '.container > .text-two',
        toggleActions: 'play none none none',
      },
      duration: 0.5,
      y: 60,
      opacity: 0,
      ease: 'power3.out'
    });
  });

  return (
    <div className="expertise">
      <div className="circle-container">
        <div className="expertise-circle"></div>
      </div>
      <div className="headline-container">
        {headlineArray.map((char, index) => (
          <div className="expertise-headline" key={index}>
            <span className="letter">
              {char === ' ' ? '\u00A0' : char}
            </span>
          </div>
        ))}
      </div>
      <div className="expertise-info">
        <div className="expertise-text">
          <h3 className="strengths">Core Strengths</h3>
          <div className="container">
            <p className="text-one">
              My expertise lies in front-end, client-side development. Through my work, I craft impactful web experiences with a focus on clean, responsive designs. I’m driven to continually expand my skill set and keep up with modern technologies that enhance my work.
            </p>
          </div>
          <h3 className="experiences">Professional Experience</h3>
          <div className="container">
            <p className="text-two">
              I’ve developed dynamic web applications for small and mid-sized companies around Austin, utilizing React, HTML, CSS, and JavaScript. My projects often incorporate custom libraries and animations, leveraging tools like GSAP to bring interfaces to life.
            </p>
          </div>
        </div>
        <div className="expertise-list">
          <p>JavaScript</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>ReactJS</p>
          <p>ThreeJS</p>
          <p>NodeJS</p>
          <p>GSAP</p>
          <p>Git</p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
