import React from "react";
import { Link } from "react-router-dom";
const FooterPage = () => {
  return (
    <>
      <section className="bg-[#3C3633] text-[#F3F4E5]">
        <div>
          <div className=" top-0 left-0 w-screen overflow-hidden leading-[0px] rotate-180">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className=" block h-[145px] "
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="fill-[#F3F4E5]"
              ></path>
            </svg>
          </div>
        </div>
        <div className="bg-[#3C3633] h-max w-full flex flex-col gap-8 justify-evenly border-b border-[#F3F4E5] m:max-3xl:flex-row m:max-3xl:h-[75vh]" >
            <div className="mt-4 text-center font-space h-72 flex flex-col items-center justify-center gap-0">
                <img src="../images/footer-logo.png" alt="" className="w-32 h-32 m-4" />
                <h1 className="text-4xl">The TriFusion</h1>
                <p>(All right reserved)</p>
            </div>
            <div className="w-full mt-4 font-space h-72 flex flex-col justify-center items-center m:max-3xl:w-72">
                <h1 className="text-center text-2xl m-4">Connect To Us Through</h1>
                <ul className="gap-4 flex flex-col text-base mt-2 justify-center items-center m:max-3xl:justify-start m:max-3xl:items-start">
                    <li>Sector-5, R.C. Vyas Colony
                        <br/>
                        Bhilwara, Rajasthan, 311001
                    </li>
                    <li>+91-6378122780 / +91-8005814384</li>
                    <li>thetrifusion@gmail.com</li>
                    <li>www.thetrifusion.com</li>
                </ul>
            </div>
            <div className="w-full mt-4 font-space h-72 flex flex-col justify-center items-center m:max-3xl:w-72">
                <h1 className="text-center text-2xl m-4">Important Links</h1>
                <ul className="gap-4 flex flex-col text-base mt-2 justify-center items-center m:max-3xl:justify-start m:max-3xl:items-start">
                    
                        <a href="https://www.instagram.com/thetrifusion/">
                        <li>Instagram</li>
                        </a>
                    <a href="https://wa.me/6378133780">
                        <li>Whatsapp</li>
                        </a>
                        <a href="https://www.linkedin.com/in/the-trifusion-4660032b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <li>LinkedIn</li>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61557420276022">
                        <li>Facebook</li>
                        </a>
                </ul>
            </div>
            <div className="w-full mt-4 font-space h-72 flex flex-col justify-center items-center m:max-3xl:w-72">
                <h1 className="text-center text-2xl m-4">Get to Us</h1>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7210.395256932822!2d74.6326986376564!3d25.36469220502349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c2550919a8a7%3A0xb52d32f05198ba59!2sSector%205%2C%20R%20C%20Vyas%20Colony%2C%20Bhilwara%2C%20Rajasthan%20311001!5e0!3m2!1sen!2sin!4v1710324788989!5m2!1sen!2sin"
                  allowfullscreen=""
                  referrerpolicy="no-referrer-when-downgrade"
                  title="companyAddress"
                  className="w-full h-48 py-8 px-8"
                ></iframe>
            </div>
        </div>
      </section>
    </>
  );
};

export default FooterPage;