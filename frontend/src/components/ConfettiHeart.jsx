import React from "react";
import {motion} from "framer-motion";

const ConfettiHeart = () => {
  // Randomize animation properties for each heart to create a natural confetti effect
  const x = (Math.random() - 0.5) * 200; // Horizontal spread
  const y = -(Math.random() * 150 + 20); // Vertical movement (upwards)
  const scale = Math.random() * 0.7 + 0.5; // Random size
  const duration = Math.random() * 1.5 + 0.8; // Random animation duration
  const rotate = (Math.random() - 0.5) * 120; // Random rotation

  return (
    <motion.div
      className={`absolute bottom-[10px] left-[50%] pointer-events-none text-[${Math.random() * 1 + 0.5}rem]`}
      initial={{ opacity: 1, y: 0, x: '-50%', scale: 0.5, rotate: 0 }}
      animate={{
        opacity: 0, // Fade out
        y: y,
        x: `calc(-50% + ${x}px)`, // Move to random horizontal position
        scale: scale,
        rotate: rotate,
      }}
      transition={{
        duration: duration,
        ease: "circOut", // An easing that gives a nice "popping" feel
      }}
    >
      💖
    </motion.div>
  );
};

export default ConfettiHeart;