import { motion } from 'framer-motion'

import { serviceCardVariants } from '../utils/animationVariants';

import '../index.css';

const ServiceCard = ({ cardHeading, description, link, img, imgAlt, tagLines }) => {
  return (
    <motion.div 
        className=' xs:p-3 md:p-5 flex flex-col  items-center gap-y-5 cursor-pointer rounded-xl group justify-center items-center '
        variants={serviceCardVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{
            once: true,
            amount: 0.6,
        }}
    >
        <div className='flex gap-x-3 p-1 w-full items-center justify-center'>
            <div className='flex flex-col gap-y-2 justify-center items-start '>
                <h5 className='text-[#ffbb00]!'>{cardHeading}</h5>
                <p className='text-gray-2'>{description}</p>
            </div>
            {/* <div className="overflow-hidden rounded-xl w-2/4  flex">
                <img 
                    src={img}
                    alt={imgAlt}
                    className='object-cover w-full  rounded-xl transition-transform duration-900 ease-in-out group-hover:scale-105'
                    loading='lazy'
                />
            </div> */}
        </div>
        <div className='grid grid-cols-3 gap-x-3 p-1'>
            { tagLines }
        </div>
    </motion.div>
  )
}

export default ServiceCard