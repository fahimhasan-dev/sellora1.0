"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { BsCart3, BsHeart, BsArrowRepeat } from "react-icons/bs";

const mockProduct = {
  id: "p-001",
  name: "Seeds of Change Organic Quinoa, Brown",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.",
  price: 38,
  oldPrice: 52,
  discount: 26,
  rating: 5,
  reviews: 32,
  sizes: ["50g", "60g", "80g", "100g", "150g"],
  image: "https://i.ibb.co.com/S4nhG3yZ/Wl-NJosoy3-Q.gif",
};

const currentUser = {
  name: "John Doe",
  email: "john@example.com",
};

export default function ProductsDetails({ params }) {
  const p = params;
  const [selectedSize, setSelectedSize] = useState(mockProduct.sizes[1]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    const cartItem = {
      productId: mockProduct.id,
      size: selectedSize,
      quantity,
      userName: currentUser.name,
      userEmail: currentUser.email,
    };

    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartItem),
      });

      if (!res.ok) throw new Error("Failed to add to cart");
      const data = await res.json();
      alert(`✅ ${data.message}`);
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong.");
    }
  };

  return (
    <section className="max-w-6xl mx-auto mt-15 px-4 py-12 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* ===== Left: Product Image ===== */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden border bg-white shadow-md">
            <Image
              src={mockProduct.image}
              alt={mockProduct.name}
              width={500}
              height={500}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* ===== Right: Product Info ===== */}
        <div className="flex flex-col sm:px-10 lg:px-0 justify-center">
          {/* Sale badge */}
          <span className="text-sm font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full w-fit mb-4">
            Sale Off
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {mockProduct.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(mockProduct.rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
            <span className="ml-2 text-sm text-gray-500">
              ({mockProduct.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="text-2xl sm:text-3xl font-bold text-[#6c7fd8]">
              ${mockProduct.price}
            </span>
            <span className="text-sm sm:text-base text-[#6c7fd8] font-medium">
              {mockProduct.discount}% Off
            </span>
            <span className="line-through text-gray-400 text-lg sm:text-xl">
              ${mockProduct.oldPrice}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            {mockProduct.description}
          </p>

          {/* Size / Weight */}
          <div className="mb-6">
            <h4 className="text-gray-800 font-medium mb-2 text-sm sm:text-base">
              Size / Weight:
            </h4>
            <div className="flex flex-wrap gap-2">
              {mockProduct.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 sm:px-4 py-2 rounded-md border text-sm sm:text-base font-medium transition ${
                    selectedSize === size
                      ? "bg-[#6c7fd8] text-white border-[#4765eb]"
                      : "border-gray-300 text-gray-700 hover:bg-green-50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2 text-lg sm:text-xl"
              >
                −
              </button>
              <input
                type="number"
                value={quantity}
                readOnly
                className="w-12 sm:w-16 text-center border-l border-r focus:outline-none text-sm sm:text-base"
              />
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2 text-lg sm:text-xl"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 bg-[#6c7fd8] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-[#516deb] transition"
            >
              <BsCart3 className="text-lg sm:text-xl" />
              Add to cart
            </button>

            <button className="border rounded-md p-2 sm:p-3 hover:bg-gray-50">
              <BsHeart className="text-lg sm:text-xl" />
            </button>
            <button className="border rounded-md p-2 sm:p-3 hover:bg-gray-50">
              <BsArrowRepeat className="text-lg sm:text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
