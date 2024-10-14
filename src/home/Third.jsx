import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Third = () => {
  useEffect(() => {
    // Existing animations for side divs
    gsap.to(".x1", {
      scrollTrigger: {
        trigger: ".main",
        toggleActions: 'restart none reset none',
        start: 'top -830px',
        scrub: true,
      },
      x: 0,
    });

    gsap.to(".x2", {
      scrollTrigger: {
        trigger: ".main",
        toggleActions: 'restart none reset none',
        start: 'top -830px',
        scrub: true,
      },
      x: 0,
    });

    // New animation for dimming effect
    gsap.to(".cover", 
      {
        scrollTrigger: {
          trigger: ".main",
          start: 'top -430px',
          end: 'top -2000px',
          scrub: true,
          toggleActions: 'restart none reset none',
        },
        opacity: 0.8, // End state
      }
    );
    gsap.to(".cover2", 
      {
        scrollTrigger: {
          trigger: ".x2",
          start: 'top -100px',
          end: 'top -2000px',
          scrub: true,
          toggleActions: 'restart none reset none',
        },
        opacity: 0.6, // End state
      }
    );
    gsap.to(".heading", 
      {
        scrollTrigger: {
          trigger: ".main",
          start: 'top -430px',
          end: 'top -2000px',
          scrub: true,
          toggleActions: 'restart none reset none',
        },
        y:20, // End state
      }
    );
    gsap.to(".subheading", 
      {
        scrollTrigger: {
          trigger: ".main",
          start: 'top -430px',
          end: 'top -2000px',
          scrub: true,
          toggleActions: 'restart none reset none',
        },
        y:-20, // End state
      }
    );
    gsap.fromTo(".img2", { rotate: -30 }, {
      scrollTrigger: {
        trigger: ".img2",
        toggleActions: 'play none reset reverse',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
      rotate: 30,
    });

    gsap.fromTo(".img1", { rotate: 10 }, {
      scrollTrigger: {
        trigger: ".img1",
        toggleActions: 'play none reset reverse',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
      rotate: -10,
    });

    gsap.fromTo(".img3", { rotate: 10 }, {
      scrollTrigger: {
        trigger: ".img3",
        toggleActions: 'play none reset reverse',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
      rotate: -10,
    });

    gsap.to(".heading2", {
      scrollTrigger: {
        trigger: ".heading2",
        toggleActions: 'play none reset reverse',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
      x: -40,
    });

    gsap.to(".heading1", {
      scrollTrigger: {
        trigger: ".heading1",
        toggleActions: 'play none reset reverse',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
      x: 40,
    });

    gsap.to(".text1", {
      scrollTrigger: {
        trigger: ".text1",
        toggleActions: 'play none reset reverse',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
      x: -40,
    });

    gsap.to(".text2", {
      scrollTrigger: {
        trigger: ".text2",
        toggleActions: 'play none reset reverse',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
      x: 40,
    });

  }, []);

  return (
    <>
      <div
        className='main relative w-screen text-center items-center justify-center h-screen bg-center bg-[url("https://arhesoctro.cloudimg.io/v7/https://www.chipsta.co.uk/images/Sauces_image_big_compressed.jpg")]'
      >
        <div className='cover absolute inset-0 bg-black opacity-0 transition-opacity duration-100'></div>
        <div className='z-10'>
          <h2 className='heading text-6xl text-white font-bold'>INTRODUCING </h2>
          <h2 className='heading text-6xl text-white font-bold'>CHIPSTA SAUCES</h2>
          <h3 className='subheading text-[16px] font-semibold text-white px-[500px] pt-14'>
            Pimp up your fries with our selection of exclusive sauces. At Chipsta our sauce
            game is strong, offering up a massive range of original mouth-watering flavours to compliment
            our famous fries. Let's get dunking!
          </h3>
        </div>

      </div>
      
    </>
  );
};

export default Third;
