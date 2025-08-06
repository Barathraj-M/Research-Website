import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";

const EnvironmentIntelligence = () => {
    const new2 = useRef(null);
    const new1 = useInView(new2, { once: false });
    return (
        
        <div className="mt-10 bg-white py-16 px-4 sm:px-6 lg:px-20">
            <motion.div
                    ref={new2}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: new1 ? 1 : 0, y: new1 ? 0 : 100 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="flex flex-col items-center"
                >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">

                {/* Image Section */}
                <div className=' w-full md:w-1/2'>
                    <img
                        src="/collaboration-ecosystem.jpg" // Replace with your image path
                        alt="Collaborative Ecosystem"
                        className="w-full h-auto rounded-xl shadow-lg object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className=" w-full md:w-2/3 bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
                    <h2 className="mb-8 ">
                        Designing for Long-Term <span className='border-primary-1'>Environmental Intelligence</span> 
                    </h2>
                    <ul className='mt-5 flex flex-col gap-5'>
                        <li><span className='w-2 h-2 bg-primary-1'></span>Collaboration is central to our environmental strategy. SLSRP operates as a multi-stakeholder platform engaging with ministries like MoEFCC and AYUSH, research institutions, CSR divisions, and global sustainability bodies.</li>
                        <li>We co-create frameworks, share intellectual property, and co-deploy solutions relevant across geographies. Every collaboration is structured for long-term value, ensuring that outcomes are not episodic but systemically embedded and nationally aligned.</li>
                    </ul>
                </div>

            </div>
             </motion.div>
        </div>
       

    )
}

export default EnvironmentIntelligence