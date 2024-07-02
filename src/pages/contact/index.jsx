import Email from "@/components/Email";
import { racingSansOne } from "@/fonts/fonts";
import Link from "next/link";
import { FaSquareFacebook, FaSquareWhatsapp, FaSquarePhone } from "react-icons/fa6";

function ContactPage() {
  return (
    <section id="contact" className="w-screen h-full flex flex-col items-center text-[#046076] my-8 lg:my-16">
      <h1 className={`text-xl uppercase lg:text-3xl ${racingSansOne.className}`}>contato</h1>
      <p className="text-[#333333] mt-4 px-2 text-justify lg:text-start lg:text-xl lg:px-24">Entre em contato com a nossa equipe e solicite um orçamento gratuito e sem compromisso para a importação do seu carro!</p>
      <div className="flex flex-col mt-8 items-center gap-6 lg:flex-row lg:gap-12">
        <Link href="https://wa.me/+5527996355750" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#059CC6]">
          <FaSquareWhatsapp className="text-2xl lg:text-4xl" />
          <p className="ml-2 lg:text-2xl">WhatsApp</p>
        </Link>
        <Link href="https://m.me/61560026494859" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#059CC6]">
          <FaSquareFacebook className="text-2xl lg:text-4xl" />
          <p className="ml-2 lg:text-2xl">Facebook</p>
        </Link>
        <div className="flex items-center">
          <FaSquarePhone className="text-2xl lg:text-4xl" />
          <p className="ml-2 lg:text-2xl">(27) 99635-5750</p>
        </div>
      </div>
      <Email />
    </section>
  );
}

export default ContactPage;
