import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./HomeAbout.css";
import SectionPill from "../SectionPill";
import PrimaryButtom from "../PrimaryButtom";

const HomeAbout = () => {
  const head = useRef(null);
  const headInView = useInView(head, { once: false });

  const image = useRef(null);
  const imageInView = useInView(image, { once: false });

  const bottomRef = useRef(null);
  const bottomInView = useInView(bottomRef, { once: false });

  return (
    <div className="home-about flex flex-col items-center text-center p-4 sm:p-6">
      {/* Header */}
      <motion.div
        ref={head}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: headInView ? 1 : 0, y: headInView ? 0 : 100 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col items-center text-center"
      >
        <img src={""} alt="bulb" className="mt-2 w-12 sm:w-16" />
        <SectionPill
          sectionTitle={"Driving Changes"}
          className={"h-auto w-auto"}
        />
        <h3 className="w-full text-xl sm:text-2xl md:text-[2.3rem] font-semibold mx-auto mt-2 leading-snug sm:leading-tight max-w-xl">
          At Eco-Supply Transportation, we are{" "}
          <span className="text-gray-500">redefining</span> logistics by
          integrating sustainability{" "}
          <span className="text-gray-500">into every mile.</span>
        </h3>
      </motion.div>

      {/* 3 Boxes */}
      <motion.div
        ref={image}
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: imageInView ? 1 : 0,
          y: imageInView ? 0 : 100,
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-wrap justify-center gap-4 mt-6 w-full boxs md:p-6 lg:p-10"
      >
        {[1, 2, 3].map((_, idx) => (
          <div
            key={idx}
            className="custom-box box w-full sm:w-[48%] md:w-[30%] flex-1"
          ></div>
        ))}
      </motion.div>

      {/* CTA and Features */}
      <motion.div
        ref={bottomRef}
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: bottomInView ? 1 : 0, y: bottomInView ? 0 : 150 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mt-20 flex flex-col items-center"
      >
        <div className="mt-5 py-2 px-6 cursor-pointer">
          <PrimaryButtom text={"More about us"} />
        </div>

        <div className="w-full flex flex-wrap justify-center gap-4 mt-5">
          <div className="w-1/2 sm:w-1/3 flex flex-col items-center">
            <img src={star} alt="star" className="w-10 sm:w-12" />
            <div className="text-gray-500 mt-1 text-sm sm:text-base">
              Optimized routes
            </div>
          </div>
          <div className="w-1/2 sm:w-1/3 flex flex-col items-center">
            <img src={cross} alt="cross" className="w-10 sm:w-12" />
            <div className="text-gray-500 mt-1 text-sm sm:text-base">
              Lower emissions
            </div>
          </div>
          <div className="w-full sm:w-1/3 flex flex-col items-center">
            <img src={crosses} alt="crosses" className="w-10 sm:w-12" />
            <div className="text-gray-500 mt-1 text-sm sm:text-base">
              Sustainable logistics
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeAbout;
