import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

const ServicePage = () => {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    
    const pin = gsap.fromTo(sectionRef.current, {
      translateX: 0
    },{
      translateX: '-300vw',
      ease: 'none',
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: '2000 top',
        scrub: 0.6,
        pin: true
      }
    })
    return () => pin.revert();
  }, [])
  const servicesProvided = [
    {
      name: 'Web Development',
      description: 'Specialized in crafting exceptional web experiences tailored to meet your unique business objectives. Our team of experienced developers utilizes the latest technologies and best practices to deliver high-quality, responsive websites that drive results.',
      image: '../images/web-development.png',
    },
    {
      name: 'App Development',
      description: 'Cutting-edged app development solutions tailored to your unique business needs. With our expertise in mobile technology and user-centric design, we help businesses of all sizes create innovative and engaging mobile applications that drive success in today digital landscape.',
      image: '../images/app-development.png',
    },
    {
      name: 'Sales and Marketing',
      description: 'From lead generation to conversion optimization, we offer a full suite of services tailored to meet your unique sales and marketing needs.',
      image: '../images/sales-marketing.png',
    },
    {
      name: 'Digital Marketing',
      description: 'Specialized in elevating your online presence through strategic digital marketing. From SEO to social media, our tailored solutions are designed to boost your brand visibility and drive results',
      image: '../images/digital-marketing.png',
    },
  ]
  return (
    <>
      <section
        className="h-max w-max text-[#3C3633] bg-[#F3F4E5] overflow-x-hidden">
        <div className="my-8 w-[100vw] font-space text-5xl">
          <h1 className="text-center m-8 font-bold">Services</h1>
        </div>
        <div ref={triggerRef}>
        <div className="flex flex-col mt-32 gap-56 w-[400vw] h-[100vh] relative m:max-3xl:flex-row m:max-3xl:gap-0 m:max-3xl:mt-2"
        ref={sectionRef}>
        {servicesProvided.map((items, index) => {
          return(
            <>
              <div key={index} className="h-[100vh] w-[100vw] flex flex-col gap-4 justify-center items-center m:max-3xl:flex-row">
                <img src={items.image} alt="" className=" h-64 w-64"/>
                <div className="font-space flex flex-col gap-4 w-56 justify-center items-center m:max-3xl:w-96">
                  <h1 className="text-4xl text-center">{items.name}</h1>
                  <p className="text-xl text-justify p-4">{items.description}</p>
                </div>
              </div>
            </>
          )
        })}
        </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
