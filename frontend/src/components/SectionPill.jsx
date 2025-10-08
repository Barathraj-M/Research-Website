import React from 'react'
import { motion } from 'framer-motion'

import { sectionPillVariants } from '../utils/animationVariants'

import '../index.css'

const SectionPill = ({ sectionTitle, className }) => {
  return (
    <motion.div 
      className={`py-2 px-5 m-1 font-medium uppercase rounded-full inline-block  border-1 border-gray-5 ${className}`}
      variants={sectionPillVariants}
      initial='initial'
      whileInView='whileInView'
      viewport={{ once: true, amount: "all" }}
    >
      <p className='text-gray-2! mb-0!'>{ sectionTitle }</p>  
    </motion.div>
  )
}

export default SectionPill