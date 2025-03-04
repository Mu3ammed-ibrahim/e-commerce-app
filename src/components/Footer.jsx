import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";


const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={`bg-gray-300 text-gray-300 py-12 ${darkMode ?"bg-zinc-900 " :"bg-gray-300"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Footer Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-red-500 text-2xl font-bold">ShopMate</h2>
            <p className={`mt-3 text-black ${darkMode ?"text-white " :"text-black"}`}>
              Your one-stop shop for the best products. We ensure quality and great deals!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-red-500 text-xl font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <NavLink to="/" className={`hover:text-red-500 text-black transition duration-300 ${darkMode ?"text-white" :"text-black"}`}>Home</NavLink>
              </li>
              <li>
                <NavLink to="" className={`hover:text-red-500 text-black transition duration-300 ${darkMode ?"text-white" :"text-black"}`}>Shop</NavLink>
              </li>
              <li>
                <NavLink to="/AboutUs" className={`hover:text-red-500 text-black transition duration-300 ${darkMode ?"text-white" :"text-black"}`}>About Us</NavLink>
              </li>
              <li>
                <NavLink to="/ContactUs" className={`hover:text-red-500 text-black transition duration-300 ${darkMode ?"text-white" :"text-black"}`}>Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-red-500 text-xl font-semibold">Customer Support</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#" className={`hover:text-red-500 transition text-black duration-300 ${darkMode ?"text-white" :"text-black"}`}>FAQs</a>
              </li>
              <li>
                <a href="#" className={`hover:text-red-500 transition text-black duration-300 ${darkMode ?"text-white" :"text-black"}`}>Returns & Refunds</a>
              </li>
              <li>
                <a href="#" className={`hover:text-red-500 transition text-black duration-300 ${darkMode ?"text-white" :"text-black"}`}>Shipping Policy</a>
              </li>
              <li>
                <a href="#" className={`hover:text-red-500 transition text-black duration-300 ${darkMode ?"text-white" :"text-black"}`}>Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-red-500 text-xl font-semibold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 text-center text-gray-500 border-t border-gray-700 pt-6">
          <p>© {new Date().getFullYear()} ShopMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
