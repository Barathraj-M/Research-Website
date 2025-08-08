import React, { useRef } from "react";
import "./OurServices.css";
import { motion, useInView } from "framer-motion";

import SectionPill from "../SectionPill";
import ServiceCard from "../ServiceCard";
import NavHoverLogo from "../../assets/Images/nav-hover-icon.svg";
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
    <div
      className="our-services py-9 w-full"
      role="region"
      aria-label="Our Services Section"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full flex flex-col items-center"
      >
        <div className="flex gap-3 items-center" role="heading" aria-level="2">
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-full"
            style={{ backgroundColor: "#ffbb00" }}
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              role="img"
              aria-label="Action icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-white! mb-0!" id="action-title">
            Action
          </h3>
        </div>

        <p
          className="mt-5 text-lg font-bold text-white flex justify-center items-center w-2/3 gap-4 text-center"
          aria-describedby="action-title"
        >
          At SLSRP, we operate at the intersection of deep science, cultural
          responsibility, and systemic transformation. Our work is divided into
          two mission-driven verticals with distinct but interlinked approaches
        </p>

        <div className="w-full px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
            role="region"
            aria-label="Services Details"
          >
            {/* Left Text Box */}
            <div
              className="space-y-4 p-4 text-white"
              style={{ textAlign: "justify" }}
            >
              <h3
                className="text-2xl sm:text-3xl text-white! flex items-center gap-2"
                id="env-innovation"
              >
                Environmental Innovation
              </h3>
              <p aria-describedby="env-innovation" className="lg:mt-13">
                SLSRP functions as an incubation and development platform for
                breakthrough environmental initiatives. We fund, prototype, and
                scale solutions that restore ecosystems, protect biodiversity,
                and promote sustainable living. This includes technology-driven
                projects with real-world implementation potential, supported by
                expert mentorship, cross-sectoral collaboration, and
                impact-aligned investment. Flagship programs under this vertical
                include.
              </p>

              <div
                className="flex justify-center w-full items-center mt-10 shadow-lg hover:shadow-xl rounded-xl border border-dashed border-primary-variant-3 hover:border-primary-1 transition-all duration-300 "
                role="group"
                aria-labelledby="env-innovation"
              >
                <div className="w-full min-h-[220px] bg-white flex flex-col items-center  cursor-pointer rounded-xl group text-black">
                  <ul
                    className="flex flex-col gap-2 p-4 text-sm"
                    aria-label="Environmental Innovation Key Points"
                  >
                    {descriptionPoints.map((point, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <img
                          src={NavHoverLogo}
                          alt={`Checkmark icon for item ${index + 1}`}
                          className="w-4 mt-1"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Text Box */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4 p-4 text-white"
              style={{ textAlign: "justify" }}
            >
              <h3
                className="text-2xl sm:text-3xl text-white! flex items-start gap-2"
                id="noetic-science"
                style={{ textAlign: "start" }}
              >
                Noetic Science Research & Validation
              </h3>
              <p aria-describedby="noetic-science">
                Our noetic science vertical is dedicated to the research,
                validation, and structured delivery of consciousness-based
                practices grounded in Eastern wisdom systems. This includes
                methodical study, ethical dissemination, and structured
                certification—without commercialization. The aim is to cultivate
                individual and social transformation through verifiable mental,
                emotional, and behavioral resilience. Focus areas include
              </p>
              <div
                className="flex justify-center w-full items-center mt-10 shadow-lg hover:shadow-xl rounded-xl border border-dashed border-primary-variant-3 hover:border-primary-1 transition-all duration-300"
                role="group"
                aria-labelledby="noetic-science"
              >
                <div className="w-full min-h-[220px] bg-white flex flex-col items-center  cursor-pointer rounded-xl group text-black ">
                  <ul
                    className="flex flex-col gap-2 p-4 text-sm"
                    aria-label="Noetic Science Focus Points"
                  >
                    {noeticSciencePoints.map((point, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <img
                          src={NavHoverLogo}
                          alt={`Checkmark icon for item ${index + 1}`}
                          className="w-4 mt-1"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <p
          className="mt-5 text-lg font-bold text-white flex justify-center items-center w-2/3 gap-4 px-9 text-center"
          aria-label="Closing Summary"
        >
          At SLSRP, we operate at the intersection of deep science, cultural
          responsibility, and systemic transformation. Our work is divided into
          two mission-driven verticals with distinct but interlinked approaches.
        </p>
      </motion.div>
    </div>
  );
};

export default OurServices;
