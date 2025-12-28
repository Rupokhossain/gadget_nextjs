import React from "react";
import Hero from "./homeComponents/Hero";
import Category from "./homeComponents/Category";

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
    </div>
  );
};

export default page;
