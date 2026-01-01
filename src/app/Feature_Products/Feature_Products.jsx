import React from 'react'
import SectionFeatured from './SectionFeatured/SectionFeatured';

const Feature_Products =async() => {
      // fetch 
  const res = await fetch("http://localhost:3000/featured.json", {
    cache: "no-store",
  });
//   const res1 = await fetch("http://localhost:3000/onSale.json", {
//     cache: "no-store",
//   });
//   const res2 = await fetch("http://localhost:3000/topRated.json", {
//     cache: "no-store",
//   });
//   const res3 = await fetch("http://localhost:3000/topSelling.json", {
//     cache: "no-store",
//   });

  const data = await res.json();
  const featured = data.featured;
//   const onSale = await res1.json();
//   const topRated = await res2.json();
//   const topSelling = await res3.json();

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SectionFeatured title="Featured Products" featured={featured} />
        {/* <SectionColumn title="Top Selling Products" topSelling={topSelling} />
        <SectionColumn title="On-Sale Products" onSale={onSale} />
        <SectionColumn title="Top Rated Products" topRated={topRated} /> */}
      </div>
    </div> 
  )
}

export default Feature_Products