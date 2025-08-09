import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import SectionPill from "../components/SectionPill";

import space from "../assets/Videos/space.mp4";
import nature from "../assets/Videos/nature.mp4";
import ocean from "../assets/Videos/ocean.mp4";

import StepConnector from "../assets/Images/step-connector.svg";
import OurServices from "../components/home-components/OurServices";
import WhyChooseUs from "../components/home-components/WhyChooseUs";
import Section6 from "../components/home-components/Section6";
import ancient from "../assets/Images/home-ancient.jpg";
import jc from "../assets/Images/jc.png";
import RoundedBottomRight from "../assets/Images/hero-bottom-right.svg";
import RoundedBottomLeft from "../assets/Images/hero-bottom-left.svg";
import NavHoverLogo from "../assets/Images/nav-hover-icon.svg";
import resilient from "../assets/Images/home-what-matters-resilient.jpg";
import research from "../assets/Images/home-what-matters-research.jpg";
import responsible from "../assets/Images/home-what-matters-responsible.jpg";

import {
  heroSectionBottomContainerVariants,
  contentBasicVariants,
} from "../utils/animationVariants";

import {
  HandsGlobeIcon,
  InfiniteIcon,
  ShieldCheckIcon,
} from "../assets/Icons/Icons";

import "../Home.css";

const videoSlides = [
  {
    src: ocean,
    title: "Essence of Life",
    description:
      "Life is harmony, purpose, love, and conscious connection with all.",
    textColor: "text-white",
    showBottomImages: false,
  },
  {
    src: nature,
    title: "Power of Science",
    description:
      "Science empowers progress through logic, innovation, and fearless human curiosity.",
    textColor: "text-white",
    showBottomImages: true,
  },
  {
    src: space,
    title: "Responsibility to Earth",
    description:
      "Protecting Earth demands sustainability, ethics, respect, and mindful daily choices.",
    textColor: "text-white",
    showBottomImages: false,
  },
];

