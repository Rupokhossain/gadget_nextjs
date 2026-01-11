
import HotDeals from '@/app/HotDeals/HotDeals'
const FilterHotDeals = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/phones.json`, {
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