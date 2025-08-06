import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";

const CollaborativeEcosystem = () => {
    const new3 = useRef(null);
    const new4 = useInView(new3, { once: false });
    return (

        <div className="bg-gradient-to-br from-primary-variant-7 to-primary-variant-8 rounded-3xl p-8 md:p-12 border border-orange-100">
            <motion.div
                                ref={new3}
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: new4 ? 1 : 0, y: new4 ? 0 : 100 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                className="flex flex-col items-center"
                            >
            <div className="grid grid-cols-1 gap-8 items-center md:py-15 md:px-30">
                <div>
                    <div className="flex items-center gap-5 mb-6">
                        <div className="md:w-13 h-13 w-23 bg-primary-1 rounded-xl flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 640 512" color='white'><path fill="currentColor" d="m323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5L373 188.8l139 128V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2m22.8 124.4l-51.7 40.2c-31.5 24.6-77.2 18.2-100.8-14.2c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48v224h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8zM16 128c-8.8 0-16 7.2-16 16v208c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V128zm32 192a16 16 0 1 1 0 32a16 16 0 1 1 0-32m496-192v224c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16zm32 208a16 16 0 1 1 32 0a16 16 0 1 1-32 0"/></svg>
                        </div>
                        <h3 className="font-bold">
                            Collaborative Ecosystems <span className="">for Impact</span>
                        </h3>
                    </div>
                    <div className='flex items-start gap-3 mb-3'>
                    <div className="w-2 h-6 bg-[#ffbb00] rounded-sm"></div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Collaboration is central to our environmental strategy. SLSRP operates as a multi
                        stakeholder platform engaging with ministries like MoEFCC and AYUSH, research
                        institutions, CSR divisions, and global sustainability bodies.
                    </p>
                    </div>
                    <div className='flex items-start gap-3'>
                    <div className="w-1.5 h-6 bg-[#ffbb00] rounded-sm"></div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Every collaboration is structured for long-term value, ensuring that outcomes are not
                        episodic but systemically embedded and nationally aligned.
                    </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-15">
                    {[
                        "Co-created frameworks",
                        "Shared IP solutions",
                        "Geographic scalability",
                        "National alignment"
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 16 16" color='darkgoldenrod'><g fill="currentColor"><path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764a.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0a5.5 5.5 0 1 1-11 0"/><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293L5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/></g></svg>
                            <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
            </motion.div>
        </div>

    )
}

export default CollaborativeEcosystem