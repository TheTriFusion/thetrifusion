import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);
const WelcomePage = () => {
    const slider = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const transOne = gsap.timeline({
                scrollTrigger: {
                    trigger: "#slider-box",
                    start: "50% 50%",
                    end: "100% 100%",
                    scrub: 2,
                    pin: true,
                    marker: true,
                },
            })
            transOne.from("#heading-one",{
                xPercent: "-100",
                duration: 5,
                delay:2.5,
                direction: 'right',
            },'beta').from("#heading-two",{
                xPercent: "-100",
                duration: 5.5,
                direction: 'left',
                delay:2
            },'beta').from("#button",{
                opacity:0,
                duration: 1.5,
                delay: 1.5
            })
        },slider)
        return () => ctx.revert()
    },[]);
  return (
    <>
        <section className='w-full h-max bg-[#3C3633] flex flex-col gap-0'>
            <div className=' text-[#F3F4E5] flex flex-col gap-10 justify-center items-center font-space p-10 ml-1/2' id='slider-box' ref={slider}>
                <h1 id='heading-one' className='text-[6vw]'>WE HELP BRANDS TO APPEAR</h1>
                <h1 id='heading-two' className='text-[7vw]'>AS UNIQUE AS THEY ARE</h1>
                <button id='button' className='border-2 border-[#F3F4E5] px-8 py-4 rounded-xl bg-[#F3F4E5] text-[#3C3633] text-[2vw] font-semibold'>
                <Link to='../HomePage'>
                    EXPLORE NOW
                </Link>
                </button>
            </div>
            <div className='flex flex-row gap-4 justify-end items-end p-4'>
                <div className='border-2 border-[#F3F4E5] h-8 w-8 rounded-full bg-[#F3F4E5]' ></div>
                <div className='border-2 border-[#F3F4E5] h-8 w-8 rounded-full bg-[#F3F4E5]' ></div>
                <div className='border-2 border-[#F3F4E5] h-8 w-8 rounded-full bg-[#F3F4E5]' ></div>
            </div>
        </section>
    </>
  )
}

export default WelcomePage;