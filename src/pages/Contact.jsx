import React from 'react'
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion'

import ContactHeroImage from '../assets/Images/contact-hero-image.jpg'
import RoundedBottomRight from '../assets/Images/hero-bottom-right.svg'
import RoundedBottomLeft from '../assets/Images/hero-bottom-left.svg'
import PrimaryButtom from '../components/PrimaryButtom'

import CollapsableCard from '../components/CollapsableCard'

import { contentBasicVariants, overlayVariants } from '../utils/animationVarients'

import '../index.css';

const Contact = () => {
    return (
        <>
            <section className='w-full h-full'>
                <AnimatePresence mode='sync'>
                    <div className='w-full h-full relative'>
                        <motion.div
                            className='w-full h-full absolute inset-0 bg-linear-to-t from-transparent via-gray-1/50 to-gray-1'
                            variants={overlayVariants}
                            initial='initial'
                            whileInView='whileInView'
                            exit='exit'
                        ></motion.div>
                        <img
                            src={ContactHeroImage}
                            alt='Contact-hero-section-header-img'
                            className='w-full h-[100vh] object-cover overflow-hidden'
                        />
                        <div className='absolute w-full flex flex-col justify-center items-center gap-y-2 md:gap-y-15 bottom-0 left-0 right-0'>
                            <div className='flex flex-col justify-center items-center gap-y-7 max-w-md'>
                                <motion.h1
                                    className='mx-auto text-white!'
                                    variants={contentBasicVariants}
                                    initial='initial'
                                    whileInView='whileInView'
                                    custom={1}
                                    viewport={{ once: true, amount: "some" }}
                                    exit='exit'
                                >
                                    Contact us
                                </motion.h1>
                                <motion.p
                                    className='mx-auto text-white font-medium text-center'
                                    variants={contentBasicVariants}
                                    initial='initial'
                                    whileInView='whileInView'
                                    viewport={{ once: true, amount: "some" }}
                                    exit='exit'
                                    custom={3}
                                >
                                    Eco-supply solutions start with a conversation. Whether you're exploring green logistics or need tailored support, we're ready to assist.
                                </motion.p>
                            </div>
                            <div className='xs:w-full sm:w-8/10 md:w-9/10 lg:w-8/10 flex flex-row justify-between items-center gap-0'>
                                <img
                                    src={RoundedBottomLeft}
                                    alt='Rounded bottom left decoration'
                                    className='self-end -mb-[0.8px] -me-[0.8px]'
                                />
                                <motion.div
                                    className='w-full grid xs:grid-cols-1 md:grid-cols-3 md:gap-x-5 rounded-tl-xl rounded-tr-xl bg-gray-8 px-4 pt-4 pb-2'
                                    initial={{
                                        y: 140
                                    }}
                                    animate={{
                                        y: 0,
                                        transition: {
                                            duration: 1.2,
                                            ease: "easeInOut"
                                        }
                                    }}
                                >
                                    <motion.div
                                        className='flex flex-col justify-center items-center gap-y-2 h-full xs:border-b-1 md:border-b-0 md:border-r-1 border-dashed border-gray-4 p-4'
                                        variants={contentBasicVariants}
                                        initial='initial'
                                        whileInView='whileInView'
                                        custom={1}
                                        viewport={{ once: true, amount: "some" }}
                                        exit='exit'
                                    >
                                        <h5>Call us anytime</h5>
                                        <a href='tel: +1234567890' className='text-gray-3 hover:text-gray-2'>+1234567890</a>
                                    </motion.div>
                                    <motion.div
                                        className='flex flex-col justify-center items-center gap-y-2 h-full xs:border-b-1 md:border-b-0 md:border-r-1 border-dashed border-gray-4 p-4'
                                        variants={contentBasicVariants}
                                        initial='initial'
                                        whileInView='whileInView'
                                        custom={4}
                                        viewport={{ once: true, amount: "some" }}
                                        exit='exit'
                                    >
                                        <h5>Write to us</h5>
                                        <a href='tel: +1234567890' className='text-gray-3 hover:text-gray-2'>+1234567890</a>
                                    </motion.div>
                                    <motion.div
                                        className='text-center flex flex-col justify-center items-center gap-y-2 h-full p-4'
                                        variants={contentBasicVariants}
                                        initial='initial'
                                        whileInView='whileInView'
                                        custom={8}
                                        viewport={{ once: true, amount: "some" }}
                                        exit='exit'
                                    >
                                        <h5>Open hours</h5>
                                        <p className='text-gray-3 mb-0!'>Sat: 10:00 AM – 3:00 PM</p>
                                        <p className='text-gray-3'>Sun: Taking a breath of fresh air (closed)</p>
                                    </motion.div>
                                </motion.div>
                                <img
                                    src={RoundedBottomRight}
                                    alt='Rounded bottom right decoration'
                                    className='self-end -mb-[0.8px] -ms-[0.8px]'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center gap-y-10 my-10'>
                        <motion.h2
                            className='text-center'
                            variants={contentBasicVariants}
                            initial='initial'
                            whileInView='whileInView'
                            viewport={{ once: true, amount: "some" }}
                            exit='exit'
                            custom={1}
                        >
                            Let's start a <span className='text-primary-1!'>conversation</span>
                        </motion.h2>
                        <motion.form
                            className='w-9/10 md:w-7/10 h-full flex flex-col justify-start items-start xs:gap-y-5 md:gap-y-10 rounded-3xl xs:p-5 md:p-10 bg-white border-0 focus-within:shadow-2xl'
                            variants={contentBasicVariants}
                            initial='initial'
                            whileInView='whileInView'
                            viewport={{ once: true, amount: "some" }}
                            exit='exit'
                            custom={3}
                        >
                            <div className='w-full'>
                                <label htmlFor='name' className='block mb-2 text-black'>
                                    What is your full name?
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    placeholder='Type your full name'
                                    className='w-full p-4 border border-dashed border-gray-4 focus:outline-dashed focus:ring-gray-2 focus:border-transparent rounded-md transition-all duration-200'
                                />
                            </div>
                            <div className='w-full flex xs:flex-col md:flex-row justify-between items-center gap-x-8 xs:gap-y-5 md:gap-y-10'>
                                <div className='w-full'>
                                    <label htmlFor='email' className='block mb-2 text-black'>
                                        Email Address
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        placeholder='Type your email address'
                                        className='w-full p-4 border border-dashed border-gray-4 focus:outline-dashed focus:ring-gray-2 focus:border-transparent rounded-md transition-all duration-200'
                                    />
                                </div>
                                <div className='w-full'>
                                    <label htmlFor='phone' className='block mb-2 text-black'>
                                        Phone Number
                                    </label>
                                    <input
                                        type='tel'
                                        name='phone'
                                        id='phone'
                                        placeholder='Type your phone number'
                                        className='w-full p-4 border border-dashed border-gray-4 focus:outline-dashed focus:ring-gray-2 focus:border-transparent rounded-md transition-all duration-200'
                                    />
                                </div>
                            </div>
                            <div className='w-full'>
                                <label htmlFor='message' className='block mb-2 text-black'>
                                    Send us a message
                                </label>
                                <textarea
                                    name='message'
                                    id='message'
                                    rows='5'
                                    placeholder='Type your message here'
                                    className='w-full p-4 border border-dashed border-gray-4 focus:outline-dashed focus:ring-gray-2 focus:border-transparent rounded-md transition-all duration-200 resize-vertical'
                                />
                            </div>
                            <PrimaryButtom
                                text={'Send Message'}
                                link={'#'}
                            />
                        </motion.form>
                    </div>
                </AnimatePresence>
            </section>
            <section className='w-full min-h-screen p-2 flex flex-col justify-start items-center gap-y-8'>
                <motion.h2 
                    className='text-center font-semibold mt-20! max-w-lg'
                    variants={contentBasicVariants}
                    initial='initial'
                    whileInView='whileInView'
                    custom={1}
                    viewport={{ once: true, amount: "some" }}
                    exit='exit'
                >
                    Clearing doubts about our <span className='text-primary-1'>organisation & services</span>
                </motion.h2>
                <CollapsableCard
                    heading={'What is eco-supply transportation?'}
                    text={'Eco-supply transportation refers to environmentally sustainable methods of transporting goods within the supply chain. The goal is to reduce the carbon footprint, energy consumption, and environmental impact associated with logistics and distribution.'}
                />
                <CollapsableCard
                    heading={'How does Eco-Supply reduce environmental impact?'}
                    text={'Eco-supply transportation reduces environmental impact by making the entire logistics process more sustainable, from how goods are packaged and shipped to how vehicles are powered and routes are planned.'}
                />
                <CollapsableCard
                    heading={'Do you offer customized supply chain solutions?'}
                    text={'Yes, every business has unique needs. We provide tailor-made logistics strategies designed to maximize efficiency, reduce costs, and support your sustainability goals.'}
                />
                <CollapsableCard
                    heading={'What areas do you currently serve?'}
                    text={'We proudly provide eco-friendly supply chain solutions across a growing network of regions, focusing on sustainability, efficiency, and impact.'}
                />
                <CollapsableCard
                    heading={'Can Eco-Supply handle large-scale industrial logistics?'}
                    text={'Eco-Supply can handle large-scale industrial logistics—and it’s becoming increasingly common for major industries to adopt sustainable logistics solutions without compromising on scale, speed, or efficiency.'}
                />
            </section>
            <div className='w-full h-30'></div>
        </>
    )
}

export default Contact