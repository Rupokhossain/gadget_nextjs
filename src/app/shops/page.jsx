import React from "react";
import ShopClient from "./ShopClient";

const Page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/shops.json`, {
    cache: "no-store",
  });
  const data = await res.json();
  const allShops = data?.shops || [];

  return (
    <div className="container mx-auto p-6 min-h-screen">

      <ShopClient initialShops={allShops} />
    </div>
  );
};

export default Page;