"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "The perfect recipe is always within your reach",
      description:
        "Search recipes instantly and get cooking inspiration powered by intelligent AI tools",
      image: "/images/home/food2.png",
      bgColor: "bg-orange-50",
    },
    {
      title: "Find delicious meals in just a few seconds",
      description:
        "Explore smart recipe recommendations crafted from your ingredients, taste, and mood.",
      image: "/images/home/food3.png",
      bgColor: "bg-yellow-50",
    },
  ];

  const router = useRouter();

  const handleRouteGetStarted = () => {
    router.push("/all-recipes");
  };
  const handleRouteRegister = () => {
    router.push("/signup");
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className={`relative z-10 ${slides[currentSlide].bgColor}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
            <div className="flex items-center flex-wrap px-2 md:px-0">
              <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                <motion.h1
                  className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  className="mt-8 text-gray-700 lg:w-10/12"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  className="mt-12 flex flex-col sm:flex-row gap-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <button
                    className="bg-orange-500 hover:bg-orange-600 text-orange-100 font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
                    onClick={handleRouteGetStarted}
                  >
                    Get Started
                  </button>
                  <button
                    className="border border-orange-500 text-orange-600 hover:bg-yellow-500 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
                    onClick={handleRouteRegister}
                  >
                    Register
                  </button>
                </motion.div>
              </div>

              <motion.div
                className="hidden md:block md:w-7/12 lg:w-6/12 relative"
                initial={{ x: 50, opacity: 0, scale: 0.9 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="relative w-full h-[500px] lg:h-[600px]">
                  <Image
                    src={slides[currentSlide].image}
                    className="relative w-full h-full object-cover"
                    alt="food illustration"
                    loading="lazy"
                    width={850}
                    height={700}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-orange-500 w-8"
                : "bg-orange-900 hover:bg-white/80 w-3"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 bg-yellow-200/30 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default Hero;
