"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";

const CheckoutPage = () => {

  const cartItems = useSelector((state) => state.cart.items);


  const subtotal = cartItems.reduce((acc, item) => acc + item.newPrice * item.quantity, 0);
  const estimatedTax = subtotal * 0.1; 
  const total = subtotal + estimatedTax;

  return (
    <div className="container mx-auto px-4 lg:px-24 py-10 bg-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT SECTION: Forms (Contact, Delivery, Payment) */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* 1. Contact Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Contact</h2>
            <input 
              type="text" 
              placeholder="Email or Mobile Phone number" 
              className="w-full border border-gray-300 p-3 rounded-md outline-none focus:border-blue-500 transition-all"
            />
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              Email me with news and offers
            </label>
          </section>

          {/* 2. Delivery Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Delivery</h2>
            <div className="flex gap-6 text-sm font-medium">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="delivery" defaultChecked className="accent-blue-600" /> Ship
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="delivery" className="accent-blue-600" /> Pickup in store
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <select className="md:col-span-2 w-full border border-gray-300 p-3 rounded-md bg-white">
                <option>Bangladesh</option>
                <option>Vietnam</option>
                <option>USA</option>
              </select>
              <input type="text" placeholder="First Name (optional)" className="border border-gray-300 p-3 rounded-md" />
              <input type="text" placeholder="Last Name" className="border border-gray-300 p-3 rounded-md" />
              <input type="text" placeholder="Address" className="md:col-span-2 border border-gray-300 p-3 rounded-md" />
              <input type="text" placeholder="Apartment, suite, etc. (optional)" className="md:col-span-2 border border-gray-300 p-3 rounded-md" />
              <input type="text" placeholder="City" className="border border-gray-300 p-3 rounded-md" />
              <input type="text" placeholder="Postal Code (optional)" className="border border-gray-300 p-3 rounded-md" />
            </div>
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer pt-2">
              <input type="checkbox" className="w-4 h-4" />
              Save this information for next time
            </label>
          </section>

          {/* 3. Shipping Method */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Shipping Method</h2>
            <div className="flex justify-between items-center border border-blue-100 bg-blue-50/30 p-4 rounded-md">
              <span className="text-gray-700">Standard</span>
              <span className="font-bold text-green-600">FREE</span>
            </div>
          </section>

          {/* 4. Payment Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Payment</h2>
            <p className="text-xs text-gray-400 italic">All transactions are secure and encrypted.</p>
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <div className="p-4 bg-gray-50 border-b border-gray-300 font-bold text-sm">Credit Card</div>
              <div className="p-4 space-y-4 bg-white">
                <input type="text" placeholder="Card number" className="w-full border border-gray-300 p-3 rounded-md" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Expiration date (MM / YY)" className="border border-gray-300 p-3 rounded-md" />
                  <input type="text" placeholder="Security Code" className="border border-gray-300 p-3 rounded-md" />
                </div>
                <input type="text" placeholder="Name on card" className="w-full border border-gray-300 p-3 rounded-md" />
              </div>
            </div>
          </section>

          <button className="w-full bg-[#4B70F5] hover:bg-blue-700 text-white py-4 rounded-md font-bold text-lg shadow-lg transition-all">
            Pay Now
          </button>
        </div>

        {/* RIGHT SECTION: Order Summary */}
        <div className="lg:col-span-5">
          <div className="border border-gray-200 rounded-xl p-6 lg:p-8 sticky top-24 bg-white shadow-sm">
            <div className="flex items-center gap-2 text-xl font-bold mb-6 text-gray-800">
              <FaShoppingCart className="text-blue-600" /> Order Summary
            </div>

            {/* Product List */}
            <div className="max-h-[300px] overflow-y-auto space-y-6 mb-6 pr-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="relative w-20 h-20 border rounded-lg p-2 shrink-0 bg-gray-50">
                    <Image src={item.image} alt={item.title} fill className="object-contain p-1" />
                    <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-700 line-clamp-1">{item.title}</h4>
                    <p className="text-xs text-gray-400 font-medium">By {item.shopName}</p>
                  </div>
                  <span className="font-bold text-gray-800">${(item.newPrice * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              {cartItems.length === 0 && <p className="text-center text-gray-400 py-4 italic font-medium">No items in cart</p>}
            </div>

            <hr className="border-gray-100 my-6" />

            {/* Price Summary */}
            <div className="space-y-3 text-gray-600 font-medium">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-gray-900 font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600 font-bold">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span className="text-gray-900 font-bold">${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-2xl font-black text-gray-900 pt-4 border-t border-gray-100">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-3">
              <button className="w-full bg-[#16A34A] hover:bg-green-700 text-white py-4 rounded-md font-bold text-lg shadow-md transition-all">
                Place Order
              </button>
              <Link 
                href="/cart" 
                className="w-full border border-gray-300 text-gray-600 py-3 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all text-sm"
              >
                <FaArrowLeft size={12} /> Back to Cart
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;