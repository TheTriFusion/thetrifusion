import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useLayoutEffect } from "react";
import ServicePage from "./ServicePage";
import '../App.css';
import FooterPage from "./Footer";
import ClientPage from "./Client";

gsap.registerPlugin(ScrollTrigger);

function HomePage()
 {
  useEffect(() => {
    const width = window.innerWidth;
    console.log(width);
  },[])
  useLayoutEffect(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: '#two',
          start: '0% 90%',
          end: '60% 50%',
          scrub: true,
        }
      })
      t1.to('.shifting-char', {
        y: '400',
        x: '-500',
        fontSize: '4rem',
        ease: 'elastic.inOut'
      }).to('.shifting-char',{
        y: '910',
        x: '450',
        delay: 3.5,
        ease: 'none',
      })
      return () => t1.revert()
  },[])
  const navbar_items = [
    {
      name: "Home",
      link: "../HomePage",
    },
    {
      name: "Services",
      link: "../SemiServices",
    },
    {
      name: "Contact",
      link: "../ContactForm",
    },
    {
      name: "About",
      link: "../About",
    },
  ];
  
  return (
    <>
      <section className="w-screen flex flex-col gap-16 bg-[#F3F4E5]" >
        <nav className="flex flex-col gap-0 bg-[#3C3633] text-[#F3F4E5] m:max-3xl:flex-row m:max-3xl:gap-4">
          <div className="w-1/2 px-4 text-5xl font-space font-semibold py-4 ">
              <h1>The TriFusion</h1>
          </div>
          <div className="text-center w-3/5 px-8 py-4 ">
            <ul className="flex flex-col gap-8 items-center justify-center text-2xl pt-2 font-space m:max-3xl:flex-row m:max-3xl:gap-10">
              {navbar_items.map((items, index) => {
                return (
                  <>
                    <li className="w-32 text-left" key={index}>
                      <a href={items.link} className="relative group">
                        {items.name}
                        <div className="absolute w-32 h-0.5 bg-[#F3F4E5] scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out duration-200"></div>
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </nav>
        {/* */}
        <section className="flex flex-col gap-0 h-max bg-[#F3F4E5] text-[#3C3633] m:max-3xl:flex-row">
          <div className="font-space flex flex-col gap-4 text-wrap p-4 m:max-3xl:p-12 m:max-3xl:w-[60vw]">
            <h1 className="text-3xl m:max-3xl:text-6xl">
              Transforming ideas into
              <br /> Digital Excellence{" "}
            </h1>
            <p className="text-lg text-center m:max-3xl:text-2xl m:max-3xl:text-left ">
              Transforming Visions Into Digital Realities: Elevating Your Online
              Presence with Expert Web Development, Creative Website Designing,
              Innovative Android Development, Strategic Digital Marketing, and
              Tailored Software Solutions -Where Innovation Meets Excellence,
              Trust The Trifusion Difference
            </p>
            <button className=" px-4 text-lg w-40 py-2 hover:bg-[#3C3633] hover:text-[#F3F4E5] border border-[#3C3633]">Services</button>
          </div>
          <div className="flex items-center p-8 grayscale hover:grayscale-0 transition-all ease-in-out duration-100 m:max-3xl:w-[40vw]">
            <video src="../images/hero.mp4" typeof="video/mp4" autoPlay loop></video>
          </div>
        </section>
        {/* */}
        <section className="h-96 flex justify-center bg-[#F3F4E5] items-center text-[#3C3633]" >
          <div className="text-[8vh] font-space font-bold text-centermy-16 h-max m:max-3xl:text-[35vh]" >
            <h1 className="shifting-char">TRIFUSION</h1>
          </div>
        </section>
        {/* */}
        <section className="flex flex-col gap-0 h-max bg-[#F3F4E5] text-[#3C3633] m:max-3xl:flex-row" id="two">
          <div className="font-space text-wrap flex flex-col gap-4 m:max-3xl:w-[70vw]">
          <h1 className="text-6xl px-8 py-4 ">
            WHY TO CHOOSE 
          </h1>
          <span className="h-4 px-8 m:max-3xl:h-16">
          </span>
          <span>
              <p className="text-xl p-8 ">
              Tri Fusion Tech leads with innovation, offering a unique blend of digital expertise and client-centric solutions. Our comprehensive services span digital marketing, web and app development, and sales strategies, empowering businesses in the digital era. What sets us apart is not only our dedication to excellence but also our personalized approach. Our seasoned professionals bring years of experience, ensuring precise and proficient project execution. We prioritize one-on-one client meetings and engagements, making your vision our priority. Whether you're a startup or an established enterprise, Tri Fusion Tech is your trusted partner for success in the digital realm. Experience the difference firsthand with us.
              </p>
          </span> 
          </div>
          <div className="text-wrap flex justify-center items-center m:max-3xl:w-[30vw]">
            <img src="./images/growth.png" alt="" />
          </div>
        </section>
        {/* */}
         <section className="flex flex-col gap-8 h-max bg-[#F3F4E5] text-[#3C3633] ">
          <div className="font-space text-wrap flex flex-col gap-4 h-max">
          <h1 className="text-6xl px-8 text-right">
            WHAT YOU GET WITH
          </h1>
          <span className="h-4 px-8 m:max-3xl:h-16">
          </span>
          </div>
              <div className="flex flex-col gap-8 mx-8 justify-center items-center m:max-3xl:flex-row" id="info-box">
            <div className="w-56 h-max text-center flex flex-col bg-red-300 m:max-3xl:h-80 m:max-3xl:w-[50vw] " id="box-1">
              <h1 className="font-bold font-space text-3xl p-4 h-32 w-full">
                GROUND LEVEL MARKETING
              </h1>
              <p className="font-space text-xl p-8">
                Forge authentic connections with grassroots strategies. Immerse
                in local communities for lasting impact and meaningful
                relationships.
              </p>
            </div>
            <div className="w-56 h-max text-center flex flex-col bg-green-300 m:max-3xl:h-80 m:max-3xl:w-[50vw] " id="box-2">
              <h1 className="font-bold font-space text-3xl p-8 h-32 w-full">
                IT SOLUTIONS
              </h1>
              <p className="font-space text-xl p-8">
                Our IT solutions offer innovative strategies and cutting-edge
                technologies to streamline operations, enhance security, and
                drive digital transformation.
              </p>
            </div>
            <div className="w-56 h-max text-center flex flex-col bg-blue-300 m:max-3xl:h-80 m:max-3xl:w-[50vw] " id="box-3">
              <h1 className="font-bold font-space text-3xl p-8 h-32 w-full">
                TRAINING PROGRAMS
              </h1>
              <p className="font-space text-xl p-8">
                Empower teams with dynamic training. From sales to digital
                marketing, cultivate expertise for success in today's business
                landscape.
              </p>
            </div>
          </div>
         </section>
                 {/* */}
                 <section>
                 <div className="overflow-hidden">
          <ServicePage/>
          </div>
          </section>
                 {/* */}
              <section>
                <div>
                  <ClientPage/>
                </div>
              </section>
                 {/* */}
                <section>
                  <FooterPage/>
                </section>
      </section>
    </>
  );
};

export default HomePage;
