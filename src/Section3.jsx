import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bullet from "./assets/bullet.svg";
import "./Section3.css";

import SectionPill from "./components/SectionPill";

const industries = [
  "Retail & E-commerce",
  "Manufacturing",
  "Healthcare & Pharma",
  "Food & Beverage",
  "Technology & Electronics",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Section3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: false });

  return (
    <div className="section3 berkshire-swash-regular">
      <div className="section3-container p-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="m-5"
        >
          <SectionPill sectionTitle={'Industries we serve'} className={'h-auto w-auto'}/>
          <div className="mt-5 ms-2 text-2xl max-w-xl" style={{fontSize:"2.5rem"}}>
            Building smarter, cleaner supply chains across diverse industries
          </div>
        </motion.div>

        <motion.div
          className="mt-5 flex flex-wrap gap-2 ms-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="px-2 py-2 bg-gray-100 border border-dashed border-gray-400"
              variants={itemVariants}
            >
              {industry}
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-5 ">
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 150 }}
            animate={isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
            transition={{ duration: 1, delay: 0.2 }}
            
          >
            <div className="flex flex-wrap bg-white shadow p-6 rounded-md w-full max-w-5xl">
              <div className="w-full md:w-5/12">
                <img
                  src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/6837f8b64e79d9a9a3b00b7f_tab-image-01.webp"
                  alt=""
                  className="w-full h-auto"
                />
              </div>

              <div className="w-full md:w-7/12 flex flex-col gap-6 px-4 pt-4 md:pt-0">
                <div className="text-xl font-bold">Retail & E-commerce</div>
                <div>
                  Eco-Supply Transportation supports retailers and e-commerce
                  businesses in building greener last-mile delivery networks.
                </div>
                {[1, 2, 3, 4].map((_, idx) => (
                  <div key={idx} className="flex gap-2 items-start">
                    <img src={bullet} alt="bullet" className="mt-1 w-4 h-4" />
                    <span>
                      Zero-emission last-mile delivery using electric and hybrid
                      vehicles.
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
