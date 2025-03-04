import Button from "./Button";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Image1 from "../assets/hero/Image1.png";
import Image2 from "../assets/hero/Image2.png";
import Image3 from "../assets/hero/Image3.png";

export default function Hero() {
  const { darkMode } = useContext(ThemeContext);

  const ImagesList = [
    {
      id: 1,
      image: Image1,
      title: "Up to 70% off on all women clothing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam",
    },
    {
      id: 2,
      image: Image2,
      title: "Up to 25% off on all men clothing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam",
    },
    {
      id: 3,
      image: Image3,
      title: "Up to 30% off on all kids clothing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false, // Continues sliding even when hovered
    arrows: false, // Hides the left & right navigation buttons

  };

  return (
    <section
      className={`w-full min-h-screen overflow-hidden flex items-center justify-center ${
        darkMode
          ? "bg-zinc-800 text-white"
          : "bg-gradient-to-r from-gray-300 to-gray-100 text-black"
      }`}
    >
      <motion.div initial={{x:400}} animate={{x:0}} transition={{duration:1}}  className="w-full max-w-screen-xl flex items-center justify-center">
        <Slider {...settings} className="w-full">
          {ImagesList.map((slide) => (
            <div key={slide.id} className="w-full">
              <div className="w-full flex flex-col-reverse md:flex-row justify-around items-center min-h-screen p-10">
                {/* Left Text Content */}
                <div className="flex flex-col justify-center items-start gap-7">
                  <h1 className="text-3xl md:text-5xl font-bold first-letter:text-red-600">
                    {slide.title}
                  </h1>
                  <p className="text-md text-gray-600 dark:text-gray-300 text-justify">
                    {slide.description}
                  </p>
                  <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
                    <Button>Shop now!</Button>
                  </div>
                </div>
                {/* Right Image */}
                <div className="flex">
                  <img
                    src={slide.image}
                    alt="Hero Slide"
                    className="h-96 md:h-96 rounded-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}
