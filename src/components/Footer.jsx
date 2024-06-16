import Link from "next/link";
import { IoMail } from "react-icons/io5";
import { FaSquareFacebook, FaSquarePhone, FaSquareYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-screen bg-[#046076] px-16 py-4">
      <div className="flex items-start gap-32">
        <img src="/logo.webp" className="w-40 mt-6" />
        <div className="flex flex-col gap-2">
          <Link className="cursor:pointer hover:text-[#059CC6]" scroll={true} href="#home">Início</Link>
          <Link className="cursor:pointer hover:text-[#059CC6]" scroll={true} href="#services">Serviços</Link>
          <Link className="cursor:pointer hover:text-[#059CC6]" scroll={true} href="#">Sobre Nós</Link>
          <Link className="cursor:pointer hover:text-[#059CC6]" scroll={true} href="#">Contato</Link>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold">Contato</p>
          <div className="flex items-center gap-2">
            <IoMail className="text-2xl" />
            <p>contato@americandreamcars.com.br</p>
          </div>
          <div className="flex items-center gap-2">
            <FaSquarePhone className="text-2xl" />
            <p>+55 (27) 99635-5750</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold">Nossas Redes Sociais</p>
          <Link href="https://www.facebook.com/profile.php?id=61560026494859&mibextid=LQQJ4d&rdid=yCF2llMM7WjHpl6V&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FnBmH4V66MDL6e1J4%2F%3Fmibextid%3DLQQJ4d" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#059CC6]">
            <FaSquareFacebook className="text-2xl mr-2" />
            <p>Facebook</p>
          </Link>
          <Link href="https://www.youtube.com/@americandreamcars-wd3fx" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#059CC6]">
            <FaSquareYoutube className="text-2xl mr-2" />
            <p>YouTube</p>
          </Link>
        </div>
      </div>
      <p className="text-center mt-6">Copyright &#169; 2024 - Todos os direitos reservados - American Dream Cars</p>
    </footer>

  );
}

export default Footer;
