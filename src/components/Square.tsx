import React from "react";
import Image from "next/image";

const Square = () => {
  return (
    <section className="relative flex flex-col md:flex-row bg-[#FAF4F4] h-auto md:h-[672px] w-full justify-center md:justify-between items-center px-6 md:px-[100px] py-6">
      {/* Left Image and Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
        <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[605px] md:h-[562px]">
          <Image
            src="/images/square side table.png"
            width={605}
            height={562}
            alt="Square side table, a modern and elegant furniture piece"
            className="object-contain w-full h-full"
          />
        </div>
        <p className="mt-4 text-xl sm:text-2xl md:text-4xl font-medium text-black">
          Side Table
        </p>
        <button className="mt-2 px-4 py-2 text-sm sm:text-base md:text-lg font-medium text-black border border-black rounded hover:bg-gray-100">
          View More
        </button>
      </div>

      {/* Right Image and Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[605px] md:h-[562px]">
          <Image
            src="/images/Mask group (9).png"
            width={605}
            height={562}
            alt="Another stylish furniture piece"
            className="object-contain w-full h-full"
          />
        </div>
        <p className="mt-4 text-xl sm:text-2xl md:text-4xl font-medium text-black">
          Mask Group
        </p>
        <button className="mt-2 px-4 py-2 text-sm sm:text-base md:text-lg font-medium text-black border border-black rounded hover:bg-gray-100">
          View More
        </button>
      </div>
    </section>
  );
};

export default Square;
