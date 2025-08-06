// import image from '../assets/Images/9224444.jpg'; // Update with the correct path to your image
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import "../index.css";
import youth from "../assets/Images/youth1.png";
import science from "../assets/Images/science.png";
import newone from "../assets/Images/new.png";
import new1 from "../assets/Images/new1.png";
import FooterDivider from "../assets/Images/nav-divider.svg";
import SectionPill from "../components/SectionPill";
import PrimaryButtom from "../components/PrimaryButtom";
import aboutimage from "../assets/Images/aboutimage2.jpg"; // Update with the correct path to your image
import CardImage1 from "../assets/Images/engineering-card-image-1.webp";
import CardImage2 from "../assets/Images/engineering-card-image-2.webp";

import ItemsMarquee from "../components/ItemsMaquee";
import NavHoverLogo from "../assets/Images/nav-hover-icon.svg";
import InnovationSection from "../components/environment-components/InnovationSection";
import IncubationSection from "../components/environment-components/IncubationSection";
import EnvironmentIntelligence from "../components/environment-components/EnvironmentIntelligence";
import CollaborativeEcosystem from "../components/environment-components/CollaborativeEcosystem";
import EngineeringSection from "../components/environment-components/EngineeringSection";

import HeroImage from "../assets/Images/environment-hero-image.webp";
import HeroBottomLeft from "../assets/Images/hero-bottom-left.svg";
import HeroTopLeft from "../assets/Images/hero-top-left.svg";
import HeroMarqueeIcon from "../assets/Images/hero-marquee-icon.svg";
import YogaBannerImage from "../assets/Images/ancient-yoga-banner-image.png";

import {
  contentBasicVariants,
  heroSectionMainContainerVariants,
  visibleAnimationVariants,
} from "../utils/animationVarients";

