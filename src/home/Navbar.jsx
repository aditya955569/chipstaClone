import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".header",
      start: "top -100px",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;

        // Smooth transition for background color
        document.querySelector(".header").style.backgroundColor = progress > 0.1 
          ? "#f8b133" 
          : "transparent";
        
        // Smooth transition for logo change
        document.querySelector(".chipsta-logo").src = progress > 0.1 
          ? "https://www.chipsta.co.uk/images/chispta-logo-cropped.svg" 
          : "https://www.chipsta.co.uk/images/logo-big-white-text.svg";
         
          document.querySelectorAll(".ham").forEach(ham => {
            ham.style.backgroundColor = progress > 0.1 ? "white" : "#f8b133";
          }); 
      },
    });

  }, []);

  return (
    <div className='header flex justify-evenly pt-5 fixed top-0 left-0 w-full bg-transparent transition-all duration-500 ease-in-out z-50'>
      <div className='flex'>
        <a className='mr-[15px]'>
          <img src='https://www.chipsta.co.uk/images/delivery-deliveroo.svg' alt='Deliveroo' />
        </a>
        <a className='ml-[15px]'>
          <img src='https://www.chipsta.co.uk/images/delivery-just-eat.svg' alt='Just Eat' />
        </a>
        <a className='ml-[15px]'>
          <img src='https://www.chipsta.co.uk/images/UberEats_stacked_white.svg' alt='Uber Eats' />
        </a>
      </div>
      <div className='w-[366px] flex justify-center items-center'>
        <img
          className='chipsta-logo transition-all duration-500 ease-in-out'
          src='https://www.chipsta.co.uk/images/logo-big-white-text.svg'
          alt='Chipsta Logo'
        />
      </div>
      <div className="group">
        <div className='ham w-[20px] h-[5px] bg-[#f8b133] mt-2 group-hover:ml-0 group-hover:w-[30px] ml-[10px] transition-all duration-500 ease-in-out'></div>
        <div className='ham w-[30px] h-[5px] bg-[#f8b133] mt-2 transition-all duration-500 ease-in-out'></div>
        <div className='ham w-[16px] h-[5px] bg-[#f8b133] mt-2 group-hover:ml-0 group-hover:w-[30px] ml-[14px] transition-all duration-500 ease-in-out'></div>
      </div>
    </div>
  );
}

export default Navbar;
