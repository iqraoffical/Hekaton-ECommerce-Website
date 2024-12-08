"use client";

import React from "react";
import Image from "next/image";

const SimpleSideTableSection = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Side Tables</h2>
        </div>

        {/* Single Side Table Product */}
        <div className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
          {/* Product Image */}
          <div className="w-full h-40 relative rounded overflow-hidden mb-4">
            <Image
              src="/images/side-table1.jpg" // Replace with your image path
              alt="Simple Side Table"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
          {/* Product Title and View More */}
          <h3 className="text-lg font-medium">Side Table</h3>
          <a href="#" className="text-blue-200 hover:underline mt-2 inline-block">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default SimpleSideTableSection;
