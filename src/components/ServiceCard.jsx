import { motion } from 'framer-motion'

import { serviceCardVariants } from '../utils/animationVarients';

import '../index.css';

const ServiceCard = ({ cardHeading, description, link, img, imgAlt, tagLines }) => {
  return (
    <motion.div 
        className='w-xl min-h-7xl bg-white xs:p-3 md:p-5 flex flex-col  items-center gap-y-5 cursor-pointer rounded-xl group'
        variants={serviceCardVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{
            once: true,
            amount: 0.6,
        }}
    >
        <div className='grid grid-cols-2 gap-x-3 p-1 w-full'>
            <div className='w-full flex flex-col justify-start items-start gap-y-2'>
                <h5 className=''>{cardHeading}</h5>
                <p className='text-gray-2'>{description}</p>
                <div className="flex-grow" />
                {/* <a className='text-xs! px-3 py-2 rounded-full bg-black text-white! hover:bg-primary-1 hover:text-black! transition-colors duration-500 ease-in-out' href={link} target='_blank'>View details</a> */}
            </div>
            <div className="overflow-hidden rounded-xl w-full h-full flex">
                <img 
                    src={img}
                    alt={imgAlt}
                    className='object-cover w-full h-full rounded-xl transition-transform duration-900 ease-in-out group-hover:scale-105'
                    loading='lazy'
                />
            </div>
        </div>
        <div className='grid grid-cols-3 gap-x-3 p-1'>
            { tagLines }
        </div>
    </motion.div>
  )
}

export default ServiceCard