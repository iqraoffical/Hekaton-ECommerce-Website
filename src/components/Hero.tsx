export default function Hero(){
  return( <div>
    <div className="bg:url()">

        <div><h1 className="text-black font-2xl">Rocket single seater</h1>
        <button className="w-[122.76px] h-[ 47.28px]">shop Now</button></div>

        <div
      className="relative w-[865.44px] h-[]965px bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/Rocket single seater.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Shop</h1>
        <p className="text-lg md:text-xl mb-6">
          Discover amazing products tailored for you.
        </p>
        <a
          href="/shop"
          className="inline-block text-lg md:text-xl font-semibold text-white underline decoration-2 hover:decoration-4 transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </div>
    </div>
  </div> ) 
}


