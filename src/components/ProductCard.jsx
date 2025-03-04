/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import ProductDetail from "./ProductDetail";
import CartBtn from "../components/NeuButton";

import { motion, AnimatePresence } from "framer-motion";

export default function Card({ product }) {
  const { darkMode } = useContext(ThemeContext);
  const [isDetailVisible, setDetailVisible] = useState(false);

  // Animation variants for more reusable and readable animations
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const modalVariants = {
    hidden: {
      x: -100, // Start slightly below
    },
    visible: {
      x: 0,
      transition: {
        type: "spring", // More natural spring-like animation
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      x: 100, // Slide up on exit
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  const handleAdd = () => {
    setDetailVisible(true);
  };

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className={`shadow-lg rounded-lg z-0 hover:bg-zinc-500 p-4 w-80% sm:w-1/3 flex flex-col ${
          darkMode ? "bg-zinc-800" : "bg-white"
        } ${darkMode ? "hover:shadow-red-600" : "hover:shadow-zinc-600"}`}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain rounded-md"
        />
        <div className="flex z-0 flex-col flex-grow">
          <h2 className="text-lg font-semibold mt-2 text-red-600">
            {product.title}
          </h2>
          <span
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            ${product.Price}
          </span>
          <p
            className={`mt-1 flex-grow ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {product.description}
          </p>
          <div className="flex z-0 justify-between items-center mt-auto border-t border-gray-300 pt-3">
            <CartBtn
              className="border border-black px-4 py-2 rounded-full transition hover:bg-white"
              handleAdd={handleAdd}
            >
              Add to Cart
            </CartBtn>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isDetailVisible && (
          <motion.div
            key="modal" // Ensure unique key for proper animation
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
          >
            <ProductDetail
              product={product}
              onClose={() => setDetailVisible(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
