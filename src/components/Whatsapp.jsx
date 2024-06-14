"use client";
import { FaSquareWhatsapp } from "react-icons/fa6";

function Whatsapp() {
  const handleRedirect = () => {
    window.open("https://wa.me/+5527996355750", '_blank', 'noopener,noreferrer');
  };
  return (
    <button className="fixed bottom-10 right-14 text-7xl text-[#25d366] flex hover:text-[#046076] transition-colors duration-500 easy-linear active:scale-95" onClick={handleRedirect}>
      <FaSquareWhatsapp className="absolute z-10" />
      <span className="relative top-2 left-2 bg-[#fff] w-14 h-14" />
    </button>
  );
}

export default Whatsapp;
