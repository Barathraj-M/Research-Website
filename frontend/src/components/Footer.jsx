import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import AnimatedTextCycler from './AnimatedTextCycler.jsx';
import ConfettiHeart from './ConfettiHeart.jsx';

import DummyLogo from '../assets/Images/SLSRF Logo.png';
import FooterDivider from '../assets/Images/nav-divider.svg';
import BrixLogo from '../assets/Images/brix-logo.jpg';
import QdotzLogo from '../assets/Images/qdotz-logo.png';
import MarginsLogo from '../assets/Images/margin-logo.png';
import SavantLogo from '../assets/Images/sna-logo.jpg';
import { LinkedIn, InstagramIcon, YoutubeIcon } from '../assets/Icons/Icons.jsx';

import footerMp4 from '../assets/Videos/footer-video.mp4';
import footerWebm from '../assets/Videos/footer-video.webm';

import { footerContainerVariants, heartBeatVariants } from '../utils/animationVariants.js';

import '../index.css'

const Footer = () => {
  const [confettiKey, setConfettiKey] = useState(0);
  const numHearts = 15; // The number of hearts to show on hover 

  const scrollToCoreInitiatives = () => {
    const element = document.getElementById('core-initiatives');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className='w-full pt-20 relative flex flex-col items-center justify-center overflow-hidden' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>Footer Section</h2>

      <div className='h-15 w-full absolute inset-0 bg-linear-to-t from-transparent via-gray-8/60 to-gray-8' aria-hidden='true'></div>

      <video
        className='absolute left-0 top-0 w-[100vw] h-full object-cover -z-50 overflow-clip m-auto'
        autoPlay
        loop
        muted
        playsInline
        preload='auto'
        aria-hidden='true'
      >
        <source src={footerMp4} type='video/mp4'/>
        <source src={footerWebm} type='video/webm'/>
        Your browser does not support the video tag.
      </video>

      <motion.div 
        className='before:w-full before:h-full before:mx-auto after:absolue after:inset-0 after:bg-white after:backdrop-blur-sm relative z-20 px-3 md:px-10 py-5 my-auto'
        variants={footerContainerVariants}
        initial='initial'
        whileInView='whileInView'
        viewport={{ once: true, amount: "some" }}
      >
        <div className='flex xs:flex-col lg:flex-row w-full gap-0'>
          <div className='lg:w-10/20 flex flex-col justify-between items-center bg-white rounded-2xl border-white'>
            <div className='flex flex-col justify-between items-center flex-grow-1 gap-3 p-5'>
              <img src={DummyLogo} alt='SLSRF Research Foundation Logo' className='w-30 h-30 self-start' loading='lazy'/>
              <div className='flex flex-col justify-start items-start gap-y-5 w-full'>
                <AnimatedTextCycler />
                <div className='flex flex-col justify-start items-center gap-y-3 w-full'>
                  <p>Join our community.</p>
                  <form
                    className='flex flex-row justify-around items-center gap-x-2 w-full rounded-full p-1 border-1 border-gray-3 focus-within:ring-1 focus-within:ring-gray-2'
                    aria-label='Subscribe to our newsletter'
                  >
                    <label htmlFor='email' className='sr-only'>Email address</label>
                    <input 
                      type='email'
                      id='email'
                      placeholder='Enter your email'
                      name='email'
                      className='w-full px-3 py-2 focus:outline-none'
                      aria-required='true'
                    />
                    <input 
                      type='submit'
                      value='Subscribe'
                      className='text-decoration-none rounded-full bg-primary-1 border-1 border-dashed border-primary-1 hover:bg-black hover:text-white text-black px-4 py-2 transition-color duration-300 ease-in-out text-nowrap font-semibold'
                      aria-label='Subscribe'
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className='flex-shrink-1'>
              <div
                className='relative cursor-pointer'
                onMouseEnter={() => setConfettiKey(prevKey => prevKey + 1)}
              >
                <div className='absolute inset-0'>
                  {confettiKey > 0 && [...Array(numHearts)].map((_, i) => (
                    <ConfettiHeart key={`${confettiKey}-${i}`} />
                  ))}
                </div>

                <p className='text-sm text-gray-3 flex items-center justify-center gap-1'>
                  Crafted with 
                  <motion.span 
                    className='inline-block'
                    variants={heartBeatVariants}
                    initial='initial'
                    whileHover='animate'
                    aria-hidden='true'
                  >
                    💖
                  </motion.span>
                </p>
              </div>
            </div>
          </div>

          <img
            src={FooterDivider}
            alt='Decorative divider'
            className='xs:w-7 xs:h-auto lg:h-10 lg:w-auto xs:rotate-90 lg:rotate-0 self-center object-cover -my-3.5'
            aria-hidden='true'
            loading='lazy'
          />

          <div className='flex flex-col justify-center items-center bg-white rounded-2xl border-white' role='navigation' aria-label='Footer links'>
            <div className='grid grid-cols-2 xs:px-4 xs:pt-5 xs:pb-6 md:px-10 md:pt-10 md:pb-5'>
              <div className='border-b-1 border-e-1 border-gray-5 border-dashed flex flex-col justify-between items-start gap-y-3 py-4'>
                <h4>Pages</h4>
                <div className='grid xs:grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2'>
                  <div className='flex flex-col justify-center items-start gap-y-2'>
                    <a href='/' aria-label='Home Page' className='hover:text-gray-1 hover:underline hover:decoration-gray-2'>Home</a>
                    <a href='/about' aria-label='About Us Page' className='hover:text-gray-1 hover:underline hover:decoration-gray-2'>About</a>
                    <a href='/about?scroll=core-initiatives' onClick={scrollToCoreInitiatives} aria-label='Services Section' className='hover:text-gray-1 hover:underline hover:decoration-gray-2'>Services</a>
                    <a href='/environment' aria-label='Environment Page' className='hover:text-gray-1 hover:underline hover:decoration-gray-2'>Environment</a>
                    <a href='/social' aria-label='Social Page' className='hover:text-gray-1 hover:underline hover:decoration-gray-2'>Social</a>
                    <a href='/contact' aria-label='Contact Page' className='hover:text-gray-1 hover:underline hover:decoration-gray-2'>Contact</a>
                  </div>
                  <div className='flex flex-col justify-start items-start gap-y-2'>
                    <a href='/privacy' aria-label='Privacy and Policy Page' className='hover:text-gray-1 hover:underline hover:decoration-gray-2'>Privacy and Policy</a>
                    <a href='/terms-and-conditions' aria-label='Terms and Conditions Page' className='hover:text-gray-1 hover:underline hover:decoration-gray-2'>Terms and Conditions</a>
                  </div>
                </div>
              </div>
              <div className='border-b-1 border-gray-5 border-dashed xs:ps-2 py-4 sm:ps-4 overflow-hidden'>
                <h4>Our Conglomerate</h4>
                <div className='grid grid-cols-2 gap-x-2 gap-y-5 text-center mt-5'>
                  <a href='https://brixnet.in/' target='_blank' rel='noopener noreferrer' aria-label='Brixnet Website'>
                    <img 
                      src={BrixLogo} 
                      alt='Brix Logo' 
                      className='xs:w-10 xs:h-10 sm:w-15 sm:h-15 object-contain hover:scale-105 transition-transform duration-300 ease-in-out m-auto'
                      loading='lazy'
                    />
                  </a>
                  <a href='https://qdotz.in/' target='_blank' rel='noopener noreferrer' aria-label='Qdotz Website'>
                    <img 
                      src={QdotzLogo} 
                      alt='Qdotz Logo' 
                      className='xs:w-10 xs:h-10 sm:w-15 sm:h-15 object-contain hover:scale-105 transition-transform duration-300 ease-in-out m-auto'
                      loading='lazy'
                    />
                  </a>
                  <a href='https://coreverse.in/' target='_blank' rel='noopener noreferrer' aria-label='Coreverse Website'>
                    <img 
                      src={MarginsLogo} 
                      alt='Coreverse Logo' 
                      className='xs:w-10 xs:h-10 sm:w-15 sm:h-15 object-contain hover:scale-105 transition-transform duration-300 ease-in-out m-auto'
                      loading='lazy'
                    />
                  </a>
                  <a href='https://snaedu.in/' target='_blank' rel='noopener noreferrer' aria-label='Savant Website'>
                    <img 
                      src={SavantLogo} 
                      alt='Savant Logo' 
                      className='xs:w-10 xs:h-10 sm:w-15 sm:h-15 object-contain hover:scale-105 transition-transform duration-300 ease-in-out m-auto'
                      loading='lazy'
                    />
                  </a>
                  {/* <a href='https://snaedu.in/' target='_blank' rel='noopener noreferrer' aria-label='Savant Website'>
                    <img 
                      src={SavantLogo} 
                      alt='Savant Logo' 
                      className='w-15 h-15 object-contain hover:scale-105 transition-transform duration-300 ease-in-out m-auto'
                      loading='lazy'
                    />
                  </a> */}
                </div>
              </div>
              <div className='border-e-1 border-gray-5 border-dashed flex flex-col justify-between items-start gap-y-3 py-4'>
                <h4>Contact</h4>
                <a href='mailto:hello@slsrf-research-foundation.com' aria-label='Email SLSRF'>hello@slsrf-research-foundation.com</a>
                <a href='tel:+91 6383499920' aria-label='Call SLSRF'>+91 6383499920</a>
              </div>
              <div className='border-gray-5 border-dashed py-4 ps-4'>
                <h4>Social Media</h4>
                <div className='flex flex-row justify-start items-center gap-x-4 mt-5'>
                  <a href='https://www.linkedin.com/company/slsrf-research-foundation/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn Profile' className='hover:text-blue-700'>
                    <LinkedIn width='30' height='30' />
                  </a>
                  <a href='https://www.instagram.com/slsrf_research_foundation/' target='_blank' rel='noopener noreferrer' aria-label='Instagram Profile' className='hover:text-pink-500'>
                    <InstagramIcon width='30' height='30' />
                  </a>
                  <a href='https://www.youtube.com/@slsrf_research_foundation' target='_blank' rel='noopener noreferrer' aria-label='YouTube Channel' className='hover:text-red-600'>
                    <YoutubeIcon width='30' height='30' />
                  </a>
                </div>
              </div>
            </div>
            <div className='xs:px-4 md:px-10'>
              <p 
                className='text-xs! text-gray-4 text-wrap text-center'
                aria-label='Copyright current year SLSRF Research Foundation. All rights reserved.'
              >
                &copy; {new Date().getFullYear()} - SLSRF Research Foundation. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
