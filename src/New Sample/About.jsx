import React, { useLayoutEffect, useRef } from "react";
import { gsap } from 'gsap';

const AboutPage = () => {
    const about = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const incoming = gsap.timeline()
            incoming.from('#main-slider', {
                yPercent: '-100',
                duration: 1.5,
                delay: 0.5
            }).from(['#box-1', '#box-2', '#box-3'],{
                opacity: 0,
                y: '+=30',
                stagger: 0.5,

            })
        }, about)
        return () => ctx.revert();
    },[])
    const company_membaers = [
        {
            name: 'Hardik Singhal',
            photo: '',
            designation: 'MD-1'
        },
        {
            name: 'Subhash Soni',
            photo: '',
            designation: 'MD-1'
        },
        {
            name: 'Sanyam Sharma',
            photo: '',
            designation: 'MD-1'
        }
    ]
  return (
    <>
      <section className="relative"  ref={about}>
      <div className="bg-[#3C3633] h-max text-[#F3F4E5] flex flex-col gap-4 absolute w-full" id="main-slider">
        <div className="text-[10vw] flex flex-row gap-0 text-center justify-center items-center font-inconsolata font-thin"
        id="box-1">
            <h1>THE TRIFUSION</h1>
        </div>
        <div className="text-xl flex flex-col gap-0 justify-center items-center m:max-3xl:flex-row" id="box-2">
          <article className="w-64 text-justify m-8 font-space p-2 m:max-3xl:w-96">
            Tri Fusion is a dynamic company at the forefront of innovation in
            web development, app development, sales, and digital marketing.
            Founded with a vision to revolutionize these industries, we combine
            cutting-edge technology with creative strategies to empower
            businesses of all sizes. Our team of skilled professionals is
            dedicated to delivering tailored solutions that drive growth and
            success. With a focus on quality, efficiency, and customer
            satisfaction, Tri Fusion strives to exceed expectations and make a
            lasting impact in the digital world.
          </article>
          <img src="../images/footer-logo.png" alt="" className="w-72 h-72 m-8"/>
        </div>
        <div className="flex flex-col gap-4" id="box-3">
            <div className="text-center font-space text-5xl m-8 ">
                <h1>Minds Behind the Idea</h1>
            </div>
            <div className="flex flex-col gap-4 justify-around m-8 m:max-3xl:flex-row">
            {company_membaers.map((item,index) => {
                return(
                    <>
                    <div className="font-inconsolata text-2xl text-center gap-2 flex flex-col" key={index}>
                <img src={item.photo} alt="" className="border border-white rounded-full h-64 w-64 m:max-3xl:w-72 m:max-3xl:h-72"/>
                <h1>{item.name}</h1>
                <p>{item.designation}</p>
            </div>
                    </>
                )
            })}
            </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;