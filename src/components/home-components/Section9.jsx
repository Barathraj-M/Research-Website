import React from 'react'
import "./Section9.css"
import {motion} from "framer-motion"
const itemVariants = {
  hidden: { opacity: 0, y: 150 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};
const Section9 = () => {
  return (
    <div className='section9 flex flex-col items-center justify-center'>
        <motion.div
         viewport={{once:false}}
         variants={itemVariants}
         initial="hidden"
          whileInView="show"
          className='flex flex-col items-center'
        >
            <h3 className='text-center p-2' style={{fontSize:"3rem"}}>
            Join the mission for smarter,<br/> cleaner transportation
        </h3>
        <div className='text-center p-10' style={{fontSize:"1rem"}}>
            Let’s work together to reduce emissions, optimize our operations, and make a positive impact on the planet.
        </div>
        <button className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-full mt-6 border border-transparent transition-all duration-300 hover:bg-black hover:text-white hover:border-lime-400 hover:border-dashed">
  Talk to our experts
</button>

        </motion.div>
    </div>
  )
}

export default Section9