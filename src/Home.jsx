import React, { useState, useEffect } from "react";
import "./Home.css";
import nature from "./assets/nature.mp4";
import space from "./assets/space.mp4";
import { motion } from "framer-motion";
import bottom1 from "./assets/bottom1.jpg";
import HomeAbout from "./HomeAbout";
import Section3 from "./Section3";
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
    <div className="landing-page .berkshire-swash-regular">
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
          <h1 style={{ color: "black" }}>
            Welcome to Our, <br />
            Research Website
          </h1>
          <p style={{ color: "black" }}>
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
          <h1 style={{ color: "white" }}>Discover the Universe</h1>
          <p style={{ color: "white" }}>
            Join us in our journey to understand the cosmos.
          </p>
          <button className="explore-button">Learn More</button>
        </motion.div>
      </div>
      <motion.div
       initial={false}
          animate={{
            opacity: swap ? 0 : 1,
            y: swap ? 50 : 0,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        className="d-flex bottom-images gap-1 "
        style={{ color: "black" }}
      >
        <div className="col-sm-3  d-flex text-center flex-column align-items-center p-2 justify-content-center rounded-3">
          <img src={bottom1} alt="" className="rounded-3" />
          <h6 className="mt-2">Text</h6>
          <span style={{ fontSize: "0.7rem" }}>Lorem, ipsum dolor.</span>
        </div>
        <div className="col-sm-3  d-flex text-center flex-column align-items-center p-2 justify-content-center rounded-3">
          <img src={bottom1} alt="" className="rounded-3" />
          <h6 className="mt-2">Text</h6>
          <span style={{ fontSize: "0.7rem" }}>Lorem, ipsum dolor.</span>
        </div>
        <div className="col-sm-3  d-flex text-center flex-column align-items-center p-2 justify-content-center rounded-3">
          <img src={bottom1} alt="" className="rounded-3" />
          <h6 className="mt-2">Text</h6>
          <span style={{ fontSize: "0.7rem" }}>Lorem, ipsum dolor.</span>
        </div>
      </motion.div>
    </div>
      <HomeAbout/>
      <Section3/>
    </>
  );
};

export default Home;
