import React from 'react'
import { motion } from "framer-motion";

// import CardBackgroundBlurImage from '../../assets/Images/intelligence-section-card-image-1.jpg';
// import CardBackgroundBlurImage from '../../assets/Images/intelligence-section-card-image-2.jpg';
import CardBackgroundBlurImage from '../../assets/Images/intelligence-section-card-image-3.jpg';

import SectionPill from '../SectionPill';

import { contentBasicVariants, visibleAnimationVariants } from '../../utils/animationVarients';

const IntelligenceSection = () => {
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center gap-y-16 bg-gray-8'>
            <div className='grid xs:auto-rows-auto md:grid-cols-2 gap-x-5 gap-y-5'>
                <div className='p-2 flex flex-col justify-start items-start gap-y-2 xs:ps-2 sm:ps-5 md:ps-10 lg:ps-15 pt-20'>
                    <div className='pb-7'>
                        <SectionPill sectionTitle={"Intelligence"} />
                    </div>
                    <motion.h2
                        className="font-semibold! pb-5"
                        variants={contentBasicVariants}
                        initial="initial"
                        whileInView="whileInView"
                        custom={1}
                        viewport={{ once: true, amount: "some" }}
                    >
                        Designing for <span className='bg-gradient-to-r from-primary-1 via-primary-variant-2 to-primary-variant-3 bg-clip-text text-transparent'>Long-Term Environmental Intelligence</span>
                    </motion.h2>
                    <motion.p
                        variants={contentBasicVariants}
                        initial="initial"
                        whileInView="whileInView"
                        custom={3}
                        viewport={{ once: true, amount: "some" }}
                    >
                        The environmental initiatives at SLSRP are built to endure. Our measurement systems track not just outputs, but long-term ecological impact - ensuring that everything we touch leaves the planet stronger.
                    </motion.p>
                    <motion.p
                        variants={contentBasicVariants}
                        initial="initial"
                        whileInView="whileInView"
                        custom={3}
                        viewport={{ once: true, amount: "some" }}
                    >
                        From digitizing endangered flora to enabling eco-entrepreneurship, our work is proof that environmental regeneration can be both practical and visionary.
                    </motion.p>
                    <motion.p
                        variants={contentBasicVariants}
                        initial="initial"
                        whileInView="whileInView"
                        custom={3}
                        viewport={{ once: true, amount: "some" }}
                        className='text-gray-1'
                    >
                        We are not just designing for today’s needs - but for tomorrow’s intelligence.
                    </motion.p>
                    <motion.div
                        className='self-center border border-dashed border-primary-variant-2 rounded-md p-3 flex flex-rows justify-center items-center gap-0'
                        variants={visibleAnimationVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport={{ once: true, amount: "0.1" }}
                        custom={3}
                    >
                        <div className='py-2 px-4 border-r border-dashed border-primary-variant-2'>
                            <h6 className='mb-0!'>Learn</h6>
                        </div>
                        <div className='py-2 px-4 border-r border-dashed border-primary-variant-2'>
                            <h6 className='mb-0!'>Adapt</h6>
                        </div>
                        <div className='py-2 px-4'>
                            <h6 className='mb-0!'>Thrive</h6>
                        </div>
                    </motion.div>
                </div>
                <div className='xs:w-full xs:h-[20rem] sm:h-[30rem] md:w-auto md:h-full relative overflow-hidden mb-10'>
                    <img
                        src={CardBackgroundBlurImage}
                        alt='card-background-blur-image'
                        className='object-cover absolute inset-0 w-full h-full blur-[15px] opacity-95'
                        loading='eager'
                    />
                    <div className="absolute inset-0 flex justify-center items-center z-10">
                        <motion.img
                            src={CardBackgroundBlurImage}
                            alt='card-background-blur-image'
                            className='object-cover w-9/10 h-9/10 rounded-xl'
                            loading='eager'
                            variants={visibleAnimationVariants}
                            initial='initial'
                            whileInView='whileInView'
                            viewport={{ once: true, amount: "some" }}
                            custom={3}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntelligenceSection