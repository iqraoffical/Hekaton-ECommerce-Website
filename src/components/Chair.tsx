import Image from "next/image";

export default function Chair() {
  return (
    <div className="w-full h-screen p-8">
      {/* Header Section */}
      <div className="mb-8">
        <span className="text-2xl font-semibold text-black mb-4">
          Top Picks For You
        </span>
        <h1 className="text-lg text-gray-600">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </h1>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-4 gap-8">
        {/* Product Card 1 */}
        <div className="relative w-[287px] h-[397px]">
          <Image
            src="/images/four.png"
            alt="Plain console with teak mirror"
            width={200}
            height={200}
            className="object-cover"
          />
          <div className="absolute top-[220px] left-0 w-[199px]">
            <p className="text-sm font-normal text-black">Plain console with teak mirror</p>
            <span className="block mt-2 text-lg font-semibold">Rs. 25,000.00</span>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="relative w-[287px] h-[397px]">
          <Image
            src="/images/three.png"
            alt="Plain console with teak mirror"
            width={200}
            height={200}
            className="object-cover"
          />
          <div className="absolute top-[220px] left-0 w-[199px]">
            <p className="text-sm font-normal text-black">Plain console with teak mirror</p>
            <span className="block mt-2 text-lg font-semibold">Rs. 25,000.00</span>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="relative w-[287px] h-[397px]">
          <Image
            src="/images/two.png"
            alt="Plain console with teak mirror"
            width={200}
            height={200}
            className="object-cover"
          />
          <div className="absolute top-[220px] left-0 w-[199px]">
            <p className="text-sm font-normal text-black">Plain console with teak mirror</p>
            <span className="block mt-2 text-lg font-semibold">Rs. 25,000.00</span>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="relative w-[287px] h-[397px]">
          <Image
            src="/images/one.png"
            alt="Plain console with teak mirror"
            width={200}
            height={200}
            className="object-cover"
          />
          <div className="absolute top-[220px] left-0 w-[199px]">
            <div> <p className="text-sm font-normal text-black">Plain console with teak mirror</p>
            <span className="block mt-2 text-lg font-semibold">Rs. 25,000.00</span>
          </div></div>
           
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-8 text-center">
        <button className="text-black underline">View More</button>
      </div>
    </div>
  );
}
