import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const SemiServices = () => {
  const component = useRef(null);
  useLayoutEffect(() => {
     let ctx = gsap.context(() => {
       const transOne = gsap.timeline();
       transOne
         .from("#intro-slider", {
           xPercent: "-100",
           duration: 1.3,
           delay: 0.5,
         })
         .from(["#title-1", "#title-2", "#title-3"], {
           opacity: 0,
           y: "+=30",
           stagger: 0.5,
         })
         .to(["#title-1", "#title-2", "#title-3"], {
           opacity: 0,
           y: "-=30",
           delay: 0.5,
           stagger: 0.5,
         })
         .to("#intro-slider", {
           xPercent: "-100",
           duration: 1.3,
           delay: 0.5,
         });
     }, component);
    
     return () => ctx.revert();
  }, []);
  return (
    <>
      <section className="relative bg-[#F3F4E5] text-[#3C3633]" ref={component}>
        <div
          id="intro-slider"
          className="bg-[#F3F4E5] h-screen p-10 absolute inset-0 font-space z-10 w-full flex flex-col gap-10 tracking-tight text-9xl text-[#3C3633]"
        >
          <h1 id="title-1">Development</h1>
          <h1 id="title-2">Marketing</h1>
          <h1 id="title-3">Sales</h1>
        </div>
        <div className="flex flex-col gap-8">
            <div className="h-screen font-inconsolata flex flex-col gap-4 justify-center items-center">
                <p className="text-4xl text-center m:max-3xl:text-7xl">Services at The TriFusion</p>
                <ul className="text-2xl flex flex-col gap-4 underline underline-offset-4">
                    <li><a href="#web-box">Web Development</a></li>
                    <li><a href="#app-box">App Development</a></li>
                    <li><a href="#digital-box">Digital Marketing</a></li>
                    <li><a href="#sales-box">Sales & MArketing</a></li>
                </ul>
            </div>
          <div className="border-b border-[#3C3633] h-max font-space p-8" id="web-box">
            <h1 className="text-3xl m:max-3xl:text-5xl">Web Development</h1>
            <div className="m-4 flex flex-col gap-4">
              <p className="text-lg text-justify">
                At Trifusion, we specialize in crafting exceptional web
                experiences tailored to meet your unique business objectives.
                Our team of experienced developers utilizes the latest
                technologies and best practices to deliver high-quality,
                responsive websites that drive results.
              </p>
              <p className="text-xl font-bold">
                Benifits of Our Web development services
              </p>
              <div className="flex flex-col gap-8 p-4 justify-center items-center m:max-3xl:grid m:max-3xl:grid-cols-3">
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    Custom Website Development
                  </h1>
                  <p className="text-lg text-justify">
                    From the concept of deployment, we design and develop
                    bespoke websites that reflect your brand identity and
                    resonate with your target audience.
                  </p>
                </div>
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    CMS Development:{" "}
                  </h1>
                  <p className="text-lg text-justify">
                    Take control of your content with our intuitive content
                    management system (CMS) solutions. We leverage leading
                    platforms like WordPress, Joomla, and Drupal to build
                    scalable websites that are easy to manage and update.
                  </p>
                </div>
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    Responsive Design:{" "}
                  </h1>
                  <p className="text-lg text-justify">
                    In today's mobile-driven world, responsive design is
                    essential. We ensure your website looks and functions
                    flawlessly across all devices, providing a seamless user
                    experience.
                  </p>
                </div>
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    Website Maintenance and Support:
                  </h1>
                  <p className="text-lg text-justify">
                    Our commitment doesn't end with the launch of your website.
                    We offer ongoing maintenance and support services to keep
                    your site running smoothly and securely.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 text-xl m:max-3xl:flex-row">
                <h1>Web Development Services - </h1>
                <ul className="flex flex-col gap-4">
                  <li>Basic Website</li>
                  <li>Dynamic Website</li>
                  <li>Business Website</li>
                  <li>E-Commerce Website</li>
                  <li>Personal Website</li>
                </ul>
              </div>
            </div>
          </div>
          {/* */}
          <div className="border-b border-[#3C3633] h-max font-space p-8" id="app-box">
            <h1 className="text-3xl m:max-3xl:text-5xl">App Development</h1>
            <div className="m-4 flex flex-col gap-4">
              <p className="text-lg text-justify">
                The Trifusion is your trusted partner for cutting-edge app
                development solutions tailored to your unique business needs.
                With our expertise in mobile technology and user-centric design,
                we help businesses of all sizes create innovative and engaging
                mobile applications that drive success in today's digital
                landscape.
              </p>
              <p className="text-xl font-bold">
                Benifits of Our App development services
              </p>
              <div className="flex flex-col gap-8 p-4 justify-center items-center m:max-3xl:grid m:max-3xl:grid-cols-3">
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    {" "}
                    Native and Cross-Platform Development
                  </h1>
                  <p className="text-lg text-justify">
                    Whether you're targeting iOS, Android, or both platforms, we
                    leverage the latest native and cross-platform technologies
                    to deliver high-performance mobile applications that provide
                    seamless user experiences across devices.
                  </p>
                </div>
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    Custom App Development
                  </h1>
                  <p className="text-lg text-justify">
                    {" "}
                    Our team of experienced developers works closely with you to
                    understand your vision and transform it into a feature-rich,
                    scalable mobile app. From concept to launch, we prioritize
                    user experience, functionality, and performance to ensure
                    your app stands out in the crowded app marketplace.
                  </p>
                </div>
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    UI/UX Design{" "}
                  </h1>
                  <p className="text-lg text-justify">
                    We believe that great design is at the heart of every
                    successful app. Our talented designers create visually
                    stunning and intuitive user interfaces that captivate users
                    and enhance usability, driving engagement and retention.
                  </p>
                </div>
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    App Maintenance and Support
                  </h1>
                  <p className="text-lg text-justify">
                    Our commitment to your app's success doesn't end at launch.
                    We offer comprehensive maintenance and support services to
                    keep your app running smoothly, with regular updates, bug
                    fixes, and performance optimizations to ensure a seamless
                    user experience over time.
                  </p>
                </div>
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    App Store Optimization (ASO)
                  </h1>
                  <p className="text-lg text-justify">
                    Getting your app discovered is essential for its success. We
                    employ proven ASO strategies to improve your app's
                    visibility and rankings in the app stores, driving organic
                    downloads and maximizing your app's reach.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 text-xl m:max-3xl:flex-row">
                <h1>App Development Services - </h1>
                <ul className="flex flex-col gap-4">
                  <li>Android Applications</li>
                  <li>IOS Application</li>
                </ul>
              </div>
            </div>
          </div>
          {/* */}
          <div className="border-b border-[#3C3633] h-max font-space p-8" id="digital-box"> 
            <h1 className="text-3xl m:max-3xl:text-5xl">Digital Marketing Services</h1>
            <div className="m-4 flex flex-col gap-4">
              <p className="text-lg text-justify">
                Discover the art of digital success with The Trifusion
                comprehensive digital marketing services. Our team of experts is
                dedicated to helping businesses thrive in the online landscape
                through strategic planning, innovative campaigns, and measurable
                results. From increasing brand awareness to driving conversions,
                we tailor our solutions to meet your unique goals and maximize
                your ROI.
              </p>
              <p className="text-xl font-bold">
                Benifits of Our Digital marketing services
              </p>
              <div className="flex flex-col gap-8 p-4 justify-center items-center m:max-3xl:grid m:max-3xl:grid-cols-3">
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    {" "}
                    Search Engine Optimization (SEO)
                  </h1>
                  <p className="text-lg text-justify">
                    Boost your online visibility and drive organic traffic to
                    your website with our result-driven SEO strategies. We
                    optimize your website to rank higher in search engine
                    results, ensuring that your target audience finds you when
                    they need you most.
                  </p>
                </div>
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    Pay-Per-Click (PPC) Advertising
                  </h1>
                  <p className="text-lg text-justify">
                    {" "}
                    Reach your target audience instantly with targeted PPC
                    campaigns. We create and manage ads on platforms like Google
                    Ads and social media to generate qualified leads and
                    maximize your advertising budget.
                  </p>
                </div>
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    Social Media Marketing (SMM)
                  </h1>
                  <p className="text-lg text-justify">
                    Engage with your audience and build brand loyalty through
                    strategic social media marketing. Our team develops custom
                    social media campaigns across platforms like Facebook,
                    Instagram, Twitter, and LinkedIn to increase brand
                    awareness, drive traffic, and foster meaningful connections
                    with your audience.
                  </p>
                </div>
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    Content Marketing
                  </h1>
                  <p className="text-lg text-justify">
                    Fuel your digital presence with valuable, relevant content
                    that resonates with your audience. We create compelling
                    content in various formats, including blog posts, articles,
                    videos, and infographics, to educate, entertain, and inspire
                    your audience while driving engagement and conversions.
                  </p>
                </div>
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    Email Marketing
                  </h1>
                  <p className="text-lg text-justify">
                    Harness the power of email to nurture leads and drive
                    conversions. We design and execute targeted email campaigns
                    that deliver personalized messages to your audience, keeping
                    them engaged and informed about your products, services, and
                    promotions.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 text-xl m:max-3xl:flex-row">
                <h1>Digital Marketing Services - </h1>
                <ul className="flex flex-col gap-4">
                  <li>Social Media Marketing</li>
                  <li> Influencer Marketing</li>
                  <li>Ad Campaigns</li>
                  <li>Content Creation</li>
                  <li>Corporate Videos</li>
                </ul>
              </div>
            </div>
          </div>
          {/* */}
          <div className="border-b border-[#3C3633] h-max font-space p-8" id="sales-box">
            <h1 className="text-3xl m:max-3xl:text-5xl">Sales and Marketing Services</h1>
            <div className="m-4 flex flex-col gap-4">
              <p className="text-lg text-justify">
                At Trifusion, we understand the pivotal role that sales and
                marketing play in driving business growth and achieving
                organizational objectives. Our comprehensive suite of sales and
                marketing services is designed to empower businesses to reach
                their target audiences effectively, drive engagement, and
                ultimately increase revenue.
              </p>
              <p className="text-xl font-bold">
                Benifits of Our Marketing services
              </p>
              <div className="flex flex-col gap-8 p-4 justify-center items-center m:max-3xl:grid m:max-3xl:grid-cols-3">
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    {" "}
                    Market Research and Analysis
                  </h1>
                  <p className="text-lg text-justify">
                    Gain valuable insights into your target market, competitors,
                    and industry trends with our in-depth market research and
                    analysis services. We help you identify opportunities,
                    mitigate risks, and make informed decisions to drive
                    strategic growth.
                  </p>
                </div>
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    Lead Generation
                  </h1>
                  <p className="text-lg text-justify">
                    {" "}
                    Fuel your sales pipeline with qualified leads through our
                    targeted lead generation strategies. Whether through inbound
                    marketing, outbound outreach, or strategic partnerships, we
                    help you attract and capture the interest of potential
                    customers.
                  </p>
                </div>
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    Brand Strategy and Positioning
                  </h1>
                  <p className="text-lg text-justify">
                    Define your brand identity, values, and unique selling
                    propositions with our comprehensive brand strategy and
                    positioning services. We work closely with you to craft a
                    compelling brand story and establish a strong market
                    presence that resonates with your target audience
                  </p>
                </div>
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    Sales Enablement
                  </h1>
                  <p className="text-lg text-justify">
                    Empower your sales team with the tools, resources, and
                    training they need to succeed. Our sales enablement services
                    include CRM implementation, sales process optimization, and
                    training programs designed to enhance productivity and drive
                    results.
                  </p>
                </div>
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    ECustomer Relationship Management (CRM)
                  </h1>
                  <p className="text-lg text-justify">
                    Strengthen your customer relationships and improve retention
                    with our CRM solutions. We help you implement and customize
                    CRM platforms to streamline your sales and marketing
                    processes, track customer interactions, and deliver
                    personalized experiences.
                  </p>
                </div>
                <div className="w-64 h-max shadow-md shadow-[#3C3633] rounded-xl p-4 flex flex-col justify-center items-center m:max-3xl:w-80">
                  <h1 className="text-xl font-semibold text-center">
                    Analytics and Reporting
                  </h1>
                  <p className="text-lg text-justify">
                    Measure the effectiveness of your sales and marketing
                    efforts with our advanced analytics and reporting services.
                    We provide actionable insights and performance metrics to
                    help you refine your strategies, optimize campaigns, and
                    maximize ROI.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-8 text-xl m:max-3xl:flex-row">
                <h1>Sales Services - </h1>
                <ul className="flex flex-col gap-4">
                  <li>Field Marketing</li>
                  <li> Offline Campaigns</li>
                  <li>Market Strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SemiServices;
