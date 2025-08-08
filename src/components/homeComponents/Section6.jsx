import React, { useRef } from "react";
import "./Section6.css";
import { motion, useInView } from "framer-motion";
import arrow from "../../assets/Images/arrow.svg";
import drop from "../../assets/Images/drop.svg";
import cloud from "../../assets/Images/cloud.svg";
import { BsSunFill } from "react-icons/bs";
import location from "../../assets/Images/location.svg";
import earthVideo from "../../assets/Videos/earth.mp4";
import SectionPill from "../SectionPill";
import PrimaryButtom from "../PrimaryButtom";
import { QuoteDownIcon, QuoteUpIcon } from "../../assets/Icons/Icons";
import { quoteIconDanceVariants } from "../../utils/animationVarients";

// Icons used in box items
const icons = [arrow, drop, cloud, location];

// Staggered animation for boxes
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animate individual items from bottom to top
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Section6 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const boxRef = useRef(null);
  const boxInView = useInView(boxRef, { once: false });

  const bottomRef = useRef(null);
  const bottomInView = useInView(bottomRef, { once: false });

  return (
   <div className="section6" role="region" aria-label="Global and National Impact Section">
  <video
    autoPlay
    muted
    playsInline
    aria-hidden="true"
    role="presentation"
  >
    <source src={earthVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <motion.div
    ref={bottomRef}
    initial={{ opacity: 0, y: 150 }}
    animate={bottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
    transition={{ duration: 1, ease: "easeIn" }}
    className="flex flex-col lg:flex-row justify-center items-center gap-8 section6-content lg:justify-around"
  >
    {/* Left Column */}
    <div className="flex flex-col items-center text-center max-w-sm justify-center w-full gap-1">
      <h2
        className="text-white! gap-2 lg:text-7xl!"
        aria-level="2"
        role="heading"
      >
        Building Global <br /> & <br /> National Impact
      </h2>
    </div>

    {/* Right Column */}
    <div className="max-w-sm text-sm sm:text-base px-3 sm:px-0 ">
      <p className="mb-6 text-justify">
        <span className="font-bold" aria-label="SLSRP abbreviation">
          SLSRP
        </span>{" "}
        is not a siloed think tank—it is a{" "}
        <span className="font-bold">collaborative, evolving ecosystem.</span>{" "}
        We actively partner with ministries like AYUSH, Tribal Affairs, MoEFCC,
        and CSIR to drive sustainable and inclusive growth.
      </p>
      <p className="mb-6 text-justify">
        Our aim is to{" "}
        <span className="font-bold">co-create solutions, generate policy insights, </span>
        and{" "}
        <span className="font-bold">
          empower the next generation of scientific and spiritual leaders.
        </span>
      </p>

      <div
        className="bg-gray-1 rounded-full flex flex-row justify-center items-center gap-x-5 p-5"
        role="figure"
        aria-label="SLSRP Quote"
      >
        <motion.div
          className="self-start text-primary-1"
          variants={quoteIconDanceVariants}
          animate="animate"
          aria-hidden="true"
        >
          <QuoteDownIcon width={40} height={40} />
        </motion.div>
        <blockquote
          className="italic text-white text-center xs:text-sm sm:text-md md:text-xl max-w-3xl"
          cite="SLSRP Manifesto"
        >
          SLSRP ≠ space — it’s a purpose
        </blockquote>
        <motion.div
          className="self-end text-primary-1"
          variants={quoteIconDanceVariants}
          animate="animate"
          aria-hidden="true"
        >
          <QuoteUpIcon width={40} height={40} />
        </motion.div>
      </div>
    </div>
  </motion.div>
</div>

  );
};

export default Section6;
