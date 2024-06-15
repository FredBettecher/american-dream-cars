import Link from "next/link";
import { IoMail } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-screen bg-[#046076] px-16 py-4">
      <div className="flex items-center gap-64">
        <img src="/logo.webp" className="w-32" />
        <div className="flex flex-col gap-2">
          <Link className="cursor:pointer hover:text-[#059CC6]" scroll={true} href="#home">Início</Link>
          <Link className="cursor:pointer hover:text-[#059CC6]" scroll={true} href="#services">Serviços</Link>
          <Link className="cursor:pointer hover:text-[#059CC6]" scroll={true} href="#">Sobre Nós</Link>
          <Link className="cursor:pointer hover:text-[#059CC6]" scroll={true} href="#">Contato</Link>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <IoMail className="text-xl" />
            <p>contato@americandreamcars.com.br</p>
          </div>
          <div className="flex items-center gap-2">
            <FaSquarePhone className="text-xl" />
            <p>+55 (27) 99635-5750</p>
          </div>
        </div>
      </div>
      <p className="text-center mt-6">Copyright &#169; 2024 - Todos os direitos reservados - American Dream Cars</p>
    </footer>

  );
}

export default Footer;
