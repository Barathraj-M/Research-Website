import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import SectionPill from '../SectionPill';

import {
    contentBasicVariants,
    visibleAnimationVariants,
    quoteIconDanceVariants
} from '../../utils/animationVarients'

import NavHoverLogo from '../../assets/Images/nav-hover-icon.svg';

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
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop',
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
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop',
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
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=500&fit=crop',
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
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=500&fit=crop',
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
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=500&fit=crop',
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
        <div className='w-full min-h-screen flex flex-col justify-center items-center gap-y-10 xs:px-2 sm:px-5 md:px-10 lg:px-15 py-5 mt-10'>
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
                    Eco-Tech Incubation and Green Enterprise
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
                <div className='flex flex-wrap justify-center xs:gap-x-1 sm:gap-x-2 xs:gap-y-2 md:gap-4 mb-12'>
                    {tabData.map((tab, index) => (
                        <motion.button
                            key={tab.id}
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
                        className='bg-white rounded-xl overflow-hidden xs:p-3 sm:p-5 md:p-7 md:w-8/10 mx-auto'
                    >
                        <div className='flex flex-col md:flex-row'>
                            <motion.img
                                src={activeContent.image}
                                alt={activeContent.title}
                                className='xs:w-full xs:h-[10rem] sm:h-[20rem] md:w-auto md:h-[20rem] lg:h-[30rem] object-cover rounded-xl'
                                variants={visibleAnimationVariants}
                                initial='initial'
                                whileInView='whileInView'
                                viewport={{ once: true, amount: "some" }}
                                exit='exit'
                                custom={0.5}
                            />

                            <div className='lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center'>
                                <motion.h3
                                    className='text-2xl font-bold text-gray-1 mb-4'
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
                                <ul className='space-y-3'>
                                    {activeContent.features.map((feature, index) => (
                                        <motion.li
                                            key={index}
                                            className='flex items-center gap-3'
                                            variants={contentBasicVariants}
                                            initial='initial'
                                            whileInView='whileInView'
                                            exit='exit'
                                            viewport={{ once: true, amount: "some" }}
                                            custom={index + 3}
                                        >
                                            {/* <div className='w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0'></div> */}
                                            <img
                                                src={NavHoverLogo}
                                                alt='nav-logo'
                                            />
                                            <span className='text-gray-700 text-sm leading-relaxed'>{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </AnimatePresence>
            </div>

            <div className='w-full'>
                <div className='flex xs:flex-col sm:flex-row justify-center items-start sm:gap-1 md:gap-8'>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className='p-1 border-1 border-dashed border-primary-1 rounded-xl mb-2 relative'>
                            <span className='w-12 h-12 bg-primary-1 rounded-lg flex items-center justify-center text-white font-bold text-sm relative z-10'>
                                1
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-10 h-10 rounded-lg bg-primary-1 opacity-75 group-hover:animate-ping"></span>
                            </span>
                        </div>
                        <span className='text-sm font-medium text-center text-gray-1'>Ideation</span>
                    </div>
                    <div className='block w-16 h-0.5 bg-primary-1 mt-7 rounded-full'></div>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className='p-1 border-1 border-dashed border-primary-1 rounded-xl mb-2 relative'>
                            <span className='w-12 h-12 bg-primary-1 rounded-lg flex items-center justify-center text-white font-bold text-sm relative z-10'>
                                2
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-10 h-10 rounded-lg bg-primary-1 opacity-75 group-hover:animate-ping"></span>
                            </span>
                        </div>
                        <span className='text-sm font-medium text-center text-gray-1'>Incubation</span>
                    </div>
                    <div className='block w-16 h-0.5 bg-primary-1 mt-7 rounded-full'></div>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className='p-1 border-1 border-dashed border-primary-1 rounded-xl mb-2 relative'>
                            <span className='w-12 h-12 bg-primary-1 rounded-lg flex items-center justify-center text-white font-bold text-sm relative z-10'>
                                3
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-10 h-10 rounded-lg bg-primary-1 opacity-75 group-hover:animate-ping"></span>
                            </span>
                        </div>
                        <span className='text-sm font-medium text-center text-gray-1'>Prototype</span>
                    </div>
                    <div className='block w-16 h-0.5 bg-primary-1 mt-7 rounded-full'></div>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className='p-1 border-1 border-dashed border-primary-1 rounded-xl mb-2 relative'>
                            <span className='w-12 h-12 bg-primary-1 rounded-lg flex items-center justify-center text-white font-bold text-sm relative z-10'>
                                4
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-10 h-10 rounded-lg bg-primary-1 opacity-75 group-hover:animate-ping"></span>
                            </span>
                        </div>
                        <span className='text-sm font-medium text-center xs:text-wrap text-gray-1'>Market Access</span>
                    </div>
                    <div className='block w-16 h-0.5 bg-primary-1 mt-7 rounded-full'></div>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className='p-1 border-1 border-dashed border-primary-1 rounded-xl mb-2 relative'>
                            <span className='w-12 h-12 bg-primary-1 rounded-lg flex items-center justify-center text-white font-bold text-sm relative z-10'>
                                5
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-10 h-10 rounded-lg bg-primary-1 opacity-75 group-hover:animate-ping"></span>
                            </span>
                        </div>
                        <span className='text-sm font-medium text-center text-gray-1'>Impact</span>
                    </div>
                </div>
            </div>

            <div className='bg-gray-1 rounded-full flex flex-row justify-center items-center gap-x-5 p-5'>
                <motion.div
                    className='self-start text-primary-1'
                    variants={quoteIconDanceVariants}
                    animate='animate'
                >
                    <QuoteDownIcon width={40} height={40} />
                </motion.div>
                <blockquote className='italic text-white text-center xs:text-sm sm:text-md md:text-xl max-w-3xl font-medium'>
                    We formally incubate, fund, and co-develop projects under robust legal agreements and strategic protocols.
                </blockquote>
                <motion.div
                    className='self-end text-primary-1'
                    variants={quoteIconDanceVariants}
                    animate='animate'
                >
                    <QuoteUpIcon width={40} height={40} />
                </motion.div>
            </div>

        </div>
    );
};

export default IncubationSection; 