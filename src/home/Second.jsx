import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Second() {
  useEffect(()=>{
  gsap.to(".heading",{
    scrollTrigger:{
      trigger:".heading",
       toggleActions:'restart reset restart none'
      
    },
    y:30,
    duration:1,
    ease:'power1.in'
  })
  },[])
  useEffect(()=>{
    gsap.to(".subheading",{
      scrollTrigger:{
        trigger:".heading",
        toggleActions:'restart reset restart none'
        
      },
      y:55,
      duration:1,
      ease:'power1.in'
    })
    },[])
  useEffect(()=>{
      gsap.to(".c",{
        scrollTrigger:{
          trigger:".bt",
          toggleActions:'restart none reset none',
          scrub:1,
        },
        y:-400,
        x:-20,
        duration:1,
        rotate:-20
      })
      },[])
  useEffect(()=>{
        gsap.to(".h",{
          scrollTrigger:{
            trigger:".bt",
            toggleActions:'restart none reset none',
            scrub:1,
          },
          y:-400,
          x:-15,
          duration:1,
          rotate:10
        })
  },[])
  useEffect(()=>{
    gsap.to(".i",{
      scrollTrigger:{
        trigger:".bt",
        toggleActions:'restart none reset none',
        scrub:1,
      },
      y:-400,
      duration:1,
      rotate:-8
    })
    },[])
  useEffect(()=>{
    gsap.to(".p",{
      scrollTrigger:{
        trigger:".bt",
        toggleActions:'restart none reset none',
        scrub:1,
      },
      y:-400,
      x:20,
      duration:1,
      rotate:5
    })
    },[])
  useEffect(()=>{
    gsap.to(".s",{
      scrollTrigger:{
        trigger:".bt",
        toggleActions:'restart none reset none',
        scrub:1,
      },
      y:-200,
      x:-20,
      duration:1,
      rotate:10
    })
    },[])
  useEffect(()=>{
    gsap.to(".t",{
      scrollTrigger:{
        trigger:".bt",
        toggleActions:'restart none reset none',
        scrub:1,
      },
      y:-200,
      x:15,
      duration:1,
      rotate:10
    })
    },[])
  useEffect(()=>{
    gsap.to(".a",{
      scrollTrigger:{
        trigger:".bt",
        toggleActions:'restart none reset none',
        scrub:1,
      },
      y:-300,
      x:25,
      duration:1,
      rotate:10
    })
    },[])                   
  return (
    <div className='main relative w-full h-[900px]  bg-white bg-cover bg-center flex flex-col text-center items-center justify-center pt-32 z-10'>
      {/* Main Content */}
      <div>
        <span className="c background-letter absolute text-[300px] text-[#f8b133] " style={{ top: '22%', left: '25%', width:'30px', transform: 'rotate(10deg)' }}>C</span>
        <span className="h background-letter absolute text-[300px]  text-[#f8b133] " style={{ top: '26%', left: '40%', transform: 'rotate(-10deg)' }}>H</span>
        <span className="i background-letter absolute text-[300px] text-[#f8b133] " style={{ top: '26%', left: '55%', transform: 'rotate(-8deg)' }}>I</span>
        <span className="p background-letter absolute text-[300px] text-[#f8b133] " style={{ top: '28%', left: '60%', transform: 'rotate(-10deg)' }}>P</span>
        <span className="s background-letter absolute text-[300px] text-[#f8b133] " style={{ top: '50%', left: '40%', transform: 'rotate(10deg)' }}>S</span>
        <span className="t background-letter absolute text-[300px] text-[#f8b133] " style={{ top: '50%', left: '46%', transform: 'rotate(-15deg)' }}>T</span>
        <span className="a background-letter absolute text-[300px] text-[#f8b133] " style={{ top: '50%', left: '55%', transform: 'rotate(15deg)' }}>A</span>
      </div>
      <div className='z-10'>
        <h2 className='heading text-6xl text-black font-bold'>NO COMPROMISE FRIES</h2>
        <h3 className='subheading text-[16px] font-semibold text-black px-96 mb-20'>
          At Chipsta we make fries the main event. Not just any fries though. Extra crispy belgian skin-on fries,
          complimented by a massive selection of original sauces. 
          Give your fries a whole new vibe with flavour sensations ranging from fiery heat to sweet and zesty. Get your order in now!
        </h3>
      </div>
      <div className='bt z-20 text-xl font-bold mt-4 text-black'>
        <button className='bg-[#f8b133] pt-4 pb-6 px-10 border-r-2'>Order now</button>
      </div>
      <div className='z-10'>
      <img src='https://www.chipsta.co.uk/images/zda-9397.png'>
      </img>
      </div>
    </div>
  );
}
