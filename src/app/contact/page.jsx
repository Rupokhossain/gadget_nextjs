"use client";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaMapPin, FaPhone } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 lg:px-24 py-16 bg-gray-50 min-h-screen font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT SECTION: Contact Form */}
        <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Make Custom Request</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800">Full Name</label>
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              
              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800">Phone Number</label>
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800">Subject</label>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-800">Message</label>
              <textarea 
                rows="5" 
                placeholder="Type your Message" 
                className="w-full border border-gray-300 p-4 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="bg-[#4C6FFF] hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg transition-all shadow-md active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SECTION: Contact Info */}
        <div className="lg:col-span-4 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-8">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">Get In Touch</h2>
          
          <div className="space-y-8 pt-4">
            {/* Phone */}
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <FaPhone size={20} />
              </div>
              <span className="text-blue-600 font-semibold cursor-pointer hover:underline text-lg">
                +00 123 456 789
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <CiMail size={20} />
              </div>
              <span className="text-blue-600 font-semibold cursor-pointer hover:underline text-lg">
                Example@site.com
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <FaMapPin size={20} />
              </div>
              <span className="text-blue-600 font-semibold text-lg leading-tight">
                789 inner lane, california, USA
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;