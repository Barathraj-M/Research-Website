import React, { useRef } from "react";
import "./OurServices.css";
import { motion, useInView } from "framer-motion";

import SectionPill from "./components/SectionPill";
import ServiceCard from "./components/ServiceCard";

import ServiceCardImg1 from './assets/Images/service-card-image.avif';

import './index.css'
import HorizontalScrollSection from "./components/HorizontalScrollSection";

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
        className="w-full"
      >
        <SectionPill sectionTitle={'Our Services'} className={'h-auto w-auto ms-9'} />

        <div className="mt-5 text-2xl font-bold text-white flex justify-between items-center w-full flex-wrap gap-4 px-9">
          <div>
            Clean mobility & supply chain{" "}
            <span className="text-primary-1">services</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="border border-gray-400 hover:bg-gray-100 flex justify-center items-center"
              style={{
                borderRadius: "50%",
                width: "2.5rem",
                height: "2.5rem",
              }}
            >
              -
            </button>
            <button
              className="border border-gray-400 hover:bg-gray-100 flex justify-center items-center"
              style={{
                borderRadius: "50%",
                width: "2.5rem",
                height: "2.5rem",
              }}
            >
              +
            </button>
          </div>
        </div>
        <HorizontalScrollSection>
          <ServiceCard
            cardHeading={'Ecofriendly transportation'}
            description={'We offer responsible logistics that minimize pollution and maximize operational efficiency.'}
            link={'#'}
            img={ServiceCardImg1}
            imgAlt={'service-card-image-avif'}
            tagLines={''}
          />
          <ServiceCard
            cardHeading={'Ecofriendly transportation'}
            description={'We offer responsible logistics that minimize pollution and maximize operational efficiency.'}
            link={'#'}
            img={ServiceCardImg1}
            imgAlt={'service-card-image-avif'}
            tagLines={''}
          />
          <ServiceCard
            cardHeading={'Ecofriendly transportation'}
            description={'We offer responsible logistics that minimize pollution and maximize operational efficiency.'}
            link={'#'}
            img={ServiceCardImg1}
            imgAlt={'service-card-image-avif'}
            tagLines={''}
          />
          <ServiceCard
            cardHeading={'Ecofriendly transportation'}
            description={'We offer responsible logistics that minimize pollution and maximize operational efficiency.'}
            link={'#'}
            img={ServiceCardImg1}
            imgAlt={'service-card-image-avif'}
            tagLines={''}
          />
          <ServiceCard
            cardHeading={'Ecofriendly transportation'}
            description={'We offer responsible logistics that minimize pollution and maximize operational efficiency.'}
            link={'#'}
            img={ServiceCardImg1}
            imgAlt={'service-card-image-avif'}
            tagLines={''}
          />
        </HorizontalScrollSection>
      </motion.div>
    </div>
  );
};

export default OurServices;
