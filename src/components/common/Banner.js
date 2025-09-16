"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaShoppingBag, FaHamburger, FaBirthdayCake } from "react-icons/fa";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Image from "next/image";
import { Imperial_Script } from "next/font/google";

const imperial = Imperial_Script({
  weight: "400",
  subsets: ["latin"],
});

const banners = [
  {
    id: 1,
    title: "Fresh",
    title2: "Organic Fruits Online",
    subtitle:
      "Get 20% off fresh seasonal fruits, carefully packed and delivered to your home.",
    button: "Shop Now",
    icon: FaShoppingBag,
    image: "/images/hero-1 (1).png",
  },
  {
    id: 2,
    title: "Hot",
    title2: "Snacks & Fast Food",
    subtitle:
      "Enjoy crispy fries and juicy burgers with buy one get one free deals.",
    button: "Order Now",
    icon: FaHamburger,
    image: "/images/hero-2.png",
  },
  {
    id: 3,
    title: "Sweet",
    title2: "Cakes & Desserts",
    subtitle:
      "Celebrate every moment with soft cakes and delightful desserts, baked fresh daily.",
    button: "Grab Deal",
    icon: FaBirthdayCake,
    image: "/images/hero-3.png",
  },
];

export default function HeroSlider() {
  return (
    <div className="w-full bg-[#6c80d825]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop
        className="w-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className="
                relative mx-auto max-w-screen-2xl
                min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]
                flex flex-col md:grid md:grid-cols-2
                items-center justify-center
                px-4 sm:px-6 md:px-12 lg:px-20 xl:px-10
              "
            >
              {/* ==== Text ==== */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="
                  relative z-10
                  text-center md:text-left
                  space-y-4
                  p-3 sm:p-4 md:p-0
                  w-full
                "
              >
                <h1
                  className="
                    leading-snug font-bold text-gray-900
                    text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl
                  "
                >
                  <span
                    className={`${imperial.className} block text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[#6c7fd8]`}
                  >
                    {banner.title}
                  </span>
                  {banner.title2}
                </h1>

                <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl max-w-md mx-auto md:mx-0">
                  {banner.subtitle}
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="mt-4 min-w-[120px] px-4 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm sm:text-base transition">
                    <banner.icon className="text-base sm:text-lg" />
                    {banner.button}
                  </button>
                </div>
              </motion.div>

              {/* ==== Image ==== */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="
                  mt-6 md:mt-0
                  flex justify-center md:justify-end
                  w-full
                "
              >
                <Image
                  src={banner.image}
                  alt={banner.title2}
                  width={650}
                  height={500}
                  priority
                  className="
                    w-60 sm:w-72 md:w-[550px] lg:w-[650px]
                    h-auto object-contain
                  "
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
