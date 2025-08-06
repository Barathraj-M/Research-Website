import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import ItemsMarquee from '../components/ItemsMaquee';
import SectionPill from '../components/SectionPill'
import InnovationSection from '../components/environment-components/InnovationSection';
import IncubationSection from '../components/environment-components/IncubationSection';
import EngineeringSection from '../components/environment-components/EngineeringSection';

import HeroImage from '../assets/Images/environment-hero-image.webp';
import HeroBottomLeft from '../assets/Images/hero-bottom-left.svg';
import HeroTopLeft from '../assets/Images/hero-top-left.svg';
import HeroMarqueeIcon from '../assets/Images/hero-marquee-icon.svg';
import YogaBannerImage from "../assets/Images/ancient-yoga-banner-image.png";

import {
  contentBasicVariants,
  heroSectionMainContainerVariants,
  visibleAnimationVariants
} from '../utils/animationVarients'

import '../index.css';

const Environment = () => {
  const items = [
    {
      src: HeroMarqueeIcon,
      type: 'text',
      alt: '',
      text: 'Innovation'
    },
    {
      src: HeroMarqueeIcon,
      type: 'text',
      alt: '',
      text: 'Incubation'
    },
    {
      src: HeroMarqueeIcon,
      type: 'text',
      alt: '',
      text: 'Engineering'
    },
    {
      src: HeroMarqueeIcon,
      type: 'text',
      alt: '',
      text: 'Ayush'
    },
    {
      src: HeroMarqueeIcon,
      type: 'text',
      alt: '',
      text: 'Collaboration'
    },
    {
      src: HeroMarqueeIcon,
      type: 'text',
      alt: '',
      text: 'Intelligence'
    },
  ];


  return (
    <section className='w-full min-h-screen'>
      <div className='w-full h-screen mx-auto xs:px-2 sm:px-5 md:px-10 lg:px-15'>
        <div className='w-full h-[90vh] overflow-hidden rounded-2xl relative mt-16'>
          <img
            src={HeroImage}
            alt="environment-hero-section"
            className='w-full h-[90vh] object-cover overflow-hidden absolute inset-0'
            loading='eager'
          />
          <div className='xs:w-9/10 md:w-7/10 lg:w-6/10 absolute right-0 bottom-0 flex flex-col justify-start items-start gap-0'>
            <div className='w-full flex flex-col justify-start items-center gap-0 bg-gray-8 rounded-tl-3xl rounded-bl-3xl'>
              <img
                src={HeroBottomLeft}
                alt='svg-place-holder'
                className='self-end w-8 h-8 object-cover -mt-8 -me-[0.2px]'
                loading='eager'
              />
              <motion.h1
                className='px-10 py-5'
                variants={heroSectionMainContainerVariants}
                initial='initial'
                whileInView='whileInView'
                custom={1}
                viewport={{ once: true, amount: "some" }}
              >
                <span className='bg-gradient-to-r from-primary-1 via-primary-variant-2 to-primary-variant-3 bg-clip-text text-transparent'>Environment</span>al solutions, driven by innovation
              </motion.h1>
              {/* <motion.h1
                className='px-10 py-5'
                variants={heroSectionMainContainerVariants}
                initial='initial'
                whileInView='whileInView'
                custom={1}
                viewport={{ once: true, amount: "some" }}
              >
                Engineering a Regenerative Future
              </motion.h1> */}
            </div>
            <div className='w-8/10 bg-gray-8 h-full self-end'>
              <div className='w-full h-full flex flex-col justify-start items-center gap-0'>
                <img
                  src={HeroTopLeft}
                  alt='svg-place-holder'
                  className='self-start w-8 h-8 object-cover -ms-8 -mt-[0.4px]'
                  loading='eager'
                />
                <motion.p
                  className='px-10'
                  variants={heroSectionMainContainerVariants}
                  initial='initial'
                  whileInView='whileInView'
                  viewport={{ once: true, amount: "some" }}
                  custom={3}
                >
                  At Semporutkalai Life Science Research Park (SLSRP), environmental responsibility is not a passive commitment—it is a proactive mission. We do not treat nature as a backdrop to progress but as the very foundation of human continuity.
                </motion.p>
                <div className='w-full relative mt-3'>
                  <div className='absolute left-0 top-0 h-full w-20 pointer-events-none z-50 bg-gradient-to-r from-gray-8 via-gray-8/80 to-transparent'></div>
                  <div className='absolute right-0 top-0 h-full w-20 pointer-events-none z-50 bg-gradient-to-l from-gray-8 via-gray-8/80 to-transparent'></div>
                  <ItemsMarquee items={items} />
                </div>
                <img
                  src={HeroBottomLeft}
                  alt='svg-place-holder'
                  className='self-start w-8 h-8 object-cover -ms-8 -mt-[0.4px]'
                  loading='eager'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-screen flex flex-col justify-center items-center gap-y-10 xs:px-2 sm:px-5 md:px-10 lg:px-15'>
        <div className='text-center max-w-2xl flex flex-col gap-y-5'>
          <motion.h2
            className="font-semibold!"
            variants={contentBasicVariants}
            initial='initial'
            whileInView='whileInView'
            custom={1}
            viewport={{ once: true, amount: "some" }}
            exit='exit'
          >
            Engineering a Regenerative Future
          </motion.h2>
          <motion.p
            variants={contentBasicVariants}
            initial='initial'
            whileInView='whileInView'
            viewport={{ once: true, amount: "some" }}
            exit='exit'
            custom={3}
          >
            Our environmental initiatives are focused on restoring balance, redesigning systems, and
            driving innovation that regenerates rather than depletes. Every program is grounded in
            scientific validation, long-term sustainability, and community relevance.
          </motion.p>
        </div>
        <div className='flex flex-row justify-center items-center gap-x-5'>
          <motion.button
            className='text-decoration-none cursor-pointer rounded-full bg-primary-1 border-1 border-dashed border-primary-1 hover:bg-black hover:text-white text-black px-4 py-2 transition-colors duration-300 ease-in-out text-nowrap font-medium'
            variants={visibleAnimationVariants}
            initial='initial'
            whileInView='whileInView'
            viewport={{ once: true, amount: "all" }}
            custom={2}
          >
            Explore Our Research
          </motion.button>
          <motion.button
            className='text-decoration-none cursor-pointer rounded-full border-1 border-dashed border-primary-1 hover:bg-black hover:text-white text-black px-4 py-2 transition-colors duration-300 ease-in-out text-nowrap font-medium'
            variants={visibleAnimationVariants}
            initial='initial'
            whileInView='whileInView'
            viewport={{ once: true, amount: "all" }}
            custom={3}
          >
            Join Our Mission
          </motion.button>
        </div>
      </div>

      <InnovationSection />

      <IncubationSection />

      <EngineeringSection />

      <div className="grid auto-rows-auto gap-y-10 min-h-screen w-full px-10 pt-15">
        <div className="grid sm:auto-rows-auto md:grid-rows-none md:grid-cols-5 gap-y-5 gap-x-5 w-full">
          <div className="md:col-span-2 flex flex-col justify-start items-start gap-y-2">
            <SectionPill sectionTitle={"Ayush"} />
            <motion.h2
              className="mt-5! font-semibold!"
              variants={contentBasicVariants}
              initial="initial"
              whileInView="whileInView"
              custom={1}
              viewport={{ once: true, amount: "all" }}
            >
              Science Meets Ecology: The AYUSH Integration
            </motion.h2>
          </div>
          <div className="md:col-span-3">
            <motion.p
              className="text-gray-2"
              variants={contentBasicVariants}
              initial="initial"
              whileInView="whileInView"
              custom={3}
              viewport={{ once: true, amount: "all" }}
            >
              Our work includes a critical dimension often overlooked in mainstream environmental science—the ecological intelligence embedded in India's traditional wellness systems.
              At SLSRP, we conduct clinical and field research on AYUSH-based ecological protocols, positioning them as integral components of preventive healthcare, forest biodiversity, and eco-conscious living.
            </motion.p>
            <motion.p
              className="text-gray-2 md:mt-5!"
              variants={contentBasicVariants}
              initial="initial"
              whileInView="whileInView"
              custom={5}
              viewport={{ once: true, amount: "all" }}
            >
              By merging traditional practices with empirical methods, we open new frontiers for public health and environmental stewardship—especially within underserved and indigenous communities.

            </motion.p>
          </div>
        </div>
        <motion.div
          className="overflow-hidden w-full rounded-2xl mb-20 group"
          variants={visibleAnimationVariants}
          initial='initial'
          whileInView='whileInView'
          custom={2}
          viewport={{ once: true, amount: "some" }}
        >
          <img
            src={YogaBannerImage}
            alt="banner-image-yoga"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-102"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Environment