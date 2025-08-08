import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

import { collapsableContentVariants } from '../utils/animationVarients';

import '../App.css';

const CollapsableCard = ({ heading, text }) => {
    const [isCollapse, setIsCollapse] = useState(true);

    const toggleCollapse = () => {
        setIsCollapse((prev) => !prev);
    }

    return (
        <motion.div
            className='mx-auto px-3 w-9/10 md:w-7/10 rounded-xl text-wrap overflow-hidden select-none bg-white! border-1 border-dashed border-gray-5'
            initial={{
                opacity: 0,
                y: 20
            }}
            animate={isCollapse ? 'collapsed' : 'expanded'}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    ease: "easeInOut",
                    staggerChildren: 0.2
                }
            }}
            role='region'
            aria-labelledby={`collapsible-heading-${heading}`}
        >
            <div
                className='w-full m-2 p-2 grid grid-cols-10 hover:cursor-pointer hover:px-3! transition-all duration-200 ease-in-out'
                onClick={toggleCollapse}
                role='button'
                tabIndex={0}
                aria-expanded={!isCollapse}
                aria-controls={`collapsible-content-${heading}`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleCollapse(); }}
            >
                <h6 id={`collapsible-heading-${heading}`} className='text-wrap mb-0! col-span-9'>{heading}</h6>
                <motion.div
                    className='w-full h-full flex flex-col justify-center items-center'
                    initial={false}
                    animate={{
                        rotate: 0,
                    }}
                    aria-hidden='true'
                >
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="5"
                            y="11"
                            width="14"
                            height="2"
                            rx="1"
                            fill="currentColor"
                        />
                        <motion.rect
                            x="11"
                            y="5"
                            width="2"
                            height="14"
                            rx="1"
                            fill="currentColor"
                            initial={false}
                            animate={{
                                rotate: isCollapse ? 0 : 90,
                                opacity: isCollapse ? 1 : 0,
                                transformOrigin: "50% 50%",
                            }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeInOut',
                            }}
                        />
                    </svg>
                </motion.div>
            </div>
            <AnimatePresence initial={false}>
                {!isCollapse && (
                    <motion.div
                        className='m-2 mt-0 p-1 px-2'
                        key="content"
                        id={`collapsible-content-${heading}`}
                        aria-labelledby={`collapsible-heading-${heading}`}
                        variants={collapsableContentVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                    >
                        <p className='text-gray-2'>{text}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default CollapsableCard