import React from 'react';
import { FaHeadphones, FaTruck } from 'react-icons/fa';
import { MdMessage, MdRotate90DegreesCcw } from 'react-icons/md';


const ServiceFeatures = () => {
  const features = [
    {
      icon: <FaTruck size={24} />,
      title: "Free Delivery",
      desc: "Free shipping over $100",
    },
    {
      icon: <MdRotate90DegreesCcw size={24} />,
      title: "Free Return",
      desc: "Free return over $100",
    },
    {
      icon: <FaHeadphones size={24} />,
      title: "Customer Support",
      desc: "Friendly 24/7 customer support",
    },
    {
      icon: <MdMessage size={24} />,
      title: "Money Back Guarantee",
      desc: "Quality checked by our team",
    },
  ];

  return (
    <div className="container mx-auto px-4 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#DEE5FF] p-6 rounded-xl flex items-center gap-4 hover:shadow-md transition-shadow duration-300 cursor-pointer"
          >
            {/* Icon Wrapper */}
            <div className=" p-3 rounded-full text-2xl bg-[#4C6FFF]  text-white">
              {item.icon}
            </div>

            {/* Text Content */}
            <div>
              <h4 className="font-semibold Unbounded">
                {item.title}
              </h4>
              <p className="text-gray-700">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatures;