import React, { useRef } from "react";
import "./OurServices.css";
import { motion, useInView } from "framer-motion";

import SectionPill from "../SectionPill";
import ServiceCard from "../ServiceCard";

import ServiceCardImg1 from "../../assets/Images/service-card-image.avif";

import "../../index.css";
import bulb from "../../assets/Images/bulb.svg";

import HorizontalScrollSection from "../HorizontalScrollSection";

const descriptionPoints = [
  "AI-powered, blockchain-secured PhytoVault Systems.",
  "Flying RoBo–Mapped Digitization of India’s Medicinal and Aromatic Flora",
  "Eco-Tech Incubation for Regenerative Products and Services",
  "Green Start-up Funding and SME Acceleration",
  "STEM-powered Environmental Engineering Hackathons",
  "CSR-backed Wellness and Climate Resilience Campaigns",
];

const noeticSciencePoints = [
  "Noetic Science Research Clusters and Experimental Protocols",
  "nseUW (Noetic Science Enablement on Unified Wholeness) Certification Ecosystem",
  "Youth Leadership and Life-Skill Cohorts with Noetic Modules",
  "Indexation and Publication of Scientific Papers with Physiological Correlates",
  "Structured Delivery through Institutional and Community Channels",
];

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
        <div className="flex gap-3 items-center">
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-full"
            style={{ backgroundColor: "#ffbb00" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="32"
              color="white"
              height="32"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-white! mb-0!">Action</h3>
        </div>

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
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8  "
          >
            {/* Left Text Box */}
            <div
              className=" space-y-4 p-4 text-white "
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
              <div className="flex justify-center w-full items-center mt-10 border border-[#ffaa00] shadow-lg hover:shadow-xl rounded-xl ">
               <div  className='w-full min-h-[350px] bg-white  flex flex-col items-center gap-y-5 cursor-pointer rounded-xl group bg-gradient-to-b from-[#fffaf0] to-[#ffbb40]'>

            
                  <ServiceCard
                    cardHeading={"Environmental Innovation"}
                    description={
                      <ul className="text-gray-700 flex flex-col gap-2 p-4 text-sm">
                        {descriptionPoints.map((point, index) => (
                          <li key={index} className="flex gap-3 items-start">
                            <img src={bulb} alt="" className="w-2 mt-1" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    }
                    link={"#"}
                    img={ServiceCardImg1}
                    imgAlt={"service-card-image-avif"}
                    tagLines={""}
                  />
                      </div>
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
              <div className="flex justify-center w-full items-center mt-10 border border-[#ffaa00] shadow-lg hover:shadow-xl rounded-xl">
                <div  className='w-full min-h-[350px] bg-white  flex flex-col items-center gap-y-5 cursor-pointer rounded-xl group bg-gradient-to-b from-[#fffaf0] to-[#ffbb40] '>

            
                  <ServiceCard
                    cardHeading={"Noetic Science Research & Validation"}
                    description={
                      <ul className="text-gray-700 flex flex-col gap-2 p-4 text-sm">
                        {noeticSciencePoints.map((point, index) => (
                          <li key={index} className="flex gap-3 items-start">
                            <img src={bulb} alt="" className="w-2 mt-1" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    }
                    link={"#"}
                    img={ServiceCardImg1}
                    imgAlt={"service-card-image-avif"}
                    tagLines={""}
                  />
                      </div>
            
              
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
        <div className="mt-5 text-lg font-bold text-white flex justify-center items-center w-2/3  gap-4 px-9 text-center">
          At SLSRP, we operate at the intersection of deep science, cultural
          responsibility, and systemic transformation. Our work is divided into
          two mission-driven verticals with distinct but interlinked approaches.
        </div>
      </motion.div>
    </div>
  );
};

export default OurServices;
