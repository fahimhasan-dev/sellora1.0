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
    title: "Fresh ",
    title2: "Organic Fruits Online",
    subtitle:
      "Get 20% off fresh seasonal fruits, carefully packed and delivered to your home.",
    button: "Shop Now",
    icon: FaShoppingBag,
    image: "/images/hero-1 (1).png",
  },
  {
    id: 2,
    title: "Hot  ",
    title2: "Snacks & Fast Food",
    subtitle:
      "Enjoy crispy fries and juicy burgers with buy one get one free deals.",
    button: "Order Now",
    icon: FaHamburger,
    image: "/images/hero-2.png",
  },
  {
    id: 3,
    title: "Sweet ",
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
    <div className="w-full h-[70vh] bg-[#6c80d825] flex items-center justify-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-full px-6 md:px-56">
              {/* Left Side Text */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="text-center md:text-left space-y-4"
              >
                {" "}
                <h1 className={` text-3xl md:text-4xl  font-bold leading-snug text-gray-900`}>
                  <span className={`${imperial.className} text-7xl font-extrabold text-[#6c7fd8] `}>{banner.title}</span>
                 <br/>
                  {banner.title2}
                </h1>
                <p className="text-gray-700 text-lg">{banner.subtitle}</p>
                <div className="flex ">
                  {" "}
                  <button className="mt-4 w-[50%] px-6 py-3 flex justify-center items-center gap-1  border-gray-600 rounded-xl bg-indigo-500  hover:bg-indigo-600 hover:text-lg text-white transition">
                 <banner.icon className="inline-block mr-2 text-lg" /> {banner.button}
                  </button>
                </div>
              </motion.div>

              {/* Right Side Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="flex justify-center md:justify-end"
              >
                <Image
                  src={banner.image}
                  alt="banner"
                  width={500}
                  height={400}
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
