import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Blogs() {
  return (
    <div className="w-1440px Height-944px Top-3108px">
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
      <div className="Width-1240p Height-555px Top-3319px Left-100px">
        {/*  1 */}
        <div className="w-[393px]">
          <div className="bg-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/images/Rectangle 13.png"
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
        <div>
          {/* Button */}
          <div className="flex justify-center mt-4">
            <button className=" underline text-black text-sm font-medium px-6 py-2 rounded hover:bg-gray-800">
              Read More
            </button>
          </div>
           {/* Additional Details */}
        <div className="flex justify-center items-center mt-4 text-gray-500 text-sm">
          <Image
            src="/images/Group.png"
            alt="Plain console with teak mirror"
            width={18.33}
            height={18.33}
            className="object-cover"
          />
          <p className=" Width-99px Height-24px Top-3848px Left-157px">5 min</p>
          <Image
            src="/images/uil_calender.png"
            alt="Plain console with teak mirror"
            width={18.33}
            height={18.33}
            className="object-cover"
          />
          <p className="Width-99px Height-24px p-3848px Left-1157px">
            12th Oct 2022
          </p>
        </div>






      </div>
      





        </div>
       
      <div className="flex justify-center mt-4"> 
      </div>
      <button>
          <Link
            href="/Bloglink"
            className="underline text-black text-sm font-medium px-6 py-2  hover:bg-gray-800"
          >
            Read More
          </Link>
        </button>
    </div>
    
  );
}
