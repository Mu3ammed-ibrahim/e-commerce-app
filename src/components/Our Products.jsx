import Card from "./ProductCard";
import womanImg2 from "../assets/Women clothe/Women Clothe2.png";
import womanImg3 from "../assets/Women clothe/Women Clothe3.png";
import womanImg4 from "../assets/Women clothe/Women Clothe4.png";
import womanImg5 from "../assets/Women clothe/Women Clothe5.png";
import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../Context/ThemeContext";
const OurProducts = () => {
  const { darkMode } = useContext(ThemeContext);
  // Mock data for the products. You can replace it with your own data fetching logic.
  const products = [
    {
      id: 1,
      title: "Timeless Grace Elegant White Dress",
      description:
        "This sophisticated white dress embodies elegance and simplicity.",
      Price: 19.99,
      image: womanImg2,
    },
    {
      id: 2,
      title: "Chic Summer Outfit",
      description:
        " A trendy and breathable summer outfit that keeps you cool and stylish,Ideal for warm-weather adventures.",
      Price: 29.99,
      image: womanImg3,
    },
    {
      id: 3,
      title: "Modern Streetwear Set",
      description:
        "  A bold and fashionable streetwear ensemble designed for women who love to make a statement. Perfect for casual wear.",
      Price: 39.99,
      image: womanImg4,
    },
    {
      id: 4,
      title: "Classic Formal Dress ",
      description:
        " An elegant and timeless formal dress, perfect for special occasions or professional settings.",
      Price: 49.99,
      image: womanImg5,
    },
  ];
  return (
    <section
      className={`py-12 z-0 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white ${
        darkMode ? "bg-zinc-800" : "bg-white"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-10 space-y-2"
      >
        <p className="text-gray-600 font-semibold text-lg">
          We have got for you
        </p>
        <h1 className="text-red-600 text-3xl md:text-4xl font-bold tracking-tight">
          Our Products
        </h1>
      </motion.div>

      <div className="flex flex-col  sm:flex-row justify-center gap-6">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
