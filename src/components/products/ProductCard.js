import dbConnect from '@/lib/dbConnect'
import Image from 'next/image'
import React from 'react'

export default async function ProductCard() {
    const products = await dbConnect('products').find({}).toArray();
    console.log(products)
  return (
      <div className="grid xl:grid-cols-4 xl:gap-8  gap-y-6 w-full mx-auto md:grid-cols-2">
              {products.map((product) => (
                <div key={product._id}>
                  <div className="inset-shadow-sm boarder-2 border-[#0000004d] rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      New
                    </span>
    
                    {/* Flip animation container */}
                    <div className="relative w-full h-40 my-4 group perspective">
                      <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                        {/* Front Image */}
                        <div className="absolute inset-0 backface-hidden">
                          <Image
                            width={1200}
                            height={1200}
                            src={product.image}
                            alt={product.title}
                            className="h-50 w-50 mx-auto  object-contain"
                          />
                        </div>
                        {/* Back Image */}
                        <div className="absolute inset-0 rotate-y-180 backface-hidden">
                          {/* <Image
                            width={1080}
                            height={1080}
                            src={product.hoverImage}
                            alt={product.title}
                            className="h-50 w-50 mx-auto   object-contain"
                          /> */}
                        </div>
                      </div>
                    </div>
    
                    <h4 className="text-sm font-medium mt-10 text-gray-600">
                      {product.brand}
                    </h4>
                    <p className="text-base font-semibold mb-2">{product.title}</p>
                    <div className="flex items-center text-yellow-500 mb-2">
                      {"★".repeat(product.rating)}
                      {"☆".repeat(5 - product.rating)}
                    </div>
                    <p className="text-[#6c7fd8] font-bold">${product.price}.00</p>
                    <button className="w-full mt-3 bg-[#6c7fd8] text-white py-2 rounded hover:bg-[#6b81e0]">
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
           </div>
  )
}
