import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";

const AboutPage = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <Navbar />
      <section
        className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-zinc-800 text-white" : "bg-white text-black"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12 animate-fadeIn">
            <h1
              className={`text-4xl font-bold mb-4 animate-fadeIn delay-100 ${
                darkMode ? "text-red-600" : "text-red-700"
              }`}
            >
              About Us
            </h1>
            <p className="text-lg animate-fadeIn delay-200">
              Welcome to our Eshop! We’re dedicated to delivering excellence and
              providing you with the best products.
            </p>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="animate-fadeIn delay-300">
              <h2
                className={`text-2xl font-semibold mb-4 animate-fadeIn delay-400 ${
                  darkMode ? "text-red-600" : "text-red-700"
                }`}
              >
                Our Story
              </h2>
              <p className="mb-4 animate-fadeIn delay-500">
                Our journey began with a simple mission: to create a brand that
                truly cares about its customers. From humble beginnings to a
                thriving business, every step has been driven by passion,
                innovation, and commitment.
              </p>
              <p className="animate-fadeIn delay-600">
                We believe in quality, creativity, and building lasting
                relationships with our community. Thank you for being a part of
                our story.
              </p>
            </div>

            {/* Image with Gradient Overlay */}
            <div className="relative animate-fadeIn delay-700">
              <img
                src="/src/assets/undraw_in-sync_3wdt.svg"
                alt="Our Team"
                className="w-full h-auto rounded-xl shadow-lg transform transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
