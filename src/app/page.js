import React from "react";
import Hero from "./homeComponents/Hero";
import Category from "./homeComponents/Category";
import Banner from "./homeComponents/Banner";
import ProductSection from "./homeComponents/ProductCard/ProductSection";
import PromoBanner from "./homeComponents/PromoBanner/PromoBanner";
import FilterSelling from "./homeComponents/FilterSelling/FilterSelling";
import FilterHotDeals from "./homeComponents/FilterHotDeals/FilterHotDeals";

const page = async () => {
  // fetch category
  const res = await fetch("http://localhost:3000/category.json", {
    cache: "no-store",
  });

  const category = await res.json();

  return (
    <div>
      <Hero></Hero>
      <Category category={category}></Category>
      <Banner></Banner>
      <ProductSection></ProductSection>
      <PromoBanner></PromoBanner>
      <FilterSelling></FilterSelling>
      <FilterHotDeals></FilterHotDeals>
    </div>
  );
};

export default page;
