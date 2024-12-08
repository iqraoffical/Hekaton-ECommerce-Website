import React from "react";
import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  return (
    <div className="w-[1536px] h-[100px] pl-80 bg-[#FBEBB5] text-[#FAFAFA] flex mt-2px">
      <div className="w-[430px] h-[150px] text-[#000000] pt-[38px] pl-[160px] space-x-6">
        <Link
          href="/"
          className="w-[48px] h-[24px] font-poppins font-medium text-base text-2xl]"
        >
          Home
        </Link>
        <Link
          href="/Shop"
          className="w-[48px] h-[24px] font-poppins font-medium text-base"
        >
          Shop
        </Link>
        <Link
          href="/About"
          className="w-[48px] h-[24px] font-poppins font-medium text-base"
        >
          About
        </Link>
        <Link
          href="/Contact"
          className="w-[48px] h-[24px] font-poppins font-medium text-base"
        >
          Contact
        </Link>
      </div>
      <div className="flex text-[#000000] w-[235px] h-[28px] space-x-12 pt-9 ml-80">
      <HiOutlineUser className="w-[28px] h-[28px]" />
      <FiSearch className="w-[28px] h-[28px]"/>
      <FaRegHeart className=" w-[28px] h-[28px]"/>
      <AiOutlineShoppingCart className="w-[28px] h-[28px]"/>
      </div>
    </div>
  );
};

export default Header;
