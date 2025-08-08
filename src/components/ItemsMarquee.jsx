import React from 'react'
import {motion} from 'framer-motion'

const ItemsMarquee = ({ items }) => {

    return (
        <div
            className='w-full h-10 overflow-hidden flex flex-row justify-start items-center gap-x-10 md:gap-x-20'
        >
            <motion.div
                className='flex flex-row flex-shrink-0 justify-start items-center gap-x-10 md:gap-x-20'
                initial={{ x: 0 }}
                animate={{ x: '-106%' }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                {items.map((logo, index) => (
                    logo.type === 'svg' ? logo.src : (
                        logo.type === 'img' ? (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                                loading='lazy'
                                className='w-20 md:w-35 h-auto mx-2 my-1 grayscale'
                            />
                        ) : (
                            <div className='flex flex-row justify-center items-center gap-x-3'>
                                <img
                                    key={index}
                                    src={logo.src}
                                    alt={logo.alt}
                                    loading='lazy'
                                    className='w-5 h-auto my-1'
                                />
                                <p className='mb-0!'>{logo.text}</p>
                            </div>
                        ) )
                    )
                )}
            </motion.div>
            <motion.div
                className='flex flex-row flex-shrink-0 justify-start items-center gap-x-10 md:gap-x-20'
                initial={{ x: 0 }}
                animate={{ x: '-106%' }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                {items.map((logo, index) => (
                    logo.type === 'svg' ? logo.src : (
                        logo.type === 'img' ? (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                                loading='lazy'
                                className='w-20 md:w-35 h-auto mx-2 my-1 grayscale'
                            />
                        ) : (
                            <div className='flex flex-row justify-center items-center gap-x-3'>
                                <img
                                    key={index}
                                    src={logo.src}
                                    alt={logo.alt}
                                    loading='lazy'
                                    className='w-5 h-auto my-1'
                                />
                                <p className='mb-0!'>{logo.text}</p>
                            </div>
                        ) )
                    )
                )}
            </motion.div>
        </div>
    )
}

export default ItemsMarquee