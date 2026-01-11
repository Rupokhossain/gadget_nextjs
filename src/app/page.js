import React from "react";
import Hero from "./homeComponents/Hero";
import Category from "./homeComponents/Category";
import Banner from "./homeComponents/Banner";
import ProductSection from "./homeComponents/ProductCard/ProductSection";
import PromoBanner from "./homeComponents/PromoBanner/PromoBanner";
import FilterSelling from "./homeComponents/FilterSelling/FilterSelling";
import FilterHotDeals from "./homeComponents/FilterHotDeals/FilterHotDeals";
import FilterBestSell from "./homeComponents/FilterBestSell/FilterBestSell";
import Offer from "./homeComponents/Offer";
import FilterFeature from "./homeComponents/FilterFeature/FilterFeature";
import ShopByBrands from "./homeComponents/ShopByBrands";
import NewArrival from "./homeComponents/NewArrival";

const page = async () => {
  // fetch category
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category.json`, {
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
      <FilterBestSell></FilterBestSell>
      <Offer></Offer>
      <FilterFeature></FilterFeature>
      <ShopByBrands></ShopByBrands>
      <NewArrival></NewArrival>
      
    </div>
  );
};

export default page;
