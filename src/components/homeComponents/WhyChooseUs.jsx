import React, { useRef } from "react";
import "./WhyChooseUs.css";
import { motion, useInView } from "framer-motion";
import asterick from "../../assets/Images/asterisk.png";

import SectionPill from "../SectionPill";
import PrimaryButtom from "../PrimaryButtom";
import { title } from "framer-motion/client";

const contents = [{
  title:"Social Transformation through Noetic Science",
  description:"We aim to validate and promote consciousness-based practices rooted in Eastern systems — such as meditation, mental reflux, Siddha traditions, and integrated emotional frameworks. These are studied through rigorous scientific research and then scaled through certified programs, workshops, and youth engagement models."
},
{
  title:"Environmental Stewardship through Innovation",
  description:"SLSRP also pioneers solutions to some of the most pressing ecological problems — such as biodiversity loss, pollution, and climate degradation. Through innovations like the PhytoVault (a digital repository of India’s medicinal and aromatic plants), AI-enabled eco-technologies, and STEM - driven regenerative design, we translate research into real - world environmental impact."
}
]
const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: false });
  const rightRef = useRef(null);
  const rightInView = useInView(rightRef, { once: false });

  return (
    <div className="why-choose-us pl-15 pr-15">
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
          <SectionPill sectionTitle={"Our Core"} className={"h-auto w-auto"} />

          <div
            className="mt-5 ml-2 text-2xl max-w-xl font-semibold text-gray-500"
            style={{ fontSize: "1.2rem" }}
          >
          <span className="text-black">  At SLSRP</span>, we believe that the future of humanity depends on our
            ability to evolve — internally and externally. Our research park is
            built upon a <span className="text-black">dual-core mission</span> that touches both the <span className="text-black">inner
            consciousness of individuals</span> and the <span className="text-black">outer ecosystems of the planet.</span>
          </div>

          <div className="border-t border-dashed border-gray-500 mt-5" />

          {/* Repeated Content Block */}
          {contents.map((content, i) => (
            <div className="mt-6" key={i}>
              <div className="text-black font-bold text-lg flex items-center gap-4">
                <img src={asterick} alt="" width={20} /> {content.title}
              </div>
              <div className="text-gray-500 mt-2 text-md">
                {content.description}
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
            <PrimaryButtom text={"Meet our Team"} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
