"use client";

import Image from "next/image";
import React, { useState } from "react";
import Freedeliver from "@/components/Freedeliver"

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [sortOption, setSortOption] = useState("default");

  const categories = ["All", "Furniture", "Electronics", "Clothing", "Books"];

  // Example product data with different images, names, and prices
  const products = Array.from({ length: itemsPerPage }).map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: (index + 1) * 1000,
    image: `/images/product-${(index % 5) + 1}.jpg`, // Different images (product-1.jpg, product-2.jpg, etc.)
  }));

  return (
    <div className="p-4 md:p-8">
      {/* Hero Section */}
      <div className="bg-gray-300 rounded-lg overflow-hidden mb-6">
        <Image
          src="/images/shopbg.png"
          alt="Shop Background"
          width={1440}
          height={340}
          className="object-cover w-full h-auto"
        />
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        {/* Filter by Categories */}
        <div className="w-full sm:w-auto flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Filter:</label>
          <select
            className="p-2 border border-gray-300 rounded w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => console.log("Filter by:", e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Showing Results */}
        <p className="text-gray-600 text-sm w-full sm:w-auto">
          Showing 1–{itemsPerPage} of 32 results
        </p>

        {/* Items per Page */}
        <div className="w-full sm:w-auto flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Show:</label>
          <select
            className="p-2 border border-gray-300 rounded w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value={16}>16</option>
            <option value={32}>32</option>
            <option value={48}>48</option>
          </select>
        </div>

        {/* Sort by */}
        <div className="w-full sm:w-auto flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Sort by:</label>
          <select
            className="p-2 border border-gray-300 rounded w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Product Image */}
            <div className="w-full h-40 relative rounded overflow-hidden mb-4">
              <Image
                src={"/images/one.png"} // Dynamic image path
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>

            {/* Product Details */}
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-sm text-gray-600">Rs. {product.price}</p>
          </div>
        ))}



      </div>
      <Freedeliver/>
    </div>
  
  );
};

export default Shop;
