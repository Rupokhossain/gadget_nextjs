import Link from "next/link";
import React from "react";

const MidHeader = () => {
  return (
    <div className="w-full border-b border-gray-300 relative">
      <div className="flex items-center justify-between py-5 px-24 container mx-auto">
        {/* logo */}
        <Link href="" className="text-3xl font-bold Merienda text-black">
            Elecetra<span className="text-(--prim-color)">Hub</span>
        </Link>
      </div>
    </div>
  );
};

export default MidHeader;
