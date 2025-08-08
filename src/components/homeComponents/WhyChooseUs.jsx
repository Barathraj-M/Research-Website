import  { useRef } from "react";
import "./WhyChooseUs.css";
import { motion, useInView } from "framer-motion";
import NavHoverLogo from "../../assets/Images/nav-hover-icon.svg";


const contents = [
  {
    title: "Social Transformation through Noetic Science",
    description:
      "We aim to validate and promote consciousness-based practices rooted in Eastern systems — such as meditation, mental reflux, Siddha traditions, and integrated emotional frameworks. These are studied through rigorous scientific research and then scaled through certified programs, workshops, and youth engagement models.",
  },
  {
    title: "Environmental Stewardship through Innovation",
    description:
      "SLSRP also pioneers solutions to some of the most pressing ecological problems — such as biodiversity loss, pollution, and climate degradation. Through innovations like the PhytoVault (a digital repository of India’s medicinal and aromatic plants), AI-enabled eco-technologies, and STEM - driven regenerative design, we translate research into real - world environmental impact.",
  },
];
const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true });
  const rightRef = useRef(null);
  const rightInView = useInView(rightRef, { once: true });

  return (
    <div className="why-choose-us pl-15 pr-15 p-10 mt-12">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row gap-6"
      >
        {/* Left Content */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 1, x: -200 }}
          animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 1, x: -200 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="flex-1"
        >
          <div className="flex gap-4 items-center">
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
              style={{ backgroundColor: "#ffbb00" }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.172 5.172a4.5 4.5 0 016.364 0L12 7.636l2.464-2.464a4.5 4.5 0 116.364 6.364L12 21 3.172 11.536a4.5 4.5 0 010-6.364z"
                />
              </svg>
            </div>
            <h3>Our Core</h3>
          </div>

          <p
            className="mt-5 ml-2 text-2xl max-w-xl font-semibold"
            style={{ fontSize: "1.2rem" }}
          >
            <span className="text-[#ffbb00]"> At SLSRP</span>, we believe that
            the future of humanity depends on our ability to evolve — internally
            and externally. Our research park is built upon a dual-core mission
            that touches both the inner consciousness of individuals and the{" "}
            outer ecosystems of the planet.
          </p>

          <div className="border-t border-dashed border-gray-500 mt-5" />

          {/* Repeated Content Block */}
          {contents.map((content, i) => (
            <div className="mt-6" key={i}>
              <h5 className="text-black font-bold flex items-center gap-2">
                <img src={NavHoverLogo} alt="nav-logo" /> {content.title}
              </h5>
              <p className="mt-2 text-md">{content.description}</p>
              <div className="border-t border-dashed border-gray-500 mt-5" />
            </div>
          ))}
        </motion.div>

        {/* Right Image */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 200 }}
          animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="flex-1  flex justify-center"
        >
          <img
            src="https://cdn.prod.website-files.com/682ece3ee8db099bf4d4580f/683585dd0346c20307f1e513_3ef414f9ff986dba7104bc7f30ec8a38_why-choose-image.webp"
            alt="Industry Visual"
            className="w-full max-w-[600px] max-h-[650px] object-cover rounded-xl"
          />
          {/* <div className="whybox flex justify-center items-center absolute bottom-10 lg:bottom-[3.75rem]">
            <PrimaryButton text={"Meet our Team"} />
          </div> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
