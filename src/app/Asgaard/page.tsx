import React from "react";
import Image from "next/image";
import Chair from "@/components/Chair";
export default function Asgaard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/Asgaard sofa.png"
            alt="Asgaard Sofa"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Title and Price */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              Asgaard Sofa
            </h2>
            <p className="text-2xl text-blue-500 font-medium">Rs. 250,000.00</p>
            <p className="text-sm text-gray-600 mt-2">5 Customer Reviews</p>
          </div>

          {/* Description */}
          <p className="text-gray-700">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Size Options */}
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-800">Size:</label>
            <select className="p-2 border border-gray-300 rounded">
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XS">XS</option>
            </select>
          </div>

          {/* Color Options */}
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-800">Color:</label>
            <div className="flex space-x-2">
              <button className="w-6 h-6 rounded-full bg-gray-500"></button>
              <button className="w-6 h-6 rounded-full bg-red-500"></button>
              <button className="w-6 h-6 rounded-full bg-blue-500"></button>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-800">
              Quantity:
            </label>
            <div className="flex items-center border border-gray-300 rounded">
              <button className="px-2 py-1 text-gray-600 hover:bg-gray-200">
                -
              </button>
              <input
                type="text"
                defaultValue="1"
                className="w-12 text-center border-0 focus:ring-0 focus:outline-none"
              />
              <button className="px-2 py-1 text-gray-600 hover:bg-gray-200">
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full py-3 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition">
            Add To Cart
          </button>

          {/* Product Meta */}
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <span className="font-medium text-gray-800">SKU:</span> SS001
            </p>
            <p>
              <span className="font-medium text-gray-800">Category:</span> Sofas
            </p>
            <p>
              <span className="font-medium text-gray-800">Tags:</span> Sofa,
              Chair, Home, Shop
            </p>
          </div>

          {/* Share Section */}
          <div>
            <span className="font-medium text-gray-800">Share:</span>
            <div className="flex space-x-4 mt-2">
              <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200">
                <i className="fab fa-instagram"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Chair />
    </div>
  );
}
