import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from "@react-email/link";
import { Helmet } from "react-helmet";
import {
  faEnvelope,
  faArrowRight,
  faArrowLeft,
  faAddressCard,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/fontawesome-free-brands";
import "../App.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ReactCardFlip from "react-card-flip";
import '../App.css';

function HomePage() {
  library.add(
    faWhatsapp,
    faEnvelope,
    faArrowLeft,
    faArrowRight,
    faInstagram,
    faLinkedinIn,
    faAddressCard,
    faPhone,
    faGlobe
  );
  const [flipWeb, setFlipWeb] = useState(false);
  const [flipApp, setFlipApp] = useState(false);
  const [flipDigital, setFlipDigital] = useState(false);
  const [flipSales, setFlipSales] = useState(false);
  const [text] = useTypewriter({
    words: [
      "Digital Marketing",
      "Web Development",
      "App Development",
      "Sales and Marketing",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80,
  });
  return (
    <>
      <div>
        <Helmet>
          <title>The TriFusion | Home Page</title>
        </Helmet>
      </div>
      <section className="scroll-smooth w-screen overflow-y-hidden scrollbar-hide">
        <section className="relative w-screen h-fit xm:h-max">
          <div
            className=" w-screen h-fit"
            id="main-box"
          >
            <div className=" ">
              <div className=" py-4 px-4 2xl:flex 2xl:flex-row 2xl:gap-8 2xl:justify-between">
                <div className=" text-center 2xl:text-left 2xl:w-max xl:pt-8 xl:pl-8">
                  <h1 className="font-bold text-5xl text-[#944E63] font-mainHeading drop-shadow-xl xm:text-7xl ">
                    WELCOME TO <br /> THE
                    TRIFUSION
                  </h1>
                  <h1 className="font-bold text-3xl text-[#944E63] font-basicHeading pt-4 xm:text-4xl">
                    EXPERTIES IN{" "}
                    <span className="text-[#944E63] font-bold">{text}</span>
                    <span>
                      <Cursor cursorStyle="_" />
                    </span>
                  </h1>
                </div>
                <div className=" flex justify-center items-center text-center 2xl:mr-20 2xl:mt-20 3xl:mr-24 3xl:mt-24">
                    <img
                      src="../images/MAIN-BOX-PIC.png"
                      alt=""
                      className=" lg:w-96 lg:h-96"
                    />
                </div>
              </div>
              <div className=" text-center flex flex-col gap-4 pb-16 xm:flex xm:flex-row xm:gap-8 xm:place-content-center lg:my-16 2xl:place-content-start 2xl:my-0 2xl:pl-8 2xl:pb-24">
                <a href="#contact-box">
                  <button className="border-2 font-semiOne tracking-wide border-[#FFF6E9] rounded-2xl h-12 w-40 bg-[#F3D7CA] transition transform ease-in-out text-[#944E63] text-xl font-bold hover:bg-gray-100 hover:text-[#B47B84] shadow-inner shadow-slate-500 scroll-smooth xm:w-52 xm:h-16 xm:text-2xl">
                    GET STARTED
                  </button>
                </a>
                <a href="#service-box">
                  <button className="border-2 font-semiOne tracking-wide border-[#FFF6E9] rounded-2xl h-12 w-40 bg-[#F3D7CA] transition transform ease-in-out text-[#944E63] text-xl font-bold hover:bg-gray-100 hover:text-[#B47B84] shadow-inner shadow-slate-500 scroll-smooth xm:w-52 xm:h-16 xm:text-2xl">
                    HOW IT WORKS
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="grid gap-4 bg-[#c6d3f0] w-screen max-h-fit lg:grid-cols-2 md:items-center md:text-left ">
          <div className="mx-4 my-4 lg:my-8 py-4 lg:py-8">
            <img
              src="../images/growth.png"
              alt="growth"
              className="w-full  rounded-lg"
            />
          </div>
          <div className="mx-4 my-2 py-8 2xl:mt-16">
            <h1 className="mb-2 text-[#344955] font-normal text-5xl font-basicHeading pb-8">
              Why The TriFusion ?
            </h1>
            <p className="text-left text-xl font-serif">
              Tri Fusion Tech leads with innovation, offering a unique blend of
              digital expertise and client-centric solutions. Our comprehensive
              services span digital marketing, web and app development, and
              sales strategies, empowering businesses in the digital era. What
              sets us apart is not only our dedication to excellence but also
              our personalized approach. Our seasoned professionals bring years
              of experience, ensuring precise and proficient project execution.
              We prioritize one-on-one client meetings and engagements, making
              your vision our priority. Whether you're a startup or an
              established enterprise, Tri Fusion Tech is your trusted partner
              for success in the digital realm. Experience the difference
              firsthand with us.
            </p>
          </div>
        </section>
        <section className=" bg-[#E3E1D9] h-max w-screen">
          <div className=" text-center py-8 lg:text-left lg:pl-8">
            <h1 className="font-medium font-serif text-4xl ">
              What You Get With
            </h1>
            <h1 className=" bg-[#747264] max-w-full text-5xl text-center px-8 text-white font-basicHeading lg:w-max ">
              THE TRIFUSION
            </h1>
          </div>
          <div className=" py-8 px-4 flex flex-col gap-8 items-center lg:flex lg:flex-row lg:gap-4 2xl:gap-16 2xl:justify-center">
            <div className="bg-white border-b-8 border-[#BF3B4A] rounded-3xl w-72 m:w-96 m:h-72">
              <h1 className="text-2xl font-serif relative text-center px-2 py-2 text-[#BF3B4A] m:text-3xl">
                GROUND LEVEL MARKETING
              </h1>
              <p className="font-serif text-lg relative font-normal text-center px-2 py-2 m:text-xl">
                Forge authentic connections with grassroots strategies. Immerse
                in local communities for lasting impact and meaningful
                relationships.
              </p>
            </div>
            <div className="bg-white border-b-8 border-[#D2DE32] rounded-3xl w-72 m:w-96 m:h-72">
              <h1 className="text-2xl font-serif relative text-center px-2 py-2 text-[#D2DE32] m:text-3xl">
                IT SOLUTIONS
              </h1>
              <p className="font-serif text-lg relative font-normal text-center px-2 py-2 m:text-xl ">
                Our IT solutions offer innovative strategies and cutting-edge
                technologies to streamline operations, enhance security, and
                drive digital transformation.
              </p>
            </div>
            <div className="bg-white border-b-8 border-[#B3C1CA] rounded-3xl w-72 m:w-96 m:h-72">
              <h1 className="text-2xl font-serif relative text-center px-2 py-2 text-[#B3C1CA] m:text-3xl">
                TRAINING PROGRAMS
              </h1>
              <p className="font-serif text-lg relative font-normal text-center px-2 py-2 m:text-xl ">
                Empower teams with dynamic training. From sales to digital
                marketing, cultivate expertise for success in today's business
                landscape.
              </p>
            </div>
          </div>
        </section>
        <section className=" bg-white max-h-fit w-screen" id="service-box">
          <h1 className="text-6xl text-center text-[#337357] bg-lime-100 py-8 font-semiTwo font-bold">
            Our Services
          </h1>
          <div className="bg-lime-100 3xl:flex 3xl:flex-row 3xl:gap-4 3xl:justify-evenly ">
            <div className=" flex flex-col gap-8 justify-center items-center xm:flex-row xm:gap-8 xm:justify-evenly">
              <div className="mx-4 my-4 relative">
                <ReactCardFlip flipDirection="horizontal" isFlipped={flipWeb}>
                  <div
                    className="border-1 border-slate-100 bg-[#7F27FF] relative rounded-md shadow-xl shadow-[#AC7D88] h-72 w-72"
                    onMouseEnter={() => setFlipWeb(!flipWeb)}
                  >
                    <h4 className="font-serif font-bold text-2xl text-center pt-4 ">
                      Web Development
                    </h4>
                    <img
                      src="../images/service-wd.png"
                      alt="service-type"
                      className=""
                    />
                  </div>
                  <div
                    className="border-1 border-slate-100 bg-[#7F27FF] relative rounded-md shadow-xl shadow-[#AC7D88] h-72 w-72"
                    onMouseLeave={() => setFlipWeb(!flipWeb)}
                  >
                    <h4 className="font-serif font-bold text-2xl text-center pt-4 ">
                      Web Development
                    </h4>
                    <p className="relative justify-center text-center px-4 text-lg font-serif ">
                      Elevate your online presence with our cutting-edge web
                      development. Our team specializes in creating responsive,
                      user-friendly websites that captivate audiences and
                      deliver seamless user experiences.
                    </p>
                  </div>
                </ReactCardFlip>
              </div>
              <div className="mx-4 my-4 relative">
                <ReactCardFlip flipDirection="horizontal" isFlipped={flipApp}>
                  <div
                    className="border-1 border-slate-100 bg-[#F8E559] relative rounded-md shadow-xl shadow-[#AC7D88] h-72 w-72"
                    onMouseEnter={() => setFlipApp(!flipApp)}
                  >
                    <h4 className="font-serif font-bold text-2xl text-center pt-4">
                      App Development
                    </h4>
                    <img
                      src="../images/service-ad.png"
                      alt="service-type"
                      className=""
                    />
                  </div>
                  <div
                    className="border-1 border-slate-100 bg-[#F8E559] relative rounded-md shadow-xl shadow-[#AC7D88] h-72 w-72"
                    onMouseLeave={() => setFlipApp(!flipApp)}
                  >
                    <h4 className="font-serif font-bold text-2xl text-center pt-4">
                      App Development
                    </h4>
                    <p className="relative justify-center text-center px-4 text-lg font-serif">
                      Stay ahead with our innovative app development. Our
                      skilled developers create dynamic mobile apps for iOS and
                      Android, leveraging latest technologies to bring your
                      ideas to life and connect with users.
                    </p>
                  </div>
                </ReactCardFlip>
              </div>
            </div>

            <div className="flex flex-col gap-8 justify-center items-center xm:flex-row xm:gap-8 xm:justify-evenly">
              <div className="mx-4 my-4 relative">
                <ReactCardFlip flipDirection="horizontal" isFlipped={flipSales}>
                  <div
                    className="border-1 border-slate-100 bg-[#FAA300] relative rounded-md shadow-xl shadow-[#AC7D88] h-72 w-72"
                    onMouseEnter={() => setFlipSales(!flipSales)}
                  >
                    <h4 className="font-serif font-bold text-2xl text-center pt-4">
                      Sales & Marketing
                    </h4>
                    <img
                      src="../images/service-sm.png"
                      alt="service-type"
                      className=""
                    />
                  </div>
                  <div
                    className="border-1 border-slate-100 bg-[#FAA300] relative rounded-md shadow-xl shadow-[#AC7D88] h-72 w-72"
                    onMouseLeave={() => setFlipSales(!flipSales)}
                  >
                    <h4 className="font-serif font-bold text-2xl text-center pt-4">
                      Sales & Marketing
                    </h4>
                    <p className="relative justify-center text-center px-4 text-lg font-serif">
                      Transform sales and marketing with our strategic guidance.
                      From lead generation to conversion optimization, we craft
                      custom strategies driving tangible results, propelling
                      your business towards sustained growth.
                    </p>
                  </div>
                </ReactCardFlip>
              </div>
              <div className="mx-4 my-4 relative">
                <ReactCardFlip
                  flipDirection="horizontal"
                  isFlipped={flipDigital}
                >
                  <div
                    className="border-1 border-slate-100 bg-[#F4538A] relative rounded-md shadow-xl shadow-[#AC7D88] h-72 w-72"
                    onMouseEnter={() => setFlipDigital(!flipDigital)}
                  >
                    <h4 className="font-serif font-bold text-2xl text-center pt-4">
                      Digital Marketing
                    </h4>
                    <img
                      src="../images/service-dm.png"
                      alt="service-type"
                      className=""
                    />
                  </div>
                  <div
                    className="border-1 border-slate-100 bg-[#F4538A] relative rounded-md shadow-xl shadow-[#AC7D88] h-72 w-72"
                    onMouseLeave={() => setFlipDigital(!flipDigital)}
                  >
                    <h4 className="font-serif font-bold text-2xl text-center pt-4">
                      Digital Marketing
                    </h4>
                    <p className="relative justify-center text-center px-4 text-lg font-serif">
                      Unleash digital potential with our comprehensive marketing
                      services. From SEO to social media management, we tailor
                      strategies to boost online presence and engage your
                      audience meaningfully.
                    </p>
                  </div>
                </ReactCardFlip>
              </div>
            </div>
          </div>
        </section>
        <section className=" bg-white max-h-fit w-screen xm:max-2xl:h-fit  lg:grid-cols-2 xm:max-lg:items-center ">
          <div className=" bg-[#F5E8DD] py-16">
            <div className="flex justify-center pt-4">
              <h1 className="font-senrif text-5xl text-center font-bold font-basicHeading ">
                Our Works
              </h1>
            </div>
            <div className="flex flex-row gap-8 py-4 justify-center xm:gap-40 ">
              <img
                src="../images/work-a2d.png"
                alt="a2d-client"
                className="relative h-12 w-16 xm:h-20 xm:w-28"
              />
              <img
                src="../images/work-eats.png"
                alt="eats-client"
                className="relative h-12 w-16 xm:h-20 xm:w-28"
              />
            </div>
          </div>
        </section>
        <section
          className="w-screen bg-gradient-to-r from-indigo-200 from-5% via-sky-200 via-35% to-emerald-200 to-90% flex flex-row gap-0 bg-red-300 justify-center "
          id="contact-box"
        >
          <div className="bg-white rounded-xl max-w-max  shadow-lg shadow-[#50727B] my-8 pt-4 pb-8 m:flex m:flex-row m:gap-0">
            <div className=" w-96 h-max py-4 px-2 rounded-xl">
              <img src="../images/why-box.png" alt="" className="rounded-xl " />
            </div>
            <div className="">
              <div className="py-4 px-8">
                <h1 className=" font-mainHeading text-4xl">Get in Touch </h1>
                <p className="font-serif text-lg">
                  Fill out the form below, and we'll get back
                  <br /> to you as soon as possible
                </p>
              </div>
              <div className="">
                <form
                  action="https://public.herotofu.com/v1/b0d809f0-e083-11ee-8c4a-ef8963b6ff8b"
                  method="post"
                  accept-charset="UTF-8"
                >
                  <div className="px-8 ">
                    <label for="name" className="text-lg font-semiTwo">
                      First Name
                    </label>
                    <br />
                    <input
                      name="Name"
                      id="first_name"
                      type="text"
                      required
                      className="border-2 border-gray-400 w-80 h-8 rounded-lg"
                    />
                  </div>
                  <div className="px-8">
                    <label for="name" className="text-lg font-semiTwo">
                      Last Name
                    </label>
                    <br />
                    <input
                      name="Name"
                      id="last_name"
                      type="text"
                      required
                      className="border-2 border-gray-400 w-80 h-8 rounded-lg"
                    />
                  </div>
                  <div className="px-8">
                    <label for="name" className="text-lg font-semiTwo">
                      Phone Number
                    </label>
                    <br />
                    <input
                      name="Name"
                      id="number"
                      type="text"
                      required
                      className="border-2 border-gray-400 w-80 h-8 rounded-lg"
                    />
                  </div>
                  <div className="px-8">
                    <label for="email" className="text-lg font-semiTwo">
                      Your Email
                    </label>
                    <br />
                    <input
                      name="Email"
                      id="email"
                      type="email"
                      required
                      className="border-2 border-gray-400 w-80 h-8 rounded-lg"
                    />
                  </div>
                  <div className="px-8">
                    <label for="name" className="text-lg font-semiTwo">
                      Your Message
                    </label>
                    <br />
                    <textarea
                      name="message"
                      id="message"
                      cols="50"
                      rows="5"
                      className="border-2 border-gray-400 w-80 h-20 rounded-lg"
                    ></textarea>
                  </div>
                  <div className="py-3 px-8">
                    <input
                      type="submit"
                      value="Send Mail"
                      className="border-2 border-blue-400 w-40 h-10 rounded-xl text-center font-semiOne bg-blue-400 text-white text-xl"
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
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-[#607274] w-screen h-max">
          <div className=" place-content-center  xm:flex xm:flex-row xm:gap-2">
            <div className=" items-center">
              <img
                src="../images/footer-logo.png"
                alt="company-logo"
                className="w-40 h-40 pt-8 pl-8"
              />
              <h1 className="font-serif text-center font-bold text-4xl text-white pt-10 xm:text-left xm:ml-8 xs:text-5xl">
                The TriFusion
              </h1>
            </div>
            <div className=" text-center text-white py-4 px-4">
              <h1 className="text-3xl font-basicHeading ">CONTACT US</h1>
              <div className="px-4 flex flex-col gap-4">
                <div className="text-left lg:text-left">
                  <FontAwesomeIcon icon={faAddressCard} className="pt-1" />
                  <p>Sector-5, R.C. Vyas Colony, Bhilwara, Rajasthan, 311001</p>
                </div>
                <div className="text-left lg:text-right">
                  <FontAwesomeIcon icon={faPhone} className="pt-1" />
                  <p>
                    6378122780,
                    <br /> 8005814384
                  </p>
                </div>
                <div className="text-left lg:text-left">
                  <FontAwesomeIcon icon={faEnvelope} className="pt-1 " />
                  <p>thetrifusion@gmail.com</p>
                </div>
                <div className="text-left lg:text-right">
                  <FontAwesomeIcon icon={faGlobe} className="pt-1" />
                  <p>
                    <form href="thetrifusion@gmail.com">
                      www.thetrifusion.com
                    </form>
                  </p>
                </div>
              </div>
            </div>
            <div className=" text-center text-white py-4 px-4 xl:flex xl:flex-col xl:gap-4 ">
              <h1 className="text-3xl font-basicHeading">
                FOLLOW US FOR SOME COOL UPDATES
              </h1>
              <div className=" px-4 flex flex-row gap-8 text-center place-content-center">
                <Link href="https://www.instagram.com/thetrifusion/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-white text-lg  "
                  />
                </Link>
                <Link href="https://wa.me/6378133780">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-white text-lg "
                  />
                </Link>
                <Link href="https://www.linkedin.com/company/the-trifusion/">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className=" text-white text-lg "
                  />
                </Link>
              </div>
              <div className="">
            <h1 className="text-white text-center font-basicHeading text-3xl">
              Get Us on Maps
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7210.395256932822!2d74.6326986376564!3d25.36469220502349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c2550919a8a7%3A0xb52d32f05198ba59!2sSector%205%2C%20R%20C%20Vyas%20Colony%2C%20Bhilwara%2C%20Rajasthan%20311001!5e0!3m2!1sen!2sin!4v1710324788989!5m2!1sen!2sin"
              allowfullscreen=""
              referrerpolicy="no-referrer-when-downgrade"
              title="companyAddress"
              className="w-full h-48 py-8 px-8"
            ></iframe>
          </div>
            </div>
          </div>
          
        </footer>
      </section>
    </>
  );
}

export default HomePage;
//text-pink-200
