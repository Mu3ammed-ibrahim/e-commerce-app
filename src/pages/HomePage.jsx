import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TopSelling from "../components/TopSelling";
import ServicesOverview from "../components/ServicesOverview";
import Footer from "../components/Footer";
import TestimonialCarousel from "../components/TestimonialCarousel";
import OurProducts from "../components/Our Products";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurProducts/>
      <TopSelling />
      <ServicesOverview />
      <TestimonialCarousel/>
      <Footer />
    </>
  );
}
