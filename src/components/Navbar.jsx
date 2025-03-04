import  { useContext } from "react";
import Switch from "./Switch";
import Input from "./Search";
import { ThemeContext } from "../Context/ThemeContext";
import { useCart } from "../Context/CartContext";
import { motion } from "framer-motion";
import { NavLink } from "react-router";  // Correct import
import logo from "../assets/navbar/Logo.png";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  const { darkMode } = useContext(ThemeContext);
  const { cart } = useCart();

  // Calculate total items in cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className={`flex justify-between items-center sticky top-0 z-50 px-12 py-4 ${
        darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
      } shadow-sm`}
    >
      {/* Left Section - Logo + Navigation Links */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={logo}
            alt="Eshop Logo"
            className="h-12 w-auto object-contain"
          />
        </NavLink>

        {/* Navigation Links */}
        <ul className="flex items-center gap-4 font-sans-serif text-gray-500">
          <li className="text-2xl md:text-3xl tracking-widest font-semibold text-red-600">
            <NavLink to="/">ESHOP</NavLink>
          </li>
          <li className="px-4 font-semibold hover:text-red-800 hidden lg:block">
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li className="px-4 font-semibold hover:text-red-800 hidden lg:block">
            <NavLink to="/ContactUs">Contact Us</NavLink>
          </li>

          <li className="px-4 font-semibold hover:text-red-800 hidden lg:block">
            <NavLink to="/AboutUs">About us</NavLink>
          </li>
        </ul>
      </div>

      {/* Right Section - Search, Cart, Dark Mode Switch */}
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, type: "spring", damping: 10 }}
        className="flex items-center gap-5"
      >
        <Input />
        
        {/* Cart Icon with Dynamic Indicator */}
        <NavLink 
          to="/MyCart" 
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <ShoppingBag 
              className={`w-6 h-6 ${
                darkMode ? "text-white" : "text-black"
              }`} 
            />
            
            {/* Cart Item Count Indicator */}
            {cartItemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-red-500 text-white 
                  text-xs rounded-full w-5 h-5 flex items-center justify-center"
              >
                {cartItemCount}
              </motion.span>
            )}
          </motion.div>
        </NavLink>

        <Switch />
      </motion.div>
    </motion.nav>
  );
}