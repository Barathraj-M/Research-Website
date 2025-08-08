/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from "framer-motion";

import SectionPill from '../SectionPill';

import { contentBasicVariants, shufflingTextBoxes } from '../../utils/animationVarients';

const CollaborationSection = () => {
    const boxLabels = [
        { key: 'box1', label: 'Ministries like MoEFCC and AYUSH' },
        { key: 'box2', label: 'Research institutions' },
        { key: 'box3', label: 'CSR divisions' },
        { key: 'box4', label: 'Global sustainability bodies' },
    ];

    const shuffle = useCallback((array) => {
        let arr = array.slice();
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }, []);

    const [boxes, setBoxes] = useState(boxLabels);

    useEffect(() => {
        const interval = setInterval(() => {
            setBoxes(prev => shuffle(prev));
        }, 2000);
        return () => clearInterval(interval);
    }, [shuffle]);

    return (
        <div
            id='collaboration-section'
            className='w-full min-h-[50vh] flex flex-col justify-center items-center gap-y-16 xs:px-2 sm:px-5 md:px-10 lg:px-15 xs:py-10 md:py-20 bg-primary-variant-7'
        >
            <div className="grid sm:auto-rows-auto md:grid-rows-none md:grid-cols-6 gap-y-5 gap-x-5 w-full">
                <div className="md:col-span-3 xs:order-last md:order-first flex justify-center items-center xs:p-2 md:p-5">
                    <div className='flex flex-col justify-start items-start'>
                        <motion.div
                            className='grid grid-cols-2 grid-rows-2 border border-dashed border-primary-variant-2 rounded-xl bg-primary-variant-8'
                            layout
                        >
                            {boxes.map((box, idx) => (
                                <motion.div
                                    key={box.key}
                                    className={
                                        [
                                            idx === 0 ? 'border-r border-b rounded-tl-xl' : '',
                                            idx === 1 ? 'border-b rounded-tr-xl' : '',
                                            idx === 2 ? 'border-r rounded-bl-xl' : '',
                                            idx === 3 ? 'rounded-br-xl' : '',
                                            'border-dashed border-primary-variant-2 bg-primary-variant-8 xs:p-3 sm:p-7 flex justify-center items-center text-center'
                                        ].join(' ')
                                    }
                                >
                                    <AnimatePresence mode="wait">
                                        <motion.h6
                                            key={box.label}
                                            layout
                                            variants={shufflingTextBoxes}
                                            initial='initial'
                                            animate='animate'
                                            exit='exit'
                                            transition='transition'
                                            className='mb-0! m-2'
                                        >
                                            {box.label}
                                        </motion.h6>
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </motion.div>
                        <p className='italic mt-3 text-sm'>SLSRP operates as a multistakeholder platform</p>
                    </div>
                </div>
                <div className="md:col-span-3 xs:order-first md:order-last flex flex-col justify-start items-end text-left sm:px-10 md:px-0">
                    <div className='pb-7'>
                        <SectionPill sectionTitle={"Collaboration"} />
                    </div>
                    <motion.h2
                        className="mt-5! pb-5 font-semibold! inline-block! text-left"
                        variants={contentBasicVariants}
                        initial="initial"
                        whileInView="whileInView"
                        custom={1}
                        viewport={{ once: true, amount: "some" }}
                    >
                        <span className='bg-gradient-to-r from-primary-1 via-primary-variant-2 to-primary-variant-3 bg-clip-text text-transparent'>Collaborative Ecosystems</span> for Impact
                    </motion.h2>
                    <motion.p
                        className="text-left"
                        variants={contentBasicVariants}
                        initial="initial"
                        whileInView="whileInView"
                        custom={3}
                        viewport={{ once: true, amount: "some" }}
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
                        viewport={{ once: true, amount: "some" }}
                    >
                        We co-create frameworks, share intellectual property, and co-deploy solutions that are relevant across geographies.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export default CollaborationSection