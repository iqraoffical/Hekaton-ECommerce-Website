

export default function InstagramSection() {
  return (
    <div
      className="relative w-[1440px] h-[450px] bg-cover bg-center"
      style={{ backgroundImage:"url('/images/Rectangle.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 #FAF4F480 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black">
        <h2 className="text-3xl font-bold text-black">Our Instagram</h2>
        <p className="mt-2 text-lg text-black">Follow our store on Instagram</p>
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded shadow hover:bg-gray-100">
          Follow Us
        </button>
      </div>
    </div>
  );
}
