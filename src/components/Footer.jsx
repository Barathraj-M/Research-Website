import React from 'react'

import DummyLogo from '../assets/Images/dummy-icon.svg';
import FooterDivider from '../assets/Images/nav-divider.svg';
import { LinkedIn, InstagramIcon, YoutubeIcon } from '../assets/Icons/Icons.jsx';


import footerMp4 from '../assets/Videos/footer-video.mp4';
import footerWebm from '../assets/Videos/footer-video.webm';

import '../index.css'

const Footer = () => {
  return (
    <footer className='w-full relative flex flex-col items-center justify-center overflow-hidden min-h-screen'>
      <div className='h-15 w-full absolute inset-0 bg-linear-to-t from-transparent via-gray-8/60 to-gray-8'></div>

      <video className='absolute left-0 top-0 w-[100vw] h-full object-cover -z-50 overflow-clip m-auto' autoPlay loop muted playsInline preload='auto'>
        <source src={footerMp4} type='video/mp4' role='mp4 media'/>
        <source src={footerWebm} type='video/webm' role='webm media'/>
        Your browser does not support the video tag.
      </video>

      <div className='before:w-full before:h-full before:mx-auto after:absolue after:inset-0 after:bg-white after:backdrop-blur-sm relative z-20 px-3 md:px-10 py-5 my-auto'>
        <div className='flex xs:flex-col lg:flex-row w-full gap-0'>
          <div className='lg:w-10/20 flex flex-col justify-between items-center gap-3 bg-white rounded-2xl p-5 border-white'>
            <img src={DummyLogo} alt='brand-logo' className='w-30 h-10 self-start'/>
            <div className='flex flex-col justify-start items-start gap-y-5 w-full'>
              <h2>We believe real change starts deep within the supply chain.</h2>
              <div className='flex flex-col justify-start items-center gap-y-3 w-full'>
                <p>Join our eco-supply community.</p>
                <form className='flex flex-row justify-around items-center gap-x-2 w-full rounded-full p-1 border-1 border-gray-3 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  <input 
                    type='text'
                    id='email'
                    placeholder='Enter your email'
                    name='email'
                    className='w-full px-3 py-2 focus:outline-none'  
                  />
                  <input 
                    type='submit'
                    value='Subscribe'
                    className='text-decoration-none rounded-full bg-primary-1 border-1 border-dashed border-primary-1 hover:bg-black hover:text-white text-black px-4 py-2 transition-color duration-300 ease-in-out text-nowrap font-semibold'
                  />
                </form>
              </div>
            </div>
          </div>

          <img
            src={FooterDivider}
            alt='footer-divider'
            className='xs:w-10 xs:h-10 lg:h-10 lg:w-auto xs:rotate-90 lg:rotate-0 self-center'
          />

          <div className='grid grid-cols-2 bg-white rounded-2xl p-4 border-white'>
            <div className='border-b-1 border-e-1 border-gray-5 border-dashed flex flex-col justify-between items-start gap-y-3 p-2'>
              <h2>Pages</h2>
              <div className='grid grid-cols-2 gap-x-2'>
                <div className='flex flex-col justify-center items-start gap-y-2'>
                  <a href='/' className='text-decoration-none hover:text-black hover:underline active:text-black active:underline underline-offset-5 transition-all duration-300 ease-in-out'>Home</a>
                  <a href='/about' className='text-decoration-none hover:text-black hover:underline active:text-black active:underline underline-offset-5 transition-all duration-300 ease-in-out'>About</a>
                  <a href='/services' className='text-decoration-none hover:text-black hover:underline active:text-black active:underline underline-offset-5 transition-all duration-300 ease-in-out'>Services</a>
                  <a href='/environment' className='text-decoration-none hover:text-black hover:underline active:text-black active:underline underline-offset-5 transition-all duration-300 ease-in-out'>Environment</a>
                  <a href='/social' className='text-decoration-none hover:text-black hover:underline active:text-black active:underline underline-offset-5 transition-all duration-300 ease-in-out'>Social</a>
                  <a href='/contact' className='text-decoration-none hover:text-black hover:underline active:text-black active:underline underline-offset-5 transition-all duration-300 ease-in-out'>Contact</a>
                </div>
                <div className='flex flex-col justify-start items-start gap-y-2'>
                  <a href='/privacy' className='text-decoration-none hover:text-black hover:underline active:text-black active:underline underline-offset-5 transition-all duration-300 ease-in-out'>Privacy and Policy</a>
                  <a href='/terms-and-conditions' className='text-decoration-none hover:text-black hover:underline active:text-black active:underline underline-offset-5 transition-all duration-300 ease-in-out'>Terms and Conditions</a>
                </div>
              </div>
            </div>
            <div className='border-b-1 border-gray-5 border-dashed p-2'>
              <h2>Address</h2>
              <p>123 Remote Work Avenue, San Francisco, CA 94105</p>
              <p>144 Creative Street, Suite 456, New York, NY 10001, USA</p>
            </div>
            <div className='border-e-1 border-gray-5 border-dashed flex flex-col justify-between items-start gap-y-3 p-2'>
              <h2>Contact</h2>
              <a href='mailto:hello@slrp-research-park.com' className='text-decoration-none hover:text-black active:text-black transition-all duration-300 ease-in-out'>hello@slrp-research-park.com</a>
              <a href='tel:+91 6383499920' className='text-decoration-none hover:text-black active:text-black transition-all duration-300 ease-in-out'>+91 6383499920</a>
            </div>
            <div className='border-gray-5 border-dashed p-2'>
              <h2>Social Media</h2>
              <div className='flex flex-row justify-start items-center gap-x-4 mt-5'>
                <a href='https://www.linkedin.com/company/slrp-research-park/' target='_blank' rel='noopener noreferrer' className='hover:text-blue-700'>
                  <LinkedIn width='30' height='30' />
                </a>
                <a href='https://www.instagram.com/slrp_research_park/' target='_blank' rel='noopener noreferrer' className='hover:text-pink-500'>
                  <InstagramIcon width='30' height='30' />
                </a>
                <a href='https://www.youtube.com/@slrp_research_park' target='_blank' rel='noopener noreferrer' className='hover:text-red-600'>
                  <YoutubeIcon width='30' height='30' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer