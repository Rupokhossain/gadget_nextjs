"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IoCallOutline, IoMenu, IoClose } from "react-icons/io5";

const BottomHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); 

  


  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shops" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="shadow relative bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-24">
        <div className="flex items-center justify-between h-14">
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href; 
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`uppercase font-semibold transition text-sm tracking-wide ${
                    isActive 
                      ? "text-[#4B70F5]" 
                      : "text-[#162726] hover:text-[#07a698]" 
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-2xl text-[#162726] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </div>

          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200 py-6 px-6 flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`uppercase font-semibold transition text-sm ${
                      isActive 
                        ? "text-[#4B70F5]" 
                        : "text-[#162726] hover:text-[#07a698]"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          )}

          {/* Call Button */}
          <div>
            <button className="flex items-center cursor-pointer font-bold bg-[#4B70F5] hover:bg-[#3b5bd9] text-white px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm rounded-md transition-all">
              <IoCallOutline className="me-2 text-lg sm:text-xl" />
              <span className="inline">01- 234 567 890</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;