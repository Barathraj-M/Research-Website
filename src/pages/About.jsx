// import image from '../assets/Images/9224444.jpg'; // Update with the correct path to your image
import { useRef, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import NavHoverLogo from '../assets/Images/nav-hover-icon.svg';
import { motion, useInView } from "framer-motion";
import '../index.css';

import SectionPill from '../components/SectionPill';
import PrimaryButtom from '../components/PrimaryButtom';
import aboutimage from '../assets/Images/aboutimage2.jpg'; // Update with the correct path to your image
import { contentBasicVariants, heroSectionBottomContainerVariants } from '../utils/animationVarients';
import PercentageCounter from '../components/aboutComponents/PercentageCounter';

const About = () => {

    const [expandedSections, setExpandedSections] = useState({});
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const value = searchParams.get('scroll');

        if(value) {
            const element = document.getElementById(value);

            if(element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [searchParams]);

    const toggleSection = (sectionId) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    const initiatives = [
        {
            id: 'social',
            title: 'Social Initiatives',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1024 1024" className=''><path fill="currentColor" d="M746 835.28L544.529 723.678c74.88-58.912 95.216-174.688 95.216-239.601v-135.12c0-89.472-118.88-189.12-238.288-189.12c-119.376 0-241.408 99.664-241.408 189.12v135.12c0 59.024 24.975 178.433 100.624 239.089L54 835.278S0 859.342 0 889.342v81.088c0 29.84 24.223 54.064 54 54.064h692c29.807 0 54.031-24.224 54.031-54.064v-81.087c0-31.808-54.032-54.064-54.032-54.064zm-9.967 125.215H64.002V903.28c4.592-3.343 11.008-7.216 16.064-9.536c1.503-.688 3.007-1.408 4.431-2.224l206.688-112.096c18.848-10.224 31.344-29.184 33.248-50.528s-7.008-42.256-23.712-55.664c-53.664-43.024-76.656-138.32-76.656-189.152V348.96c0-45.968 86.656-125.12 177.408-125.12c92.432 0 174.288 78.065 174.288 125.12v135.12c0 50.128-15.568 145.84-70.784 189.28a64.1 64.1 0 0 0-24.224 55.664a64.1 64.1 0 0 0 33.12 50.849l201.472 111.6c1.777.975 4.033 2.031 5.905 2.848c4.72 2 10.527 5.343 14.783 8.288v57.887zM969.97 675.936L765.505 564.335c74.88-58.912 98.224-174.688 98.224-239.601v-135.12c0-89.472-121.872-190.128-241.28-190.128c-77.6 0-156.943 42.192-203.12 96.225c26.337 1.631 55.377 1.664 80.465 9.664c33.711-26.256 76.368-41.872 122.656-41.872c92.431 0 177.278 79.055 177.278 126.128v135.12c0 50.127-18.56 145.84-73.775 189.28a64.1 64.1 0 0 0-24.224 55.664a64.1 64.1 0 0 0 33.12 50.848l204.465 111.6c1.776.976 4.032 2.032 5.904 2.848c4.72 2 10.527 5.344 14.783 8.288v56.912H830.817c19.504 14.72 25.408 35.776 32.977 64h106.192c29.807 0 54.03-24.224 54.03-54.064V730.03c-.015-31.84-54.047-54.096-54.047-54.096z"/></svg>
            ),
            color: 'from-amber-400 to-orange-500',
            items: [
                {
                    title: 'Advanced Research in Noetic Science',
                    description: 'Conduct scientific research on mental reflux, behavioral resilience, and cognitive enhancement.',
                    details: [
                        'Publish peer-reviewed indexed papers with physiological and psychological impact data',
                        'Develop intervention models to increase peace, mental clarity, and self-governance'
                    ]
                },
                {
                    title: 'Noetic Science Enablement on Unified Wholeness (nseUW)',
                    description: 'Introduce a non-commercial, three-year progression-based certification.',
                    details: [
                        'Build capacity through Scopes of Work with mission-aligned institutions',
                        'Certify Subject Matter Experts (SMEs) and knowledge ambassadors based on merit alone'
                    ]
                },
                {
                    title: 'Youth Resilience & Responsible Citizenship',
                    description: 'Launch national cohorts that include leadership labs, ethics, and noetic exercises.',
                    details: [
                        'Integrate life-skills training with resilience-building practices',
                        'Track longitudinal impact on academic, professional, and social domains'
                    ]
                },
                {
                    title: 'East-West Scientific Integration',
                    description: 'Design mixed-method studies comparing Indian ancient practices with Western scientific models.',
                    details: [
                        'Organize symposia and joint research with international universities',
                        'Position SLSRP as a bridge between empirical science and experiential intelligence'
                    ]
                }
            ]
        },
        {
            id: 'environmental',
            title: 'Environmental Initiatives',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12q7 1 8 8q1-7 8-8q-7-1-8-8q-1 7-8 8M4 2v6M1 5h6M4 16v6m-3-3h6"/></svg>
            ),
            color: 'from-green-400 to-emerald-600',
            items: [
                {
                    title: 'Redefining Environmental Engineering',
                    description: 'Foster innovation in environmental design, circular systems, and low-carbon processes.',
                    details: [
                        'Launch regenerative prototypes, including bio-engineering and ecosystem rehabilitation',
                        'Host policy workshops and technology showcases'
                    ]
                },
                {
                    title: 'Eco-Technical Sustainability Incubation',
                    description: 'Incubate SMEs and startups working in green-tech and deep-tech ecosystems.',
                    details: [
                        'Establish AI, IoT, and ML clusters focused on ecological impact',
                        'Offer mentoring, funding, and R&D access to environment-first tech ventures'
                    ]
                },
                {
                    title: 'Digital Phytovault of Medicinal Flora',
                    description: 'Create India\'s most advanced digital repository of medicinal and aromatic plants.',
                    details: [
                        'Integrate drone-based mapping, AI interpretation, and blockchain storage',
                        'License digital biodiversity data for education, innovation, and policymaking'
                    ]
                },
                {
                    title: 'Scientific Validation of AYUSH Protocols',
                    description: 'Run clinical research integrating ancient systems with biomedical analytics.',
                    details: [
                        'Promote AYUSH protocols as global standards in preventive healthcare',
                        'Enable integration with primary and public health ecosystems'
                    ]
                },
                {
                    title: 'Global and National Collaboration Models',
                    description: 'Partner with ministries (AYUSH, MoEFCC, CSIR), industries, and academia.',
                    details: [
                        'Draft collaborative frameworks for co-creation and IP sharing',
                        'Align with SDG and National Mission frameworks for sustainability and wellness'
                    ]
                }
            ]
        }
    ];

    const enablingPillars = [
        {
            title: 'Research & Innovation Ecosystem',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            description: 'Launch idea-to-impact platforms including bootcamps, fellowships, and grants.'
        },
        {
            title: 'STEM-Driven Transdisciplinary Development',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            description: 'Host AYUSH + STEM Hackathons and build R&D labs fusing computational models.'
        },
        {
            title: 'Ethical Governance & Community Ownership',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            description: 'Integrate AI-based wellness audits and develop value-alignment indices.'
        },
        {
            title: 'Policy, Advocacy, and Capacity Building',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
            ),
            description: 'Represent SLSRP in biodiversity, health, and climate policy forums.'
        }
    ];

    const fundingStreams = [
        'Government Grants & Mission-Mode Funds',
        'Angel & Venture Capital Co-Investment',
        'NRI & Global Impact Investment',
        'Corporate CSR & ESG Projects',
        'Project-Based Revenue Generation',
        'IP Commercialisation',
        'Certification and Scholarships'
    ];

    const title = useRef(null);
    const title1 = useInView(title, { once: false });

    const head = useRef(null);
    const headInView = useInView(head, { once: false });
    
    const head5 = useRef(null);
    const headInView5 = useInView(head5, { once: false });

    const head1 = useRef(null);
    const headInView1 = useInView(head1, { once: false });

    const head2 = useRef(null);
    const headInView2 = useInView(head2, { once: false });

    const head3 = useRef(null);
    const headInView3 = useInView(head3, { once: false });

    const head4 = useRef(null);
    const headInView4 = useInView(head4, { once: false });
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let scrollAmount = 0;

        const scroll = () => {
            if (!container) return;
            scrollAmount += 1;
            if (scrollAmount >= container.scrollWidth / 2) {
                scrollAmount = 0;
                container.scrollLeft = 0;
            } else {
                container.scrollLeft = scrollAmount;
            }
        };

        const interval = setInterval(scroll, 20); // Lower = faster scroll

        return () => clearInterval(interval);
    }, []);


    return (
        <div>
            
                <div className="w-full relative h-[450px] sm:h-[500px] md:h-[600px] lg:h-[655px]">
                    <img
                        src={aboutimage}
                        loading="eager"
                        alt="About Image"
                        className='absolute w-full h-full '
                    />
                    <div className="absolute inset-0 gradient"></div>
                    <div className='w-full h-full flex flex-col justify-between px-4 sm:px-10 sm:pt-1 pt-6 lg:px-15 lg:pt-8'>
                        <div className='md:grid lg:grid-cols-3 md:grid-cols-2  xl:h-[400px] lg:h-[400px] md:h-[360px] border-2 mt-16 sm:mt-20 md:mt-24 lg:mt-24 mb-5'>
                            <div className='relative flex flex-col justify-center gap-3 lg:gap-4'>
                                <h1 className='text-white! overflow-hidden'>
                                    About SLSRP
                                </h1>
                                <p className='text-white! leading-relaxed overflow-hidden'>
                                    SLSRP acts as a national and global platform for researchers, innovators, youth leaders , and
                                    grassroots communities to co-create impactful solutions that are scientifically validated and socially
                                    inclusive.
                                </p>
                                <div>
                                    <PrimaryButtom
                                        link={'core-initiatives'}
                                        text={'Know More ->'}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='relative flex self-end w-full max-w-5xl -mb-[0.8px] md:h-auto sm:h-[170px] rounded-t-lg h-[150px]'>
                            <div className='absolute -left-6 bottom-0 z-40 self-end'><img src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683e866c5a5df0d7b03e41e6_hero-bottom-left.svg" loading="eager" alt="Icon" class="about-left-decorative" /></div>
                            <motion.div
                                className='w-full bg-gray-8 flex justify-around items-center rounded-t-lg p-3 sm:p-4 md:p-6 overflow-hidden bg-gradient-to-t from-gray-8 to-[#fff3d1]'
                                variants={heroSectionBottomContainerVariants}
                                initial='initial'
                                animate='animate'

                            >
                                <motion.div
                                    className='flex flex-col items-center justify-center text-center'
                                    variants={contentBasicVariants}
                                    initial='initial'
                                    whileInView='whileInView'
                                    custom={1}
                                    viewport={{ once: true, amount: "some" }}
                                    exit='exit'
                                >
                                    <h5 className="">Mission-Driven Verticals</h5>
                                    <p className="text-sm sm:block hidden ">Social & Environmental Initiatives</p>
                                    {/* <div className='flex gap-2 sm:gap-3 lg:gap-4 justify-center items-center'>
                                        <img
                                            src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683976f56676896290088678_counter-icon-01.svg"
                                            loading="lazy"
                                            alt="Icon"
                                            className='h-4 sm:h-6 lg:h-8'
                                        />
                                        <div className='text-lg sm:text-xl md:text-2xl text-gray-900 font-bold'>30%</div>
                                    </div> */}
                                </motion.div>
                                
                                {/* <div className="h-12 sm:h-16 lg:h-20 w-px bg-gray-300"></div> */}
                                <div className=" h-full xs:border-b-1 md:border-b-0 md:border-r-1 border-dashed border-gray-4 p-2"></div>
                                <motion.div
                                    className='flex flex-col items-center justify-center text-center'
                                    variants={contentBasicVariants}
                                    initial='initial'
                                    whileInView='whileInView'
                                    custom={4}
                                    viewport={{ once: true, amount: "some" }}
                                    exit='exit'
                                >
                                    <h5 className="text-lg">Strategic Pillars</h5>
                                    <p className="text-sm sm:block hidden ">STEM, Ethical Governance, Policy Advocacy</p>
                                    {/* <div className='flex gap-2 sm:gap-3 lg:gap-4 justify-center items-center'>
                                        <img
                                            src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683976f506218de3dbfbee9e_counter-icon-02.svg"
                                            loading="lazy"
                                            alt="Icon"
                                            className='h-4 sm:h-6 lg:h-8'
                                        />
                                        <div className='text-lg sm:text-xl md:text-2xl text-gray-900 font-bold'>60%</div>
                                    </div> */}
                                </motion.div>
                                    <div className=" h-full xs:border-b-1 md:border-b-0 md:border-r-1 border-dashed border-gray-4 p-2"></div>

                                <motion.div
                                    className='flex flex-col items-center justify-center  text-center'
                                    variants={contentBasicVariants}
                                    initial='initial'
                                    whileInView='whileInView'
                                    custom={8}
                                    viewport={{ once: true, amount: "some" }}
                                    exit='exit'
                                >
                                    <h5 className="">Funding Streams</h5>
                                    <p className="text-sm sm:block hidden">Sustainability & Project Scalability</p>
                                    {/* <div className='flex gap-2 sm:gap-3 lg:gap-4 justify-center items-center'>
                                        <img
                                            src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683976f5384d68e5ba0c57c7_counter-icon-03.svg"
                                            loading="lazy"
                                            alt="Icon"
                                            className='h-4 sm:h-6 lg:h-8'
                                        />
                                        <div className='text-lg sm:text-xl md:text-2xl text-gray-900 font-bold'>90%</div>
                                    </div> */}
                                </motion.div>
                            </motion.div>
                            <div className='absolute -right-6 self-end'><img src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/6841390341d0511acefa1664_hero-bottom-right.svg" loading="eager" alt="Icon" class="about-right-decorative" /></div>
                        </div>
                    </div>
                </div>

            {/* <div className='flex flex-col items-center justify-center lg:mt-28 md:mt-20 mt-10'>
                <motion.div
                    ref={head}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: headInView ? 1 : 0, y: headInView ? 0 : 100 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="flex flex-col items-center text-center"
                >
                    <div className='lg:w-[800px] md:w-[700px] text-center flex flex-col md:space-y-5 space-y-3'>
                        <h2 className='overflow-hidden md:pe-5 md:ps-5 p-2'>Smart <span className='text-gray-500'>Eco-transportation</span> solutions for modern <span className='text-gray-500'>supply chains</span></h2>
                        <p className='text-[17px] text-gray-500 lg:pe-25 lg:ps-25 pe-5 ps-5'>At Mivora, we believe logistics should be as kind to the planet as it is efficient for business. Born from a vision to create cleaner, smarter transportation solutions, we set out to challenge the conventional supply chain model.</p>
                    </div>
                    <div className='grid lg:grid-cols-[3fr_2fr_3fr] sm:grid-cols-[3fr_3fr_3fr] grid-cols-2 lg:gap-9 sm:gap-3 gap-4 max-w-[1100px] lg:h-[290px] md:h-[320px] sm:h-[290px] h-[500px] mx-5 md:mt-20 mt-10'>
                        <div className='rounded-2xl overflow-hidden'>
                            <img
                                src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/685bd03b38b28d909fd48630_about-01.webp"
                                loading="eager"
                                alt="Image"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <div className='rounded-2xl overflow-hidden'>
                            <img
                                src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/6837f52f1097f34d589ada2c_about-image-02.webp"
                                loading="eager"
                                alt="About Image"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className='rounded-2xl overflow-hidden sm:col-span-1 col-span-2'>
                            <img
                                src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/685bd03a536b0ac4772d1def_about-02.webp"
                                loading="eager"
                                alt="Image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className='flex md:flex-row flex-col justify-evenly items-center lg:gap-25 md:gap-10 gap-5 p-5 text-gray-500 mt-8'>
                        <p className='xl:w-[440px] xl:px-0 lg:px-4 text-center h-auto'>Over the years, we've built a global network dedicated to eco-supply transportation — blending technology, innovation, and sustainability.</p>
                        <img src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/68380c88b7e106bfe4fe4980_about-icon-02.svg" loading="eager" alt="Icon" className='xl:h-12 md:h-35 h-10'></img>
                        <p className='xl:w-[440px] h-auto text-center'>From electric fleets to carbon-neutral strategies, every solution we offer is designed to minimize environmental impact while maximizing operational value.</p>
                    </div>
                    <p className='text-gray-500 xl:mt-8 lg:mt-5 mt-2 text-center'>Together, we can redefine logistics for a better tomorrow.</p>
                    <PrimaryButtom
                        link={'#'}
                        text={'Learn more'}
                    />
                </motion.div>
            </div> */}


            <div className='lg:p-22 md:p-15 p-5 pt-10  bg-primary-variant-7 '>
                <motion.div
                    ref={head1}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: headInView1 ? 1 : 0, y: headInView1 ? 0 : 100 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="flex flex-col"
                >
                    <div className='overflow-hidden'>
                        <SectionPill sectionTitle={'Our Mission & Vision'} />
                        <h2 className='overflow-hidden '>Committed to an eco-friendly world: <span className='text-primary-1'>Our vision & mission</span> explained</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-8 sm:px-6 py-16 xl:mt-10 lg:mt-20 md:mt-14">
                        {/* Mission Card */}
                        <div className="flex-1 bg-white rounded-2xl border-1 border-dashed border-primary-variant-5 hover:shadow-lg transition-all duration-300 p-8 relative overflow-hidden">
                            {/* Accent Bar */}
                            {/* <span className="absolute top-0 left-0 h-1 w-full bg-[#ffbb00] rounded-t-2xl"></span> */}


                            {/* Header */}
                            <div className="flex items-center gap-3 mb-6">
                                {/* <div className="w-2 h-6 bg-[#ffbb00] rounded-sm"></div> */}
                                
                                <h3 className="">Mission</h3>
                            </div>

                            {/* Content */}
                            <ul className=" leading-relaxed list-disc list-inside">
                                <div className='flex gap-2'><img src={NavHoverLogo} alt='nav-logo' className=' p-1.5 self-start'/><p className=''>Promote Noetic Science as a validated pathway to peace, wellness, productivity, and Wholistic intelligence.</p></div>
                                <div className='flex gap-2'><img src={NavHoverLogo} alt='nav-logo' className=' p-1.5 self-start'/><p className=''>Incubate and scale eco-technical innovations to restore and protect biodiversity.</p></div>
                                <div className='flex gap-2'><img src={NavHoverLogo} alt='nav-logo' className=' p-1.5 self-start'/><p className=''>Create knowledge platforms, policy frameworks, and capacity-building models that serve both national interests and global wellbeing.</p></div>
                            </ul>
                        </div>

                        {/* Vision Card */}
                        <div className="flex-1 bg-white rounded-2xl border-1 border-dashed border-primary-variant-5 hover:shadow-lg transition-all duration-300 p-8 relative overflow-hidden">
                            {/* <span className="absolute top-0 left-0 h-1 w-full bg-[#ffbb00] rounded-t-2xl"></span> */}

                            <div className="flex items-center gap-3 mb-6">
                                {/* <div className="w-2 h-6 bg-[#ffbb00] rounded-sm"></div> */}
                                <h3 className="">Vision</h3>
                            </div>

                            <ul className="space-y-4 text-[1rem] leading-relaxed list-disc list-inside">
                                <div className='flex gap-2'><img src={NavHoverLogo} alt='nav-logo' className=' p-1.5 self-start'/><p className=''>To achieve sustenance through integrated life science rooted in ancient Eastern knowledge and validated by science.</p></div>
                                <div className='flex gap-2'><img src={NavHoverLogo} alt='nav-logo' className=' p-1.5 self-start'/><p className=''>Foster a global ecosystem where ancient wisdom and modern science coalesce to solve emerging planetary challenges through sustainable innovation.</p></div>
                            </ul>

                        </div>
                    </div>


                </motion.div>
            </div>

            <motion.div
                ref={head5}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: headInView5 ? 1 : 0, y: headInView5 ? 0 : 100 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className=""
            >
                <div className='xl:h-[700px] lg:h-[1200px] w-full bg-gray-1 flex flex-col items-center'>
                    <p className='border-gray-500 border-1 text-gray-500 mt-23  inline-block pt-1 xl:pb-5 pb-2 pe-4 ps-4 rounded-full overflow-hidden'>OUR TEAM</p>
                    <h2 className='text-white!  pt-3 xl:pb-20 sm:pb-13 pb-7 overflow-hidden lg:w-[600px] text-center'>The <span className='text-primary-1'>team</span> powering green transport</h2>
                    <div className='grid xl:grid-cols-[3fr_3fr_3fr_3fr] lg:grid-cols-3 sm:grid-cols-2 xl:h-[1100px] lg:h-[900px] md:h-[800px] sm:w-full md:w-[90%] lg:w-full w-full md:px-18 px-10 xl:py-8 md:gap-9 gap-4'>
                        <div className='rounded-2xl flex justify-center items-center flex-col bg-[#282828]'>
                            <div className='h-[85%] w-[80%] flex flex-col items-start py-2'>
                                <div className='overflow-hidden rounded-[10px] mb-4 w-full h-full'><img alt="Team Image" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/685bd35fc345fac7fb41d911_team-image-01.webp" loading="eager" className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110" /></div>
                                <p className=' py-2 text-white overflow-hidden'>Liam Waters</p>
                                <p className=' pb-1 text-white overflow-hidden'>Head of Eco Logistics</p>
                            </div>
                        </div>
                        <div className='rounded-2xl flex justify-center items-center flex-col bg-[#282828]'>
                            <div className='h-[85%] w-[80%] flex flex-col items-start py-2'>
                                <div className='overflow-hidden rounded-[10px] mb-4 w-full h-full'><img alt="Team Image" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/685bd35fc345fac7fb41d911_team-image-01.webp" loading="eager" className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110" /></div>
                                <p className=' py-2 text-white overflow-hidden'>Liam Waters</p>
                                <p className=' pb-1 text-white overflow-hidden'>Head of Eco Logistics</p>
                            </div>
                        </div>
                        <div className='rounded-2xl flex justify-center items-center flex-col bg-[#282828]'>
                            <div className='h-[85%] w-[80%] flex flex-col items-start py-2'>
                                <div className='overflow-hidden rounded-[10px] mb-4 w-full h-full'><img alt="Team Image" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/685bd35fc345fac7fb41d911_team-image-01.webp" loading="eager" className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110" /></div>
                                <p className=' py-2 text-white overflow-hidden'>Liam Waters</p>
                                <p className=' pb-1 text-white overflow-hidden'>Head of Eco Logistics</p>
                            </div>
                        </div>
                        <div className='rounded-2xl flex justify-center items-center flex-col bg-[#282828]'>
                            <div className='h-[85%] w-[80%] flex flex-col items-start py-2'>
                                <div className='overflow-hidden rounded-[10px] mb-4 w-full h-full'><img alt="Team Image" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/685bd35fc345fac7fb41d911_team-image-01.webp" loading="eager" className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110" /></div>
                                <p className=' py-2 text-white overflow-hidden'>Liam Waters</p>
                                <p className=' pb-1 text-white overflow-hidden'>Head of Eco Logistics</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-1 h-[100px] w-full'>
                </div>
            </motion.div>


            {/* <div className='flex flex-col items-center md:gap-5 gap-3 xl:m-35 lg:m-25 md:m-15 sm:mt-10 m-5 sm:pt-0 pt-10'>
                <motion.div
                    ref={head3}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: headInView3 ? 1 : 0, y: headInView3 ? 0 : 100 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="flex flex-col items-center text-center"
                >
                    <h2 className=' text-center overflow-hidden p-2 xl:w-[800px]'>Join the mission for smarter, cleaner transportation</h2>
                    <p className='text-lg text-center text-gray-500 md:w-[500px] sm:w-[400px] w-auto'>Let’s work together to reduce emissions, optimize our operations, and make a positive impact on the planet.</p>
                    <PrimaryButtom
                        link={'#'}
                        text={'Talk to our experts'}
                    />
                </motion.div>
            </div> */}

            {/* <div className="overflow-hidden w-full lg:px-25 md:px-18 px-5 mx-auto mt-10">
                <div
                    ref={containerRef}
                    className="flex items-center whitespace-nowrap lg:space-x-14 sm:space-x-8 space-x-5 xl:mb-30 md:mb-20 mb-15"
                    style={{ scrollBehavior: 'auto' }}
                >
                    {loopedLogos.map((src, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded shadow-sm flex-shrink-0"
                        >
                            <img
                                src={src}
                                alt={`Logo ${index + 1}`}
                                className="h-8 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div> */}

            <div id="core-initiatives" className="min-h-screen bg-gradient-to-br from-white via-amber-25 to-orange-50 ">
                {/* Hero Section */}
                <div className="bg-primary-variant-7 py-16 px-6">
                    <motion.div
                    ref={head}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: headInView ? 1 : 0, y: headInView ? 0 : 100 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    
                >
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: '#ffbb00' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16" className='text-white'><g fill="currentColor"><path d="m14.12 10.163l1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858l5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z"/><path d="m14.12 6.576l1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858l5.317 2.659c.505.252 1.1.252 1.604 0z"/></g></svg>
                        </div>
                        <h3 className=" mb-6">
                            Core Initiatives
                        </h3>
                        <p className="max-w-3xl mx-auto leading-relaxed">
                            Bridging ancient wisdom with modern science to create sustainable solutions for humanity's greatest challenges
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto sm:px-6 py-16">
                        {initiatives.map((category) => (
                            <div key={category.id} className="mb-8">
                                <div
                                    className={`flex items-center justify-between p-6 rounded-2xl border-1 border-dashed border-primary-variant-5 ${category.borderColor} hover:shadow-lg transition-all duration-300 cursor-pointer`}
                                    onClick={() => toggleSection(category.id)}
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 rounded-xl text-white" style={{ backgroundColor: '#ffbb00' }}>
                                            {category.icon}
                                        </div>
                                        <h5 className="pt-2">{category.title}</h5>
                                    </div>
                                    {expandedSections[category.id] ?
                                        (
                                            <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                            </svg>
                                        ) :
                                        (
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )
                                    }
                                </div>

                                {expandedSections[category.id] && (
                                    <div className="mt-6 space-y-4">
                                        {category.items.map((item, idx) => (
                                            <div key={idx} className="bg-white hover:shadow-md transition-shadow duration-300 rounded-xl border-1 border-dashed border-primary-variant-5">
                                                <div className="p-6">
                                                    <div className="flex items-start space-x-4">
                                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold bg-primary-1" >
                                                            {idx + 1}
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="text-xl mb-3 text-gray-1">
                                                                {item.title}
                                                            </div>
                                                            <p className="mb-4 leading-relaxed text-gray-2">{item.description}</p>
                                                            <div className="space-y-2">
                                                                {item.details.map((detail, detailIdx) => (
                                                                    <div key={detailIdx} className="flex items-start space-x-3">
                                                                        <img src={NavHoverLogo} alt='nav-logo' className='p-1'/>
                                                                        <span className="text-sm leading-relaxed">{detail}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    </motion.div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-6 md:py-16">

                    {/* Core Initiatives */}
                    
                    {/* Enabling Pillars */}
                    <div className="md:mb-20 mb-10">
                        <motion.div
                    ref={head4}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: headInView4 ? 1 : 0, y: headInView4 ? 0 : 100 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="flex flex-col items-center text-center"
                >
                        <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#ffbb00' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512" className='text-white'><path fill="currentColor" d="M247.759 14.358L16 125.946V184h480v-58.362ZM464 152H48v-5.946l200.241-96.412L464 146.362ZM16 496h480V392H16Zm32-72h416v40H48Zm24-216h32v160H72zm336 0h32v160h-32zm-224 0h32v160h-32zm112 0h32v160h-32z"/></svg>
                                {/* <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg> */}
                            </div>
                            <h3 className=" mb-4">Enabling Pillars</h3>
                            <p className=" max-w-2xl mx-auto">
                                Four foundational pillars that support our mission and drive sustainable impact
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {enablingPillars.map((pillar, idx) => (
                                <div key={idx} className={`${pillar.bgColor} rounded-2xl border-1 border-dashed border-primary-variant-5 hover:shadow-lg transition-all duration-300 p-8`}>
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="p-3 rounded-xl text-white bg-primary-1">
                                            {pillar.icon}
                                        </div>
                                        <div className="text-xl font-bold text-gray-1">{pillar.title}</div>
                                    </div>
                                    <p className="text-gray-3 leading-relaxed">{pillar.description}</p>
                                </div>
                            ))}
                        </div>
                        </motion.div>
                    </div>

                    {/* Financial Model */}
                    <div className="rounded-2xl p-8 ">
                        <motion.div
                    ref={head2}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: headInView2 ? 1 : 0, y: headInView2 ? 0 : 100 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="flex flex-col items-center text-center"
                >
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-primary-1">
                               <svg xmlns="http://www.w3.org/2000/svg" width="2.3em" height="2.3em" viewBox="0 0 24 24" className='text-white'><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.7 8A3 3 0 0 0 14 6h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1-2.7-2M12 3v3m0 12v3"/></svg>
                                {/* <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg> */}
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-gray-1">Financial & Revenue Model</h3>
                            <p className="text-gray-3 max-w-2xl mx-auto text-lg">
                                Diversified funding streams ensuring sustainable impact and growth
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            {fundingStreams.map((stream, idx) => (
                                <div key={idx} className="bg-white rounded-2xl border-1 border-dashed border-primary-variant-5 p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#ffbb00' }}>
                                            {idx + 1}
                                        </div>
                                        <span className="text-sm font-medium text-gray-2">{stream}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t-2 border-primary-1 pt-8">
                            <div className="text-2xl font-bold mb-6 text-center text-gray-1">Allocation Principles</div>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white  p-6 text-center shadow-sm rounded-2xl border-1 border-dashed border-primary-variant-5">
                                    <PercentageCounter target={80}/>
                                    <div className="text-sm font-medium text-gray-700">Core programs, research, and impact initiatives</div>
                                </div>
                                <div className="bg-white p-6 text-center shadow-sm rounded-2xl border-1 border-dashed border-primary-variant-5">
                                    <PercentageCounter target={20}/>
                                    <div className="text-sm font-medium text-gray-700">Administration and operations</div>
                                </div>
                                <div className="bg-white rounded-xl p-6 text-center shadow-sm border-1 border-dashed border-primary-variant-5">
                                    <PercentageCounter target={100}/>
                                    <div className="text-sm font-medium text-gray-700">Revenue reinvestment for national development</div>
                                </div>
                            </div>
                        </div>
                        </motion.div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About