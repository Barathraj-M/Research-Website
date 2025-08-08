/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

import SectionPill from '../SectionPill';
import ServiceCard from '../ServiceCard';

import FooterDivider from '../../assets/Images/nav-divider.svg';

import CardImage1 from '../../assets/Images/holding-global-recycle.jpg';
import CardImage2 from '../../assets/Images/stackholder-collaboration-image.jpg';

import {
    contentBasicVariants,
    visibleAnimationVariants,
    basicCardVariants
} from '../../utils/animationVarients';

const EngineeringSection = () => {
    const naturalSystemRestoration = [
        "Biofiltration structures",
        "Closed-loop material cycles",
        "Climate-responsive habitats",
    ];

    const stakeholderCollaboration = [
        "Ecosystem-wide campaigns",
        "STEM hackathons",
        "Research showcases",
    ];

    return (
        <div
            className='w-full min-h-screen flex flex-col justify-center items-center gap-y-16 xs:px-2 sm:px-5 md:px-10 lg:px-15 py-20 bg-gray-1'
            role='region'
            aria-labelledby='engineering-heading'
        >
            <h2 id='engineering-heading' className='sr-only'>Engineering Section</h2>

            <div>
                <SectionPill sectionTitle={'Engineering'} />
            </div>

            <div className='w-full -mt-6'>
                <div className='text-center max-w-4xl flex flex-col gap-y-5 mx-auto'>
                    <motion.h2
                        className="font-semibold! text-white!"
                        variants={contentBasicVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport={{ once: true, amount: "some" }}
                        custom={1}
                    >
                        <span className='bg-gradient-to-r from-primary-1 via-primary-variant-2 to-primary-variant-3 bg-clip-text text-transparent'>Environmental Engineering</span> with Purpose
                    </motion.h2>
                    <motion.p
                        className='text-gray-8'
                        variants={contentBasicVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport={{ once: true, amount: "some" }}
                        exit='exit'
                        custom={3}
                    >
                        Our definition of engineering goes beyond infrastructure - it includes soil, water, atmosphere, and biodiversity. SLSRP pioneers regenerative environmental engineering that aims not just to reduce harm, but to reverse degradation.
                    </motion.p>
                </div>

                <div className='flex xs:flex-col md:flex-row md:justify-center gap-0 mx-auto mt-10'>
                    <div
                        className='bg-white rounded-2xl xs:p-3 md:p-5 flex flex-col justify-start items-start gap-y-5 xs:max-w-[37rem] xs:mx-auto md:mx-0 md:w-full h-auto'
                        role='group'
                        aria-labelledby='natural-restoration-heading'
                    >
                        <div className='flex xs:flex-col sm:flex-row justify-start items-start gap-5 border-b-1 border-dashed border-gray-5 xs:pb-3 md:pb-5'>
                            <motion.img
                                src={CardImage1}
                                alt='Hand holding recycled globe model symbolizing sustainability'
                                className='xs:w-auto xs:h-auto sm:w-[10rem] sm:h-auto md:w-[13rem] md-auto lg:w-[15rem] lg:h-auto object-cover rounded-xl'
                                loading='eager'
                                variants={visibleAnimationVariants}
                                initial='initial'
                                whileInView='whileInView'
                                viewport={{ once: true, amount: "some" }}
                                custom={0.5}
                            />
                            <motion.h3
                                id='natural-restoration-heading'
                                className='max-w-sm inline-block'
                                variants={contentBasicVariants}
                                initial='initial'
                                whileInView='whileInView'
                                viewport={{ once: true, amount: "some" }}
                                custom={5}
                            >
                                Natural System Restoration
                            </motion.h3>
                        </div>
                        <div className='flex flex-col justify-center items-start gap-y-5'>
                            <motion.p
                                variants={contentBasicVariants}
                                initial='initial'
                                whileInView='whileInView'
                                viewport={{ once: true, amount: "some" }}
                                custom={7}
                            >
                                Our teams develop models that restore natural systems while integrating modern design
                            </motion.p>
                            <div className='flex flex-row flex-wrap justify-start items-center gap-3' role='list'>
                                {naturalSystemRestoration.map((item, index) => (
                                    <motion.span
                                        key={index}
                                        className='p-2 px-4 rounded-full bg-primary-variant-8 text-gray-3 text-xs'
                                        variants={visibleAnimationVariants}
                                        initial='initial'
                                        whileInView='whileInView'
                                        viewport={{ once: true, amount: "all" }}
                                        custom={index + 5}
                                        role='listitem'
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <img
                        src={FooterDivider}
                        alt='decorative divider between cards'
                        className='xs:w-7 xs:h-auto md:h-10 md:w-auto xs:rotate-90 md:rotate-0 self-center object-cover -my-3.5'
                        aria-hidden='true'
                    />

                    <div
                        className='bg-white rounded-2xl xs:p-3 md:p-5 flex flex-col justify-start items-start gap-y-5 xs:max-w-[37rem] xs:mx-auto md:mx-0 md:w-full h-auto'
                        role='group'
                        aria-labelledby='stakeholder-collab-heading'
                    >
                        <div className='flex xs:flex-col sm:flex-row justify-start items-start gap-5 border-b-1 border-dashed border-gray-5 xs:pb-3 md:pb-5'>
                            <motion.img
                                src={CardImage2}
                                alt='People collaborating symbolizing stakeholders'
                                className='xs:w-auto xs:h-auto sm:w-[10rem] sm:h-auto md:w-[13rem] md-auto lg:w-[15rem] lg:h-auto object-cover rounded-xl'
                                loading='eager'
                                variants={visibleAnimationVariants}
                                initial='initial'
                                whileInView='whileInView'
                                viewport={{ once: true, amount: "some" }}
                                custom={0.5}
                            />
                            <motion.h3
                                id='stakeholder-collab-heading'
                                className='max-w-sm inline-block'
                                variants={contentBasicVariants}
                                initial='initial'
                                whileInView='whileInView'
                                viewport={{ once: true, amount: "some" }}
                                custom={5}
                            >
                                Stakeholder Collaboration
                            </motion.h3>
                        </div>
                        <div className='flex flex-col justify-center items-start gap-y-5'>
                            <motion.p
                                variants={contentBasicVariants}
                                initial='initial'
                                whileInView='whileInView'
                                viewport={{ once: true, amount: "some" }}
                                custom={7}
                            >
                                By uniting academia, industry, and local communities, we translate knowledge into large-scale implementation
                            </motion.p>
                            <div className='flex flex-row flex-wrap justify-start items-center gap-3' role='list'>
                                {stakeholderCollaboration.map((item, index) => (
                                    <motion.span
                                        key={index}
                                        className='p-2 px-4 rounded-full bg-primary-variant-8 text-gray-3 text-xs'
                                        variants={visibleAnimationVariants}
                                        initial='initial'
                                        whileInView='whileInView'
                                        viewport={{ once: true, amount: "all" }}
                                        custom={index + 5}
                                        role='listitem'
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EngineeringSection;