import Image from "next/image";
export default function Chair() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/Asgaard sofa.png"
              alt="Asgaard sofa"
              className="w-full rounded shadow-md"
              width={200}
              height={200}
            />
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              New Arrivals
            </h2>
            <p className="text-lg text-gray-600 mb-6">Asgaard sofa</p>
            <div>
              <button className="px-6 py-2 #FFF9E5 text-black font-medium rounded hover:bg-blue-300 transition duration-200 border border-black">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
