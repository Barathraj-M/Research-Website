import { use, useRef } from "react";
import bulb from "./assets/bulb.svg";
import star from "./assets/star.svg";
import cross from "./assets/cross.svg";
import crosses from "./assets/crosses.svg";
import "./HomeAbout.css";
import { motion, useInView } from "framer-motion";
const HomeAbout = () => {
  const head = useRef(null);
  const headInView = useInView(head, { once: false });
  const imgage = useRef(null);
  const imgageInView = useInView(imgage, { once: false });
  const bottomRef = useRef(null);
  const bottomInView = useInView(bottomRef, { once: false });
  return (
    <div className="home-about d-flex flex-column align-items-center text-center p-2 berkshire-swash-regular">
      <motion.div
        ref={head}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: headInView ? 1 : 0, y: headInView ? 0 : 100 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="d-flex flex-column align-items-center text-center"
      >
        <img src={bulb} alt="" className="mt-2" />
        <div className="border border-1 rounded-pill p-1 mt-1 ps-3 pe-3">
          Driving change
        </div>
        <div
          className="col-md-12 col-lg-6"
          style={{ fontSize: "2.3rem", fontWeight: "600", margin: "0 auto" }}
        >
          At Eco-Supply Transportation, we are{" "}
          <span style={{ color: "gray" }}>redefining </span>
          logistics by integrating sustainability{" "}
          <span style={{ color: "gray" }}>into every mile.</span>
        </div>
      </motion.div>
      {/* 3 Boxes */}
      <motion.div
        ref={imgage}
        initial={{ opacity: 0, scale: 1.1, }}
        animate={{
          opacity: imgageInView ? 1 : 0,
          scale: imgageInView ? 1 : 1.1,
        
        }}
        transition={{ duration: 2, ease: "backOut" }}
        className="d-flex flex-wrap justify-content-center gap-4 mt-4 boxs"
        style={{ width: "100%" }}
      >
        <div className="custom-box box col-3"></div>
        <div className="custom-box box col-3"></div>
        <div className="custom-box box col-3"></div>
      </motion.div>
      <motion.div
      ref={bottomRef}
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: bottomInView ? 1 : 0, y: bottomInView ? 0 : -150 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div
          className="btn rounded-pill mt-5"
          style={{ backgroundColor: "#4CAF50", color: "white" }}
        >
          More about us
        </div>

        <div className="col-12 d-flex gap-1 justify-content-center mt-3">
          <div className="col-4 d-flex justify-content-center flex-column align-items-center">
            <img src={star} alt="" />
            <div style={{ color: "gray" }}>Optimized routes</div>
          </div>
          <div className="col-4  d-flex justify-content-center flex-column align-items-center">
            <img src={cross} alt="" />
            <div style={{ color: "gray" }}>Lower emissions</div>
          </div>
          <div className="col-4 d-flex justify-content-center flex-column align-items-center">
            <img src={crosses} alt="" />
            <div style={{ color: "gray" }}>Sustainable logistics</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeAbout;
