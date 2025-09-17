// components/NewProducts.tsx

import { Zoom } from "react-awesome-reveal";
import Image from "next/image";
import dbConnect from "@/lib/dbConnect";
import { Button } from "../ui/button";
import Link from "next/link";

export default async function NewProducts() {
  const products = await dbConnect("products").find({}).sort({createdAt:-1}).limit(12).toArray();

  return (
    <section className="pb-10 max-w-[90%] mx-auto">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-[#6c7fd8] font-medium">✱ Trending item</p>
        <h2 className="text-3xl font-bold">Our newest products</h2>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full mx-auto">
        <Zoom cascade duration={600} triggerOnce>
          {products.map((product) => (
            <div key={product._id} className="h-full">
              <div className="flex flex-col justify-between h-full  inset-shadow-2xs rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white">
                <div>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    New
                  </span>

                  {/* Flip Animation */}
                  <div className="relative w-full h-40 my-4 group perspective">
                    <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                      {/* Front Image */}
                      <div className="absolute inset-0 backface-hidden">
                        <Image
                          width={1200}
                          height={1200}
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      {/* Back Image (Optional) */}
                      <div className="absolute inset-0 rotate-y-180 backface-hidden">
                        {/* Future Hover Image */}
                      </div>
                    </div>
                  </div>

                  <h4 className="text-sm font-medium text-gray-600">
                    {product.brand}
                  </h4>
                  <p className="text-base font-semibold mb-2">
                    {product.title}
                  </p>
                  <div className="flex items-center text-yellow-500 mb-2">
                    {"★".repeat(product.rating)}
                    {"☆".repeat(5 - product.rating)}
                  </div>
                  <p className="text-[#6c7fd8] font-bold">
                    ${product.price}.00
                  </p>
                </div>

                {/* Button */}
                <Button className="w-full mt-4 rounded" asChild>
                  <Link href={`/productsDetails/${product._id}`}>
                    View Details
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </Zoom>
      </div>
    </section>
  );
}
