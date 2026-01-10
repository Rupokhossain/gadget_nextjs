import React from "react";
import TopHeader from "./TopHeader/TopHeader";
import MidHeader from "./MidHeader/MidHeader";
import BottomHeader from "./BottomHeader/BottomHeader";

const Header = () => {
  return (
    <div className="sticky top-0 z-[1000] w-full">
      <TopHeader></TopHeader>
      <div className=" ">
        <MidHeader />
        <BottomHeader />
      </div>
    </div>
  );
};

export default Header;
