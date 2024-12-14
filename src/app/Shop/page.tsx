"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Freedeliver from "@/components/Freedeliver";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [sortOption, setSortOption] = useState("default");

  const categories = ["All", "Furniture", "Electronics", "Clothing", "Books"];

  // Example product data with dynamic image paths
  const products = [
    {
      id: 1,
      name: "Trenton modular sofa_3",
      price: "25,000.00",
      image: "/images/Asgaard sofa.png",
      link: "/Asgaard/page.tsx",
    },
    {
      id: 2,
      name: "Granite dining table with dining chair",
      price: "25,000.00",
      image: "/images/one.png",
      link: "/images/Asgaard ",
    },
    {
      id: 3,
      name: "Outdoor bar table and stool",
      price: "25,000.00",
      image: "/images/two.png",
      link: "/images/Asgaard ",
    },
    {
      id: 4,
      name: "Plain console with teak mirror",
      price: "25,000.00",
      image: "/images/three.png",
      link: "/images/Asgaard ",
    },
    {
      id: 5,
      name: "Trenton modular sofa_3",
      price: "25,000.00",
      image: "/images/Asgaard sofa.png",
      link: "/Asgaard/page.tsx",
    },
    {
      id: 6,
      name: "Granite dining table with dining chair",
      price: "25,000.00",
      image: "/images/one.png",
      link: "/images/Asgaard ",
    },
    {
      id: 7,
      name: "Outdoor bar table and stool",
      price: "25,000.00",
      image: "/images/two.png",
      link: "/images/Asgaard ",
    },
    {
      id: 8,
      name: "Plain console with teak mirror",
      price: "25,000.00",
      image: "/images/three.png",
      link: "/images/Asgaard ",
    },
    {
      id: 9,
      name: "Trenton modular sofa_3",
      price: "25,000.00",
      image: "/images/Asgaard sofa.png",
      link: "/Asgaard/page.tsx",
    },
    {
      id: 10,
      name: "Granite dining table with dining chair",
      price: "25,000.00",
      image: "/images/one.png",
      link: "/images/Asgaard ",
    },
    {
      id: 11,
      name: "Outdoor bar table and stool",
      price: "25,000.00",
      image: "/images/two.png",
      link: "/images/Asgaard ",
    },
    {
      id: 12,
      name: "Plain console with teak mirror",
      price: "25,000.00",
      image: "/images/three.png",
      link: "/images/Asgaard ",
    },
    {
      id: 13,
      name: "Trenton modular sofa_3",
      price: "25,000.00",
      image: "/images/Asgaard sofa.png",
      link: "/Asgaard/page.tsx",
    },
    {
      id: 14,
      name: "Granite dining table with dining chair",
      price: "25,000.00",
      image: "/images/one.png",
      link: "/images/Asgaard ",
    },
    {
      id: 15,
      name: "Outdoor bar table and stool",
      price: "25,000.00",
      image: "/images/two.png",
      link: "/images/Asgaard ",
    },
    {
      id: 16,
      name: "Plain console with teak mirror",
      price: "25,000.00",
      image: "/images/three.png",
      link: "/images/Asgaard ",
    },


  ];

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
          Showing 1–{itemsPerPage} of {products.length} results
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
                src={product.image} 
                alt={product.name}
                width={400}
                height={400}
                layout="responsive"
                objectFit="cover"
                className="rounded"
              />
            </div>

            {/* Product Details */}
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-sm text-black">Rs. {product.price}</p>

            <div className="mt-4 text-center">
              <Link href={`/Asgaard ${product.id}`}></Link>

              <Link
                href="/Asgaard"
                className="text-sm text-black hover:underline"
              >
                View Details
              </Link>

           
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2">
              <button className="px-4 py-2 #FBEBB5 text-black rounded-md">1</button>
              <button className ="px-4 py-2 #FBEBB text-black rounded-md">2</button>
              <button className="px-4 py-2 #FBEBB5 text-black rounded-md">3</button>
              <button className="px-4 py-2 #FBEBB5 text-black rounded-md">Next</button>
            </div>
          </div>

      <Freedeliver />
    </div>
  );
};

export default Shop;
