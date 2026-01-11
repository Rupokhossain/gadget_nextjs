"use client";
import Image from 'next/image';
import React from 'react';
import { LuMapPin } from "react-icons/lu";
import { FaPhone } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';


const Footer = () => {
  const footerLinks = [
    {
      title: "Information",
      links: ["Delivery", "About Us", "Secure Payment", "Contact Us", "Sitemap", "Stores"]
    },
    {
      title: "CUSTOM LINKS",
      links: ["Legal Notice", "Prices Drop", "New Products", "Best Sales"]
    },
    {
      title: "Quick Links",
      links: ["Return Policy", "Terms Of Use", "Security", "About us", "Store Pickup"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Affiliates", "Blog", "Contact"]
    }
  ];

  return (
    <footer className="bg-white pt-16 border-t border-gray-100">
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand and Contact Column */}
          <div className="lg:col-span-1.5 space-y-6">
            <h2 className="text-3xl font-bold Merienda text-black">
              Electra<span className="text-[#4C6FFF]">Hub</span>
            </h2>
            <p className="my-3 text-gray-700">
              We are a team of designers and developers that create high quality template
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                <div className="bg-[#4C6FFF] p-3 rounded-full text-white">
                  <LuMapPin size={18} />
                </div>
                <span className="text-gray-700 text-lg">789 Inner Lane, Biyes park, California</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-[#4C6FFF] p-3 rounded-full text-white">
                  <FaPhone size={18} />
                </div>
                <span className="text-gray-700 text-lg">(+91)123456789</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-[#4C6FFF] p-3 rounded-full text-white">
                  <HiMail size={18} />
                </div>
                <span className="text-gray-700 text-lg">webexample@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Dynamic Links Columns */}
          {footerLinks.map((section, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 150} data-aos-duration="1000">
              <h3 className="Unbounded text-xl mb-3">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="mb-2 text-gray-600 text-[17px] hover:text-[#4C6FFF] hover:ps-2 transition-all duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#DEE5FF] py-6" data-aos="fade-up" data-aos-offset="0">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className=" text-lg">
            ©2025. All Rights Reserved By <span className="font-bold">Siam Ahmed</span>
          </p>
          
          {/* Payment Icons Placeholder */}
          <div className="flex items-center gap-2">
             <Image src="/assets/images/payment.png" alt="Apple Pay" width={275} height={30} className="rounded p-1" />
    
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;