const About = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const items = [
    {
      src: HeroMarqueeIcon,
      type: "text",
      alt: "",
      text: "Innovation",
    },
    {
      src: HeroMarqueeIcon,
      type: "text",
      alt: "",
      text: "Incubation",
    },
    {
      src: HeroMarqueeIcon,
      type: "text",
      alt: "",
      text: "Engineering",
    },
    {
      src: HeroMarqueeIcon,
      type: "text",
      alt: "",
      text: "Ayush",
    },
    {
      src: HeroMarqueeIcon,
      type: "text",
      alt: "",
      text: "Collaboration",
    },
    {
      src: HeroMarqueeIcon,
      type: "text",
      alt: "",
      text: "Intelligence",
    },
  ];
  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };
  const naturalSystemRestoration = [
    "Biofiltration structures",
    "Closed-loop material cycles",
    "Climate-responsive habitats",
  ];

  const stakeholderCollaboration = [
    "Ecosystem-wide campaigns",
    "STEM hackathons",
    "Research showcases",
  ];
  const content = (
    <p className="text-center">
      <span className="text-lg font-bold text-yellow-400">Our focus</span> is
      not on surface-level outreach but on building long-term transformation
      that strengthens individuals, communities, and institutions.
      <br />
      This is not about charity—it is about design. Design that is resilient,
      measurable, and embedded with purpose.
    </p>
  );

  const initiatives = [
    {
      id: "social",
      title: "Social Initiatives",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197V9a3 3 0 00-6 0v2m0 0V9a3 3 0 016 0v2m-3 7h3m-3 0h-3m3 0v3m0-3V9"
          />
        </svg>
      ),
      color: "from-amber-400 to-orange-500",
      items: [
        {
          title: "Advanced Research in Noetic Science",
          description:
            "Conduct scientific research on mental reflux, behavioral resilience, and cognitive enhancement.",
          details: [
            "Publish peer-reviewed indexed papers with physiological and psychological impact data",
            "Develop intervention models to increase peace, mental clarity, and self-governance",
          ],
        },
        {
          title: "Noetic Science Enablement on Unified Wholeness (nseUW)",
          description:
            "Introduce a non-commercial, three-year progression-based certification.",
          details: [
            "Build capacity through Scopes of Work with mission-aligned institutions",
            "Certify Subject Matter Experts (SMEs) and knowledge ambassadors based on merit alone",
          ],
        },
        {
          title: "Youth Resilience & Responsible Citizenship",
          description:
            "Launch national cohorts that include leadership labs, ethics, and noetic exercises.",
          details: [
            "Integrate life-skills training with resilience-building practices",
            "Track longitudinal impact on academic, professional, and social domains",
          ],
        },
        {
          title: "East-West Scientific Integration",
          description:
            "Design mixed-method studies comparing Indian ancient practices with Western scientific models.",
          details: [
            "Organize symposia and joint research with international universities",
            "Position SLSRP as a bridge between empirical science and experiential intelligence",
          ],
        },
      ],
    },
    {
      id: "environmental",
      title: "Environmental Initiatives",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      color: "from-green-400 to-emerald-600",
      items: [
        {
          title: "Redefining Environmental Engineering",
          description:
            "Foster innovation in environmental design, circular systems, and low-carbon processes.",
          details: [
            "Launch regenerative prototypes, including bio-engineering and ecosystem rehabilitation",
            "Host policy workshops and technology showcases",
          ],
        },
        {
          title: "Eco-Technical Sustainability Incubation",
          description:
            "Incubate SMEs and startups working in green-tech and deep-tech ecosystems.",
          details: [
            "Establish AI, IoT, and ML clusters focused on ecological impact",
            "Offer mentoring, funding, and R&D access to environment-first tech ventures",
          ],
        },
        {
          title: "Digital Phytovault of Medicinal Flora",
          description:
            "Create India's most advanced digital repository of medicinal and aromatic plants.",
          details: [
            "Integrate drone-based mapping, AI interpretation, and blockchain storage",
            "License digital biodiversity data for education, innovation, and policymaking",
          ],
        },
        {
          title: "Scientific Validation of AYUSH Protocols",
          description:
            "Run clinical research integrating ancient systems with biomedical analytics.",
          details: [
            "Promote AYUSH protocols as global standards in preventive healthcare",
            "Enable integration with primary and public health ecosystems",
          ],
        },
        {
          title: "Global and National Collaboration Models",
          description:
            "Partner with ministries (AYUSH, MoEFCC, CSIR), industries, and academia.",
          details: [
            "Draft collaborative frameworks for co-creation and IP sharing",
            "Align with SDG and National Mission frameworks for sustainability and wellness",
          ],
        },
      ],
    },
  ];

  const enablingPillars = [
    {
      title: "SLSRP’s Enduring Contribution",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364l-2.121 2.121M6.757 17.243l-2.121 2.121m0-14.142l2.121 2.121M17.243 17.243l2.121 2.121"
          />
        </svg>
      ),
      description:
        "One of the most resilient contributions of SLSRP to the social domain is the creation of the Noetic Science Enablement on Unified Wholeness (nseUW)",
    },
    {
      title: "Formalizing Ancient Knowledge",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h18M4 10v10m4-10v10m4-10v10m4-10v10m4-10v10M2 6h20l-10-4-10 4z"
          />
        </svg>
      ),
      description:
        "This is a multi-year, non-commercial certification program that brings order, structure, and progression to disciplines that were traditionally passed through oral systems",
    },
    {
      title: "Open Access to Knowledge",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m6 4H6a2 2 0 01-2-2v-6a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2zM7 10V7a5 5 0 0110 0"
          />
        </svg>
      ),
      description:
        "The certification is based on merit, with no commercial barrier to entry, allowing serious learners and facilitators to immerse themselves in an evolving body of knowledge. ",
    },
    {
      title: "An Ecosystem for Impact",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M7.5 11.5l8-4.5M7.5 12.5l8 4.5" />
        </svg>
      ),
      description:
        "nseUW is not just a program—it is an ecosystem. It connects knowledge ambassadors, mission-aligned institutions, and research bodies through scopes of work that advance both academic and social impact.",
    },
  ];

  const fundingStreams = [
    "Government Grants & Mission-Mode Funds",
    "Angel & Venture Capital Co-Investment",
    "NRI & Global Impact Investment",
    "Corporate CSR & ESG Projects",
    "Project-Based Revenue Generation",
    "IP Commercialisation",
    "Certification and Scholarships",
  ];

  const title = useRef(null);
  const title1 = useInView(title, { once: false });

  const head = useRef(null);
  const headInView = useInView(head, { once: false });

  const head1 = useRef(null);
  const headInView1 = useInView(head1, { once: false });

  const head2 = useRef(null);
  const headInView2 = useInView(head2, { once: false });

  const head3 = useRef(null);
  const headInView3 = useInView(head3, { once: false });

  const logos = [
    "https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683d3b2d6d119a92715751a6_client-image-06.svg",
    "https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683d3b2c0697f0f74387041e_client-image-04.svg",
    "https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683d3b2d25c68b4a9554c777_client-image-05.svg",
    "https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683d3b2bcaa5306b96f81a26_client-image-01.svg",
    "https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683d3b2b5d9336ef0d5af39b_client-image-03.svg",
    "https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683d3b2b2fa3839b7b64a960_client-image-02.svg",
  ];
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

  // Duplicate images to create the infinite effect
  const loopedLogos = [...logos, ...logos];

  return (
    <div>
      <div
        className="w-full h-screen mx-auto xs:px-2 sm:px-5 md:px-10 lg:px-15"
        ref={title}
      >
        <div className="w-full h-[90vh] overflow-hidden rounded-2xl relative mt-16">
          <img
            src={HeroImage}
            alt="environment-hero-section"
            className="w-full h-[90vh] object-cover overflow-hidden absolute inset-0"
            loading="eager"
          />
          <div className="xs:w-9/10 md:w-7/10 lg:w-6/10 absolute right-0 bottom-0 flex flex-col justify-start items-start gap-0">
            <div className="w-full flex flex-col justify-start items-center gap-0 bg-gray-8 rounded-tl-3xl rounded-bl-3xl">
              <img
                src={HeroBottomLeft}
                alt="svg-place-holder"
                className="self-end w-8 h-8 object-cover -mt-8 -me-[0.2px]"
                loading="eager"
              />
              <div
                className="px-10 py-5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    title1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <h1>
                    Defining
                    <span className="bg-gradient-to-r from-primary-1 via-primary-variant-2 to-primary-variant-3 bg-clip-text text-transparent">
                      Social
                    </span>{" "}
                    Initiative
                  </h1>
                </motion.div>
              </div>
              {/* <motion.h1
                      className='px-10 py-5'
                      variants={heroSectionMainContainerVariants}
                      initial='initial'
                      whileInView='whileInView'
                      custom={1}
                      viewport={{ once: true, amount: "some" }}
                    >
                      Engineering a Regenerative Future
                    </motion.h1> */}
            </div>
            <div className="w-8/10 bg-gray-8 h-full self-end">
              <div className="w-full h-full flex flex-col justify-start items-center gap-0">
                <img
                  src={HeroTopLeft}
                  alt="svg-place-holder"
                  className="self-start w-8 h-8 object-cover -ms-8 -mt-[0.4px]"
                  loading="eager"
                />
                <motion.p
                  className="px-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    title1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  Nature is not seen as a silent witness to development, but as
                  the core pillar of human survival and well-being. Our social
                  initiatives are rooted in the belief that true progress
                  uplifts both people and the planet.
                </motion.p>
                <div className="w-full relative mt-3">
                  <div className="absolute left-0 top-0 h-full w-20 pointer-events-none z-50 bg-gradient-to-r from-gray-8 via-gray-8/80 to-transparent"></div>
                  <div className="absolute right-0 top-0 h-full w-20 pointer-events-none z-50 bg-gradient-to-l from-gray-8 via-gray-8/80 to-transparent"></div>
                  <ItemsMarquee items={items} />
                </div>
                <img
                  src={HeroBottomLeft}
                  alt="svg-place-holder"
                  className="self-start w-8 h-8 object-cover -ms-8 -mt-[0.4px]"
                  loading="eager"
                />
              </div>
            </div>
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

      <div className="p-10  bg-gradient-to-b from-gray-8 to-[#fff3d1]">
        <motion.div
          ref={head1}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: headInView1 ? 1 : 0, y: headInView1 ? 0 : 100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col"
        >
          <div className="flex flex-col items-center md:gap-5 gap-3  sm:pt-0 pt-10 "></div>
          <div className="overflow-hidden">
            {/* <h2 className="font-semibold overflow-hidden ">
              Social initiatives empower{" "}
              <span className="text-gray-400">
                communities and drive inclusive, sustainable
              </span>{" "}
              change
            </h2> */}
          </div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex flex-col items-center text-center"
          >
            <h2 className=" text-center overflow-hidden p-2 xl:w-[800px]">
              A New Standard for Social Responsibility
            </h2>
            <p className="text-lg text-center text-gray-500 lg:ms-20 lg:me-20">
              At Semporutkalai Life Science Research Park (SLSRP), we redefine
              the meaning of social initiative by grounding it in scientific
              validation, ethical frameworks, and cultural intelligence.
            </p>

            {content}
            <div className="mt-10">
              <h2>Science as a Catalyst for Social Transformation</h2>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="flex flex-col lg:flex-row gap-8 px-6 py-16 bg-gradient-to-br from-[#fffaf0] to-[#fff3d1]"
          >
            {/* Mission Card */}
            <div className="flex-1 bg-white rounded-2xl border border-[#ffaa00] shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative overflow-hidden">
              {/* Accent Bar */}
              <span className="absolute top-0 left-0 h-1 w-full bg-[#ffbb00] rounded-t-2xl"></span>

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 bg-[#ffbb00] rounded-sm"></div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Science Meets Wisdom
                </h3>
              </div>

              {/* Content */}
              <ul className="space-y-4 text-gray-700 text-[1rem] leading-relaxed list-disc list-inside">
                <li>
                  SLSRP is committed to evidence-based research focused on
                  unlocking human potential.
                </li>
                <li>
                  It explores how thoughts, behaviors, and emotions impact both
                  personal growth and societal outcomes through noetic science
                </li>
                <li>
                  The initiative integrates ancient Indian systems like Siddha
                  medicine and meditation with modern scientific approaches.
                </li>
                <li>
                  Its goal is to refine and apply traditional wisdom as
                  effective tools for cognitive clarity, emotional stability,
                  and ethical behavior.
                </li>
              </ul>
            </div>

            {/* Vision Card */}
            <div className="flex-1 bg-white rounded-2xl border border-[#ffaa00] shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative overflow-hidden">
              <span className="absolute top-0 left-0 h-1 w-full bg-[#ffbb00] rounded-t-2xl"></span>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 bg-[#ffbb00] rounded-sm"></div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Evidence-Based Interventions
                </h3>
              </div>

              <ul className="space-y-4 text-gray-700 text-[1rem] leading-relaxed list-disc list-inside">
                <li>
                  SLSRP uses physiological and psychological assessments to
                  translate subjective experiences into measurable data.
                </li>
                <li>
                  All insights undergo academic scrutiny to ensure scientific
                  validity and real-world relevance.
                </li>
                <li>
                  The research produces a repository of interventions that are
                  both culturally grounded and scientifically sound.
                </li>
                <li>
                  These interventions are designed to be adaptable across
                  settings like education, corporate environments, and community
                  programs.
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full px-4 py-8 ">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-7xl mx-auto flex gap-8 items-center sm:flex-col lg:flex-row justify-center"
        >
          {/* Left Text Box */}
          <div
            className="text-gray-800 space-y-4 p-4 lg:w-800px"
            style={{ textAlign: "justify" }}
          >
            <div className="text-3xl sm:text-4xl font-bold flex items-center gap-3 w-full">
              <div className="w-2 h-6 bg-[#ffbb00] rounded-sm"></div>
              <h3 className="w-8/10">
                Building Youth for a Responsible Tomorrow
              </h3>
            </div>
            {/* <div className="text-2xl sm:text-3xl text-gray-500">
              Semporutkalai Life Science Research Park (SLSRP)
            </div> */}
            <div className="flex flex-col md:justify-center gap-0 mx-auto ">
              <div className="bg-white rounded-2xl xs:p-3 md:p-5 flex flex-col justify-start items-start gap-y-5 bg-gradient-to-br from-[#fffaf0] to-[#fff3d1]">
                <p className="flex items-start gap-2">
                  <img src={NavHoverLogo} alt="nav-logo" className="mt-1" />{" "}
                  SLSRP understands that meaningful social change must begin
                  early, especially in a nation with a young demographic
                  profile.
                </p>
                <p className="flex items-start gap-2">
                  <img src={NavHoverLogo} alt="nav-logo" className="mt-1" />
                  Our Youth Resilience and Citizenship programs are tailored to
                  equip the next generation with the competencies needed to face
                  the world with purpose and maturity.
                </p>
                <p className="flex items-start gap-2">
                  <img src={NavHoverLogo} alt="nav-logo" className="mt-1" />
                  These programs combine leadership training, ethics modules,
                  and personal development labs, providing a structured space
                  for youth to explore values, enhance focus, and build
                  resilience.
                </p>
              </div>

              {/* <img
                src={FooterDivider}
                alt="footer-divider"
                className=" xs:h-auto md:h-15 md:w-auto xs:rotate-90 md:rotate-0 self-center object-cover -my-3.5 "
              /> */}

              <div className=" rounded-2xl xs:p-3 md:p-5 flex flex-col justify-start items-start gap-y-5 mt-5 bg-gradient-to-br from-[#fffaf0] to-[#fff3d1]">
                <p className="flex items-start gap-2 ">
                  <img src={NavHoverLogo} alt="nav-logo" className="mt-1" />
                  Unlike conventional training that emphasizes hard skills
                  alone, our approach includes emotional intelligence,
                  reflective practices, and measured outcomes.
                </p>
                <p className="flex items-start gap-2">
                  <img src={NavHoverLogo} alt="nav-logo" className="mt-1" />
                  Progress is tracked across academic performance, professional
                  choices, and community behavior.
                </p>
                <p className="flex items-start gap-2">
                  <img src={NavHoverLogo} alt="nav-logo" className="mt-1" />
                  Our long-term goal is to create a generation of citizens who
                  are productive not only in the workplace but also in
                  society—individuals who think critically, act responsibly, and
                  serve collectively.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Box */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center"
          >
            <img
              src={youth} // Replace with actual image path
              alt="SLSRP"
              className="w-3/4"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full px-4 py-8 ">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-7xl mx-auto flex
          sm:flex-col lg:flex-row sm:flex-col-reverse gap-8 items-center "
        >
          {/* left Image Box */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center"
          >
            <img
              src={science} // Replace with actual image path
              alt="SLSRP"
              className="w-3/4"
            />
          </motion.div>
          {/* right Text Box */}
          <div
            className="text-gray-800 space-y-4 p-4"
            style={{ textAlign: "justify" }}
          >
            <div className="text-3xl sm:text-4xl font-bold flex items-center gap-3">
              <div className="w-2 h-6 bg-[#ffbb00] rounded-sm"></div>
              <h3 className="w-8/10">
                A Confluence of Cultures, Sciences, and Systems
              </h3>
            </div>
            <div className="flex flex-col md:justify-center gap-0 mx-auto">
              <div className="bg-white rounded-2xl xs:p-3 md:p-5 flex flex-col justify-start items-start gap-y-5 bg-gradient-to-br from-[#fffaf0] to-[#fff3d1]">
                <p className="flex items-start gap-2">
                  <img src={NavHoverLogo} alt="nav-logo" className="mt-1" />{" "}
                  SLSRP also plays a critical role in bridging Eastern and
                  Western knowledge traditions.
                </p>
                <p className="flex items-start gap-2">
                  <img src={NavHoverLogo} alt="nav-logo" className="mt-1" />
                  Our social initiatives extend into cross-cultural scientific
                  integration, where traditional Indian practices are studied
                  alongside contemporary global models.
                </p>
                <p className="flex items-start gap-2">
                  <img src={NavHoverLogo} alt="nav-logo" className="mt-1" />
                  In partnership with international universities, we conduct
                  mixed-method studies, co-author publications, and organize
                  collaborative symposia.
                </p>
              </div>

              {/* <img
                src={FooterDivider}
                alt="footer-divider"
                className=" xs:h-auto md:h-15 md:w-auto xs:rotate-90 md:rotate-0 self-center object-cover -my-3.5 "
              /> */}

              <div className=" rounded-2xl xs:p-3 md:p-5 flex flex-col justify-start items-start gap-y-5 mt-5 bg-gradient-to-br from-[#fffaf0] to-[#fff3d1]">
                <p className="flex items-start gap-2 ">
                  <img src={NavHoverLogo} alt="nav-logo" className="mt-1" />
                  This allows for mutual learning, deeper insight, and global
                  positioning of Indian knowledge systems—not as alternatives,
                  but as complements to modern scientific understanding.
                </p>
                <p className="flex items-start gap-2">
                  <img src={NavHoverLogo} alt="nav-logo" className="mt-1" />
                  This integration is not symbolic—it is structural. It shapes
                  curriculum, influences policy, and opens up new areas of
                  inquiry where values and science intersect meaningfully.
                </p>
                <p className="flex items-start gap-2">
                  <img src={NavHoverLogo} alt="nav-logo" className="mt-1" />
                  As a result, SLSRP becomes a hub for a new type of scientific
                  diplomacy—one that values ancestral intelligence and academic
                  sophistication equally.
                </p>
              </div>
            </div>
            {/* <div className="text-2xl sm:text-3xl text-gray-500">
              Semporutkalai Life Science Research Park (SLSRP)
            </div> */}
          </div>
        </motion.div>
      </div>

      {/* <motion.div
                ref={head2}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: headInView2 ? 1 : 0, y: headInView2 ? 0 : 100 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className=""
            >
                <div className='xl:h-[700px] lg:h-[1200px] w-full bg-[#212121] flex flex-col items-center'>
                    <p className='border-gray-500 border-1 text-gray-500 mt-23  inline-block pt-1 xl:pb-5 pb-2 pe-4 ps-4 rounded-full overflow-hidden'>OUR TEAM</p>
                    <h2 className='text-white!  pt-3 xl:pb-20 sm:pb-13 pb-7 overflow-hidden lg:w-[600px] text-center font-semibold'>The <span className='text-green-400'>team</span> powering green transport</h2>
                    <div className='grid xl:grid-cols-[3fr_3fr_3fr_3fr] lg:grid-cols-3 sm:grid-cols-2 xl:h-[1100px] lg:h-[900px] md:h-[800px] sm:w-full md:w-[90%] lg:w-full w-full md:px-18 px-10 xl:py-8 md:gap-9 gap-4'>
                        <div className='rounded-2xl flex justify-center items-center flex-col bg-[#282828]'>
                            <div className='h-[85%] w-[80%] flex flex-col items-start py-2'>
                                <div className='overflow-hidden rounded-[10px] w-full h-full'><img alt="Team Image" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/685bd35fc345fac7fb41d911_team-image-01.webp" loading="eager" className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110" /></div>
                                <p className='text-lg font-semibold py-2 text-white overflow-hidden'>Liam Waters</p>
                                <p className='text-lg pb-1 text-white overflow-hidden'>Head of Eco Logistics</p>
                            </div>
                            <div className='flex self-end me-4'>
                                <span className='px-1'><a href="https://www.facebook.com/" target="_blank" className="team-social-link w-inline-block"><img loading="eager" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/684171f6f686cb5e1e9bfd33_29047fa70e115d4afde718b0a7db48ac_twitter.svg" alt="social-icon" className="team-social-icon" /></a></span>
                                <span className='px-1'><a href="https://www.instagram.com/" target="_blank" className="team-social-link w-inline-block"><img loading="eager" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/684171f6f686cb5e1e9bfd32_fc3b1b7df4e2556e27f870ca3d006c96_instagram.svg" alt="social-icon" /></a></span>
                            </div>
                        </div>
                        <div className='rounded-2xl flex justify-center items-center flex-col bg-[#282828]'>
                            <div className='h-[85%] w-[80%] flex flex-col items-start py-2'>
                                <div className='overflow-hidden rounded-[10px] w-full h-full'><img alt="Team Image" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/685bd35fc345fac7fb41d911_team-image-01.webp" loading="eager" className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110" /></div>
                                <p className='text-lg font-semibold py-2 text-white overflow-hidden'>Liam Waters</p>
                                <p className='text-lg pb-1 text-white overflow-hidden'>Head of Eco Logistics</p>
                            </div>
                            <div className='flex self-end me-4'>
                                <span className='px-1'><a href="https://www.facebook.com/" target="_blank" className="team-social-link w-inline-block"><img loading="eager" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/684171f6f686cb5e1e9bfd33_29047fa70e115d4afde718b0a7db48ac_twitter.svg" alt="social-icon" className="team-social-icon" /></a></span>
                                <span className='px-1'><a href="https://www.instagram.com/" target="_blank" className="team-social-link w-inline-block"><img loading="eager" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/684171f6f686cb5e1e9bfd32_fc3b1b7df4e2556e27f870ca3d006c96_instagram.svg" alt="social-icon" /></a></span>
                            </div>
                        </div>
                        <div className='rounded-2xl flex justify-center items-center flex-col bg-[#282828]'>
                            <div className='h-[85%] w-[80%] flex flex-col items-start py-2'>
                                <div className='overflow-hidden rounded-[10px] w-full h-full'><img alt="Team Image" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/685bd35fc345fac7fb41d911_team-image-01.webp" loading="eager" className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110" /></div>
                                <p className='text-lg font-semibold py-2 text-white overflow-hidden'>Liam Waters</p>
                                <p className='text-lg pb-1 text-white overflow-hidden'>Head of Eco Logistics</p>
                            </div>
                            <div className='flex self-end me-4'>
                                <span className='px-1'><a href="https://www.facebook.com/" target="_blank" className="team-social-link w-inline-block"><img loading="eager" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/684171f6f686cb5e1e9bfd33_29047fa70e115d4afde718b0a7db48ac_twitter.svg" alt="social-icon" className="team-social-icon" /></a></span>
                                <span className='px-1'><a href="https://www.instagram.com/" target="_blank" className="team-social-link w-inline-block"><img loading="eager" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/684171f6f686cb5e1e9bfd32_fc3b1b7df4e2556e27f870ca3d006c96_instagram.svg" alt="social-icon" /></a></span>
                            </div>
                        </div>
                        <div className='rounded-2xl flex justify-center items-center flex-col bg-[#282828]'>
                            <div className='h-[85%] w-[80%] flex flex-col items-start py-2'>
                                <div className='overflow-hidden rounded-[10px] w-full h-full'><img alt="Team Image" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/685bd35fc345fac7fb41d911_team-image-01.webp" loading="eager" className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110" /></div>
                                <p className='text-lg font-semibold py-2 text-white overflow-hidden'>Liam Waters</p>
                                <p className='text-lg pb-1 text-white overflow-hidden'>Head of Eco Logistics</p>
                            </div>
                            <div className='flex self-end me-4'>
                                <span className='px-1'><a href="https://www.facebook.com/" target="_blank" className="team-social-link w-inline-block"><img loading="eager" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/684171f6f686cb5e1e9bfd33_29047fa70e115d4afde718b0a7db48ac_twitter.svg" alt="social-icon" className="team-social-icon" /></a></span>
                                <span className='px-1'><a href="https://www.instagram.com/" target="_blank" className="team-social-link w-inline-block"><img loading="eager" src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/684171f6f686cb5e1e9bfd32_fc3b1b7df4e2556e27f870ca3d006c96_instagram.svg" alt="social-icon" /></a></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-[#212121] h-[100px] w-full'>
                </div>
            </motion.div> */}

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

      <div className="min-h-screen bg-gradient-to-br from-white via-amber-25 to-orange-50 ">
        {/* Hero Section */}

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Core Initiatives */}

          {/* Enabling Pillars */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="text-4xl font-bold text-gray-800 mb-4">nseUW</div>
              <div className="text-lg text-gray-600 max-w-2xl mx-auto">
                Structuring Legacy Knowledge into Credible Pathways
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {enablingPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className={`${pillar.bgColor} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className="p-3 rounded-xl text-white"
                      style={{ backgroundColor: "#ffbb00" }}
                    >
                      {pillar.icon}
                    </div>
                    <div className="text-xl font-bold text-gray-800">
                      {pillar.title}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Model */}
          {/* <div className="bg-gradient-to-r from-amber-50 to-orange-100 rounded-2xl p-8 border-2 border-amber-200">
            <div className="text-center mb-8">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: "#ffbb00" }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold mb-4 text-gray-800">
                Financial & Revenue Model
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Diversified funding streams ensuring sustainable impact and
                growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {fundingStreams.map((stream, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-amber-200"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: "#ffbb00" }}
                    >
                      {idx + 1}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {stream}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-amber-300 pt-8">
              <div className="text-2xl font-bold mb-6 text-center text-gray-800">
                Allocation Principles
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-amber-200">
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: "#ffbb00" }}
                  >
                    80%
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    Core programs, research, and impact initiatives
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-amber-200">
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: "#ffbb00" }}
                  >
                    20%
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    Administration and operations
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-amber-200">
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: "#ffbb00" }}
                  >
                    100%
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    Revenue reinvestment for national development
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="w-full px-4 py-8 ">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-7xl mx-auto flex
          sm:flex-col lg:flex-row sm:flex-col-reverse gap-8 items-center "
            >
              {/* left Image Box */}
              <div
                className="text-gray-800 space-y-4 p-4 contianer"
                style={{ textAlign: "justify" }}
              >
                <div className="text-3xl sm:text-4xl font-bold flex items-center gap-3">
                  <div className="w-2 h-6 bg-[#ffbb00] rounded-sm"></div>
                  <h3 className="w-8/10">A Future Designed with Purpose</h3>
                </div>
                {/* <div className="text-2xl sm:text-3xl text-gray-500">
              Semporutkalai Life Science Research Park (SLSRP)
            </div> */}
                <p>
                  In a world grappling with fragmentation—social, psychological,
                  environmental—SLSRP offers a unifying model that connects
                  science with culture, youth with leadership, and knowledge
                  with measurable outcomes.
                </p>
                <p>
                  We define social initiative as a high-stakes
                  responsibility—one that demands clarity, discipline, and
                  vision.
                </p>
                <p>
                  In partnership with international universities, we conduct
                  mixed-method studies, co-author publications, and organize
                  collaborative symposia.
                </p>
                <p>
                  Through our sustained efforts, we aim to build a more stable,
                  thoughtful, and ethically grounded society.
                </p>
                <p>
                  A society where ancient knowledge is not lost but refined;
                  where modern science is not isolated but inclusive; and where
                  individuals rise not by chance but through well-designed
                  platforms that empower growth with integrity.
                </p>
              </div>
              {/* right Text Box */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex justify-center"
              >
                <img
                  src={new1} // Replace with actual image path
                  alt="SLSRP"
                  className="w-3/4"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="w-full px-4 py-8 ">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-7xl mx-auto flex gap-8 items-center sm:flex-col lg:flex-row "
            >
              {/* Right Image Box */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex justify-center"
              >
                <img
                  src={newone} // Replace with actual image path
                  alt="SLSRP"
                  className="w-3/4"
                />
              </motion.div>
              {/* Left Text Box */}
              <div
                className="text-gray-800 space-y-4 p-4"
                style={{ textAlign: "justify" }}
              >
                <div className="text-3xl sm:text-4xl font-bold flex items-center gap-3">
                  <div className="w-2 h-6 bg-[#ffbb00] rounded-sm"></div>
                  <h3 className="w-8/10">
                    Positioning Social Change as Systemic Impact
                  </h3>
                </div>
                {/* <div className="text-2xl sm:text-3xl text-gray-500">
              Semporutkalai Life Science Research Park (SLSRP)
            </div> */}
                <p>
                  What makes SLSRP’s social initiatives resilient is their
                  strategic embedding into national and global development
                  goals.
                </p>
                <p>
                  Every initiative—whether research, training, or
                  certification—is designed with a systems view.
                </p>
                <p>
                  We align our frameworks with Sustainable Development Goals
                  (SDGs), collaborate with ministries, and engage with academic
                  and community stakeholders to ensure that our work is
                  replicable, scalable, and policy-relevant.
                </p>
                <p>
                  By treating social initiatives not as fragmented efforts but
                  as part of a structured ecosystem, we eliminate randomness and
                  enhance accountability.
                </p>
                <p>
                  Our programs are tested for impact, documented for
                  reproducibility, and continually improved through feedback
                  loops and research insights.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <div className="bg-gradient-to-r from-white via-amber-100 to-orange-100 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
              style={{ backgroundColor: "#ffbb00" }}
            >
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="text-5xl font-bold mb-6 text-gray-800">
              Core Initiatives
            </div>
            <div className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bridging ancient wisdom with modern science to create sustainable
              solutions for humanity's greatest challenges
            </div>
          </div>

          <div className="max-w-7xl mx-auto sm:px-6 py-16">
            {initiatives.map((category) => (
              <div key={category.id} className="mb-8">
                <div
                  className={`flex items-center justify-between p-6 ${category.bgColor} rounded-2xl border-2 ${category.borderColor} hover:shadow-lg transition-all duration-300 cursor-pointer`}
                  onClick={() => toggleSection(category.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className="p-3 rounded-xl text-white"
                      style={{ backgroundColor: "#ffbb00" }}
                    >
                      {category.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-800">
                      {category.title}
                    </div>
                  </div>
                  {expandedSections[category.id] ? (
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </div>

                {expandedSections[category.id] && (
                  <div className="mt-6 space-y-4">
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                      >
                        <div className="p-6">
                          <div className="flex items-start space-x-4">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                              style={{ backgroundColor: "#ffbb00" }}
                            >
                              {idx + 1}
                            </div>
                            <div className="flex-1">
                              <div className="text-xl font-semibold text-gray-800 mb-3">
                                {item.title}
                              </div>
                              <p className="text-gray-600 mb-4 leading-relaxed">
                                {item.description}
                              </p>
                              <div className="space-y-2">
                                {item.details.map((detail, detailIdx) => (
                                  <div
                                    key={detailIdx}
                                    className="flex items-start space-x-3"
                                  >
                                    <div
                                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                      style={{ backgroundColor: "#ffbb00" }}
                                    ></div>
                                    <span className="text-sm text-gray-600 leading-relaxed">
                                      {detail}
                                    </span>
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
        </div> */}
    </div>
  );
};

export default About;
