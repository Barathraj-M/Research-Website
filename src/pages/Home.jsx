import React, { useState, useEffect, useRef } from "react";
import "../Home.css";
import space from "../assets/Videos/space.mp4";
import nature from "../assets/Videos/nature.mp4";
import ocean from "../assets/Videos/ocean.mp4";
import { motion, useInView } from "framer-motion";
import Section3 from "../components/homeComponents/Section3";
import OurServices from "../components/homeComponents/OurServices";
import WhyChooseUs from "../components/homeComponents/WhyChooseUs";
import Section6 from "../components/homeComponents/Section6";
import Clients from "../components/homeComponents/Clients";
import Section9 from "../components/homeComponents/Section9";
import PrimaryButtom from "../components/PrimaryButtom";
import star from "../assets/Images/star.svg";
import cross from "../assets/Images/cross.svg";
import crosses from "../assets/Images/crosses.svg";
import jc from "../assets/Images/jc.png";
import RoundedBottomRight from '../assets/Images/hero-bottom-right.svg'
import RoundedBottomLeft from '../assets/Images/hero-bottom-left.svg'
import YogaBannerImage from '../assets/Images/ancient-yoga-banner-image.png'


import { heroSectionBottomContainerVariants, contentBasicVariants } from "../utils/animationVarients";
import { HandsGlobeIcon, InifiteIcon, ShieldCheckIcon } from "../assets/Icons/Icons";
import SectionPill from "../components/SectionPill";

const videoSlides = [
  {
    src: ocean,
    title: "Essence of Life",
    description:
      "Life is harmony, purpose, love, and conscious connection with all.",
    textColor: "text-white",
    showBottomImages: false,
  },
  {
    src: nature,
    title: "Power of Science",
    description:
      "Science empowers progress through logic, innovation, and fearless human curiosity.",
    textColor: "text-white",
    showBottomImages: true,
  },
  {
    src: space,
    title: "Responsibility to Earth",
    description:
      "Protecting Earth demands sustainability, ethics, respect, and mindful daily choices.",
    textColor: "text-white",
    showBottomImages: false,
  },
];

