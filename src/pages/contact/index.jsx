"use client";
import Email from "@/components/Email";
import { racingSansOne } from "@/fonts/fonts";
import Link from "next/link";
import { FaSquareFacebook, FaSquareWhatsapp, FaSquareInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";

function ContactPage() {
  return (
    <section id="contact" className="w-screen h-full flex flex-col items-center text-[#046076] my-8 lg:my-16">
      <motion.h1
        className={`text-xl uppercase lg:text-3xl ${racingSansOne.className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        contato
      </motion.h1>
      <motion.p
        className="text-[#333333] mt-4 px-2 text-justify lg:text-start lg:text-xl lg:px-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        Entre em contato com a nossa equipe e solicite um orçamento gratuito e sem compromisso para a importação do seu carro!
      </motion.p>
      <motion.div
        className="flex flex-col mt-8 items-center gap-6 lg:flex-row lg:gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Link href="https://wa.me/+5527996355750" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#059CC6]">
          <FaSquareWhatsapp className="text-lg lg:text-2xl" />
          <p className="ml-2 lg:text-xl">WhatsApp</p>
        </Link>
        <Link href="https://m.me/61560026494859" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#059CC6]">
          <FaSquareFacebook className="text-lg lg:text-2xl" />
          <p className="ml-2 lg:text-xl">Facebook</p>
        </Link>
        <Link href="https://www.instagram.com/americandreamcars.oficial/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#059CC6]">
          <FaSquareInstagram className="text-lg lg:text-2xl" />
          <p className="ml-2 lg:text-xl">Instagram</p>
        </Link>
      </motion.div>
      <Email />
    </section>
  );
}

export default ContactPage;
