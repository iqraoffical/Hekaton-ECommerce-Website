import Image from "next/image";
import React from "react";

export default function Blogs() {
  return (
    <div className="relative w-full bg-white">
      {/* Header Section */}
      <div className="text-center py-8">
        <span className="block text-2xl font-semibold text-black mb-4">
          Our Blogs
        </span>
        <h1 className="text-gray-500 text-base">
          Find a bright idea to suit your taste with our great selection
        </h1>
      </div>

      {/* Product Section */}
      <div className="flex justify-center gap-8 mt-8">
        {/* Product Card 1 */}
        <div className="w-[393px]">
          <div className="bg-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/images/one.png"
              alt="Plain console with teak mirror"
              width={393}
              height={393}
              className="object-cover"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold">Product Title</h3>
            <p className="text-gray-500 text-sm mt-2">
              A brief description of the product goes here.
            </p>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="relative w-[393px]">
          {/* Product Image */}
          <div className="bg-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/images/one.png"
              alt="Plain console with teak mirror"
              width={393}
              height={393}
              className="object-cover"
            />
          </div>

          {/* Product Description */}
          <div className="mt-4">
            <p className="text-lg font-medium text-black text-center">
              Going all-in with millennial design
            </p>


    {/* Product Card 1 */}
    <div className="w-[393px]">
          <div className="bg-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/images/one.png"
              alt="Plain console with teak mirror"
              width={393}
              height={393}
              className="object-cover"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold">Product Title</h3>
            <p className="text-gray-500 text-sm mt-2">
              A brief description of the product goes here.
            </p>
          </div>
        </div>
            {/* Button */}
            <div className="flex justify-center mt-4">
              <button className="bg-black text-white text-sm font-medium px-6 py-2 rounded hover:bg-gray-800">
                Read More
              </button>
            </div>

            {/* Additional Details */}
            <div className="flex justify-center items-center mt-4 text-gray-500 text-sm">
              <p>5 min</p>
            </div>
          </div>
        </div>

        {/* Add more product cards as needed */}
      </div>
    </div>
  );
}
