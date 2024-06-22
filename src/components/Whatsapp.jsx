import Link from "next/link";
import { FaSquareWhatsapp } from "react-icons/fa6";

function Whatsapp() {
  return (
    <Link href="https://wa.me/+5527996355750" target="_blank" rel="noopener noreferrer" className="fixed text-7xl bottom-10 right-8 text-[#25d366] flex hover:text-[#046076] transition-colors duration-500 easy-linear active:scale-95 lg:right-14">
      <FaSquareWhatsapp className="absolute z-10" />
      <span className="relative top-2 left-2 bg-[#fff] w-14 h-14" />
    </Link>
  );
}

export default Whatsapp;
