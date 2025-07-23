import React, { useState, useEffect } from "react";
import "./Home.css";
import nature from "./assets/nature.mp4";
import space from "./assets/space.mp4";
import { motion } from "framer-motion";
import bottom1 from "./assets/bottom1.jpg";
import HomeAbout from "./HomeAbout";
import Section3 from "./Section3";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";
import Section6 from "./Section6";
import Clients from "./Clients";
import Section9 from "./Section9";

const Home = () => {
  const [swap, setSwap] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSwap((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="landing-page">
        {/* Always render both videos and fade between them */}
        <motion.video
          className="background-video"
          src={space}
          autoPlay
          loop
          muted
          playsInline
          animate={{
            opacity: swap ? 0 : 1,
            scale: swap ? 3 : 1,
            y: swap ? 20 : 0,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        <motion.video
          className="background-video"
          src={nature}
          autoPlay
          loop
          muted
          playsInline
          animate={{
            opacity: swap ? 1 : 0,
            scale: swap ? 1 : 3,
            y: swap ? 0 : -20,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        <div className="content berkshire-swash-regular">
          {/* Fade content without unmounting */}
          <motion.div
            key="nature"
            initial={false}
            animate={{
              opacity: swap ? 1 : 0,
              y: swap ? 0 : -20,
              scale: swap ? 1 : 0.95,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ position: swap ? "relative" : "absolute" }}
          >
            <h1 className="text-black">
              Welcome to Our, <br />
              Research Website
            </h1>
            <p className="text-black">
              Explore the wonders of nature and space through our research.
            </p>
            <button className="explore-button">Explore Now</button>
          </motion.div>

          <motion.div
            key="space"
            initial={false}
            animate={{
              opacity: swap ? 0 : 1,
              y: swap ? 20 : 0,
              scale: swap ? 1.05 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ position: swap ? "absolute" : "relative" }}
          >
            <h1 className="text-white">Discover the Universe</h1>
            <p className="text-white">
              Join us in our journey to understand the cosmos.
            </p>
            <button className="explore-button">Learn More</button>
          </motion.div>
        </div>

        {/* Bottom Images */}
        <motion.div
          initial={false}
          animate={{
            opacity: swap ? 0 : 1,
            y: swap ? 50 : 0,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex gap-1 text-black bottom-imagess"
        >
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/3 flex flex-col items-center justify-center text-center p-2 "
            >
              <img src={bottom1} alt=""  className="w-full max-w-[300px] sm:max-w-[160px] md:max-w-[140px] lg:max-w-[200px] xl:max-w-[200px]"/>
              <h6 className="mt-2 text-base font-semibold">Text</h6>
              <span className="text-xs">Lorem, ipsum dolor.</span>
            </div>
          ))}
        </motion.div>
      </div>

       <HomeAbout />
      <Section3 /> 
       <OurServices/>
       <WhyChooseUs/> 
       <Section6/>
       <Clients/>
       <Section9/>
    </>
  );
};

export default Home;
