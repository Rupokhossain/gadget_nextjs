import React from "react";
import SectionHeading from "../components/Shared/SectionHeading";
import ProductCard from "./ProductCard/ProductCard";

const NewArrival = () => {
  const newItem = [
    {
      id: 1,
      title: "Speak 710 Portable Speaker for Music...",
      image: "/assets/images/best-sell4.webp",
      rating: "5k",
      oldPrice: "904.21",
      newPrice: "471.48",
    },
    {
      id: 2,
      title: "Rustic Granite Gloves Robot...",
      image: "/assets/images/phone-img1.webp",
      rating: "10k",
      oldPrice: null,
      newPrice: "336.51",
    },
    {
      id: 3,
      title: "Blender Combo with Single Serve...",
      image: "/assets/images/product-img1.webp",
      rating: "9k",
      oldPrice: null,
      newPrice: "788.31",
    },
    {
      id: 4,
      title: "Foot Portable Mini Washing Machine...",
      image: "/assets/images/product-img4.webp",
      rating: "5k",
      oldPrice: null,
      newPrice: "985.52",
    },
    {
      id: 5,
      title: '5G Unlocked Cell Phone 6.6" Prism...',
      image: "/assets/images/product-img10.webp",
      rating: "1k",
      oldPrice: "762.04",
      newPrice: "201.24",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-12">
      <div>
        <SectionHeading heading={`New Arrivals.`}></SectionHeading>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {newItem.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
