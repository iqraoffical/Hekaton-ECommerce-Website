import Image from "next/image"

export default function Square(){
    return(<div>
        <div className="" ><Image src="/images/bg.png" width={200} height={200} alt=""></Image></div>


<div className="relative w-full h-full flex flex-col justify-center items-center text-center text-white">
        {/* Text Content */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Granite Square Table</h1>
        <p className="text-lg md:text-xl mb-6">Elegant and timeless for your living space.</p>

        {/* Shop Now Button */}
        <a
          href="/shop"
          className="text-lg md:text-xl font-semibold underline decoration-2 hover:decoration-4 transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </div>)
}