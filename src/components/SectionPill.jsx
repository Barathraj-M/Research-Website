import React from 'react'
import { motion } from 'framer-motion'

import { sectionPillVariants } from '../utils/animationVarients'

import '../index.css'

const SectionPill = ({ sectionTitle, className }) => {
  return (
    <motion.div 
      className={`py-2 px-5 m-1 font-medium uppercase rounded-full inline-block text-gray-2 border-1 border-gray-5 ${className}`}
      variants={sectionPillVariants}
      initial='initial'
      whileInView='whileInView'
      viewport={{ once: true, amount: "all" }}
    >
        { sectionTitle }
    </motion.div>
  )
}

export default SectionPill