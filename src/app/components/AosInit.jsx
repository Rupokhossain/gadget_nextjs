"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const AosInit = () => {
  const pathname = usePathname();

  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true, 
      delay: 0,
      mirror: false,
      offset: 50, 
    });
  }, []);

  useEffect(() => {
    AOS.refresh(); 
  }, [pathname]);

  return null;
};

export default AosInit;