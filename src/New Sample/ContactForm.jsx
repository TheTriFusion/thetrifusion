import React, { useLayoutEffect, useRef } from "react";
import { gsap } from 'gsap';

const ContactPage = () => {
    const about = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const incoming = gsap.timeline()
            incoming.from('#main-slider', {
                yPercent: '-100',
                duration: 1.5,
                delay: 0.5
            }).from(['#box-1', '#box-2'],{
                opacity: 0,
                y: '+=30',
                stagger: 0.5,
            
            })
        }, about)
        return () => ctx.revert();
    },[])
  return (
    <>
      <section className="relative"  ref={about}>
      <div className="bg-[#3C3633] h-max text-[#F3F4E5] flex flex-col gap-4 absolute w-full" id="main-slider">
        <div className="text-[10vw] flex flex-row gap-0 text-center justify-center items-center font-inconsolata font-thin"
        id="box-1">
            <h1>THE TRIFUSION</h1>
        </div>
        <div className="flex flex-col bg-[#F3F4E5] text-[#3C3633] m-4 h-max justify-evenly items-center rounded-3xl m:max-3xl:flex-row m:max-3xl:m-32"
        id="box-2">
        <img src="../images/contact-form.png" alt="" className="w-64 h-full m-4 m:max-3xl:w-96"/>
            <form
                  action="https://public.herotofu.com/v1/b0d809f0-e083-11ee-8c4a-ef8963b6ff8b"
                  method="post"
                  accept-charset="UTF-8"
                  className="m-4 flex flex-col gap-3 justify-center items-center"
                >
                  <div className="w-60 m-2 m:max-3xl:w-96">
                    <label for="name" className="text-xl font-inconsolata font-semibold">
                      First Name
                    </label>
                    <br />
                    <input
                      name="Name"
                      id="first_name"
                      type="text"
                      required
                      className="w-56 h-8 rounded-lg border border-[#3C3633] m:max-3xl:w-72"
                    />
                  </div>
                  <div className="w-60 m-2 m:max-3xl:w-96">
                    <label for="name" className="text-xl font-inconsolata font-semibold">
                      Last Name
                    </label>
                    <br />
                    <input
                      name="Name"
                      id="last_name"
                      type="text"
                      required
                      className="w-56 h-8 rounded-lg border border-[#3C3633] m:max-3xl:w-72"
                    />
                  </div>
                  <div className="w-60 m-2 m:max-3xl:w-96">
                    <label for="name" className="text-xl font-inconsolata font-semibold">
                      Phone Number
                    </label>
                    <br />
                    <input
                      name="Name"
                      id="number"
                      type="text"
                      required
                      className="w-56 h-8 rounded-lg border border-[#3C3633] m:max-3xl:w-72"
                    />
                  </div>
                  <div className="w-60 m-2 m:max-3xl:w-96">
                    <label for="email" className="text-xl font-inconsolata font-semibold">
                      Your Email
                    </label>
                    <br />
                    <input
                      name="Email"
                      id="email"
                      type="email"
                      required
                      className="w-56 h-8 rounded-lg border border-[#3C3633] m:max-3xl:w-72"
                    />
                  </div>
                  <div className="w-60 m-2 m:max-3xl:w-96">
                    <label for="name" className="text-xl font-inconsolata font-semibold">
                      Your Message
                    </label>
                    <br />
                    <textarea
                      name="message"
                      id="message"
                      cols="50"
                      rows="5"
                      className="w-56 rounded-lg border border-[#3C3633] m:max-3xl:w-72"
                    ></textarea>
                  </div>
                  <div className="w-60 m-2 m:max-3xl:w-96">
                    <input
                      type="submit"
                      value="Send"
                      className="border border-[#3C3633] w-32 h-10 rounded-2xl font-space font-semibold hover:bg-[#3C3633] hover:text-[#F3F4E5] "
                    />
                    <div
                      style={{
                        "white-space": "nowrap",
                        overflow: "hidden",
                        position: "absolute",
                      }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="_gotcha"
                        tabindex="-1"
                        autocomplete="off"
                        hidden
                      />
                    </div>
                  </div>
                </form>
        </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;