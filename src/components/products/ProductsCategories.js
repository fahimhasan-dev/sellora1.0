"use client";

import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const categories = [
  {
    name: "Juice",
    items: 24,
    img: "https://i.ibb.co.com/Q7qD2Mwc/38-cp-categorylist.png",
    bg: "bg-green-50",
  },
  {
    name: "Vegetables",
    items: 21,
    img: "https://i.ibb.co.com/jZGnJ3xW/9-cp-categorylist.png",
    bg: "bg-yellow-50",
  },
  {
    name: "Fruits",
    items: 24,
    img: "https://i.ibb.co.com/FqDFsvyP/35-cp-categorylist.png",
    bg: "bg-pink-50",
  },
  {
    name: "Cold Drinks",
    items: 20,
    img: "https://i.ibb.co.com/mFq9dk2F/37-cp-categorylist.png",
    bg: "bg-purple-50",
  },
  {
    name: "Cookies",
    items: 24,
    img: "https://i.ibb.co.com/CKdcLNMh/34-cp-categorylist.png",
    bg: "bg-green-50",
  },
  {
    name: "Cooking Spice",
    items: 22,
    img: "https://i.ibb.co.com/rGWGnmT3/36-cp-categorylist.png",
    bg: "bg-orange-50",
  },
  {
    name: "Nuts & Seeds",
    items: 24,
    img: "https://i.ibb.co.com/6cjkhVMM/33-cp-categorylist.png",
    bg: "bg-green-50",
  },
  {
    name: "Orange",
    items: 24,
    img: "https://i.ibb.co.com/pvDjZ4sR/32-cp-categorylist.png",
    bg: "bg-orange-50",
  },
];

export default function ProductsCategories() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 ">
      <div className="w-[90%] mx-auto ">
        {/* Header */}
        <div className="text-center pb-10">
          <p className="text-[#6c7fd8] font-medium text-sm sm:text-base">
           ✱  Latest collection
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
            Shop by category
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Fade key={cat.name} direction="up" triggerOnce >
              <div
                className={`${cat.bg} rounded-2xl p-3 sm:p-4 flex flex-col items-center shadow-sm hover:shadow-md transition transform hover:scale-[1.03]`}
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 relative">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    className="object-contain px-2"
                  />
                </div>
                <h3 className="mt-2 text-sm sm:text-base font-semibold text-gray-800">
                  {cat.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Items ({cat.items})
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
