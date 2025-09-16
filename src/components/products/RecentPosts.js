"use client";

import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

const posts = [
  {
    id: 1,
    category: "Vegetables",
    date: "February 4, 2026",
    title: "Beginner’s Guide to Eating More Vegetables Without Even Trying.",
    description:
      "A vibrant corner of the web dedicated to all things vegetable from garden to table. Whether you're a seasoned grower,…",
    image: "https://i.ibb.co.com/GQgmJxB4/5.jpg",
  },
  {
    id: 2,
    category: "Bakery",
    date: "May 12, 2025",
    title: "Tech in Trolleys: Smart Innovations in Bakery Shopping.",
    description:
      "There are many variations of passages of Lorem Ipsum available randomised words.",
    image: "https://i.ibb.co.com/S7PqxHg2/1-3.jpg",
  },
  {
    id: 3,
    category: "Drinks",
    date: "June 22, 2027",
    title: "Freshly Squeezed: The Latest News in the Juice Industry.",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45…",
    image: "https://i.ibb.co.com/bgFS9c4r/2-4.jpg",
  },
  {
    id: 4,
    category: "Fruits",
    date: "December 19, 2026",
    title: "Fresh Picks: Seasonal Fruit Trends You Need to Know.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s…",
    image: "https://i.ibb.co.com/xSXQr6dG/4-3.jpg",
  },
];

export default function RecentPosts() {
  return (
    <section className="relative py-16">
      <div className="max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 gap-6 sm:gap-0">
          <div>
            <p className="text-[#6c7fd8] font-semibold text-base sm:text-lg">
              ✱ Recent Posts
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2 leading-snug">
              Featured tips and tricks!
            </h2>
          </div>
          <button className="bg-[#6c7fd8] hover:bg-[#677de0] text-white font-medium px-5 py-2 rounded-lg flex items-center gap-2 transition w-fit">
            View all <HiArrowNarrowRight />
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex p-6 flex-col sm:flex-row bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-all"
            >
              {/* Image */}
              <div className="relative w-full sm:w-40 md:w-52 h-48 sm:h-auto flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-2xl  sm:rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-[#6c7fd8] font-medium">
                    {post.category}{" "}
                    <span className="text-gray-400">- {post.date}</span>
                  </p>
                  <h3 className="text-lg font-semibold text-gray-800 mt-1 mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {post.description}
                  </p>
                </div>
                <a
                  href="#"
                  className="mt-3 text-sm font-medium text-gray-800 flex items-center gap-1 hover:text-[#6c7fd8] transition"
                >
                  Continue Reading <HiArrowNarrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
