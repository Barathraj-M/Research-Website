import { motion, useInView } from "framer-motion";
import "./Section3.css";
import { useRef } from "react";
import bullet from "./assets/bullet.svg";
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
      staggerChildren: 0.1, // delay between each child
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
      <div className="section3-container p-5 ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span
            className="border border-2 ps-3 pe-3 rounded-pill "
            style={{
              textTransform: "uppercase",
              fontWeight: "600",
              fontSize: "1rem",
              color: "gray",
            }}
          >
            Industries we serve
          </span>
          <div className="col-lg-5 mt-5 ms-2" style={{ fontSize: "2rem" }}>
            Building smarter, cleaner supply chains across diverse industries
          </div>
        </motion.div>
        <motion.div
          className="mt-5 d-flex flex-wrap gap-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              style={{border:"1px dashed gray"}}
              className="ps-2 pe-2 p-2 bg-light"
              variants={itemVariants}
            >
              {industry}
            </motion.div>
          ))}
        </motion.div>
        <div className="d-flex justify-content-center mt-5">
          <motion.div
          ref={cardRef}
            initial={{ opacity: 0, y: 150 }}
            animate={
              isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }
            }
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="card d-flex flex-wrap p-3 ">
              <div className="row">
                <div className="card-head col-md-5 col-12">
                  <img
                    src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/6837f8b64e79d9a9a3b00b7f_tab-image-01.webp"
                    alt=""
                  />
                </div>
                <div className="card-body d-flex flex-column gap-3 col-md-5 col-12">
                  <div className="head">Retail & E-commerce</div>
                  <div>
                    Eco-Supply Transportation supports retailers and e-commerce
                    businesses in building greener last-mile delivery networks.
                  </div>
                  <div className="d-flex gap-1 align-items-start mt-5">
                    <img src={bullet} alt="" />
                    Zero-emission last-mile delivery using electric and hybrid
                    vehicles.
                  </div>
                  <div className="d-flex gap-1 align-items-start">
                    <img src={bullet} alt="" />
                    Zero-emission last-mile delivery using electric and hybrid
                    vehicles.
                  </div>
                  <div className="d-flex gap-1 align-items-start">
                    <img src={bullet} alt="" />
                    Zero-emission last-mile delivery using electric and hybrid
                    vehicles.
                  </div>
                  <div className="d-flex gap-1 align-items-start">
                    <img src={bullet} alt="" />
                    Zero-emission last-mile delivery using electric and hybrid
                    vehicles.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
