import React, { useEffect } from 'react'
import CountUp from "react-countup";
import gsap from 'gsap';
import '../App.css';

const LoadingPage = () => {
  setTimeout(() => {
    window.location.replace('./FirstTransaction');
  }, 4000);
  useEffect(() => {
    const t1 = gsap.timeline();
   t1.to('#loader-box',{
      x: '-100%',
      duration: 1.5,
      delay: 2.5,
    })
    return () => t1.revert();
  },[])
  return (
    <>
      <section className=' bg-[#F3F4E5] text-[#3C3633] flex flex-col gap-0 justify-center items-center h-screen' id='loader-box'>
        <div className='text-9xl font-space text-center'>
          <CountUp start={0} end={100} duration={2} delay={0.5}/>
        </div>
      </section>
    </>
  )
}

export default LoadingPage