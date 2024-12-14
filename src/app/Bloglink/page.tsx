
import Freedeliver from "@/components/Freedeliver";
import Image from "next/image";
export default function Bloglink(){
    return(   
        
        <div className="container mx-auto px-4 py-8">
            <div className="p-4 md:p-8">
      {/* Hero Section */}
      <div className="bg-gray-300 rounded-lg overflow-hidden mb-6">
        <Image
          src="/images/blog.png"
          alt="Shop Background"
          width={1440}
          height={340}
          className="object-cover w-full h-auto"
        />
      </div>
          {/* <!-- Header Section --> */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Recent Posts</h1>
          </div>
        
          {/* <!-- Blog Posts Section --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Blog Post 1 --> */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800">Going all-in with millennial design</h2>
              <p className="text-sm text-gray-500">Admin - 14 Oct 2022</p>
              <p className="text-sm text-gray-700 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <a href="#" className="text-blue-500 mt-4 inline-block">Read more</a>
            </div>
        
             {/* <!-- Blog Post 2 --> */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800">Exploring new ways of decorating</h2>
              <p className="text-sm text-gray-500">Admin - 03 Aug 2022</p>
              <p className="text-sm text-gray-700 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <a href="#" className="text-blue-500 mt-4 inline-block">Read more</a>
            </div>
        
            {/* <!-- Blog Post 3 --> */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800">Handmade pieces that took time to make</h2>
              <p className="text-sm text-gray-500">Admin - 03 Aug 2022</p>
              <p className="text-sm text-gray-700 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <a href="#" className="text-blue-500 mt-4 inline-block">Read more</a>
            </div>
      </div> 
        
         
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2">
              <button className="px-4 py-2 #FBEBB5 text-black rounded-md">1</button>
              <button className ="px-4 py-2 #FBEBB text-black rounded-md">2</button>
              <button className="px-4 py-2 #FBEBB5 text-black rounded-md">3</button>
              <button className="px-4 py-2 #FBEBB5 text-black rounded-md">Next</button>
            </div>
          </div>
        
          {/* <!-- Footer Section --> */}
          <div className="mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Free Delivery</h2>
                <p className="text-sm text-gray-600">For all orders over $50, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">90 Days Return</h2>
                <p className="text-sm text-gray-600">If goods have problems, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Secure Payment</h2>
                <p className="text-sm text-gray-600">100% secure payment, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Links</h2>
                <ul className="space-y-2">
                  <li><a href="#" className="text-black">Newsletter</a></li>
                  <li><a href="#" className="text-black">Help</a></li>
                  <li><a href="#" className="text-black">Shop</a></li>
                  <li><a href="#" className="text-black">Returns</a></li>
                </ul>
              </div>
            </div>
          </div>
        
          {/* <!-- Newsletter Section --> */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800">Subscribe to Our Newsletter</h2>
            <form className="mt-4 flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="p-2 border border-gray-300 rounded-md w-2/3"
              />
              <button className="px-6 py-2 bg-blue-500 text-white rounded-md">SUBSCRIBE</button>
            </form>
            
          </div>
         
        
        </div>
        <Freedeliver />
        </div>
          )
}

