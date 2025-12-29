import React from "react";
import Hero from "./homeComponents/Hero";
import Category from "./homeComponents/Category";
import Banner from "./homeComponents/Banner";
import ProductSection from "./homeComponents/ProductCard/ProductSection";
import PromoBanner from "./homeComponents/PromoBanner/PromoBanner";
import TopSelling from "./homeComponents/TopSelling/TopSelling";

const page = async () => {
  // fetch category
  const res = await fetch("http://localhost:3000/category.json", {
    cache: "no-store",
  });
  const res1 = await fetch("http://localhost:3000/products.json", {
    cache: "no-store",
  });

  const category = await res.json();

  const products = await res1.json();
  return (
    <div>
      <Hero></Hero>
      <Category category={category}></Category>
      <Banner></Banner>
      <ProductSection></ProductSection>
      <PromoBanner></PromoBanner>
      <TopSelling products={products}></TopSelling>
    </div>
  );
};

export default page;
