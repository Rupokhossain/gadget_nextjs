"use client";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const ResponsiveToaster = () => {
  const [position, setPosition] = useState("top-right");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPosition("top-center");
      } else {

        setPosition("top-right");
      }
    };


    handleResize();


    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Toaster
      position={position}
      reverseOrder={false}
      toastOptions={{
        style: {
          maxWidth: "90vw", 
          fontSize: "14px",
          borderRadius: "12px",
          background: "#333",
          color: "#fff",
        },
      }}
    />
  );
};

export default ResponsiveToaster;