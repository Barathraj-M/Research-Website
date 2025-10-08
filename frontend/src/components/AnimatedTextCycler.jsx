import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

import { animatedTextCyclerVariants } from '../utils/animationVariants';

import '../index.css';

const AnimatedTextCycler = ({
  baseText = "Enabling",
  animatedWords = ["personal", "professional", "social"],
  suffix = "excellence.",
  interval = 2500,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
    }, interval);

    return () => clearInterval(timer);
  }, [animatedWords.length, interval]);

  return (
    <div className={`${className}`} role='region' aria-live='polite' aria-label='Animated slogan text'>
      <div className='w-full'></div>
      <motion.h2 
        className='leading-relaxed' 
        layout
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {baseText}{' '}
        <motion.span 
          className="relative inline-flex items-center justify-start w-[200px] md:w-[300px] lg:w-[400px]"
          layout
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          aria-hidden='true'
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              variants={animatedTextCyclerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="font-semibold bg-gradient-to-r from-primary-1 via-primary-variant-2 to-primary-variant-3 bg-clip-text text-transparent"
              layout
            >
              {animatedWords[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.span>
        {' '}{suffix}
      </motion.h2>
    </div>
  );
};

export default AnimatedTextCycler;
