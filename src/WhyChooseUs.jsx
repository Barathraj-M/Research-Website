import React, { useRef } from "react";
import "./WhyChooseUs.css";
import { motion, useInView } from "framer-motion";
import asterick from "./assets/asterisk.png";
const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: false });
  const rightRef = useRef(null);
  const rightInView = useInView(rightRef, { once: false });

  return (
    <div className="why-choose-us p-15 berkshire-swash-regular">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row gap-6"
      >
        {/* Left Content */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 1, x: -200 }}
          animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 1, x: -200 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="flex-1"
        >
          <span className="border-2 px-3 py-1 rounded-full uppercase font-semibold text-sm text-gray-500 inline-block ">
            Why Choose Us
          </span>

          <div
            className="mt-5 ml-2 text-2xl max-w-xl font-semibold text-black"
            style={{ fontSize: "2.5rem" }}
          >
            Why <span className="text-gray-500">Mivora</span> eco-supply is the{" "}
            <span className="text-gray-500">smarter choice</span>
          </div>

          <div className="border-t border-dashed border-gray-500 mt-5" />

          {/* Repeated Content Block */}
          {[...Array(3)].map((_, i) => (
            <div className="mt-6" key={i}>
              <div className="text-black font-bold text-lg flex items-center gap-4">
                <img src={asterick} alt="" width={20} /> Innovative green
                technology
              </div>
              <div className="text-gray-600 mt-2 text-lg">
                We utilize advanced route optimization, carbon tracking, and
                intelligent fleet management tools to enhance your logistics
                while ensuring a measurable reduction in your environmental
                footprint.
              </div>
              <div className="border-t border-dashed border-gray-500 mt-5" />
            </div>
          ))}
        </motion.div>

        {/* Right Image */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 200 }}
          animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="flex-1  flex justify-center"
        >
          <img
            src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683585dd0346c20307f1e513_3ef414f9ff986dba7104bc7f30ec8a38_why-choose-image.webp"
            alt="Industry Visual"
            className="w-full max-w-[600px] max-h-[650px] object-cover rounded-xl"
          />
          <div className="whybox flex justify-center items-center absolute bottom-10 lg:bottom-[3.75rem]">
            Meet our Team
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