const Home = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const bottomRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % videoSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getVideoStyle = (index) => ({
    opacity: videoIndex === index ? 1 : 0,
    scale: videoIndex === index ? 1 : 3,
    y: videoIndex === index ? 0 : 20,
  });

  return (
    <div className="home w-full">
      <div
        className="landing-page"
        role="region"
        aria-label="Landing Section with Background Videos"
      >
        {/* Render all videos and fade between them */}
        {videoSlides.map((video, index) => (
          <motion.video
            key={index}
            className="background-video"
            src={video.src}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true" // Hide video from screen readers
            animate={getVideoStyle(index)}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        ))}

        {/* Text content area */}
        <div
          className="content"
          role="region"
          aria-label="Landing text content"
        >
          {videoSlides.map((video, index) =>
            videoIndex === index ? (
              <motion.div
                key={index}
                initial={false}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute xs:top-3/20 sm:top-4/20 md:top-3/10 lg:top-4/10 left-0"
              >
                <h1
                  className={`font-semibold! leading-tight ${video.textColor}  ml-6`}
                  style={{ color: "white" }}
                >
                  {video.title.split("\n").map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </h1>
                <h3
                  className={`w-3/4 ${video.textColor} ml-6`}
                  style={{ color: "white" }}
                >
                  {video.description}
                </h3>
              </motion.div>
            ) : null
          )}
        </div>

        {/* Decorative bottom with info icons */}
        <div
          className="flex justify-center items-center w-full"
          role="contentinfo"
          aria-label="Bottom Highlights"
        >
          <div
            ref={bottomRef}
            className="absolute bottom-0 xs:w-full md:w-9/10 lg:w-9/10 flex flex-row justify-between items-center gap-0"
          >
            <img
              src={RoundedBottomLeft}
              alt=""
              aria-hidden="true"
              className="self-end -mb-[0.8px] -me-[0.8px]"
              loading="lazy"
            />

            <motion.div
              className="w-full grid xs:grid-cols-1 md:grid-cols-3 md:gap-x-5 rounded-tl-xl rounded-tr-xl bg-gray-8 px-4 pt-4 pb-2 bg-gradient-to-t from-gray-8 to-[#fff3d1]"
              role="list"
              aria-label="Mission highlights"
              variants={heroSectionBottomContainerVariants}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="flex flex-col justify-center items-center gap-y-0.5 h-full xs:border-b-1 md:border-b-0 md:border-r-1 border-dashed border-gray-4 p-2"
                variants={contentBasicVariants}
                initial="initial"
                whileInView="whileInView"
                custom={1}
                viewport={{ once: true, amount: "some" }}
                exit="exit"
                role="listitem"
              >
                <h6 className="text-center font-semibold">
                  SLSRP - The timeless mission
                </h6>
                <InfiniteIcon
                  width={50}
                  height={50}
                  title="Timeless Mission Icon"
                />
              </motion.div>

              <motion.div
                className="flex flex-col justify-center items-center gap-y-2 h-full xs:border-b-1 md:border-b-0 md:border-r-1 border-dashed border-gray-4 p-2"
                variants={contentBasicVariants}
                initial="initial"
                whileInView="whileInView"
                custom={4}
                viewport={{ once: true, amount: "some" }}
                exit="exit"
                role="listitem"
              >
                <h6 className="text-center font-semibold">
                  Forging a Civilizational Shift - For sustenance
                </h6>
                <HandsGlobeIcon
                  width={40}
                  height={40}
                  title="Global Shift Icon"
                />
              </motion.div>

              <motion.div
                className="text-center flex flex-col justify-center items-center gap-y-2 h-full p-2"
                variants={contentBasicVariants}
                initial="initial"
                whileInView="whileInView"
                custom={8}
                viewport={{ once: true, amount: "some" }}
                exit="exit"
                role="listitem"
              >
                <h6 className="text-center font-semibold">
                  Sustaining Humanity
                </h6>
                <ShieldCheckIcon
                  width={40}
                  height={40}
                  title="Humanity Protection Icon"
                />
              </motion.div>
            </motion.div>

            <img
              src={RoundedBottomRight}
              alt=""
              aria-hidden="true"
              className="self-end -mb-[0.8px] -ms-[0.8px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div
        className="w-full px-4 py-8 bg-primary-variant-7"
        role="region"
        aria-labelledby="welcome-heading"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Left Text Box */}
          <section
            className="space-y-4 p-4"
            style={{ textAlign: "justify" }}
            aria-label="Introduction about SLSRP"
          >
            <SectionPill sectionTitle={"SLSRP"} />
            <div className="flex items-center gap-3">
              <h2 id="welcome-heading" className="mt-2! text-3xl font-bold">
                Welcome to <span className="text-primary-1">SLSRP</span>
              </h2>
            </div>
            <h3
              className="text-xl font-semibold"
              style={{ textAlign: "start" }}
            >
              Semporutkalai Life Science Research Park (SLSRP)
            </h3>
            <p>
              A global initiative inspired by the Tamil word “Semporul”, which
              means the supreme essence of life. It is founded on the vision
              that human evolution, environmental protection, and scientific
              progress must go hand in hand.
            </p>
            <p>
              Spearheaded by Thiru. Jeyachandran Srinivasan, a distinguished
              social entrepreneur and thought leader, SLSRP represents a powerful
              confluence of Eastern ancient wisdom systems and contemporary
              scientific research.
            </p>
            <p>
              Established as a multi-sectoral platform, SLSRP operates as a
              center of excellence for noetic science, sustainable environmental
              engineering, and youth transformation programs, with deep roots in
              Indian cultural heritage and a bold vision for global impact.
            </p>
          </section>

          {/* Right Image Box */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center"
            role="img"
            aria-label="Portrait of Thiru. Jeyachandran Srinivasan, founder of SLSRP"
          >
            <img
              src={jc}
              alt="Portrait of Thiru. Jeyachandran Srinivasan"
              className="w-full max-w-md rounded-md"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Additional Section */}
        <div aria-label="Why Choose Us Section">
          <WhyChooseUs />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-4 pt-3">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="flex flex-col items-center text-center"
          role="region"
          aria-label="Introduction section"
        >
          <div
            className="lg:w-[800px] md:w-[700px] text-center flex flex-col md:space-y-5 space-y-3"
            role="group"
            aria-labelledby="section-title"
          >
            <div
              className="overflow-hidden md:pe-5 md:ps-5 p-2 flex justify-center items-center gap-2"
              style={{ fontWeight: "700" }}
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-full"
                style={{ backgroundColor: "#ffbb00" }}
                aria-hidden="true"
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                  loading="lazy"
                  aria-label="Checklist icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
                  />
                </svg>
              </div>
              <h3 id="section-title" className="mt-3!">
                What's<span className="text-primary-1"> Matters</span>
              </h3>
            </div>
            <p className="text-[17px] lg:pe-20 lg:ps-20 pe-5 ps-5">
              We live in a world overwhelmed by complexity—mental stress,
              environmental collapse, socio-political fragmentation, and
              disconnected knowledge systems. <br />
              SLSRP addresses this through a Wholistic model of transformation
              that does not separate science from spirit, or technology from
              ethics.
            </p>
          </div>

          <div
            className="grid lg:grid-cols-[3fr_2fr_3fr] sm:grid-cols-[3fr_3fr_3fr] grid-cols-2 lg:gap-9 sm:gap-3 gap-4 max-w-[1100px] lg:h-[290px] md:h-[320px] sm:h-[290px] h-[500px] mx-5 md:mt-20 mt-10"
            role="group"
            aria-label="Visual representations of core values"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={responsible}
                loading="lazy"
                alt="Representation of responsibility"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="rounded-2xl overflow-hidden">
              <img
                src={resilient}
                loading="lazy"
                alt="Representation of resilience"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-2xl overflow-hidden sm:col-span-1 col-span-2">
              <img
                src={research}
                loading="lazy"
                alt="Representation of research and inquiry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex md:flex-row flex-col justify-center items-center lg:gap-25 md:gap-10 gap-5 p-5 mt-4"
            role="region"
            aria-label="Core message section"
          >
            <p className="text-center h-auto">
              We bridge the intangible aspects of human consciousness with the
              tangible, measurable goals of global development—offering society
              a roadmap that is both deeply philosophical and radically
              practical.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center"
              role="group"
              aria-label="Step progression for transformation"
            >
              <div className="w-1/4">
                <div className="flex xs:flex-col md:flex-row justify-center items-center gap-0">
                  {/* Step 1 */}
                  <div
                    className="flex flex-row justify-start items-center gap-2 group p-5 bg-primary-variant-8 rounded-lg xs:min-w-[15rem] md:min-w-auto"
                    role="listitem"
                    aria-label="Step 1: Responsible"
                  >
                    <div className="p-1 relative border-1 border-dashed border-primary-1 rounded-xl">
                      <span className="w-12 h-12 bg-primary-1 rounded-lg flex items-center justify-center text-white font-semibold text-sm relative z-10">
                        1
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="w-10 h-10 rounded-lg bg-primary-1 opacity-75 group-hover:animate-ping"></span>
                      </span>
                    </div>
                    <h6 className="text-sm text-center mb-0!">Responsible</h6>
                  </div>

                  {/* Connector */}
                  <img
                    src={StepConnector}
                    alt=""
                    loading="lazy"
                    role="presentation"
                    className="xs:w-4 xs:h-auto md:h-7 md:w-auto xs:rotate-90 md:rotate-0 self-center object-cover -my-1"
                    aria-hidden="true"
                  />

                  {/* Step 2 */}
                  <div
                    className="flex flex-row justify-start items-center gap-2 group p-5 bg-primary-variant-8 rounded-lg xs:min-w-[15rem] md:min-w-auto"
                    role="listitem"
                    aria-label="Step 2: Resilient"
                  >
                    <div className="p-1 relative border-1 border-dashed border-primary-1 rounded-xl">
                      <span className="w-12 h-12 bg-primary-1 rounded-lg flex items-center justify-center text-white font-semibold text-sm relative z-10">
                        2
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="w-10 h-10 rounded-lg bg-primary-1 opacity-75 group-hover:animate-ping"></span>
                      </span>
                    </div>
                    <h6 className="text-sm text-center mb-0!">Resilient</h6>
                  </div>

                  {/* Connector */}
                  <img
                    src={StepConnector}
                    loading="lazy"
                    alt=""
                    role="presentation"
                    className="xs:w-4 xs:h-auto md:h-7 md:w-auto xs:rotate-90 md:rotate-0 self-center object-cover -my-1"
                    aria-hidden="true"
                  />

                  {/* Step 3 */}
                  <div
                    className="flex flex-row justify-start items-center gap-2 group p-5 bg-primary-variant-8 rounded-lg xs:min-w-[15rem] md:min-w-auto"
                    role="listitem"
                    aria-label="Step 3: Research"
                  >
                    <div className="p-1 relative border-1 border-dashed border-primary-1 rounded-xl">
                      <span className="w-12 h-12 bg-primary-1 rounded-lg flex items-center justify-center text-white font-semibold text-sm relative z-10">
                        3
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="w-10 h-10 rounded-lg bg-primary-1 opacity-75 group-hover:animate-ping"></span>
                      </span>
                    </div>
                    <h6 className="text-sm text-center mb-0!">Research</h6>
                  </div>
                </div>
              </div>
            </motion.div>

            <p className="h-auto text-center">
              Whether it’s building an AI system to map biodiversity or helping
              youth tap into their emotional intelligence, our work is about
              crafting a responsible, resilient, and research-validated future.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <OurServices />
      <Section6 />
      <div className="w-full px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto flex sm:flex-col lg:flex-row sm:flex-col-reverse gap-8 items-center"
        >
          {/* left Image Box */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center"
            role="img"
            aria-label="SLSRP conceptual illustration"
          >
            <img
              src={ancient}
              loading="lazy"
              alt="Illustration representing SLSRP scientific focus"
              className="w-3/4"
            />
          </motion.div>

          {/* right Text Box */}
          <div
            className="space-y-4 p-4"
            style={{ textAlign: "justify" }}
            role="region"
            aria-labelledby="ancient-wisdom-heading"
          >
            <SectionPill sectionTitle={"Ancient Wisdom"} />
            <div
              className="text-3xl sm:text-4xl font-bold flex items-center gap-3 mt-2"
              id="ancient-wisdom-heading"
            >
              <h3 style={{ textAlign: "start" }}>
                A{" "}
                <span className="bg-gradient-to-r from-primary-1 via-primary-variant-2 to-primary-variant-3 bg-clip-text text-transparent">
                  Deep Respect
                </span>{" "}
                for Ancient Knowledge
              </h3>
            </div>

            <div className="flex flex-col md:justify-center gap-0 mx-auto">
              <div
                className="bg-white rounded-2xl xs:p-3 md:p-5 flex flex-col justify-start items-start gap-y-5 bg-gradient-to-t from-gray-8 to-[#fff3d1] border border-dashed border-primary-variant-3 hover:border-primary-1 transition-all duration-300"
                role="group"
                aria-label="Ancient knowledge descriptions"
              >
                <p className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt="Decorative navigation logo"
                    className="mt-1"
                    role="presentation"
                    aria-hidden="true"
                    loading="lazy"
                  />
                  SLSRP stands at the frontier where Applied noetic science
                  research, Tamil Siddha science, Eastern ancient traditional
                  medicine systems, Physical Reflex practices, and indigenous
                  healing traditions are not merely preserved but scientifically
                  validated and globally positioned.
                </p>
                <p className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt="Decorative navigation logo"
                    className="mt-1"
                    role="presentation"
                    aria-hidden="true"
                    loading="lazy"
                  />
                  We operate in close coordination with government ministries,
                  research institutions, and thought leaders to create academic
                  pathways and practical platforms that connect the past with
                  the future
                </p>
                <p className="flex items-start gap-2">
                  <img
                    src={NavHoverLogo}
                    alt="Decorative navigation logo"
                    className="mt-1"
                    role="presentation"
                    loading="lazy"
                    aria-hidden="true"
                  />
                  Our Noetic Science Enablement on Unified Wholeness (nseUW)
                  program exemplifies this, offering a non-commercial,
                  merit-based certification ecosystem that brings structure,
                  credibility, and measurable outcomes to traditionally oral
                  knowledge systems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
