import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emma Carter",
    title: "Logistics Manager",
    text: "Eco-Supply helped us cut logistics emissions while ensuring timely deliveries. A true sustainability partner.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ethan Wilson",
    title: "Supply Head",
    text: "Highly recommend it for businesses serious about going green.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "James Turner",
    title: "Green Advisor",
    text: "Thanks to Eco-Supply Transportation, our last-mile deliveries are now 100% emission-free.",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Olivia Brown",
    title: "Enviro Lead",
    text: "It’s great to see a logistics partner that shares our values for a cleaner planet.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "David Lee",
    title: "Supply Chain Head",
    text: "Efficiency and sustainability in one seamless service.",
    img: "https://randomuser.me/api/portraits/men/90.jpg",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Testimonials = () => {
  return (
    <div
    className="mt-20 p-2" 
    >
      <motion.div
        className="flex flex-wrap justify-center gap-6 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white shadow-lg rounded-2xl p-5 w-full sm:w-[300px] md:w-[270px] flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={t.img}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-black">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.title}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">{t.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
