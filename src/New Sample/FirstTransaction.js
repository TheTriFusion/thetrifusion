import React, { useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from 'react-fast-marquee';
import WelcomePage from './MainRedirect';

gsap.registerPlugin(ScrollTrigger);
const FirstTransaction = () => {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const transOne = gsap.timeline({
            scrollTrigger: {
                trigger: "#main-box",
                start: "50% 50%",
                end: "100% 50%",
                scrub: 2,
                pin: true,
                marker: true,
            }
        })
        transOne.to("#top", {
            top: "-50%",
        },'alpha').to("#bottom",{
            bottom:"-50%"
        },'alpha').to("#top-heading",{
            top: "60%",
        },'alpha').to("#bottom-heading",{
            bottom: "60%",
        },'alpha')
        })
    return () => ctx.revert()
    },[]);
  return (
    <>
        <section className='bg-[#F3F4E5]'>
            <div className='bg-[#F3F4E5] h-8 w-full'>
            </div>
            <div className='w-full h-screen font-inconsolata font-bold relative flex justify-center items-center'
            id='main-box'>
                <div className='w-full h-1/2 bg-[#F3F4E5] absolute top-0 overflow-hidden text-[#3C3633]' id='top'>
                <Marquee direction='right' play speed={100}>
                <p  id="top-para" className='text-[5vw]'>WELCOME TO :{'    '}WELCOME TO :{'    '}WELCOME TO :</p>
                </Marquee>
                    <h1 id='top-heading' className='absolute top-24 ml-32 text-[18vw]'>TRIFUSION</h1>
                </div>
                <div className='w-full h-screen bg-[#3C3633] text-[4vw] flex justify-center items-center text-center' id='center'>
                    <WelcomePage/>
                </div>
                <div className='w-full h-1/2 bg-[#F3F4E5] absolute bottom-0 overflow-hidden text-[#3C3633] flex flex-col gap-10' id='bottom'>
                    <h1 id='bottom-heading' className='absolute -top-[34vh] ml-32  text-[18vw]'>TRIFUSION</h1>
                    <Marquee direction='left' play speed={100} className=' top-40'>
                <p id='bottom-para' className='text-[5vw]'>WELCOME TO :{'    '}WELCOME TO :{'    '}WELCOME TO :</p>
                </Marquee>
                </div>
            </div>
        </section>
    </>
  )
}

export default FirstTransaction