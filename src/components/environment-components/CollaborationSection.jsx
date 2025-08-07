import React from 'react'
import { motion } from "framer-motion";

import SectionPill from '../SectionPill';

import { contentBasicVariants } from '../../utils/animationVarients';

const CollaborationSection = () => {

    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center gap-y-16 xs:px-2 sm:px-5 md:px-10 lg:px-15 py-20 bg-primary-variant-7'>
            <div className="grid sm:auto-rows-auto md:grid-rows-none md:grid-cols-6 gap-y-5 gap-x-5 w-full">
                <div className="md:col-span-3 xs:order-last md:order-first flex justify-center items-center xs:p-2 md:p-5">
                    <div className='flex flex-col justify-start items-start'>
                        <div className='grid grid-cols-2 grid-rows-2 border border-dashed border-primary-variant-2 rounded-xl bg-primary-variant-8'>
                            <div className='border-r border-b border-dashed border-primary-variant-2 rounded-tl-xl bg-primary-variant-8 xs:p-5 sm:p-9 flex justify-center items-center text-center'>
                                <h6 className='mb-0!'>Ministries like MoEFCC and AYUSH</h6>
                            </div>
                            <div className='border-b border-dashed border-primary-variant-2 rounded-tr-xl bg-primary-variant-8 xs:p-5 sm:p-9 flex justify-center items-center text-center'>
                                <h6 className='mb-0!'>CSR divisions</h6>
                            </div>
                            <div className='border-r border-dashed border-primary-variant-2 rounded-bl-xl bg-primary-variant-8 xs:p-5 sm:p-9 flex justify-center items-center text-center'>
                                <h6 className='mb-0!'>CSR divisions</h6>
                            </div>
                            <div className='xs:p-5 sm:p-9 flex justify-center items-center text-center rounded-br-xl'>
                                <h6 className='mb-0!'>Global sustainability bodies</h6>
                            </div>
                        </div>
                        <p className='italic mt-3 text-sm'>SLSRP operates as a multistakeholder platform</p>
                    </div>
                </div>
                <div className="md:col-span-3 xs:order-first md:order-last flex flex-col justify-start items-end text-left sm:px-10 md:px-0">
                    <SectionPill sectionTitle={"Collaboration"} />
                    <motion.h2
                        className="mt-5! font-semibold! inline-block! text-left"
                        variants={contentBasicVariants}
                        initial="initial"
                        whileInView="whileInView"
                        custom={1}
                        viewport={{ once: true, amount: "all" }}
                    >
                        <span className='bg-gradient-to-r from-primary-1 via-primary-variant-2 to-primary-variant-3 bg-clip-text text-transparent'>Collaborative Ecosystems</span> for Impact
                    </motion.h2>
                    <motion.p
                        className="text-left"
                        variants={contentBasicVariants}
                        initial="initial"
                        whileInView="whileInView"
                        custom={3}
                        viewport={{ once: true, amount: "all" }}
                    >
                        Collaboration is central to our environmental strategy. Every collaboration is structured for long-term value, ensuring that outcomes are not
                        episodic but systemically embedded and nationally aligned.
                    </motion.p>
                    <motion.p
                        className="md:mt-5! text-left"
                        variants={contentBasicVariants}
                        initial="initial"
                        whileInView="whileInView"
                        custom={5}
                        viewport={{ once: true, amount: "all" }}
                    >
                        We co-create frameworks, share intellectual property, and co-deploy solutions that are relevant across geographies.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export default CollaborationSection