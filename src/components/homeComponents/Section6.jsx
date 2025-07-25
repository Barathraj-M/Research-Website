import React, { useRef } from "react";
import "./Section6.css";
import { motion, useInView } from "framer-motion";
import arrow from "../../assets/Images/arrow.svg";
import drop from "../../assets/Images/drop.svg";
import cloud from "../../assets/Images/cloud.svg";
import { BsSunFill } from "react-icons/bs";
import location from "../../assets/Images/location.svg";

import SectionPill from "../SectionPill";
import PrimaryButtom from "../PrimaryButtom";

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
    <div className="section6">
      {/* Top Heading */}
      {/* <div className="top flex justify-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="m-5 text-center"
        >
          <SectionPill
            sectionTitle={"Sustainability in numbers"}
            className={"h-auto w-auto"}
          />
          <div
            className="mt-5 ms-2 text-2xl max-w-xl"
            style={{ fontSize: "2.5rem" }}
          >
            Driving measurable change across every shipment, route, and
            partnership.
          </div>
        </motion.div>
      </div> */}

      {/* Animated Icon Boxes */}
      {/* <motion.div
        ref={boxRef}
        className="p-7"
        variants={containerVariants}
        initial="hidden"
        animate={boxInView ? "show" : "hidden"}
      >
        <div className="flex flex-wrap justify-center gap-4">
          {icons.map((imgSrc, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex-1 min-w-[200px] max-w-[250px] border border-dashed border-gray-300 p-6 flex flex-col items-center gap-5 min-h-[250px] justify-between"
            >
              <h6 className="text-gray-500 text-[1.5rem] text-center">
                Lower CO2 Emissions
              </h6>
              <div className="gap-2 flex flex-col items-center">
                <img
                  src={imgSrc}
                  alt=""
                  className="w-[40px] h-[40px] object-contain"
                />
                <div className="text-xl font-bold">40%</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div> */}

      {/* Bottom Section */}
      <motion.div
        ref={bottomRef}
        initial={{ opacity: 0, y: 150 }}
        animate={bottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="flex flex-col lg:flex-row justify-center items-center p-10 gap-20"
      >
        {/* Left Column */}
        <div className="flex flex-col items-center max-w-sm justify-center w-full">
          <h2 className="text-4xl font-light text-gray-500 leading-snug text-center">
            Building Global & National Impact
          </h2>
          {/* <button className="text-black font-semibold px-6 py-3 mt-6">
            <PrimaryButtom text={"Explore service"} />
          </button> */}
        </div>

        {/* Center Circle Map Placeholder */}
        <div className="relative w-[350px] md:w-[450px] lg:w-[500px] aspect-square bg-gray-100 rounded-full flex items-center justify-center">
          {/* Map or globe visualization can go here */}
        </div>

        {/* Right Column */}
        <div className="max-w-sm">
          <p className="text-gray-600 mb-6 text-justify">
            <span className="text-black font-bold">SLSRP</span> is not a siloed
            think tank—it is a{" "}
            <span className="text-black font-bold">
              collaborative, evolving ecosystem.
            </span>{" "}
            We actively partner with ministries like AYUSH, Tribal Affairs,
            MoEFCC, and CSIR. We engage with universities, CSR wings of global
            corporations, public health bodies, and international development
            agencies.
          </p>
          <p className="text-gray-600 mb-6 text-justify">
            Our aim is to{" "}
            <span className="text-black font-bold">
              co-create solutions, generate policy insights,{" "}
            </span>
            and
            <span className="text-black font-bold">
              {" "}
              empower the next generation of scientific and spiritual leaders.
            </span>{" "}
            Our impact is both{" "}
            <span className="text-black font-bold">
              ground - level and high-level
            </span>{" "}
            —from digitizing endangered medicinal flora to contributing to
            global discourses on wellness, climate, and consciousness.
          </p>
        </div>
      </motion.div>
      <div className="flex flex-col items-center justify-center">
        <blockquote className="border-l-4 border-black pl-4 ml-2 italic text-lg text-gray-700 bg-gray-300 p-2 rounded-lg">
          <span className="font-semibold">SLSRP</span> ≠ space —{" "}
          <span className="font-semibold">it’s a purpose.</span>
        </blockquote>
      </div>
    </div>
  );
};

export default Section6;
