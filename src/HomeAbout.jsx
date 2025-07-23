import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import bulb from "./assets/bulb.svg";
import star from "./assets/star.svg";
import cross from "./assets/cross.svg";
import crosses from "./assets/crosses.svg";
import "./HomeAbout.css"; // For custom `.custom-box`, `.box`, etc.

const HomeAbout = () => {
  const head = useRef(null);
  const headInView = useInView(head, { once: false });

  const imgage = useRef(null);
  const imgageInView = useInView(imgage, { once: false });

  const bottomRef = useRef(null);
  const bottomInView = useInView(bottomRef, { once: false });

  return (
    <div className="home-about flex flex-col items-center text-center p-2">
      {/* Header */}
      <motion.div
        ref={head}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: headInView ? 1 : 0, y: headInView ? 0 : 100 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col items-center text-center"
      >
        <img src={bulb} alt="bulb" className="mt-2" />
        <div className="border border-gray-400 rounded-full px-4 py-1 mt-1">
          Driving change
        </div>
        <h3 className="w-full lg:w-1/2 text-[2.3rem] font-semibold mx-auto mt-2">
          At Eco-Supply Transportation, we are{" "}
          <span className="text-gray-500">redefining</span> logistics by
          integrating sustainability{" "}
          <span className="text-gray-500">into every mile.</span>
        </h3>
      </motion.div>

      {/* 3 Boxes */}
      <motion.div
        ref={imgage}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{
          opacity: imgageInView ? 1 : 0,
          scale: imgageInView ? 1 : 1.1,
        }}
        transition={{ duration: 2, ease: "backOut" }}
        className="flex flex-wrap justify-center gap-4 mt-4 w-full boxs"
      >
        <div className="custom-box box w-[30%] min-w-[150px]"></div>
        <div className="custom-box box w-[30%] min-w-[150px]"></div>
        <div className="custom-box box w-[30%] min-w-[150px]"></div>
      </motion.div>

      {/* CTA and Features */}
      <motion.div
        ref={bottomRef}
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: bottomInView ? 1 : 0, y: bottomInView ? 0 : -150 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mt-5 flex flex-col items-center"
      >
        <div className="rounded-full mt-5  py-2 bg-[#4CAF50] text-white cursor-pointer " style={{paddingLeft: "2rem", paddingRight: "2rem"}}>
          More about us
        </div>

        <div className="w-full flex flex-wrap justify-center gap-2 mt-3">
          <div className="w-1/3 flex flex-col items-center">
            <img src={star} alt="star" />
            <div className="text-gray-500 mt-1">Optimized routes</div>
          </div>
          <div className="w-1/3 flex flex-col items-center">
            <img src={cross} alt="cross" />
            <div className="text-gray-500 mt-1">Lower emissions</div>
          </div>
          <div className="w-3/3 flex flex-col items-center">
            <img src={crosses} alt="crosses" />
            <div className="text-gray-500 mt-1">Sustainable logistics</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeAbout;
