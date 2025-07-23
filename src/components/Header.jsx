import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import PrimaryButtom from './PrimaryButtom';
import '../index.css'

import DummyLogo from '../assets/Images/dummy-icon.svg';
import NavDivider from '../assets/Images/nav-divider.svg';
import NavHoverLogo from '../assets/Images/nav-hover-icon.svg';
import { MenuIcon } from '../assets/Icons/Icons';

import { navHoverLogoVariants, navMenuVariants } from '../utils/animationVarients';

const Header = () => {
  const [currentLocation, setCurrentLocation] = useState('/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location.pathname]);

  return (
    <header className='fixed w-full top-0 left-0 z-50'>
      <div className='xs:h-17 md:h-19 px-3 md:px-10 py-2 flex flex-row justify-between items-center gap-x-1 h-full relative z-50'>
        <nav className='flex flex-row justify-start items-center gap-3 w-full h-full bg-white rounded-full relative '>
          <div className='m-1 p-2 ms-2 h-full flex items-center'>
            <Link to='/' className='text-decoration-none'>
              <img src={DummyLogo} alt='logo' className='w-25 h-25' loading='eager' />
            </Link>
          </div>
          <div className='md:flex flex-row justify-center items-center gap-y-1 gap-x-5 w-full xs:hidden'>
            <div className='flex flex-row items-center gap-x-1 h-full'>
              <motion.img
                variants={navHoverLogoVariants}
                initial='initial'
                animate={currentLocation == '/' ? 'animate' : ''}
                exit='exit'
                src={NavHoverLogo}
                alt='nav-logo'
              />
              <Link
                to='/'
                className='font-semibold hover:text-gray-1 transition-colors duration-300'
              >
                Home
              </Link>
            </div>
            <div className='flex flex-row items-center gap-x-1 h-full'>
              <motion.img
                variants={navHoverLogoVariants}
                initial='initial'
                animate={currentLocation == '/about' ? 'animate' : ''}
                exit='exit'
                src={NavHoverLogo}
                alt='nav-logo'
              />
              <Link
                to='/about'
                className='font-semibold hover:text-gray-1 transition-colors duration-300'
              >
                About
              </Link>
            </div>
            <div className='flex flex-row items-center gap-x-1 h-full'>
              <motion.img
                variants={navHoverLogoVariants}
                initial='initial'
                animate={currentLocation == '/environment' ? 'animate' : ''}
                exit='exit'
                src={NavHoverLogo}
                alt='nav-logo'
              />
              <Link
                to='/environment'
                className='font-semibold hover:text-gray-1 transition-colors duration-300'
              >
                Environment
              </Link>
            </div>
            <div className='flex flex-row items-center gap-x-1 h-full'>
              <motion.img
                variants={navHoverLogoVariants}
                initial='initial'
                animate={currentLocation == '/social' ? 'animate' : ''}
                exit='exit'
                src={NavHoverLogo}
                alt='nav-logo'
              />
              <Link
                to='/social'
                className='font-semibold hover:text-gray-1 transition-colors duration-300'
              >
                Social
              </Link>
            </div>
            <div className='flex flex-row items-center gap-x-1 h-full'>
              <motion.img
                variants={navHoverLogoVariants}
                initial='initial'
                animate={currentLocation == '/contact' ? 'animate' : ''}
                exit='exit'
                src={NavHoverLogo}
                alt='nav-logo'
              />
              <Link
                to='/contact'
                className='font-semibold hover:text-gray-1 transition-colors duration-300'
              >
                Contact
              </Link>
            </div>
          </div>
          <img
            src={NavDivider}
            alt='nav-divider'
            className='absolute my-auto top-0 bottom-0 left-auto -right-2.5 w-[18px] h-[30px]'
            loading='eager'
          />
        </nav>
        <div className='flex flex-row gap-x-2 items-center h-full bg-transparent'>
          <div className='xs:hidden p-2 bg-white rounded-full h-full sm:flex items-center'>
            <PrimaryButtom link='/contact' text='Contact us' />
          </div>
          <button
            className='md:hidden bg-white rounded-full flex items-center h-full cursor-pointer'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            <MenuIcon width='61' height='20' />
          </button>
        </div>
      </div>
      
      <AnimatePresence mode='wait'>
        {isMenuOpen && (
          <motion.nav 
            className='absolute top-full left-0 right-0 mt-3 mx-3 bg-white/10 border-1 border-gray-4 rounded-lg backdrop-blur-sm p-3 md:hidden z-40'
            variants={navMenuVariants}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            <div className='flex flex-col justify-center items-start gap-y-2 gap-x-5 w-full h-full'>
              <div className='flex flex-row items-center gap-x-1 h-full'>
                <motion.img
                  variants={navHoverLogoVariants}
                  initial='initial'
                  animate={currentLocation == '/' ? 'animate' : ''}
                  exit='exit'
                  src={NavHoverLogo}
                  alt='nav-logo'
                />
                <Link
                  to='/'
                  className='font-semibold hover:text-gray-1 transition-colors duration-300'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </div>
              <div className='flex flex-row items-center gap-x-1 h-full'>
                <motion.img
                  variants={navHoverLogoVariants}
                  initial='initial'
                  animate={currentLocation == '/about' ? 'animate' : ''}
                  exit='exit'
                  src={NavHoverLogo}
                  alt='nav-logo'
                />
                <Link
                  to='/about'
                  className='font-semibold hover:text-gray-1 transition-colors duration-300'
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </div>
              <div className='flex flex-row items-center gap-x-1 h-full'>
                <motion.img
                  variants={navHoverLogoVariants}
                  initial='initial'
                  animate={currentLocation == '/environment' ? 'animate' : ''}
                  exit='exit'
                  src={NavHoverLogo}
                  alt='nav-logo'
                />
                <Link
                  to='/environment'
                  className='font-semibold hover:text-gray-1 transition-colors duration-300'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Environment
                </Link>
              </div>
              <div className='flex flex-row items-center gap-x-1 h-full'>
                <motion.img
                  variants={navHoverLogoVariants}
                  initial='initial'
                  animate={currentLocation == '/social' ? 'animate' : ''}
                  exit='exit'
                  src={NavHoverLogo}
                  alt='nav-logo'
                />
                <Link
                  to='/social'
                  className='font-semibold hover:text-gray-1 transition-colors duration-300'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Social
                </Link>
              </div>
              <div className='flex flex-row items-center gap-x-1 h-full'>
                <motion.img
                  variants={navHoverLogoVariants}
                  initial='initial'
                  animate={currentLocation == '/contact' ? 'animate' : ''}
                  exit='exit'
                  src={NavHoverLogo}
                  alt='nav-logo'
                />
                <Link
                  to='/contact'
                  className='font-semibold hover:text-gray-1 transition-colors duration-300'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header