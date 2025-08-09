// import image from '../assets/Images/9224444.jpg'; // Update with the correct path to your image
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import "../index.css";
import youth from "../assets/Images/social-resilience-youth.png";
import science from "../assets/Images/social-synthesis-science.png";

import ItemsMarquee from "../components/ItemsMarquee";
import NavHoverLogo from "../assets/Images/nav-hover-icon.svg";

// import HeroImage from "../assets/Images/environment-hero-image.webp";
import HeroImage from "../assets/Images/1.jpg";
import HeroImageBackground from "../assets/Images/grain.1ccdda41.png";
import HeroBottomLeft from "../assets/Images/hero-bottom-left.svg";
import HeroTopLeft from "../assets/Images/hero-top-left.svg";
import HeroMarqueeIcon from "../assets/Images/hero-marquee-icon.svg";
import StoryCarousel from "../components/StoryCarousel";
import SectionPill from "../components/SectionPill";

const About = () => {
  const items = [
    {
      src: HeroMarqueeIcon,
      type: "text",
      alt: "",
      text: "Redesign",
    },
    {
      src: HeroMarqueeIcon,
      type: "text",
      alt: "",
      text: "Resilience",
    },
    {
      src: HeroMarqueeIcon,
      type: "text",
      alt: "",
      text: "Wholeness",
    },
    {
      src: HeroMarqueeIcon,
      type: "text",
      alt: "",
      text: "Synthesis",
    },
  ];

  const content = (
    <p className="text-center">
      <span className="text-lg font-bold text-primary-1">Our focus</span> is not
      on surface-level outreach but on building long-term transformation that
      strengthens individuals, communities, and institutions.
      <br />
      This is not about charity—it is about design. Design that is resilient,
      measurable, and embedded with purpose.
    </p>
  );

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

  const title = useRef(null);
  const title1 = useInView(title, { once: true });

  const head = useRef(null);
  const headInView = useInView(head, { once: true });

  const head1 = useRef(null);
  const headInView1 = useInView(head1, { once: true });

  const head2 = useRef(null);
  const headInView2 = useInView(head2, { once: true });

  const head3 = useRef(null);
  const headInView3 = useInView(head3, { once: true });

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
      <div
        className="w-full h-screen mx-auto xs:px-2 sm:px-5 md:px-10 lg:px-15 bg-primary-variant-7"
        ref={title}
        role="region"
        aria-label="Hero Section - Social Initiative"
      >
        <div className="w-full h-[90vh] overflow-hidden rounded-2xl relative mt-16 ">
          <img
            src={HeroImage}
            alt="Scenic environment backdrop representing nature and social harmony"
            className="w-full h-[90vh] object-cover overflow-hidden absolute inset-0"
            loading="lazy"
          />
          <img
            src={HeroImageBackground}
            alt="gradient"
            className="w-full h-[90vh] overflow-hidden absolute inset-0 bg-repeat opacity-50"
            loading="lazy"
          />

          <div
            className="xs:w-9/10 md:w-7/10 lg:w-6/10 absolute right-0 bottom-0 flex flex-col justify-start items-start gap-0"
            role="group"
            aria-labelledby="hero-title"
          >
            <div className="w-full flex flex-col justify-start items-center gap-0 bg-primary-variant-7 rounded-tl-3xl rounded-bl-3xl">
              <img
                src={HeroBottomLeft}
                alt=""
                aria-hidden="true"
                className="self-end w-8 h-8 object-cover -mt-8 -me-[0.2px]"
                loading="lazy"
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
                  <h1 id="hero-title" className="text-3xl font-bold">
                    Defining Social Initiative
                  </h1>
                </motion.div>
              </div>
            </div>

            <div className="w-8/10 bg-primary-variant-7 h-full self-end">
              <div className="w-full h-full flex flex-col justify-start items-center gap-0">
                <img
                  src={HeroTopLeft}
                  alt=""
                  aria-hidden="true"
                  className="self-start w-8 h-8 object-cover -ms-8 -mt-[0.4px]"
                  loading="lazy"
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
                  <div
                    className="absolute left-0 top-0 h-full w-20 pointer-events-none z-10 bg-gradient-to-r from-primary-variant-7 via-primary-variant-7/80 to-transparent"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute right-0 top-0 h-full w-20 pointer-events-none z-10 bg-gradient-to-l from-primary-variant-7 via-primary-variant-7/80 to-transparent"
                    aria-hidden="true"
                  ></div>

                  <ItemsMarquee
                    items={items}
                    aria-label="Scrolling list of key initiatives"
                  />
                </div>

                <img
                  src={HeroBottomLeft}
                  alt=""
                  aria-hidden="true"
                  className="self-start w-8 h-8 object-cover -ms-8 -mt-[0.4px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="p-10 bg-primary-variant-7"
        role="region"
        aria-label="Social Responsibility Section"
      >
        <motion.div
          ref={head1}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: headInView1 ? 1 : 0, y: headInView1 ? 0 : 100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col"
        >
          <div className="flex flex-col items-center md:gap-5 gap-3 sm:pt-0 pt-10"></div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{once:true}}
            className="flex flex-col items-center text-center"
          >
            {/* Section Pill (assumed to be accessible already) */}
            <SectionPill sectionTitle={"Redesign"} />

            <h2
              className="text-center overflow-hidden p-2 xl:w-[800px]"
              id="social-responsibility-heading"
            >
              A New Standard for Social Responsibility
            </h2>

            <p className="text-lg text-center lg:ms-20 lg:me-20">
              At Semporutkalai Life Science Research Park (SLSRP), we redefine
              the meaning of social initiative by grounding it in scientific
              validation, ethical frameworks, and cultural intelligence.
            </p>

            {content}

            <div className="mt-10">
              <h3 className="text-xl font-semibold">
                Science as a Catalyst for Social Transformation
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="flex flex-col lg:flex-row gap-8 px-6 py-16"
          >
            {/* Mission Card */}
            <article
              className="flex-1 bg-white rounded-2xl border border-dashed border-primary-variant-3 hover:border-primary-1 transition-all duration-300 p-8 relative overflow-hidden"
              aria-labelledby="mission-heading"
            >
              <div className="flex items-center gap-3 mb-6">
                <h3 id="mission-heading" className="text-2xl font-bold">
                  Science Meets Wisdom
                </h3>
              </div>

              <ul className="space-y-4 text-[1rem] leading-relaxed" role="list">
                <li className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    aria-hidden="true"
                    className="mt-1"
                    loading="lazy"
                  />
                  SLSRP is committed to evidence-based research focused on
                  unlocking human potential.
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    aria-hidden="true"
                    className="mt-1"
                    loading="lazy"
                  />
                  It explores how thoughts, behaviors, and emotions impact both
                  personal growth and societal outcomes through noetic science.
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    aria-hidden="true"
                    className="mt-1"
                    loading="lazy"
                  />
                  The initiative integrates ancient Indian systems like Siddha
                  medicine and meditation with modern scientific approaches.
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    aria-hidden="true"
                    className="mt-1"
                    loading="lazy"
                  />
                  Its goal is to refine and apply traditional wisdom as
                  effective tools for cognitive clarity, emotional stability,
                  and ethical behavior.
                </li>
              </ul>
            </article>

            {/* Vision Card */}
            <article
              className="flex-1 bg-white rounded-2xl border border-dashed border-primary-variant-3 hover:border-primary-1 transition-all duration-300 p-8 relative overflow-hidden"
              aria-labelledby="vision-heading"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-2 h-6 text-primary-1 rounded-sm"
                  aria-hidden="true"
                ></div>
                <h3 id="vision-heading" className="text-2xl font-bold">
                  Evidence-Based Interventions
                </h3>
              </div>

              <ul className="space-y-4 text-[1rem] leading-relaxed" role="list">
                <li className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    aria-hidden="true"
                    className="mt-1"
                    loading="lazy"
                  />
                  SLSRP uses physiological and psychological assessments to
                  translate subjective experiences into measurable data.
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    aria-hidden="true"
                    className="mt-1"
                    loading="lazy"
                  />
                  All insights undergo academic scrutiny to ensure scientific
                  validity and real-world relevance.
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    aria-hidden="true"
                    className="mt-1"
                    loading="lazy"
                  />
                  The research produces a repository of interventions that are
                  both culturally grounded and scientifically sound.
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    aria-hidden="true"
                    className="mt-1"
                    loading="lazy"
                  />
                  These interventions are designed to be adaptable across
                  settings like education, corporate environments, and community
                  programs.
                </li>
              </ul>
            </article>
          </motion.div>
        </motion.div>
      </div>

      <section
        className="w-full px-4 py-8"
        role="region"
        aria-labelledby="youth-responsibility-heading"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto flex gap-8 items-center sm:flex-col lg:flex-row justify-center"
        >
          {/* Left Text Box */}
          <div
            className="space-y-4 p-4 lg:w-800px"
            style={{ textAlign: "justify" }}
          >
            <SectionPill sectionTitle={"Resilience"} />

            <div className="sm:text-4xl font-bold flex gap-3 w-full mt-2">
              <h2
                id="youth-responsibility-heading"
                style={{ textAlign: "start" }}
              >
                Building Youth for a Responsible Tomorrow
              </h2>
            </div>

            <div
              className="flex flex-col md:justify-center gap-0 mx-auto"
              role="group"
              aria-label="Youth Development Program Details"
            >
              <article
                className="bg-white rounded-2xl xs:p-3 md:p-5 flex flex-col justify-start items-start gap-y-5 bg-gradient-to-t from-gray-8 to-[#fff3d1] border border-dashed border-primary-variant-3 hover:border-primary-1 transition-all duration-300"
                aria-labelledby="program-intro"
              >
                <h3 id="program-intro" className="sr-only">
                  Youth Resilience and Citizenship Introduction
                </h3>

                <p className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    aria-hidden="true"
                    className="mt-1"
                    loading="lazy"
                  />
                  SLSRP understands that meaningful social change must begin
                  early, especially in a nation with a young demographic
                  profile.
                </p>
                <p className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    aria-hidden="true"
                    className="mt-1"
                    loading="lazy"
                  />
                  Our Youth Resilience and Citizenship programs are tailored to
                  equip the next generation with the competencies needed to face
                  the world with purpose and maturity.
                </p>
                <p className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    aria-hidden="true"
                    className="mt-1"
                    loading="lazy"
                  />
                  These programs combine leadership training, ethics modules,
                  and personal development labs, providing a structured space
                  for youth to explore values, enhance focus, and build
                  resilience.
                </p>
              </article>

              <article
                className="rounded-2xl xs:p-3 md:p-5 flex flex-col justify-start items-start gap-y-5 mt-5 bg-gradient-to-t from-gray-8 to-[#fff3d1] border border-dashed border-primary-variant-3 hover:border-primary-1 transition-all duration-300"
                aria-labelledby="program-impact"
              >
                <h3 id="program-impact" className="sr-only">
                  Youth Program Outcomes
                </h3>

                <p className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    aria-hidden="true"
                    className="mt-1"
                    loading="lazy"
                  />
                  Unlike conventional training that emphasizes hard skills
                  alone, our approach includes emotional intelligence,
                  reflective practices, and measured outcomes.
                </p>
                <p className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    aria-hidden="true"
                    className="mt-1"
                    loading="lazy"
                  />
                  Progress is tracked across academic performance, professional
                  choices, and community behavior.
                </p>
                <p className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    aria-hidden="true"
                    className="mt-1"
                    loading="lazy"
                  />
                  Our long-term goal is to create a generation of citizens who
                  are productive not only in the workplace but also in
                  society—individuals who think critically, act responsibly, and
                  serve collectively.
                </p>
              </article>
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
              src={youth}
              alt="Illustration of youth development and community engagement at SLSRP"
              className="w-3/4"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="min-h-screen bg-black text-white"
        role="region"
        aria-labelledby="nseuw-title"
      >
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Enabling Pillars Section */}
          <section aria-labelledby="nseuw-title" className="mb-20">
            <div className="text-center mb-12 flex flex-col items-center">
              <SectionPill sectionTitle={"Wholeness"} />
              <h2
                id="nseuw-title"
                className="font-bold mb-4 text-center mt-5 text-white!"
              >
                <span className="bg-gradient-to-r from-primary-1 via-primary-variant-2 to-primary-variant-3 bg-clip-text text-transparent">
                  nseUW{" "}
                </span>
                – Structuring Legacy Knowledge into Credible Pathways
              </h2>
            </div>

            {/* Pillar Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {enablingPillars.map((pillar, idx) => (
                <article
                  key={idx}
                  className={`${pillar.bgColor} rounded-2xl shadow-lg hover:shadow-xl bg-white border border-dashed border-primary-variant-3 hover:border-primary-1 transition-all duration-300`}
                  aria-label={pillar.title}
                  role="region"
                >
                  <header className="flex items-center space-x-4 mb-4 p-2 mt-2">
                    <div
                      className="p-3 rounded-xl text-white bg-primary-1"
                      aria-hidden="true"
                    >
                      {pillar.icon}
                    </div>
                    <h4 className="font-bold mt-2!">{pillar.title}</h4>
                  </header>
                  <p className="text-black leading-relaxed p-5">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Carousel Component */}
          <section aria-label="SLSRP Story Carousel">
            <StoryCarousel />
          </section>
        </div>
      </motion.div>

      <div
        className="w-full px-4 py-8"
        role="region"
        aria-label="Cultural Synthesis Section"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto flex sm:flex-col lg:flex-row sm:flex-col-reverse gap-8 items-center"
        >
          {/* Left Image Box */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center"
            role="img"
            aria-label="Illustration representing Semporutkalai Life Science Research Park"
          >
            <img
              src={science}
              alt="Illustration showcasing cultural and scientific convergence at SLSRP"
              className="w-3/4"
              loading="lazy"
            />
          </motion.div>

          {/* Right Text Box */}
          <section
            className="space-y-4 p-4"
            style={{ textAlign: "justify" }}
            aria-labelledby="synthesis-heading"
          >
            <SectionPill sectionTitle={"Synthesis"} />
            <h3
              id="synthesis-heading"
              className="text-3xl sm:text-4xl font-bold flex items-center gap-3 mt-2!"
              style={{ textAlign: "start" }}
            >
              A Confluence of Cultures, Sciences, and Systems
            </h3>

            {/* Content Block */}
            <div className="flex flex-col md:justify-center gap-0 mx-auto">
              <section
                aria-label="Integration Initiatives - Part 1"
                className="bg-white rounded-2xl xs:p-3 md:p-5 flex flex-col justify-start items-start gap-y-5 bg-gradient-to-t from-gray-8 to-[#fff3d1] border border-dashed border-primary-variant-3 hover:border-primary-1 transition-all duration-300"
              >
                <p className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    className="mt-1"
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <span>
                    SLSRP also plays a critical role in bridging Eastern and
                    Western knowledge traditions.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    className="mt-1"
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <span>
                    Our social initiatives extend into cross-cultural scientific
                    integration, where traditional Indian practices are studied
                    alongside contemporary global models.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    className="mt-1"
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <span>
                    In partnership with international universities, we conduct
                    mixed-method studies, co-author publications, and organize
                    collaborative symposia.
                  </span>
                </p>
              </section>

              <section
                aria-label="Integration Initiatives - Part 2"
                className="rounded-2xl xs:p-3 md:p-5 flex flex-col justify-start items-start gap-y-5 mt-5 bg-gradient-to-t from-gray-8 to-[#fff3d1] border border-dashed border-primary-variant-3 hover:border-primary-1 transition-all duration-300"
              >
                <p className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    className="mt-1"
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <span>
                    This allows for mutual learning, deeper insight, and global
                    positioning of Indian knowledge systems—not as alternatives,
                    but as complements to modern scientific understanding.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    className="mt-1"
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <span>
                    This integration is not symbolic—it is structural. It shapes
                    curriculum, influences policy, and opens up new areas of
                    inquiry where values and science intersect meaningfully.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt=""
                    className="mt-1"
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <span>
                    As a result, SLSRP becomes a hub for a new type of
                    scientific diplomacy—one that values ancestral intelligence
                    and academic sophistication equally.
                  </span>
                </p>
              </section>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
