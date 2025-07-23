import React, { useRef } from "react";
import "./OurServices.css";
import { motion, useInView } from "framer-motion";

const OurServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="our-services p-9  w-full">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full"
      >
        <span className="border-2 border px-3 py-1 rounded-full uppercase font-semibold text-sm text-gray-500 inline-block">
          Our Services
        </span>

        <div className="mt-5 text-2xl font-bold text-white flex justify-between items-center w-full flex-wrap gap-4">
          <div>
            Clean mobility & supply chain{" "}
            <span className="text-[#4CAF50]">services</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="border border-gray-400 hover:bg-gray-100 flex justify-center items-center"
              style={{
                borderRadius: "50%",
                width: "2.5rem",
                height: "2.5rem",
              }}
            >
              -
            </button>
            <button
              className="border border-gray-400 hover:bg-gray-100 flex justify-center items-center"
              style={{
                borderRadius: "50%",
                width: "2.5rem",
                height: "2.5rem",
              }}
            >
              +
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurServices;
