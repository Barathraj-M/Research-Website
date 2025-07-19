import React from "react";
import "./Clients.css";
import Testimonials from "./Testimonials";
import {motion} from "framer-motion"
const itemVariants = {
  hidden: { opacity: 0, y: -150 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};
const Clients = () => {
  return (
    <div className="clients flex flex-col items-center berkshire-swash-regular justify-center">
        <motion.div
        initial="hidden"
        variants={itemVariants}
        whileInView="show"
        viewport={{ once: false }}
        >
      <h2 style={{fontSize:"2rem",color:"white",fontWeight:"800"}} className="p-2 text-center">What our eco-supply <span style={{color:"green"}}>clients say</span></h2>
      <div className="text-center text-white p-2">
        Trusted by forward-thinking businesses for sustainable logistics excellence
      </div>
      </motion.div>
      <Testimonials/>
    </div>
  );
};

export default Clients;
