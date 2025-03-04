import  { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import HomePage from "./pages/HomePage";
import "./App.css";
import ProductProvider from "./Context/ProudctContext";
import AboutPage from "./pages/AboutUs";
import ThemeProvider from "./Context/ThemeContext";
import MyCart from "./pages/MyCart";
import { CartProvider } from "./Context/CartContext";
import ContactUsPage from './pages/ConactUsPage';

// Scroll Reset Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Always scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Use 'smooth' for animated scrolling
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <ThemeProvider>
            <ScrollToTop /> {/* Add this line */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Home" element={<HomePage />} />
              <Route path="/AboutUs" element={<AboutPage />} />
              <Route path="/ContactUs" element={<ContactUsPage />} />
              <Route path="/MyCart" element={<MyCart />} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;