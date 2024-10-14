import React, { useEffect, useState, useRef } from 'react'
import First from './First'
import Second from './Second'
import Navbar from './Navbar'
import Third from './Third'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Fourth from './Fourth'
import Fifth from './Fifth'
export default function Home() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white overflow-x-hidden'>
        <Navbar/>
        <First />
        <Second />
        <Third/>
        <Fourth></Fourth>
    </div>
  )
}
