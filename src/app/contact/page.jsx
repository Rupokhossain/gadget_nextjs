"use client";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { GoMail } from "react-icons/go";

const page = () => {
  return (
    <div className="pt-16 pb-10">
      <div className="container mx-auto px-4 lg:px-24 font-sans ">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5 ">
          {/* LEFT SECTION: Contact Form */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full lg:w-1/1 gap-3 border border-gray-300 p-6 rounded-lg hover:border-(--prim-color) cursor-pointer transition-all duration-300"
          >
            <h2 className="Unbounded text-xl mb-10">Make Custom Request</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="Unbounded">Full Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full mt-2 border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="Unbounded">Email Address</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full mt-2 border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="Unbounded">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full mt-2 border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="Unbounded">Subject</label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full mt-2 border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="Unbounded">Message</label>
                <textarea
                  rows="5"
                  placeholder="Type your Message"
                  className="w-full mt-2 border border-gray-300 p-4 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#4C6FFF] cursor-pointer Unbounded hover:bg-blue-700 text-white py-3 px-10 rounded-lg transition-all shadow-md active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SECTION: Contact Info */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-full lg:w-1/3 lg:sticky lg:top-48 bg-white p-8 rounded-lg border border-gray-300 shadow-sm space-y-8 hover:border-(--prim-color) cursor-pointer transition-all duration-300"
          >
            <h2 className="Unbounded text-xl mb-10">Get In Touch</h2>

            <div className="flex flex-col gap-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="border-2 border-blue-500 p-3 rounded-full text-blue-500">
                  <FiPhone size={18} />
                </div>
                <span className="text-blue-600 font-semibold cursor-pointer hover:underline text-lg">
                  +00 123 456 789
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="border-2 border-blue-500 p-3 rounded-full text-blue-500">
                  <GoMail size={18} />
                </div>
                <span className="text-blue-600 font-semibold cursor-pointer hover:underline text-lg">
                  Example@site.com
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="border-2 border-blue-500 p-3 rounded-full text-blue-500">
                  <LuMapPin size={18} />
                </div>
                <span className="text-blue-600 font-semibold cursor-pointer hover:underline text-lg">
                  789 Inner Lane, Biyes park, California
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
