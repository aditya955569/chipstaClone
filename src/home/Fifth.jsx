import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Fifth = () => {
  
  useEffect(()=>{
    gsap.to(".div7",{
        scrollTrigger:{
          trigger:".main7",
          toggleActions:'restart none reset none',
          scrub:1,
        },
        duration:1,
        y:0
    })
    gsap.to(".div8",{
        scrollTrigger:{
          trigger:".main7",
          toggleActions:'restart none reset none',
          scrub:1,
        },
        duration:1,
        y:0
      })
  },[])  
  return (
    <div data-scroll
    data-scroll-section
    data-scroll-speed="1.0" className='main7 relative flex flex-col justify-center items-center overflow-hidden w-screen'>
       <motion.div
          initial={{ y: '-100%' }}
          className='div7 z-30 absolute top-0 w-full  h-1/2 bg-[#f8dfd8] flex items-center justify-center'>
        </motion.div>
        <motion.div
          initial={{ y: '100%' }}
          className='div8 z-30 absolute bottom-0 w-full h-1/2 bg-[#f8dfd8]'>
        </motion.div> 
    </div>
  )
}

export default Fifth