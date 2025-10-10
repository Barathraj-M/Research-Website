import React from 'react';
import { motion } from 'framer-motion';

import LoadingHolder from '../assets/Images/nav-hover-icon.svg';
import DummyLogo from '../assets/Images/slsrf-logo.svg';

import { initialLoaderVariants } from '../utils/animationVariants';

const InitialLoader = () => {
    return (
        <div className="fixed inset-0 min-h-screen w-screen bg-gradient-to-br from-gray-8 via-green-50 to-green-100 flex flex-col items-center justify-center gap-y-15 z-[9999] xs:px-2 md:px-10">
            <motion.div
                className="mb-8 flex flex-col items-center"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
                <img
                    src={DummyLogo}
                    alt='logo'
                    className='w-30 h-30'
                    loading='lazy'
                />
            </motion.div>
            <motion.h2
                className="text-gray-2 font-semibold text-center my-8 lg:my-15"
                variants={initialLoaderVariants}
                initial='initial'
                whileInView='whileInView'
            >
                Welcome to Semporutkalai Life Science Research Foundation (SLSRF)
            </motion.h2>
            <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
            >
                <img
                    src={LoadingHolder}
                    alt='loading'
                    className='w-20 h-20 animate-ping'
                    loading='lazy'
                />
            </motion.div>
        </div>
    );
};

export default InitialLoader; 