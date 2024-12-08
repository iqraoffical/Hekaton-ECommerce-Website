"use client";

import React from "react";

const Freedeliver = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Feature 1 */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow  justify-center pl-20px">
            <h3 className="text-xl font-semibold text-black">Free Delivery</h3>
            <p className=" text-sm mt-2">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-black">90 Days Return</h3>
            <p className=" text-sm mt-2">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-black">Secure Payment</h3>
            <p className=" text-sm mt-2">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Freedeliver;