const Home = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const bottomRef = useRef(null);
  const bottomInView = useInView(bottomRef, { once: false });

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % videoSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getVideoStyle = (index) => ({
    opacity: videoIndex === index ? 1 : 0,
    scale: videoIndex === index ? 1 : 3,
    y: videoIndex === index ? 0 : 20,
  });

  return (
    <div className="home w-full">
      <div className="landing-page">
        {/* Render all videos and fade between them */}
        {videoSlides.map((video, index) => (
          <motion.video
            key={index}
            className="background-video"
            src={video.src}
            autoPlay
            loop
            muted
            playsInline
            animate={getVideoStyle(index)}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        ))}

        {/* Text content area */}
        <div className="content berkshire-swash-regular">
          {videoSlides.map((video, index) =>
            videoIndex === index ? (
              <motion.div
                key={index}
                initial={false}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ position: "relative" }}
              >
                <div
                  className={`font-bold leading-tight ${video.textColor} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl ml-6`}
                >
                  {video.title.split("\n").map((line, i) => (
                    <div key={i} style={{ color: "white" }}>
                      {line}
                    </div>
                  ))}
                </div>
                <p className={` w-3/4  ${video.textColor}`}>
                  {video.description}
                </p>
              </motion.div>
            ) : null
          )}
        </div>

        <div className="flex justify-center items-center w-full ">
          <motion.div
            ref={bottomRef}
            variants={heroSectionBottomContainerVariants}
            initial='initial'
            animate='animate'
            className="absolute bottom-0 xs:w-full md:w-9/10 lg:w-9/10 flex flex-row justify-between items-center gap-0 "
          >
            <img
              src={RoundedBottomLeft}
              alt='Rounded bottom left decoration'
              className='self-end -mb-[0.8px] -me-[0.8px]'
            />
            <motion.div
              className='w-full grid xs:grid-cols-1 md:grid-cols-3 md:gap-x-5 rounded-tl-xl rounded-tr-xl bg-gray-8 px-4 pt-4 pb-2 bg-gradient-to-t from-[#fffaf0] to-[#fff3d1]'
              variants={heroSectionBottomContainerVariants}
              initial='initial'
              animate='animate'
            >
              <motion.div
                className='flex flex-col justify-center items-center gap-y-0.5 h-full xs:border-b-1 md:border-b-0 md:border-r-1 border-dashed border-gray-4 p-2'
                variants={contentBasicVariants}
                initial='initial'
                whileInView='whileInView'
                custom={1}
                viewport={{ once: true, amount: "some" }}
                exit='exit'
              >
                <h5 className="text-center text-gray-1">SLSRP - The timeless mission</h5>
                <InifiteIcon width={50} height={50} />
              </motion.div>
              <motion.div
                className='flex flex-col justify-center items-center gap-y-2 h-full xs:border-b-1 md:border-b-0 md:border-r-1 border-dashed border-gray-4 p-2'
                variants={contentBasicVariants}
                initial='initial'
                whileInView='whileInView'
                custom={4}
                viewport={{ once: true, amount: "some" }}
                exit='exit'
              >
                <h5 className="text-center text-gray-1">Forging a Civilizational Shift - For sustenance</h5>
                <HandsGlobeIcon width={40} height={40} />
              </motion.div>
              <motion.div
                className='text-center flex flex-col justify-center items-center gap-y-2 h-full p-2'
                variants={contentBasicVariants}
                initial='initial'
                whileInView='whileInView'
                custom={8}
                viewport={{ once: true, amount: "some" }}
                exit='exit'
              >
                <h5 className="text-center text-gray-1">Sustaining Humanity</h5>
                <ShieldCheckIcon width={40} height={40} />
              </motion.div>
            </motion.div>
            <img
              src={RoundedBottomRight}
              alt='Rounded bottom right decoration'
              className='self-end -mb-[0.8px] -ms-[0.8px]'
            />
          </motion.div>
        </div>
      </div>

      {/* Other sections */}
      <div className="w-full px-4 py-8  bg-gradient-to-b from-[#fffaf0] to-[#fff3d1] ">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center "
        >
          {/* Left Text Box */}
          <div
            className="text-gray-800 space-y-4 p-4"
            style={{ textAlign: "justify" }}
          >
            <div className="text-3xl sm:text-4xl font-bold flex items-center gap-3">
              <div className="w-2 h-6 bg-[#ffbb00] rounded-sm"></div>
              Welcome to <span className="text-[#ffbb00]">SLSRP</span>
            </div>
            <div className="text-2xl sm:text-3xl text-gray-500">
              Semporutkalai Life Science Research Park (SLSRP)
            </div>
            <p>
              A global initiative inspired by the Tamil word “Semporul”, which
              means the supreme essence of life. It is founded on the vision
              that human evolution, environmental protection, and scientific
              progress must go hand in hand.
            </p>
            <p>
              Spearheaded by Thiru. Jeyachandran Srinivasan, a distinguished
              socialpreneur and thought leader, SLSRP represents a powerful
              confluence of Eastern ancient wisdom systems and contemporary
              scientific research.
            </p>
            <p>
              Established as a multi-sectoral platform, SLSRP operates as a
              center of excellence for noetic science, sustainable environmental
              engineering, and youth transformation programs, with deep roots in
              Indian cultural heritage and a bold vision for global impact.
            </p>
          </div>

          {/* Right Image Box */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center"
          >
            <img
              src={jc} // Replace with actual image path
              alt="SLSRP"
              className="w-full max-w-md "
            />
          </motion.div>
        </motion.div>
        <WhyChooseUs />
      </div>

      <div className="flex flex-col items-center justify-center mb-4 pt-3 ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="flex flex-col items-center text-center"
        >
          <div className="lg:w-[800px] md:w-[700px] text-center flex flex-col md:space-y-5 space-y-3">
            <h2
              className="overflow-hidden md:pe-5 md:ps-5 p-2 flex justify-center items-center gap-2"
              style={{ fontWeight: "700" }}
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-full"
                style={{ backgroundColor: "#ffbb00" }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
                  />
                </svg>
              </div>
              <div>
                Whats
                <span className="text-[#ffbb00]"> Matters</span>{" "}
              </div>
            </h2>
            <p className="text-[17px] text-gray-500 lg:pe-20 lg:ps-20 pe-5 ps-5">
              We live in a world overwhelmed by complexity—mental stress,
              environmental collapse, socio-political fragmentation, and
              disconnected knowledge systems. <br />
              SLSRP addresses this through a{" "}
              <span className="text-[#ffbb00]">
                Wholistic model of transformation
              </span>{" "}
              that does not separate science from spirit, or technology from
              ethics.
            </p>
          </div>
          <div className="grid lg:grid-cols-[3fr_2fr_3fr] sm:grid-cols-[3fr_3fr_3fr] grid-cols-2 lg:gap-9 sm:gap-3 gap-4 max-w-[1100px] lg:h-[290px] md:h-[320px] sm:h-[290px] h-[500px] mx-5 md:mt-20 mt-10">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/685bd03b38b28d909fd48630_about-01.webp"
                loading="eager"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/6837f52f1097f34d589ada2c_about-image-02.webp"
                loading="eager"
                alt="About Image"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-2xl overflow-hidden sm:col-span-1 col-span-2">
              <img
                src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/685bd03a536b0ac4772d1def_about-02.webp"
                loading="eager"
                alt="Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex md:flex-row flex-col justify-center 
            items-center lg:gap-25 md:gap-10 gap-5 p-5 text-gray-500 mt-4"
          >
            <p className="xl:w-[440px] xl:px-0 lg:px-4 text-center h-auto">
              We bridge the intangible aspects of human consciousness with the
              tangible, measurable goals of global development—offering society
              a roadmap that is both deeply philosophical and radically
              practical.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-full flex flex-wrap justify-center gap-4 mt-5">
                <div className="w-1/2 sm:w-1/3 flex flex-col items-center">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full"
                    style={{ backgroundColor: "#ffbb00" }}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3l8 4v5c0 5.25-3.75 9.75-8 11-4.25-1.25-8-5.75-8-11V7l8-4z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                  </div>

                  <div className="text-gray-500 mt-1 text-sm sm:text-base">
                    responsible
                  </div>
                </div>
                <div className="w-1/2 sm:w-1/3 flex flex-col items-center">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full"
                    style={{ backgroundColor: "#ffbb00" }}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3c.132.92.303 1.98-.248 2.894a3 3 0 01-4.753.342C6.28 7.653 5 9.87 5 12a7 7 0 1014 0c0-2.243-1.306-4.84-3.167-6.834-.64-.712-1.533-1.064-2.045-2.166z"
                      />
                    </svg>
                  </div>

                  <div className="text-gray-500 mt-1 text-sm sm:text-base">
                    resilient
                  </div>
                </div>
                <div className="w-full sm:w-1/3 flex flex-col items-center">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full"
                    style={{ backgroundColor: "#ffbb00" }}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3v18h18M9 17l3-4 4 5 4-7"
                      />
                    </svg>
                  </div>
                  <div className="text-gray-500 mt-1 text-sm sm:text-base">
                    research validated future
                  </div>
                </div>
              </div>
            </motion.div>
            <p className="xl:w-[440px] h-auto text-center">
              Whether it’s building an AI system to map biodiversity or helping
              youth tap into their emotional intelligence, our work is about
              crafting a responsible, resilient, and research-validated future.
            </p>
          </motion.div>
        </motion.div>
      </div>
      {/* <HomeAbout /> */}
      <OurServices />
      <Section6 />
      {/* <Section9 />
      <Clients />
      <Section3 /> */}
      <div className="grid auto-rows-auto gap-y-10 min-h-screen w-full px-10 pt-15">
        <div className="grid sm:auto-rows-auto md:grid-rows-none md:grid-cols-5 gap-y-5 gap-x-5 w-full">
          <div className="md:col-span-2 flex flex-col justify-start items-start gap-y-2">
            <SectionPill sectionTitle={'SLSRP'} />
            <motion.h2
              className="mt-5!"
              variants={contentBasicVariants}
              initial='initial'
              whileInView='whileInView'
              custom={1}
              viewport={{ once: true, amount: "all" }}
            >
              A <span className="text-primary-1">Deep Respect</span> for Ancient Knowledge
            </motion.h2>
          </div>
          <div className="md:col-span-3">
            <motion.p
              className="text-gray-2"
              variants={contentBasicVariants}
              initial='initial'
              whileInView='whileInView'
              custom={4}
              viewport={{ once: true, amount: "all" }}
            >
              SLSRP stands at the frontier where Applied noetic science research, Tamil Siddha science,
              Eastern ancient traditional medicine systems, Physical Reflex practices, and indigenous
              healing traditions are not merely preserved but scientifically validated and globally positioned. We
              operate in close coordination with government ministries, research institutions, and thought
              leaders to create academic pathways and practical platforms that connect the past with the future
            </motion.p>
            <motion.p
              className="text-gray-2 md:mt-5!"
              variants={contentBasicVariants}
              initial='initial'
              whileInView='whileInView'
              custom={7}
              viewport={{ once: true, amount: "all" }}
            >
              Our Noetic Science Enablement on Unified Wholeness (nseUW) program exemplifies this,
              offering a non-commercial, merit-based certification ecosystem that brings structure,
              credibility, and measurable outcomes to traditionally oral knowledge systems.
            </motion.p>
          </div>
        </div>
        <motion.div 
          className="overflow-hidden w-full rounded-2xl mb-20 group"
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.7,
              ease: 'easeIn',
              delay: 2
            }
          }}
        >
          <img
            src={YogaBannerImage}
            alt="banner-image-yoga"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-102"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

// SLSRP - The timeless mission
// Forging a Civilizational Shift — For sustenance
// Sustaining Humanity
