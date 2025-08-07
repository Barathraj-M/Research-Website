import React from 'react';
import { motion } from 'framer-motion';

import SectionPill from '../SectionPill';

import {
  contentBasicVariants,
  basicCardVariants
} from '../../utils/animationVarients'

import { BlockChainIcon, TargetIcon, DroneIcon } from '../../assets/Icons/Icons';

const InnovationSection = () => {
  return (
    <div id="innovation-section" className='w-full min-h-screen flex flex-col justify-center items-center gap-y-10 xs:px-2 sm:px-5 md:px-10 lg:px-15 py-5 bg-primary-variant-7'>
      <div>
        <SectionPill sectionTitle={'Innovation'} />
      </div>
      <div className='text-center max-w-2xl flex flex-col gap-y-5'>
        <motion.h2
          className="font-semibold!"
          variants={contentBasicVariants}
          initial='initial'
          whileInView='whileInView'
          viewport={{ once: true, amount: "some" }}
          exit='exit'
          custom={1}
        >
          Innovation at the Core of Ecology
        </motion.h2>
        <motion.p
          variants={contentBasicVariants}
          initial='initial'
          whileInView='whileInView'
          custom={3}
          viewport={{ once: true, amount: "some" }}
          exit='exit'
        >
          SLSRP approaches environmental challenges with a research-to-impact framework. Our focus is on creating deep-tech and ecological tools that can counter biodiversity loss, climate instability, and unsustainable development.
        </motion.p>
      </div>
      <div className='w-full flex flex-row flex-wrap justify-center items-center gap-y-0 xs:gap-y-5 md:gap-y-6 xs:gap-x-5 md:gap-x-8 px-4 md:px-0'>
        <motion.div
          className='flex flex-col justify-around items-center bg-white rounded-xl border border-primary-variant-3 hover:border-primary-1 transition-all duration-300 text-center w-full xs:h-[40vh] md:h-[50vh] max-w-sm p-5 group'
          variants={basicCardVariants}
          initial='initial'
          whileInView='whileInView'
          viewport={{ once: true, amount: "some" }}
          custom={10}
        >
          <div className='w-16 h-16 mx-auto bg-primary-variant-8 rounded-full flex items-center justify-center md:-mb-5 group-hover:text-primary-1 transition-colors duration-500 ease-in-out'>
            <BlockChainIcon width={30} height={30} />
          </div>
          <h4 className='mb-4'>PhytoVault</h4>
          <p className='text-sm text-gray-3 leading-relaxed'>
            A blockchain-secured digital repository of India's medicinal and aromatic flora that conserves biodiversity and enables innovation in education, public health, and policy.
          </p>
        </motion.div>

        <motion.div
          className='flex flex-col justify-around items-center bg-white rounded-xl border border-primary-variant-3 hover:border-primary-1 transition-all duration-300 text-center w-full xs:h-[40vh] md:h-[50vh] max-w-sm p-5 group'
          variants={basicCardVariants}
          initial='initial'
          whileInView='whileInView'
          viewport={{ once: true, amount: "some" }}
          custom={15}
        >
          <div className='w-16 h-16 mx-auto bg-primary-variant-8 rounded-full flex items-center justify-center md:-mb-5 group-hover:text-primary-1 transition-colors duration-500 ease-in-out'>
            <TargetIcon width={30} height={30} />
          </div>
          <h4 className='mb-4'>AI-Powered Mapping</h4>
          <p className='text-sm text-gray-3 leading-relaxed'>
            Advanced mapping systems for threatened plant species using artificial intelligence and machine learning technologies.
          </p>
        </motion.div>

        <motion.div
          className='flex flex-col justify-around items-center bg-white rounded-xl border border-primary-variant-3 hover:border-primary-1 transition-all duration-300 text-center w-full xs:h-[40vh] md:h-[50vh] max-w-sm p-5 group'
          variants={basicCardVariants}
          initial='initial'
          whileInView='whileInView'
          viewport={{ once: true, amount: "some" }}
          custom={20}
        >
          <div className='w-16 h-16 mx-auto bg-primary-variant-8 rounded-full flex items-center justify-center md:-mb-5 group-hover:text-primary-1 transition-colors duration-500 ease-in-out'>
            <DroneIcon width={30} height={30} />
          </div>
          <h4 className='mb-4'>Drone Monitoring</h4>
          <p className='text-sm text-gray-3 leading-relaxed'>
            Drone-based monitoring systems for fragile ecosystems, aligned with environmental resilience and national priorities.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default InnovationSection; 