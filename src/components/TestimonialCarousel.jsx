import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const testimonials = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review: "Great experience! The quality exceeded my expectations.",
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review: "Amazing service and fast delivery! Highly recommend.",
  },
  {
    name: "Alice Brown",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    review: "A fantastic store with great prices and support.",
  },
];

const TestimonialCarousel = () => {
  const { darkMode } = useContext(ThemeContext);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`p-10 ${
        darkMode ? "bg-zinc-400 text-white" : "bg-white text-black"
      }  shadow-md`}
    >
      <div className="w-full max-w-md mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-full flex flex-col items-center justify-center"
            >
              <img
                className="w-16 h-16 rounded-full shadow-md"
                src={t.image}
                alt={t.name}
              />
              <p className="mt-3 text-lg font-semibold">{t.name}</p>
              <p className="text-center max-w-sm mt-2">{t.review}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-red-600 scale-125" : "bg-gray-400"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
