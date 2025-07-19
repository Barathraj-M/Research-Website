import React from 'react'

const Aboutus = () => {
    return (
        <div>
            <div className=''>
                <div className='w-[100vw] lg:h-[655px] md:h-[565px] h-[500px] flex flex-col flex-wrap justify-between bg-green-900'>
                    <img src="" alt="" />
                    <div className='lg:w-[318px] lg:h-[380px] md:w-[760px] md:h-[230px] flex flex-wrap flex-col justify-center items-start gap-2 sm:gap-4 md:gap-5 lg:gap-6 xl:mt-40 lg:mt-33 md:mt-37 mt-12 xl:mt-22 xl:me-22 xl:ms-22 lg:mt-15 lg:ms-15 lg:me-15 md:mt-10 md:ms-10 md:me-10 sm:mt-15 mt-25 ms-5 me-5'>
                        <h1 className='lg:text-7xl md:text-6xl text-4xl text-white font-sans font-semibold'>About Mivora<span className='md:text-3xl text-sm absolute -mt-1'>TM</span></h1>
                        <p className='text-1xl text-white font-sans'>We are pioneers in sustainable logistics, delivering smart and efficient supply chain solutions that minimize environmental impact and maximize value for businesses worldwide.</p>
                        <button className='md:h-13 h-10 w-43 rounded-full bg-green-400 hover:bg-transparent hover:border hover:text-white text-center'>Get a green quote</button>
                    </div>
                    <div className='xl:w-[590px] lg:w[530px] md:w-[500px] sm:w-[500px] w-[auto] self-end xl:me-[65px] lg:me-[50px] md:me-[40px] sm:me-[30px] me-[10px] ms-[10px]  bg-white rounded-[10px] flex flex-wrap sm:flex-nowrap justify-between'>
                        <div className='flex flex-col items-center justify-center p-5'>
                            <p>Lower CO2 Emission</p>
                            <div className='flex justify-between sm:p-2 p-0 sm:gap-4 gap-1'>
                            <img src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683976f56676896290088678_counter-icon-01.svg" loading="lazy" alt="Icon"></img>
                            <div className='text-2xl'>30%</div>
                            </div>
                        </div>
                        <div class="h-auto w-px  mt-2 mb-5 bg-gray-300"></div>
                        <div className='flex flex-col items-center justify-center p-5'>
                            <p>Fuel Cost Saving</p>
                            <div className='flex justify-center sm:p-2 p-0 sm:gap-4 gap-1'>
                            <img src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683976f506218de3dbfbee9e_counter-icon-02.svg" loading="lazy" alt="Icon"></img>
                            <div className='text-2xl'>60%</div>
                            </div>
                        </div>
                        <div class="h-auto w-px mt-2 mb-5 bg-gray-300"></div>
                        <div className='flex flex-col items-center justify-center p-5'>
                            <p>Tons of CO2 saved anually</p>
                            <div className='flex justify-center sm:p-2 p-0 sm:gap-4 gap-1'>
                            <img src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683976f5384d68e5ba0c57c7_counter-icon-03.svg" loading="lazy" alt="Icon"></img>
                            <div className='text-2xl'>90%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-200 w-200 '>

                </div>
            </div>
        </div>
    )
}

export default Aboutus