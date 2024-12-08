import React from "react";

const BillingDetails = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gray-50 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6">Billing Details</h1>
      
      {/* Billing Form */}
      <form className="space-y-6">
        {/* Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border rounded"
            />
          </div>
        </div>

        {/* Company Name */}
        <div>
          <label className="block mb-2 text-sm font-medium">Company Name (Optional)</label>
          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-3 border rounded"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-2 text-sm font-medium">Street Address</label>
          <input
            type="text"
            placeholder="Street Address"
            className="w-full p-3 border rounded"
          />
        </div>

        {/* City and ZIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Town / City</label>
            <input
              type="text"
              placeholder="Town / City"
              className="w-full p-3 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Province</label>
            <select className="w-full p-3 border rounded">
              <option>Western Province</option>
              <option>Eastern Province</option>
              <option>Northern Province</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">ZIP Code</label>
            <input
              type="text"
              placeholder="ZIP Code"
              className="w-full p-3 border rounded"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Phone</label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded"
            />
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <label className="block mb-2 text-sm font-medium">Additional Information</label>
          <textarea
            placeholder="Order Notes (Optional)"
            className="w-full p-3 border rounded h-24"
          />
        </div>

        {/* Payment Method */}
        <div>
          <h3 className="text-lg font-semibold">Payment Method</h3>
          <div className="space-y-3 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="payment"
                value="bank"
                className="mr-2"
              />
              Direct Bank Transfer
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="payment"
                value="cod"
                className="mr-2"
              />
              Cash On Delivery
            </label>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        </div>

        {/* Order Summary */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-bold mb-4">Order Summary</h3>
          <div className="flex justify-between text-sm">
            <span>Asgaard Sofa (1)</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mt-2 font-semibold">
            <span>Total</span>
            <span>Rs. 250,000.00</span>
          </div>
        </div>

        {/* Place Order Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded text-lg"
        >
          Place Order
        </button>
      </form>
    </section>
    
  );
};

export default BillingDetails;
