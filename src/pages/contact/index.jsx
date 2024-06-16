import { racingSansOne } from "@/fonts/fonts";
import Link from "next/link";
import { FaSquareFacebook, FaSquareWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

function ContactPage() {
  return (
    <section id="contact" className="w-screen h-full my-10 flex flex-col items-center text-[#046076]">
      <h1 className={`text-3xl uppercase ${racingSansOne.className}`}>contato</h1>
      <p className="text-xl mt-4">Entre em contato com a nossa equipe e solicite um orçamento gratuito e sem compromisso para a importação do seu carro!</p>
      <div className="flex mt-8 items-center gap-12">
        <Link href="https://wa.me/+5527996355750" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#059CC6]">
          <FaSquareWhatsapp className="text-2xl" />
          <p className="ml-2 text-lg">WhatsApp</p>
        </Link>
        <Link href="https://m.me/61560026494859" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#059CC6]">
          <FaSquareFacebook className="text-2xl" />
          <p className="ml-2 text-lg">Facebook</p>
        </Link>
      </div>
      <form className="mt-8 flex flex-col w-[33%] gap-2">
        <div className="flex items-center">
          <IoMail className="text-2xl mr-2" />
          <p>E-mail</p>
        </div>
        <input type="text" placeholder="Nome" className="form-input rounded bg-[#FFFCF5]" />
        <input type="email" placeholder="E-mail" className="form-input rounded bg-[#FFFCF5]" />
        <textarea placeholder="Fale sobre o seu carro clássico dos sonhos. Nos de detalhes sobre fabricante, modelo, ano, cores. A nossa equipe irá entrar em contato o mais breve possível. Vamos transformar o seu sonho em realidade!" className="form-input rounded h-32 bg-[#FFFCF5]" />
        <button className="bg-[#046076] rounded mt-2 font-bold text-[#FFFCF5] p-2 hover:bg-[#059CC6] text-lg">Faça uma Cotação</button>
      </form>
    </section>
  );
}

export default ContactPage;
