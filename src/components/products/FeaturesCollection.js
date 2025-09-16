// components/FeaturesCollection.tsx

"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
// https://i.ibb.co.com/vvZ83596/6-1.jpg
// https://i.ibb.co.com/GQgmJxB4/5.jpg
// https://i.ibb.co.com/6c7FPN2D/3.jpg
// https://i.ibb.co.com/ZRMdLjzc/2-2.jpg
// https://i.ibb.co.com/BKjCbJff/1-1.jpg
const products = [
  {
    name: "Organic Vegetables",
    price: 24,
    rating: 4,
    image: "https://i.ibb.co.com/vvZ83596/6-1.jpg",
  },
  {
    name: "Vegetable Pickles",
    price: 9,
    rating: 5,
    image: "https://i.ibb.co.com/GQgmJxB4/5.jpg",
  },
  {
    name: "Fresh Fruits",
    price: 25,
    rating: 4,
    image: "https://i.ibb.co.com/6c7FPN2D/3.jpg",
  },
  {
    name: "Fresh Juice",
    price: 5,
    rating: 4,
    image: "https://i.ibb.co.com/ZRMdLjzc/2-2.jpg",
  },
  {
    name: "Bakery & Sweets",
    price: 10,
    rating: 4,
    image: "https://i.ibb.co.com/BKjCbJff/1-1.jpg",
  },
];

export default function FeaturesCollection() {
  return (
    <section className="relative py-16 bg-[#6c80d825] overflow-hidden">
      {/* === Background Illustrations === */}
      <Image
        src="/bg/capsicum.png"
        alt="capsicum"
        width={80}
        height={80}
        className="absolute top-10 left-10 opacity-20"
      />
      <Image
        src="/bg/tomato.png"
        alt="tomato"
        width={80}
        height={80}
        className="absolute bottom-20 left-5 opacity-20"
      />
      <Image
        src="/bg/grape.png"
        alt="grape"
        width={80}
        height={80}
        className="absolute top-32 right-12 opacity-20"
      />
      <Image
        src="/bg/eggplant.png"
        alt="eggplant"
        width={80}
        height={80}
        className="absolute bottom-10 right-20 opacity-20"
      />

      {/* Container */}
      <div className="relative max-w-[90%] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#6c7fd8] font-semibold">✱ Future Products</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Our Features Collection
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                {/* Image */}
                <div className="overflow-hidden ">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-xl transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 text-center ">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex justify-center mt-2 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`h-4 w-4 ${
                          i < item.rating ? "text-[#6c7fd8]" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm">
                    Starts From : ${item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
