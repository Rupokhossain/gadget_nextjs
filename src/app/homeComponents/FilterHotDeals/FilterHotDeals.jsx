
import HotDeals from '@/app/HotDeals/HotDeals'
const FilterHotDeals = async() => {
    const res = await fetch("http://localhost:3000/phones.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div>
        <HotDeals phones={data?.phones}></HotDeals>
    </div>
  )
}

export default FilterHotDeals