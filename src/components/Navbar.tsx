"use client"

import Link from "next/link";
import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-red-300 flex flex-col md:flex-row items-center justify-between text-black px-4 md:px-8 lg:px-12 h-16 md:h-auto relative">
      {/* Mobile Menu Icon */}
      <div className="flex w-full md:hidden justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          Brand
        </Link>
        <button
          className="text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`absolute md:static top-16 left-0 w-full bg-red-300 md:flex md:items-center md:justify-between transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 px-4 py-4 md:py-0">
          <Link className="hover:text-gray-600" href="/">
            Home
          </Link>
          <Link className="hover:text-gray-600" href="/Shop">
            Shop
          </Link>
          <Link className="hover:text-gray-600" href="/About">
            About
          </Link>
          <Link className="hover:text-gray-600" href="/Contact">
            Contact
          </Link>
        </div>
      </div>

      {/* Icons Section */}
      <div className="hidden md:flex items-center gap-6 text-black space-x-5 mr-4">
        <CiSearch className="text-2xl text-black/70 cursor-pointer hover:text-gray-600" />
        <IoHeartOutline className="text-2xl text-black/70 cursor-pointer hover:text-gray-600" />
        <MdOutlineShoppingCart className="text-2xl text-black/70 cursor-pointer hover:text-gray-600" />
        <RiContactsLine className="text-2xl text-black/70 cursor-pointer hover:text-gray-600" />
      </div>
    </div>
  );
}
