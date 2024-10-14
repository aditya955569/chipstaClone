import React from 'react'
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Fourth=()=>{
  useEffect(()=>{
      gsap.to(".img5",{
        scrollTrigger:{
          trigger:".img5",
          toggleActions:'restart none reset none',
          scrub:1,
        },
        duration:1,
        rotate:-50
      })
      gsap.to(".img6",{
        scrollTrigger:{
          trigger:".img6",
          toggleActions:'restart none reset none',
          scrub:1,
        },
        duration:1,
        rotate:-17
      })
      gsap.to(".ok6",{
        scrollTrigger:{
          trigger:".ok6",
          toggleActions:'restart none reset none',
          scrub:1,
        },
        duration:1,
        rotate:-17
      })
      gsap.to(".heading5",{
        scrollTrigger:{
          trigger:".heading5",
          toggleActions:'restart none reset none',
          scrub:1,
        },
        duration:1,
        y:20
      })
      gsap.to(".heading6",{
        scrollTrigger:{
          trigger:".heading6",
          toggleActions:'restart none reset none',
          scrub:1,
        },
        duration:1,
        y:20
      })
      gsap.to(".text6",{
        scrollTrigger:{
          trigger:".text6",
          toggleActions:'restart none reset none',
          scrub:1,
        },
        duration:1,
        y:-20
      })
      gsap.to(".text5",{
        scrollTrigger:{
          trigger:".text5",
          toggleActions:'restart none reset none',
          scrub:1,
        },
        duration:1,
        y:-20
      })
      gsap.to(".main4", {
        scrollTrigger: {
          trigger: ".main4",
          pin: true,
          pinSpacing: false,
          start: "top top",
          end: "bottom top",
          anticipatePin: 1
          // markers: true // Remove this in production
        },
      })
  },[])
 
  return (
    <div className='main4 relative z-1000 w-screen h-screen flex flex-row overflow-hidden'>
        <motion.div className=' x1 w-1/2 h-screen bg-[#3c3c3c] z-20 flex flex-col justify-center items-center pr-8'
        >
          <div className='flex items-baseline'>
            <h3 className='heading5 text-[#f8752d] text-[100px] font-semibold z-20 tracking-tighter mr-10'>JUNGLE</h3>
            <div>
              <motion.img src='https://www.chipsta.co.uk/images/s3-JUNGLE.png'  className='img5 -rotate-[33deg] h-[220px] w-[220px]'></motion.img>
            </div>
          </div>
          <div className='text5 text-white font-semibold mt-5'>
            "A mild heat, creamy mayo-based sauce
            <br></br>
            with mustard, tomato puree, roasted onions
            <br></br>
            and paprika."
          </div>
        </motion.div>

        <motion.div className=' x2 w-1/2 h-screen bg-[#f8b133] z-20 flex flex-col justify-center items-center '
        >
          <div className='flex items-baseline'>
            <h3 className='heading6 text-[#3c3c3c] text-[100px] z-20 font-semibold tracking-tighter'>JERK</h3>
            <motion.img src='https://www.chipsta.co.uk/images/s2-ORIGINAL.png' className='img6 h-[220px] w-[220px] rounded-full'></motion.img>
            <img src='https://www.chipsta.co.uk/images/icons-ok-orange.svg' className='ok6 absolute top-[200px] right-[330px]'></img>
          </div>
          <div className='text6 text-black font-semibold mt-5'>
            "Sweet and tangy Caribbean style BBQ sauce with
            <br></br>
            scotch bonnet chillies, allspice and herbs."
          </div>
        </motion.div>
    </div>
  )
}

export default Fourth