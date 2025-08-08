import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import PrimaryButtom from './PrimaryButtom';
import '../index.css'

import DummyLogo from '../assets/Images/dummy-icon-with-name.svg';
import NavDivider from '../assets/Images/nav-divider.svg';
import NavHoverLogo from '../assets/Images/nav-hover-icon.svg';
import { MenuIcon } from '../assets/Icons/Icons';

import { navHoverLogoVariants, navMenuVariants } from '../utils/animationVarients';

const Header = () => {
  const [currentLocation, setCurrentLocation] = useState('/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const mobileNavRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location.pathname]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && 
          mobileNavRef.current && 
          !mobileNavRef.current.contains(event.target) &&
          !menuButtonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/environment', label: 'Environment' },
    { path: '/social', label: 'Social' },
    { path: '/contact', label: 'Contact' }
  ];

  const NavItem = ({ path, label, onClick, isMobile = false }) => (
    <div className='flex flex-row items-center gap-x-1 h-full'>
      <motion.img
        variants={navHoverLogoVariants}
        initial='initial'
        animate={currentLocation === path ? 'animate' : ''}
        exit='exit'
        src={NavHoverLogo}
        alt=''
        aria-hidden="true"
      />
      <Link
        to={path}
        className='font-semibold hover:text-gray-1 transition-colors duration-300'
        onClick={onClick}
        aria-current={currentLocation === path ? 'page' : undefined}
        {...(isMobile && { tabIndex: isMenuOpen ? 0 : -1 })}
      >
        {label}
      </Link>
    </div>
  );

  return (
    <header className='fixed w-full top-0 left-0 z-50' role="banner">
      <div className='xs:h-17 md:h-19 px-3 md:px-10 py-2 flex flex-row justify-between items-center gap-x-1 h-full relative z-50'>
        <nav 
          className='flex flex-row justify-start items-center gap-3 w-full h-full bg-white/70 backdrop-blur-sm rounded-full relative'
          role="navigation"
          aria-label="Main navigation"
        >
          <div className='m-1 ms-5 h-full flex items-center'>
            <Link 
              to='/' 
              className='text-decoration-none'
              aria-label="SLSRP - Go to homepage"
            >
              <img 
                src={DummyLogo} 
                alt='SLSRP logo' 
                className='xs:h-12 xs:w-25 md:w-30 md:h-13' 
                loading='eager' 
              />
            </Link>
          </div>
          <div className='md:flex flex-row justify-center items-center gap-y-1 gap-x-5 w-full xs:hidden'>
            {navItems.map(({ path, label }) => (
              <NavItem key={path} path={path} label={label} />
            ))}
          </div>
          {/* <img
            src={NavDivider}
            alt='nav-divider'
            className='absolute my-auto top-0 bottom-0 left-auto -right-2.5 w-[18px] h-[30px]'
            loading='eager'
          /> */}
          {/* <div className='absolute my-auto top-0 bottom-0 left-auto -right-2.5 w-4 h-4 bg-white/70 backdrop-blur-sm -z-100 mask-auto'></div> */}
        </nav>
        <div className='flex flex-row gap-x-2 items-center h-full bg-transparent'>
          <div className='xs:hidden p-2 bg-white/70 backdrop-blur-sm rounded-full h-full sm:flex items-center'>
            <PrimaryButtom link='/contact' text='Contact us' />
          </div>
          <button
            ref={menuButtonRef}
            className='md:hidden bg-white/70 backdrop-blur-sm rounded-full flex items-center h-full cursor-pointer'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-haspopup="menu"
          >
            <MenuIcon 
              width='61' 
              height='20' 
              aria-hidden="true"
            />
            <span className="sr-only">
              {isMenuOpen ? 'Close' : 'Open'} navigation menu
            </span>
          </button>
        </div>
      </div>
      
      <AnimatePresence mode='wait'>
        {isMenuOpen && (
          <motion.nav 
            ref={mobileNavRef}
            id="mobile-navigation"
            className='absolute top-full left-0 right-0 mt-3 mx-3 bg-white/80 border-1 border-gray-4 rounded-lg backdrop-blur-sm p-3 md:hidden z-40'
            variants={navMenuVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <div className='flex flex-col justify-center items-start gap-y-2 gap-x-5 w-full h-full'>
              {navItems.map(({ path, label }) => (
                <NavItem 
                  key={`mobile-${path}`} 
                  path={path} 
                  label={label} 
                  onClick={() => setIsMenuOpen(false)}
                  isMobile={true}
                />
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header