import React from 'react';
import Image from 'next/image';

const Square = () => {
  return (
    <div className="relative w-full bg-[#FAF4F4] h-[672px]">
      <div className="relative w-full bg-white h-[672px]">
        {/* First Block */}
        <div
          className="absolute w-[605px] h-[562px] left-[100px] top-[1047px]"
        >
          <Image
            src="/images/square side table.png"
            width={200}
            height={200}
            alt="Rocket single seater, a modern and elegant furniture piece"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg object-contain"
          />
        </div>
        <p className="absolute left-[205px] top-[1430px] text-2xl md:text-4xl font-medium text-black">
          Side Table
        </p>
        <button className="absolute left-[206px] top-[1507px] px-4 py-2 text-sm md:text-lg font-medium text-black border border-black rounded hover:bg-gray-100">
          View More
        </button>

        {/* Second Block */}
        <div
          className="absolute w-[605px] h-[562px] left-[100px] top-[1200px]"
        >
          <Image
            src="/images/square side table.png"
            width={200}
            height={200}
            alt="Rocket single seater, a modern and elegant furniture piece"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg object-contain"
          />
        </div>
        <p className="absolute left-[205px] top-[1730px] text-2xl md:text-4xl font-medium text-black">
          Side Table
        </p>
        <button className="absolute left-[206px] top-[1807px] px-4 py-2 text-sm md:text-lg font-medium text-black border border-black rounded hover:bg-gray-100">
          View More
        </button>
      </div>
    </div>
  );
};

export default Square;
