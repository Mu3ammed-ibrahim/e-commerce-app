import { FaShippingFast, FaLock, FaUndo, FaHeadset } from "react-icons/fa";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Free Shipping",
    description: "Get your orders delivered fast and free.",
    icon: <FaShippingFast className="text-red-500 text-5xl" />,
  },
  {
    title: "Secure Payments",
    description: "All transactions are secured and encrypted.",
    icon: <FaLock className="text-red-500 text-5xl" />,
  },
  {
    title: "Easy Returns",
    description: "Hassle-free returns within 30 days.",
    icon: <FaUndo className="text-red-500 text-5xl" />,
  },
  {
    title: "24/7 Support",
    description: "We're here to help, anytime you need us.",
    icon: <FaHeadset className="text-red-500 text-5xl" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }, // Cards appear one by one
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ServicesOverview = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className={`py-12 lg:py-24 px-4 sm:px-6 lg:px-8 ${
        darkMode ? "bg-zinc-800" : "bg-gray-50"
      }`}
    >
      {/* Section Header */}
      <motion.div
       initial={{ opacity: 0, y: -200 }}
       transition={{ duration: 0.5 }}
       viewport={{ once: false }}
       whileInView={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-red-600">
          Overview of Our Services
        </h2>
        <p className={`mt-4 text-lg ${darkMode ? "text-white" : "text-gray-600"}`}>
          We offer a range of top-notch services to ensure a seamless shopping
          experience.
        </p>
      </motion.div>

      {/* Service Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center ${
              darkMode ? "bg-zinc-900" : "bg-white"
            }`}
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className={`text-xl font-semibold text-red-700`}>
              {service.title}
            </h3>
            <p className={`mt-2 ${darkMode ? "text-white" : "text-gray-600"}`}>
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesOverview;
