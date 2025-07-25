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

        <motion.div
          ref={bottomRef}
          initial={{ opacity: 0, y: 40 }}
          animate={bottomInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex self-end w-full  bottom-imagess"
        >
          <div className="absolute -left-6 bottom-0 z-40 self-end">
            <img
              src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683e866c5a5df0d7b03e41e6_hero-bottom-left.svg"
              loading="eager"
              alt="Icon"
              class="about-left-decorative"
            />
          </div>
          <div
            className="w-full bg-gray-8 flex justify-around items-center  p-3 sm:p-4 md:p-6 overflow-hidden"
            style={{
              borderTopLeftRadius: "3rem",
              borderTopRightRadius: "3rem",
            }}
          >
            <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 text-center">
              <div className="flex gap-2 sm:gap-3 lg:gap-4 justify-center items-center">
                <div className="text-gray-500 font-bold">
                  SLSRP The Timeless Mission
                </div>
              </div>
            </div>
            <div className="h-12 sm:h-16 lg:h-20 w-px bg-gray-300"></div>
            <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 text-center">
              <div className="flex gap-2 sm:gap-3 lg:gap-4 justify-center items-center">
                <div className="text-gray-500 font-bold">
                  Forging a Civilizational Shift For sustenance
                </div>
              </div>
            </div>
            <div className="h-12 sm:h-16 lg:h-20 w-px bg-gray-300"></div>
            <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 text-center">
              <div className="flex gap-2 sm:gap-3 lg:gap-4 justify-center items-center">
                <div className="text-gray-500 font-bold">
                  Sustaining Humanity
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-6 self-end">
            <img
              src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/6841390341d0511acefa1664_hero-bottom-right.svg"
              loading="eager"
              alt="Icon"
              class="about-right-decorative"
            />
          </div>
        </motion.div>
      </div>

      {/* Other sections */}
      <div className="w-full px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Left Text Box */}
          <div
            className="text-gray-800 space-y-4 p-4"
            style={{ textAlign: "justify" }}
          >
            <div className="text-3xl sm:text-4xl font-bold flex items-center gap-3">
              <hr style={{ width: "2rem", border: "4px solid black" }} />
              Welcome to SLSRP
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
              src="/path/to/your/image.jpg" // Replace with actual image path
              alt="SLSRP"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>

      <WhyChooseUs />
      <div className="flex flex-col items-center justify-center mb-4 mt-8 pt-3">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
     
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="flex flex-col items-center text-center"
        >
          <div className="lg:w-[800px] md:w-[700px] text-center flex flex-col md:space-y-5 space-y-3">
            <h2 className="overflow-hidden md:pe-5 md:ps-5 p-2">
              Whats
              <span className="text-gray-500"> Matters</span>{" "}
            </h2>
            <p className="text-[18px] text-gray-500 lg:pe-25 lg:ps-25 pe-5 ps-5">
              We live in a world overwhelmed by complexity—mental stress,
              environmental collapse, socio-political fragmentation, and
              disconnected knowledge systems. SLSRP addresses this through a{" "}
              <span className="text-black">
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
                  <img src={star} alt="star" className="w-10 sm:w-12" />
                  <div className="text-gray-500 mt-1 text-sm sm:text-base">
                    responsible
                  </div>
                </div>
                <div className="w-1/2 sm:w-1/3 flex flex-col items-center">
                  <img src={cross} alt="cross" className="w-10 sm:w-12" />
                  <div className="text-gray-500 mt-1 text-sm sm:text-base">
                    resilient
                  </div>
                </div>
                <div className="w-full sm:w-1/3 flex flex-col items-center">
                  <img src={crosses} alt="crosses" className="w-10 sm:w-12" />
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
    </div>
  );
};

export default Home;

// SLSRP - The timeless mission
// Forging a Civilizational Shift — For sustenance
// Sustaining Humanity
