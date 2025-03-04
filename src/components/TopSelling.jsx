import Card from "./ProductCard";
import Image1 from "../assets/Men clothe/Men clothe1.png";
import Image2 from "../assets/Men clothe/Men clothe2.png";
import Image3 from "../assets/Men clothe/Men clothe3.png";
import Image4 from "../assets/Men clothe/Men clothe4.png";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";
import { motion } from "framer-motion";

export default function TopSelling() {
  const { darkMode } = useContext(ThemeContext);
  const ImagesList = [
    {
      id: 1,
      image: Image1,
      title: "Classic Black Hoodie – Comfort & Style Combined",
      description:
        "Stay effortlessly stylish with this men's black hoodie, designed for both comfort and versatility.",
      Price: 40,
    },
    {
      id: 2,
      image: Image2,
      title: "Classic Black Short-Sleeve T-Shirt",
      description:
        "Stay stylish and comfortable with this classic black short-sleeve t-shirt. Made from soft, breathable fabric, it offers a relaxed fit perfect for everyday wear. ",
      Price: 20,
    },
    {
      id: 3,
      image: Image3,
      title: "Timeless Grace Elegant White Dress",
      description:
        "This sophisticated white dress embodies elegance and simplicity.",
      Price: 19,
    },
    {
      id: 4,
      image: Image4,
      title: "Classic Red Short-Sleeve T-Shirt",
      description:
        "tay stylish and comfortable with this classic red short-sleeve t-shirt. Made from soft, breathable fabric, it offers a relaxed fit perfect for everyday wear.",
      Price: 35,
    },
  ];

  return (
    <section
      className={`py-12 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white ${
        darkMode ? "bg-zinc-800" : "bg-white"
      }`}
    >
      {/* Header Section */}
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
          Top Selling Products
        </h1>
      </motion.div>

      {/* Show Only Three Cards */}
      <div className="flex flex-col  sm:flex-row justify-center gap-6">
        {ImagesList.map((item) => (
          <Card key={item.id} product={item} Price={item.Price} />
        ))}
      </div>
    </section>
  );
}
