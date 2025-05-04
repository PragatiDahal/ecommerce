import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "Absolutely love the quality and fit! &Stitch never disappoints—every piece feels like it was made just for me.",
    name: "Aarushi M.",
  },
  {
    id: 2,
    quote:
      "Sustainable, stylish, and so comfortable! &Stitch is my go-to for timeless fashion.",
    name: "Riya S.",
  },
  {
    id: 3,
    quote:
      "From the fabric to the fit, everything about &Stitch screams quality. I keep coming back for more!",
    name: "Anjali T.",
  },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/images/about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 backdrop-blur-lg" />
        <motion.div
          className="bg-[#D1D5DB]/20 w-full h-[60vh] flex items-center justify-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl md:text-3xl font-semibold z-10 max-w-2xl text-[#111827] text-center">
            Our passion is to bring you fashion that <br />
            speaks to your individuality—crafted with <br />
            care, designed for impact.
          </h1>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="md:w-1/2 relative flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="relative w-[350px] h-[400px] overflow-hidden shadow-lg"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)",
            }}
          >
            <img
              src="/images/ab.jpg"
              alt="Shop Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-bold mb-2">OUR SHOP</h2>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Focusing on Quality Material, Good Design
          </h3>
          <p className="text-gray-700 leading-relaxed">
            At &Stitch, we weave style and comfort into every thread. Our
            passion is to bring you fashion that speaks to your
            individuality—crafted with care, designed for impact. From timeless
            classics to trendsetting pieces, we stitch together quality,
            creativity, and confidence in every collection.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-200 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Quality Promise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Exceptional Craftsmanship", "Sustainable Fashion", "Timeless Design"].map(
              (title, i) => (
                <motion.div
                  key={i}
                  className="p-6 bg-white rounded-lg shadow"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-gray-600 mt-2">
                    {[
                      "Designed with precision & crafted with care, made for timeless wear.",
                      "Ethically sourced materials that minimize environmental impact.",
                      "Classic designs that never go out of style, blending tradition with modernity.",
                    ][i]}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center relative">
        <h2 className="text-3xl font-semibold mb-8">What Our Customers Say</h2>
        <div className="relative bg-white p-8 rounded-lg shadow-md h-48 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full"
            >
              <p className="italic text-gray-700 text-lg">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>
              <p className="font-bold mt-4 text-gray-900">
                - {testimonials[currentIndex].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-black" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
