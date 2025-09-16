import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Erik Halvorsen",
    role: "Manager",
    image: "https://i.ibb.co.com/Xxy5bX8J/3-1.jpg",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    name: "Camille Varelli",
    role: "Customer",
    image: "https://i.ibb.co.com/pBwJn7Kj/2-3.jpg",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    name: "Marco Alvarello",
    role: "Marketing",
    image: "https://i.ibb.co.com/hxfScCcc/1-2.jpg",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 ">
      <div className="max-w-[90%] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#6c7fd8] font-semibold">✱ Our Testimonial</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            What Our Clients Say About Us
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#6c80d825] rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="text-[#6c7fd8] text-2xl mb-4">
                <FaQuoteLeft />
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {t.text}
              </p>

              {/* Profile */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
