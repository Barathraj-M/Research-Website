import React from 'react'
import image from '../assets/9224444.jpg'; // Update with the correct path to your image
import { useRef,useEffect } from 'react';

import '../index.css';

const About = () => {
    const logos = [
    'https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683d3b2d6d119a92715751a6_client-image-06.svg',
    'https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683d3b2c0697f0f74387041e_client-image-04.svg',
    'https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683d3b2d25c68b4a9554c777_client-image-05.svg',
    'https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683d3b2bcaa5306b96f81a26_client-image-01.svg',
    'https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683d3b2b5d9336ef0d5af39b_client-image-03.svg',
    'https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683d3b2b2fa3839b7b64a960_client-image-02.svg',
  ];
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (!container) return;
      scrollAmount += 1;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scroll, 20); // Lower = faster scroll

    return () => clearInterval(interval);
  }, []);

  // Duplicate images to create the infinite effect
  const loopedLogos = [...logos, ...logos];

    return (
        <div>
            <div className="w-full relative h-[400px] sm:h-[500px] lg:h-[655px]">
                <img 
                    src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/684129d5df974c68c80cbd41_7f31505442587e86e496054776f573fd_about-hero-image.jpg" 
                    loading="eager" 
                    alt="About Image" 
                    className='absolute w-full h-full object-cover'
                />
                <div className="absolute inset-0 gradient"></div>
                <div className='w-full h-full flex flex-col justify-between px-4 pt-4 sm:px-6 sm:pt-4 lg:px-8 lg:pt-8'>
                    <div className='relative flex flex-col justify-center gap-3 sm:gap-4 max-w-md lg:max-w-lg mt-16 sm:mt-20 lg:mt-24 mb-5'>
                        <h1 className='text-white! font-bold overflow-hidden'>
                            About Mivora<span className='align-top ml-1'>TM</span>
                        </h1>
                        <p className='text-white! leading-relaxed overflow-hidden'>
                            We are pioneers in sustainable logistics, delivering smart and efficient supply chain solutions that minimize environmental impact and maximize value for businesses worldwide.
                        </p>
                        <button className='text-black bg-[#7EEA57] h-10 sm:h-12 px-6 py-2 rounded-full hover:text-white hover:bg-transparent hover:border border-white transition-all duration-300 font-medium self-start overflow-hidden'>
                            Get a green quote
                        </button>
                    </div>
                    
                    <div className='relative flex self-end w-full max-w-4xl'>
                        {/* <div className='absolute left-0 w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 bg-white z-40 self-end'></div> */}
                        <div className='w-full bg-gray-8 flex justify-around items-center rounded-lg p-3 sm:p-4 lg:p-6 overflow-hidden'>
                            <div className='flex flex-col items-center justify-center gap-2 sm:gap-3 lg:gap-4 text-center'>
                                <p className='text-gray-600'>Lower CO2 Emission</p>
                                <div className='flex gap-2 sm:gap-3 lg:gap-4 justify-center items-center'>
                                    <img 
                                        src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683976f56676896290088678_counter-icon-01.svg" 
                                        loading="lazy" 
                                        alt="Icon" 
                                        className='h-4 sm:h-6 lg:h-8'
                                    />
                                    <div className='text-lg sm:text-xl lg:text-2xl text-gray-900 font-bold'>30%</div>
                                </div>
                            </div>
                            <div className="h-12 sm:h-16 lg:h-20 w-px bg-gray-300"></div>
                            <div className='flex flex-col items-center justify-center gap-2 sm:gap-3 lg:gap-4 text-center'>
                                <p className='text-gray-600'>Fuel Cost Saving</p>
                                <div className='flex gap-2 sm:gap-3 lg:gap-4 justify-center items-center'>
                                    <img 
                                        src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683976f506218de3dbfbee9e_counter-icon-02.svg" 
                                        loading="lazy" 
                                        alt="Icon" 
                                        className='h-4 sm:h-6 lg:h-8'
                                    />
                                    <div className='text-lg sm:text-xl lg:text-2xl text-gray-900 font-bold'>60%</div>
                                </div>
                            </div>
                            <div className="h-12 sm:h-16 lg:h-20 w-px bg-gray-300"></div>
                            <div className='flex flex-col items-center justify-center gap-2 sm:gap-3 lg:gap-4 text-center'>
                                <p className='text-gray-600'>Tons of CO2 saved annually</p>
                                <div className='flex gap-2 sm:gap-3 lg:gap-4 justify-center items-center'>
                                    <img 
                                        src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683976f5384d68e5ba0c57c7_counter-icon-03.svg" 
                                        loading="lazy" 
                                        alt="Icon" 
                                        className='h-4 sm:h-6 lg:h-8'
                                    />
                                    <div className='text-lg sm:text-xl lg:text-2xl text-gray-900 font-bold'>90%</div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='absolute right-0 w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 bg-white self-end'></div> */}
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center lg:mt-28 md:mt-20 mt-10'>
                <div className='lg:w-[800px] md:w-[700px] text-center flex flex-col md:space-y-5 space-y-3'>
                    <h2 className='overflow-hidden md:pe-5 md:ps-5 p-2'>Smart <span className='text-gray-500'>Eco-transportation</span> solutions for modern <span className='text-gray-500'>supply chains</span></h2>
                    <p className='text-[17px] text-gray-500 lg:pe-25 lg:ps-25 pe-5 ps-5'>At Mivora, we believe logistics should be as kind to the planet as it is efficient for business. Born from a vision to create cleaner, smarter transportation solutions, we set out to challenge the conventional supply chain model.</p>
                </div>
                <div className='grid lg:grid-cols-[3fr_2fr_3fr] sm:grid-cols-[3fr_3fr_3fr] grid-cols-2 lg:gap-9 sm:gap-3 gap-4 max-w-[1100px] lg:h-[290px] md:h-[320px] sm:h-[290px] h-[500px] mx-5 md:mt-20 mt-10'>
                    <div className='rounded-2xl overflow-hidden'>
                        <img
                            src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/685bd03b38b28d909fd48630_about-01.webp"
                            loading="eager"
                            alt="Image"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div className='rounded-2xl overflow-hidden'>
                        <img
                            src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/6837f52f1097f34d589ada2c_about-image-02.webp"
                            loading="eager"
                            alt="About Image"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className='rounded-2xl overflow-hidden sm:col-span-1 col-span-2'>
                        <img
                            src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/685bd03a536b0ac4772d1def_about-02.webp"
                            loading="eager"
                            alt="Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className='flex md:flex-row flex-col justify-evenly items-center lg:gap-25 md:gap-10 gap-5 p-5 text-gray-500 mt-8'>
                    <p className='xl:w-[440px] xl:px-0 lg:px-4 text-center h-auto'>Over the years, we've built a global network dedicated to eco-supply transportation — blending technology, innovation, and sustainability.</p>
                    <img src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/68380c88b7e106bfe4fe4980_about-icon-02.svg" loading="eager" alt="Icon" className='xl:h-12 md:h-35 h-10'></img>
                    <p className='xl:w-[440px] h-auto text-center'>From electric fleets to carbon-neutral strategies, every solution we offer is designed to minimize environmental impact while maximizing operational value.</p>
                </div>
                <p className='text-gray-500 xl:mt-8 lg:mt-5 mt-2 text-center'>Together, we can redefine logistics for a better tomorrow.</p>
                <button className='md:h-13 h-10 w-43 rounded-full bg-[#7EEA57] hover:bg-black hover:border hover:text-[#7EEA57] text-center lg:mt-9 md:mt-7 mt-5'>Explore eco solution</button>
            </div>

            <div className='lg:m-22 md:m-15 m-5 mt-10'>
                <div className='overflow-hidden'>
                    <span className='p-1 border-1 border-gray-300 text-gray-500 rounded-full'>OUR MISSION & VISION</span>
                    <h2 className='font-semibold overflow-hidden '>Committed to an eco-friendly world: <span className='text-gray-400'>Our vision & mission</span> explained</h2>
                </div>
                <div className='flex lg:flex-row flex-col xl:mt-18 lg:mt-15 md:mt-10 m-2'>
                    <div className='border-1 lg:p-8 md:p-6 p-3  border-gray-300 flex-1/2 flex flex-col lg:gap-6 gap-3'>
                        <h3 className='overflow-hidden'>Mission</h3>
                        <p className='text-gray-600'>At Mivora, our mission is clear — to reshape the future of transportation through sustainable and intelligent logistics solutions. We are dedicated to reducing environmental impact by offering eco-friendly supply chain services that combine innovation, efficiency, and environmental responsibility.</p>
                    </div>
                    <div className='border-1 lg:p-8 md:p-6 p-3  flex-1/2 border-gray-300 flex flex-col lg:gap-6 gap-3'>
                        <h3 className='overflow-hidden'>Vision</h3>
                        <p className='text-gray-600'>Our vision is to lead the transformation of global logistics into a cleaner, greener, and smarter ecosystem. We aim to set a new standard where eco-supply transportation becomes the backbone of sustainable business practices.</p>
                        <div className='flex flex-wrap gap-2'>
                            <div className='p-2 bg-gray-100 rounded-2xl text-gray-500'>Eco deliveries</div>
                            <div className='p-2 bg-gray-100 rounded-2xl text-gray-500'>Sustainable supply</div>
                            <div className='p-2 bg-gray-100 rounded-2xl text-gray-500'>Green operations</div>
                            <div className='p-2 bg-gray-100 rounded-2xl text-gray-500'>Planet contribution</div>
                            <div className='p-2 bg-gray-100 rounded-2xl text-gray-500'>Clean air</div>
                            <div className='p-2 bg-gray-100 rounded-2xl text-gray-500'>Business sustainability</div>
                            <div className='p-2 bg-gray-100 rounded-2xl text-gray-500'>Carbon footprint</div>
                            <div className='p-2 bg-gray-100 rounded-2xl text-gray-500'>Positive impact</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='xl:h-[700px] lg:h-[1200px] w-full bg-[#212121] flex flex-col items-center'>
                <p className='border-gray-500 border-1 text-gray-500 mt-23  inline-block pt-1 xl:pb-5 pb-2 pe-4 ps-4 rounded-full overflow-hidden'>OUR TEAM</p>
                <h2 className='text-white!  pt-3 xl:pb-20 sm:pb-13 pb-7 overflow-hidden lg:w-[600px] text-center font-semibold'>The <span className='text-green-400'>team</span> powering green transport</h2>
                <div className='flex grid xl:grid-cols-[3fr_3fr_3fr_3fr] lg:grid-cols-3 sm:grid-cols-2  flex-wrap xl:h-[1100px] lg:h-[900px] md:h-[800px] sm:w-full md:w-[90%] lg:w-full w-full md:px-18 px-10 xl:py-8 md:gap-9 gap-4'>
                    <div className='rounded-2xl flex justify-center items-center flex-col bg-[#282828]'>
                        <div className='h-[85%] w-[80%] flex flex-col items-start py-2'>
                            <div className='overflow-hidden rounded-[10px] w-full h-full'><img alt="Team Image" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/685bd35fc345fac7fb41d911_team-image-01.webp" loading="eager" className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110" /></div>
                            <p className='text-lg font-semibold py-2 text-white overflow-hidden'>Liam Waters</p>
                            <p className='text-lg pb-1 text-white overflow-hidden'>Head of Eco Logistics</p>
                        </div>
                        <div className='flex self-end me-4'>
                            <span className='px-1'><a href="https://www.facebook.com/" target="_blank" className="team-social-link w-inline-block"><img loading="eager" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/684171f6f686cb5e1e9bfd33_29047fa70e115d4afde718b0a7db48ac_twitter.svg" alt="social-icon" className="team-social-icon" /></a></span>
                            <span className='px-1'><a href="https://www.instagram.com/" target="_blank" className="team-social-link w-inline-block"><img loading="eager" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/684171f6f686cb5e1e9bfd32_fc3b1b7df4e2556e27f870ca3d006c96_instagram.svg" alt="social-icon"  /></a></span>
                        </div>
                    </div>
                    <div className='rounded-2xl flex justify-center items-center flex-col bg-[#282828]'>
                        <div className='h-[85%] w-[80%] flex flex-col items-start py-2'>
                            <div className='overflow-hidden rounded-[10px] w-full h-full'><img alt="Team Image" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/685bd35fc345fac7fb41d911_team-image-01.webp" loading="eager" className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110" /></div>
                            <p className='text-lg font-semibold py-2 text-white overflow-hidden'>Liam Waters</p>
                            <p className='text-lg pb-1 text-white overflow-hidden'>Head of Eco Logistics</p>
                        </div>
                        <div className='flex self-end me-4'>
                            <span className='px-1'><a href="https://www.facebook.com/" target="_blank" className="team-social-link w-inline-block"><img loading="eager" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/684171f6f686cb5e1e9bfd33_29047fa70e115d4afde718b0a7db48ac_twitter.svg" alt="social-icon" className="team-social-icon" /></a></span>
                            <span className='px-1'><a href="https://www.instagram.com/" target="_blank" className="team-social-link w-inline-block"><img loading="eager" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/684171f6f686cb5e1e9bfd32_fc3b1b7df4e2556e27f870ca3d006c96_instagram.svg" alt="social-icon"  /></a></span>
                        </div>
                    </div>
                    <div className='rounded-2xl flex justify-center items-center flex-col bg-[#282828]'>
                        <div className='h-[85%] w-[80%] flex flex-col items-start py-2'>
                            <div className='overflow-hidden rounded-[10px] w-full h-full'><img alt="Team Image" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/685bd35fc345fac7fb41d911_team-image-01.webp" loading="eager" className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110" /></div>
                            <p className='text-lg font-semibold py-2 text-white overflow-hidden'>Liam Waters</p>
                            <p className='text-lg pb-1 text-white overflow-hidden'>Head of Eco Logistics</p>
                        </div>
                        <div className='flex self-end me-4'>
                            <span className='px-1'><a href="https://www.facebook.com/" target="_blank" className="team-social-link w-inline-block"><img loading="eager" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/684171f6f686cb5e1e9bfd33_29047fa70e115d4afde718b0a7db48ac_twitter.svg" alt="social-icon" className="team-social-icon" /></a></span>
                            <span className='px-1'><a href="https://www.instagram.com/" target="_blank" className="team-social-link w-inline-block"><img loading="eager" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/684171f6f686cb5e1e9bfd32_fc3b1b7df4e2556e27f870ca3d006c96_instagram.svg" alt="social-icon"  /></a></span>
                        </div>
                    </div>
                    <div className='rounded-2xl flex justify-center items-center flex-col bg-[#282828]'>
                        <div className='h-[85%] w-[80%] flex flex-col items-start py-2'>
                            <div className='overflow-hidden rounded-[10px] w-full h-full'><img alt="Team Image" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/685bd35fc345fac7fb41d911_team-image-01.webp" loading="eager" className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110" /></div>
                            <p className='text-lg font-semibold py-2 text-white overflow-hidden'>Liam Waters</p>
                            <p className='text-lg pb-1 text-white overflow-hidden'>Head of Eco Logistics</p>
                        </div>
                        <div className='flex self-end me-4'>
                            <span className='px-1'><a href="https://www.facebook.com/" target="_blank" className="team-social-link w-inline-block"><img loading="eager" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/684171f6f686cb5e1e9bfd33_29047fa70e115d4afde718b0a7db48ac_twitter.svg" alt="social-icon" className="team-social-icon" /></a></span>
                            <span className='px-1'><a href="https://www.instagram.com/" target="_blank" className="team-social-link w-inline-block"><img loading="eager" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/684171f6f686cb5e1e9bfd32_fc3b1b7df4e2556e27f870ca3d006c96_instagram.svg" alt="social-icon"  /></a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#212121] h-[100px] w-full'>
            </div>
            <div className='flex flex-col items-center md:gap-5 gap-3 xl:m-35 lg:m-25 md:m-15 sm:mt-10 m-5 sm:pt-0 pt-10'>
                <h2 className=' text-center overflow-hidden p-2 xl:w-[800px]'>Join the mission for smarter, cleaner transportation</h2>
                <p className='text-lg text-center text-gray-500 md:w-[500px] sm:w-[400px] w-auto'>Let’s work together to reduce emissions, optimize our operations, and make a positive impact on the planet.</p>
                <button className='text-center bg-[#7EEA57] p-3 hover:text-[#7EEA57] hover:bg-black text-black rounded-full mt-6'>Talk to our experts</button>
            </div>

           <div className="overflow-hidden w-full lg:px-25 md:px-18 px-5 mx-auto mt-10">
      <div
        ref={containerRef}
        className="flex items-center whitespace-nowrap lg:space-x-14 sm:space-x-8 space-x-5 xl:mb-30 md:mb-20 mb-15"
        style={{ scrollBehavior: 'auto' }}
      >
        {loopedLogos.map((src, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow-sm flex-shrink-0"
          >
            <img
              src={src}
              alt={`Logo ${index + 1}`}
              className="h-8 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>

        </div>
    )
}

export default About