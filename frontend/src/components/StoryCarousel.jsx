import { motion } from "framer-motion";
import CardImage1 from '../assets/Images/A Future Designed with Purpose.webp';
import CardImage2 from '../assets/Images/Positioning Social Change as Systemic Impact.webp';
import FooterDivider from '../assets/Images/nav-divider.svg';
import NavHoverLogo from "../assets/Images/nav-hover-icon.svg";
const StoryCarousel = () => {
  return (
    <div className="px-4 py-8 ">
         <div className='flex xs:flex-col md:flex-row md:justify-center gap-0 mx-auto mt-10'>
                    <div className='bg-white rounded-2xl xs:p-3 md:p-5 flex flex-col justify-start items-start gap-y-5 xs:max-w-[37rem] xs:mx-auto md:mx-0 md:w-full h-auto'>
                        <div className='flex xs:flex-col sm:flex-row justify-start items-start gap-5 border-b-1 border-dashed border-gray-5 xs:pb-3 md:pb-5'>
                            <motion.img
                                src={CardImage1}
                                alt=''
                                className='xs:w-auto xs:h-auto sm:w-[10rem] sm:h-auto md:w-[13rem] md-auto lg:w-[15rem] lg:h-auto object-cover rounded-xl'
                                loading='eager'
                                
                            />
                            <motion.h3
                                className='max-w-sm inline-block'
                               
                            >
                                A Future Designed with Purpose
                            </motion.h3>
                        </div>
                        <div className='flex flex-col justify-center items-start gap-y-5 text-black'>
                            
                            <div className='flex flex-row flex-wrap justify-start items-center gap-3'>
                               <p className="flex items-start gap-2">
                                <img src={NavHoverLogo} alt="" className="mt-1"/>
                                What makes SLSRF’s social initiatives resilient is their strategic embedding into national and global development goals.
                                Every initiative—whether research, training, or certification—is designed with a systems view.
                            </p>
                            
                            <p className="flex items-start gap-2">
                                <img src={NavHoverLogo} alt="" className="mt-1"/>
                               We align our frameworks with Sustainable Development Goals (SDGs), collaborate with ministries, and engage with academic and community stakeholders to ensure that our work is replicable, scalable, and policy-relevant.
                            </p>
                            <p className="flex items-start gap-2">
                                <img src={NavHoverLogo} alt="" className="mt-1"/>
                               By treating social initiatives not as fragmented efforts but as part of a structured ecosystem, we eliminate randomness and enhance accountability.
                            </p>
                            <p className="flex items-start gap-2">
                                <img src={NavHoverLogo} alt="" className="mt-1"/>
                              Our programs are tested for impact, documented for reproducibility, and continually improved through feedback loops and research insights.
                            </p>
                            </div>
                        </div>
                    </div>

                    <img
                        src={FooterDivider}
                        alt='footer-divider'
                        className='xs:w-7 xs:h-auto md:h-10 md:w-auto xs:rotate-90 md:rotate-0 self-center object-cover -my-3.5'
                    />

                    <div className='bg-white rounded-2xl xs:p-3 md:p-5 flex flex-col justify-start items-start gap-y-5 xs:max-w-[37rem] xs:mx-auto md:mx-0 md:w-full h-auto'>
                        <div className='flex xs:flex-col sm:flex-row justify-start items-start gap-5 border-b-1 border-dashed border-gray-5 xs:pb-3 md:pb-5'>
                            <motion.img
                                src={CardImage2}
                                alt=''
                                className='xs:w-auto xs:h-auto sm:w-[10rem] sm:h-auto md:w-[13rem] md-auto lg:w-[15rem] lg:h-auto object-cover rounded-xl'
                               
                            />
                            <motion.h3
                                className='max-w-sm inline-block'
                                
                            >
                                Positioning Social Change as Systemic Impact
                            </motion.h3>
                        </div>
                        <div className='flex flex-col justify-center items-start gap-y-5 text-black'>
                            <p className="flex items-start gap-2">
                                <img src={NavHoverLogo} alt="" className="mt-1"/>
                                In a world grappling with fragmentation—social, psychological, environmental—SLSRF offers a unifying model that connects science with culture, youth with leadership, and knowledge with measurable outcomes.
                            </p>
                            <p className="flex items-start gap-2">
                                <img src={NavHoverLogo} alt="" className="mt-1"/>
                              We define social initiative as a high-stakes responsibility—one that demands clarity, discipline, and vision.
                            </p>
                            
                            <p className="flex items-start gap-2">
                                <img src={NavHoverLogo} alt="" className="mt-1"/>
                               Through our sustained efforts, we aim to build a more stable, thoughtful, and ethically grounded society.
                            </p>
                            <p className="flex items-start gap-2">
                                <img src={NavHoverLogo} alt="" className="mt-1"/>
                              A society where ancient knowledge is not lost but refined; where modern science is not isolated but inclusive; and where individuals rise not by chance but through well-designed platforms that empower growth with integrity.
                            </p>
                            <div className='flex flex-row flex-wrap justify-start items-center gap-3'>
                               
                            </div>
                        </div>
                    </div>
                </div>
     
    </div>
  );
};

export default StoryCarousel;
