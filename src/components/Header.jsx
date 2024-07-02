import { racingSansOne } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.webp";

function Header() {
  return (
    <header className={`z-10 absolute top-0 left-0 flex w-full justify-between items-center px-2 pt-2 lg:pt-4 lg:px-14 uppercase ${racingSansOne.className} text-xs lg:text-2xl bg-transparent`}>
      <div>
        <Link href="/">
          <Image src={Logo} alt="American Dream Cars" className="w-24 lg:w-52" />
        </Link>
      </div>
      <div className="flex justify-between gap-4 lg:gap-24">
        <nav className="cursor-pointer hover:text-[#046076]"><Link href='/servicos'>serviços</Link> </nav>
        <nav className="cursor-pointer hover:text-[#046076]"><Link href='/sobre-nos'>sobre nós</Link></nav>
        <nav className="cursor-pointer hover:text-[#046076]"><Link href='/contato'>contato</Link></nav>
      </div>
    </header>
  );
}

export default Header;
