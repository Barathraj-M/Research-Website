/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import SectionPill from '../SectionPill';

import {
    contentBasicVariants,
    visibleAnimationVariants,
    quoteIconDanceVariants
} from '../../utils/animationVariants';

import NavHoverLogo from '../../assets/Images/nav-hover-icon.svg';
import StepConnector from '../../assets/Images/step-connector.svg';

import PolicySignImage from '../../assets/Images/policy-sign-image.webp';
import EndToEndSupport from '../../assets/Images/end-to-end-support-image.webp';
import IdeaIncubationImage from '../../assets/Images/idea-incubation-image.webp';
import ExpertMentoringImage from '../../assets/Images/expert-mentoring-image.webp';
import GreenDiscoveryPlantDNAImage from '../../assets/Images/green-discovery-dna-plant-image.webp';

import {
    LightBulbIcon,
    FocusIcon,
    AcademicCapIcon,
    DocumentCheckIcon,
    ArrowPathIcon,
    QuoteUpIcon,
    QuoteDownIcon
} from '../../assets/Icons/Icons';

const IncubationSection = () => {
    const [activeTab, setActiveTab] = useState('incubation-ecosystem');

    const tabData = [
        {
            id: 'incubation-ecosystem',
            title: 'Incubation Ecosystem',
            icon: <LightBulbIcon width={20} height={20} />,
            image: IdeaIncubationImage,
            description: 'A new generation of eco-technological ventures through our dedicated incubation ecosystem.',
            features: [
                'Comprehensive startup support and mentorship',
                'Access to advanced research facilities',
                'Network of industry experts and investors',
                'Sustainable business model development'
            ]
        },
        {
            id: 'venture-focus',
            title: 'Venture Focus',
            icon: <FocusIcon width={20} height={20} />,
            image: GreenDiscoveryPlantDNAImage,
            description: 'Climate-positive materials, sustainable design, water regeneration, and AI-enabled ecological diagnostics.',
            features: [
                'Climate-positive materials development',
                'Sustainable design and architecture',
                'Water regeneration technologies',
                'AI-enabled ecological diagnostics'
            ]
        },
        {
            id: 'support-resources',
            title: 'Support & Resources',
            icon: <AcademicCapIcon width={20} height={20} />,
            image: ExpertMentoringImage,
            description: 'Advanced labs, expert mentorship, funding pathways, and policy connections.',
            features: [
                'State-of-the-art research laboratories',
                'Expert mentorship and guidance',
                'Direct funding pathways and grants',
                'Government policy connections'
            ]
        },
        {
            id: 'formal-protocols',
            title: 'Formal Protocols',
            icon: <DocumentCheckIcon width={20} height={20} />,
            image: PolicySignImage,
            description: 'MoUs, Letters of Association, Technology Licensing Agreements ensuring clarity and compliance.',
            features: [
                'Memoranda of Understanding (MoUs)',
                'Letters of Association agreements',
                'Technology Licensing Agreements',
                'Compliance and legal frameworks'
            ]
        },
        {
            id: 'end-to-end-support',
            title: 'End-to-End Support',
            icon: <ArrowPathIcon width={20} height={20} />,
            image: EndToEndSupport,
            description: 'From ideation labs to prototype development and market access with scientific backing.',
            features: [
                'Ideation and concept development',
                'Prototype development and testing',
                'Market access and commercialization',
                'Scientific validation and backing'
            ]
        }
    ];

    const activeContent = tabData.find(tab => tab.id === activeTab);

    return (
        <div
            className='w-full min-h-screen flex flex-col justify-center items-center gap-y-10 xs:px-2 sm:px-5 md:px-10 lg:px-15 py-5 my-10'
            role='region'
            aria-labelledby='incubation-heading'
        >
            <h2 id='incubation-heading' className='sr-only'>Incubation Section</h2>

            <div>
                <SectionPill sectionTitle={'Incubation'} />
            </div>

            <div className='text-center max-w-2xl flex flex-col gap-y-5'>
                <motion.h2
                    className="font-semibold!"
                    variants={contentBasicVariants}
                    initial='initial'
                    whileInView='whileInView'
                    viewport={{ once: true, amount: "some" }}
                    custom={1}
                >
                    <span className='bg-gradient-to-r from-primary-1 via-primary-variant-2 to-primary-variant-3 bg-clip-text text-transparent'>Eco-Tech Incubation</span> and Green Enterprise
                </motion.h2>
                <motion.p
                    variants={contentBasicVariants}
                    initial='initial'
                    whileInView='whileInView'
                    viewport={{ once: true, amount: "some" }}
                    exit='exit'
                    custom={3}
                >
                    True environmental progress demands entrepreneurial thinking. At SLSRP, we cultivate a new generation of eco-technological ventures through our dedicated incubation ecosystem.
                </motion.p>
            </div>

            <div className='w-full'>
                <div className='flex flex-wrap justify-center xs:gap-x-1 sm:gap-x-2 xs:gap-y-2 md:gap-4 mb-12' role='tablist' aria-label='Incubation tabs'>
                    {tabData.map((tab, index) => (
                        <motion.button
                            key={tab.id}
                            id={`tab-${tab.id}`}
                            aria-selected={activeTab === tab.id}
                            aria-controls={`tabpanel-${tab.id}`}
                            role='tab'
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center border-dashed gap-3 px-3 py-2 rounded-md border-1 transition-all duration-300 hover:cursor-pointer ${activeTab === tab.id
                                ? 'border-primary-1 bg-white text-gray-1'
                                : 'border-gray-4 text-gray-3 hover:border-primary-variant-5'
                                }`}
                            variants={visibleAnimationVariants}
                            initial='initial'
                            whileInView='whileInView'
                            viewport={{ once: true, amount: "all" }}
                            custom={index}
                        >
                            <div className={`w-10 h-10 rounded-md flex items-center justify-center bg-primary-variant-8 ${activeTab === tab.id
                                ? 'text-gray-1' : 'text-gray-3'}`}
                            >
                                {tab.icon}
                            </div>
                            <span className='font-medium text-gray-1'>{tab.title}</span>
                        </motion.button>
                    ))}
                </div>

                <AnimatePresence mode='wait'>
                    <div
                        key={activeTab}
                        id={`tabpanel-${activeTab}`}
                        role='tabpanel'
                        aria-labelledby={`tab-${activeTab}`}
                        className='bg-white rounded-xl overflow-hidden xs:p-3 sm:p-5 md:p-7 md:w-8/10 mx-auto'
                    >
                        <div className='flex flex-col md:flex-row'>
                            <motion.img
                                src={activeContent.image}
                                alt={activeContent.title}
                                loading='lazy'
                                className='xs:w-full xs:h-[10rem] sm:h-[17rem] md:w-auto md:h-[20rem] lg:h-[27rem] object-cover rounded-xl'
                                variants={visibleAnimationVariants}
                                initial='initial'
                                whileInView='whileInView'
                                viewport={{ once: true, amount: "some" }}
                                exit='exit'
                                custom={0.5}
                            />

                            <div className='lg:w-3/5 p-8 lg:p-10 flex flex-col justify-between'>
                                <div>
                                    <motion.h3
                                        className='text-2xl font-semibold text-gray-1 mb-4'
                                        variants={contentBasicVariants}
                                        initial='initial'
                                        whileInView='whileInView'
                                        exit='exit'
                                        viewport={{ once: true, amount: "some" }}
                                        custom={1}
                                    >
                                        {activeContent.title}
                                    </motion.h3>
                                    <motion.p
                                        className='text-base mb-6 leading-relaxed'
                                        variants={contentBasicVariants}
                                        initial='initial'
                                        whileInView='whileInView'
                                        exit='exit'
                                        viewport={{ once: true, amount: "some" }}
                                        custom={3}
                                    >
                                        {activeContent.description}
                                    </motion.p>
                                </div>

                                <ul className='space-y-3' role='list'>
                                    {activeContent.features.map((feature, index) => (
                                        <motion.li
                                            key={index}
                                            className='flex items-center gap-3'
                                            variants={contentBasicVariants}
                                            initial='initial'
                                            whileInView='whileInView'
                                            exit='exit'
                                            viewport={{ once: true, amount: "0.1" }}
                                            custom={index + 3}
                                            role='listitem'
                                        >
                                            <img
                                                src={NavHoverLogo}
                                                alt='nav-logo decorative bullet'
                                                aria-hidden='true'
                                                loading='lazy'
                                            />
                                            <span className='text-gray-3 text-base leading-relaxed'>{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </AnimatePresence>
            </div>

            <div className='w-full' aria-label='Incubation timeline'>
                <div className='flex xs:flex-col md:flex-row justify-center items-center gap-0'>
                    <div className='flex flex-row justify-start items-center gap-2 group p-5 bg-primary-variant-8 rounded-lg xs:min-w-[15rem] md:min-w-auto'>
                        <div className='p-1 relative border-1 border-dashed border-primary-1 rounded-xl'>
                            <span className='w-12 h-12 bg-primary-1 rounded-lg flex items-center justify-center text-white font-semibold text-sm relative z-10'>
                                1
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-10 h-10 rounded-lg bg-primary-1 opacity-75 group-hover:animate-ping"></span>
                            </span>
                        </div>
                        <h6 className='text-sm text-center text-gray-1 mb-0!'>Ideation</h6>
                    </div>
                    <img
                        src={StepConnector}
                        alt='step-divider'
                        loading='lazy'
                        className='xs:w-4 xs:h-auto md:h-7 md:w-auto xs:rotate-90 md:rotate-0 self-center object-cover -my-1'
                    />
                    <div className='flex flex-row justify-start items-center gap-2 group p-5 bg-primary-variant-8 rounded-lg xs:min-w-[15rem] md:min-w-auto'>
                        <div className='p-1 relative border-1 border-dashed border-primary-1 rounded-xl'>
                            <span className='w-12 h-12 bg-primary-1 rounded-lg flex items-center justify-center text-white font-semibold text-sm relative z-10'>
                                2
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-10 h-10 rounded-lg bg-primary-1 opacity-75 group-hover:animate-ping"></span>
                            </span>
                        </div>
                        <h6 className='text-sm text-center text-gray-1 mb-0!'>Incubation</h6>
                    </div>
                    <img
                        src={StepConnector}
                        alt='step-divider'
                        loading='lazy'
                        className='xs:w-4 xs:h-auto md:h-7 md:w-auto xs:rotate-90 md:rotate-0 self-center object-cover -my-1'
                    />
                    <div className='flex flex-row justify-start items-center gap-2 group p-5 bg-primary-variant-8 rounded-lg xs:min-w-[15rem] md:min-w-auto'>
                        <div className='p-1 relative border-1 border-dashed border-primary-1 rounded-xl'>
                            <span className='w-12 h-12 bg-primary-1 rounded-lg flex items-center justify-center text-white font-semibold text-sm relative z-10'>
                                3
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-10 h-10 rounded-lg bg-primary-1 opacity-75 group-hover:animate-ping"></span>
                            </span>
                        </div>
                        <h6 className='text-sm text-center text-gray-1 mb-0!'>Prototype</h6>
                    </div>
                    <img
                        src={StepConnector}
                        alt='step-divider'
                        loading='lazy'
                        className='xs:w-4 xs:h-auto md:h-7 md:w-auto xs:rotate-90 md:rotate-0 self-center object-cover -my-1'
                    />
                    <div className='flex flex-row justify-start items-center gap-2 group p-5 bg-primary-variant-8 rounded-lg xs:min-w-[15rem] md:min-w-auto'>
                        <div className='p-1 relative border-1 border-dashed border-primary-1 rounded-xl'>
                            <span className='w-12 h-12 bg-primary-1 rounded-lg flex items-center justify-center text-white font-semibold text-sm relative z-10'>
                                4
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-10 h-10 rounded-lg bg-primary-1 opacity-75 group-hover:animate-ping"></span>
                            </span>
                        </div>
                        <h6 className='text-sm text-center xs:text-wrap text-gray-1 mb-0!'>Market Access</h6>
                    </div>
                    <img
                        src={StepConnector}
                        alt='step-divider'
                        loading='lazy'
                        className='xs:w-4 xs:h-auto md:h-7 md:w-auto xs:rotate-90 md:rotate-0 self-center object-cover -my-1'
                    />
                    <div className='flex flex-row justify-start items-center gap-2 group p-5 bg-primary-variant-8 rounded-lg xs:min-w-[15rem] md:min-w-auto'>
                        <div className='p-1 relative border-1 border-dashed border-primary-1 rounded-xl'>
                            <span className='w-12 h-12 bg-primary-1 rounded-lg flex items-center justify-center text-white font-semibold text-sm relative z-10'>
                                5
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-10 h-10 rounded-lg bg-primary-1 opacity-75 group-hover:animate-ping"></span>
                            </span>
                        </div>
                        <h6 className='text-sm text-center text-gray-1 mb-0!'>Impact</h6>
                    </div>
                </div>
            </div>

            <div className='bg-gray-1 rounded-full flex flex-row justify-center items-center gap-x-5 p-5' role='contentinfo' aria-label='Incubation quote'>
                <motion.div
                    className='self-start text-primary-1'
                    variants={quoteIconDanceVariants}
                    animate='animate'
                    aria-hidden='true'
                >
                    <QuoteDownIcon width={40} height={40} />
                </motion.div>
                <blockquote className='italic text-white text-center xs:text-sm sm:text-md md:text-xl max-w-3xl'>
                    We formally incubate, fund, and co-develop projects under robust legal agreements and strategic protocols.
                </blockquote>
                <motion.div
                    className='self-end text-primary-1'
                    variants={quoteIconDanceVariants}
                    animate='animate'
                    aria-hidden='true'
                >
                    <QuoteUpIcon width={40} height={40} />
                </motion.div>
            </div>
        </div>
    );
};

export default IncubationSection;