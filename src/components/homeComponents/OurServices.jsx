import React, { useRef } from "react";
import "./OurServices.css";
import { motion, useInView } from "framer-motion";

import SectionPill from "../SectionPill";
import ServiceCard from "../ServiceCard";

import ServiceCardImg1 from "../../assets/Images/service-card-image.avif";

import "../../index.css";
import HorizontalScrollSection from "../HorizontalScrollSection";

const OurServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="our-services py-9 w-full">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full flex flex-col items-center"
      >
        <SectionPill sectionTitle={"ACTION"} className={"h-auto w-auto ms-9"} />

        <div className="mt-5 text-lg font-bold text-white flex justify-center items-center w-2/3  gap-4 px-9 text-center">
          At SLSRP, we operate at the intersection of deep science, cultural
          responsibility, and systemic transformation. Our work is divided into
          two mission-driven verticals with distinct but interlinked approaches
        </div>
        <div className="w-full px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            {/* Left Text Box */}
            <div
              className=" space-y-4 p-4 text-white"
              style={{ textAlign: "justify" }}
            >
              <div className="text-2xl sm:text-3xl ">
                Environmental Innovation
              </div>
              <p>
                SLSRP functions as an incubation and development platform for
                breakthrough environmental initiatives. We fund, prototype, and
                scale solutions that restore ecosystems, protect biodiversity,
                and promote sustainable living. This includes technology-driven
                projects with real-world implementation potential, supported by
                expert mentorship, cross-sectoral collaboration, and
                impact-aligned investment. Flagship programs under this vertical
                include.
              </p>
              <div className="flex justify-center w-full items-center mt-10">
                <ServiceCard
                  cardHeading={"Ecofriendly transportation"}
                  description={
                    "We offer responsible logistics that minimize pollution and maximize operational efficiency."
                  }
                  link={"#"}
                  img={ServiceCardImg1}
                  imgAlt={"service-card-image-avif"}
                  tagLines={""}
                />
              </div>
            </div>

            {/* Right Image Box */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className=" space-y-4 p-4 text-white"
              style={{ textAlign: "justify" }}
            >
              <div className="text-2xl sm:text-3xl ">
                Noetic Science Research & Validation
              </div>
              <p>
                Our noetic science vertical is dedicated to the research,
                validation, and structured delivery of consciousness-based
                practices grounded in Eastern wisdom systems. This includes
                methodical study, ethical dissemination, and structured
                certification—without commercialization. The aim is to cultivate
                individual and social transformation through verifiable mental,
                emotional, and behavioral resilience. Focus areas include
              </p>
              <div className="flex justify-center w-full items-center mt-10">
                <ServiceCard
                  cardHeading={"Ecofriendly transportation"}
                  description={
                    "We offer responsible logistics that minimize pollution and maximize operational efficiency."
                  }
                  link={"#"}
                  img={ServiceCardImg1}
                  imgAlt={"service-card-image-avif"}
                  tagLines={""}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
        {/* <HorizontalScrollSection>
          <ServiceCard
            cardHeading={"Ecofriendly transportation"}
            description={
              "We offer responsible logistics that minimize pollution and maximize operational efficiency."
            }
            link={"#"}
            img={ServiceCardImg1}
            imgAlt={"service-card-image-avif"}
            tagLines={""}
          />
          <ServiceCard
            cardHeading={"Ecofriendly transportation"}
            description={
              "We offer responsible logistics that minimize pollution and maximize operational efficiency."
            }
            link={"#"}
            img={ServiceCardImg1}
            imgAlt={"service-card-image-avif"}
            tagLines={""}
          />
          <ServiceCard
            cardHeading={"Ecofriendly transportation"}
            description={
              "We offer responsible logistics that minimize pollution and maximize operational efficiency."
            }
            link={"#"}
            img={ServiceCardImg1}
            imgAlt={"service-card-image-avif"}
            tagLines={""}
          />
          <ServiceCard
            cardHeading={"Ecofriendly transportation"}
            description={
              "We offer responsible logistics that minimize pollution and maximize operational efficiency."
            }
            link={"#"}
            img={ServiceCardImg1}
            imgAlt={"service-card-image-avif"}
            tagLines={""}
          />
          <ServiceCard
            cardHeading={"Ecofriendly transportation"}
            description={
              "We offer responsible logistics that minimize pollution and maximize operational efficiency."
            }
            link={"#"}
            img={ServiceCardImg1}
            imgAlt={"service-card-image-avif"}
            tagLines={""}
          />
        </HorizontalScrollSection> */}
      </motion.div>
    </div>
  );
};

export default OurServices;
