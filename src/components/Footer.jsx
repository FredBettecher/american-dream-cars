"use client";
import Link from "next/link";
import { IoMail } from "react-icons/io5";
import { FaSquareFacebook, FaSquarePhone, FaSquareYoutube, FaSquareInstagram } from "react-icons/fa6";
import Image from "next/image";
import Logo from "../../public/logo.webp"
import { usePathname, useRouter } from "next/navigation";

function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollIntoTheView = (id) => {
    let element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push(`/#${targetId}`);
    } else {
      scrollIntoTheView(targetId);
    }
  };

  return (
    <footer className="w-screen bg-[#046076] p-2 lg:px-16 lg:py-4 text-sm lg:text-base">
      <div className="flex flex-col items-center lg:items-start lg:flex-row gap-8 lg:gap-32">
        <Image src={Logo} alt="American Dream Cars" className="w-32 lg:w-40 lg:mt-6" />
        <div className="flex gap-6 lg:flex-col lg:items-start">
          <button className="cursor:pointer hover:text-[#059CC6]" onClick={(e) => handleNavigation(e, '')}>
            Início
          </button>
          <button className="cursor:pointer hover:text-[#059CC6]" onClick={(e) => handleNavigation(e, 'services')}>
            Serviços
          </button>
          <button className="cursor:pointer hover:text-[#059CC6]" onClick={(e) => handleNavigation(e, 'contact')}>
            Contato
          </button>
          <Link className="cursor:pointer hover:text-[#059CC6]" href={'sobre-nos'}>
            Sobre Nós
          </Link>
        </div>
        <div className="flex flex-col gap-4 text-center lg:text-start">
          <p className="font-bold">Contato</p>
          <div className="flex items-center gap-2">
            <IoMail className="text-2xl" />
            <p>importacao@americandreamcars.com.br</p>
          </div>
          <div className="flex items-center gap-2">
            <FaSquarePhone className="text-2xl" />
            <p>(27) 99635-5750</p>
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
          <Link href="https://www.instagram.com/americandreamcars.oficial/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#059CC6]">
            <FaSquareInstagram className="text-2xl mr-2" />
            <p>Instagram</p>
          </Link>
        </div>
      </div>
      <p className="text-center mt-6">American Dream Cars &#169; 2024 - Todos os direitos reservados</p>
    </footer>

  );
}

export default Footer;
