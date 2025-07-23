import React, { useRef } from "react";
import "./Section6.css";
import { motion, useInView } from "framer-motion";
import arrow from "./assets/arrow.svg";
import drop from "./assets/drop.svg";
import cloud from "./assets/cloud.svg";
import { BsSunFill } from "react-icons/bs";
import location from "./assets/location.svg";

import SectionPill from "./components/SectionPill";
const icons = [arrow, drop, cloud, location];
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const Section6 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const boxRef = useRef(null);
  const boxInView = useInView(boxRef, { once: false });
  const bottomRef=useRef(null)
  const bottomInView=useInView(bottomRef,{once:false})
  return (
    <div className="section6">
      <div className="top flex justify-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="m-5 text-center"
        >
          <SectionPill sectionTitle={'Sustainability in numbers'} className={'h-auto w-auto'}/>
          <div
            className="mt-5 ms-2 text-2xl max-w-xl"
            style={{ fontSize: "2.5rem" }}
          >
            Driving measurable change across every shipment, route, and
            partnership.
          </div>
        </motion.div>
      </div>
      <motion.div
        ref={boxRef}
        className="  p-7"
        variants={containerVariants}
        initial="hidden"
        animate={boxInView ? "show" : "hidden"}
      >
        <div className="flex justify-center  gap-1">
          {icons.map((imgSrc, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex-1 w-1/4 border border-dashed border-gray-300 pl-2 pr-2 pt-4 pb-4 flex flex-col items-center gap-5 min-h-[250px] justify-between"
            >
              <div className="text-gray-500 text-[1.5rem]">
                Lower CO2 Emissions
              </div>
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
      </motion.div>
      <motion.div 
      ref={bottomRef}
      initial={{opacity:0,x:250}}
      animate={bottomInView ? {opacity:1,x:0}:{opacity:0,x:250}}
      transition={{duration:1,ease:"easeIn"}}
      className="flex flex-col lg:flex-row justify-center items-center p-10 gap-20 ms-5">
        {/* Left */}
        <div className="flex flex-col items-start max-w-sm">
          <h2 className="text-4xl font-light text-gray-500 leading-snug">
            Low-emission <br />
            <span className="text-black font-semibold">
              transportation
            </span>{" "}
            <br />
            powered by <br />
            <span className="text-gray-500">innovation</span>
          </h2>
          <button className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-full mt-6">
            Explore service
          </button>
        </div>

        {/* Center Circle Map */}
        <div className="relative w-[350px] md:w-[450px] lg:w-[500px] aspect-square bg-gray-100 rounded-full flex items-center justify-center"></div>

        {/* Right Text */}
        <div className="max-w-sm">
          <p className="text-gray-600 mb-6">
            At Eco-Supply Transportation, our fleet and technology go
            hand-in-hand to deliver smart, sustainable, and future-ready
            logistics solutions.
          </p>
          <ul className="space-y-3 text-gray-700">
            {[
              "Electric & Hybrid vehicles",
              "Low-Emission freight solutions",
              "Last-mile electric delivery hubs",
              "Real-time tracking & monitoring",
              "AI-Powered route optimization",
            ].map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <BsSunFill className="mt-1 text-gray-400" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Section6;
