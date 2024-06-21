import { racingSansOne } from "@/fonts/fonts";
import Link from "next/link";

function Header() {
  return (
    <header className={`absolute top-0 left-0 flex w-full justify-between items-center pt-4 px-14 uppercase ${racingSansOne.className} text-2xl bg-transparent`}>
      <div>
        <a href="#home">
          <img src="/logo.webp" className="w-52" alt="American Dream Cars" />
        </a>
      </div>
      <div className="flex justify-between gap-24">
        <nav className="cursor-pointer hover:text-[#7B170F]"><Link href='/servicos'>serviços</Link> </nav>
        <nav className="cursor-pointer hover:text-[#7B170F]"><Link href='/sobre-nos'>sobre nós</Link></nav>
        <nav className="cursor-pointer hover:text-[#7B170F]"><Link href='/contato'>contato</Link></nav>
      </div>
    </header>
  );
}

export default Header;
