"use client";
import { racingSansOne } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.webp";
import Logo2 from "../../../public/logo2.webp";
import { FaDoorClosed, FaDoorOpen, FaMedal } from "react-icons/fa6";
import { GiArchiveRegister } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { useState } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutUs() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section
        id="about" className="w-scree h-full flex flex-col text-[#333333] mb-8">
        <header className={`z-10 absolute top-0 left-0 flex w-full justify-between items-center px-2 pt-2 lg:pt-4 lg:px-14 uppercase ${racingSansOne.className} text-xs lg:text-2xl bg-transparent text-[#059CC6]`}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link href="/">
              <Image src={Logo} alt="American Dream Cars" className="w-24 lg:w-52" />
            </Link>
          </motion.div>
          <motion.div
            className="flex justify-between gap-4 lg:gap-24"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link
              className="uppercase cursor-pointer flex items-center gap-2"
              href='/'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              voltar
              {isHovered ? (
                <FaDoorOpen className="text-lg lg:text-4xl" />
              ) : (
                <FaDoorClosed className="text-lg lg:text-4xl" />
              )}
            </Link>
          </motion.div>
        </header>

        <div className="text-justify px-2 lg:px-24 mt-16 lg:mt-36">
          <motion.p
            className="text-sm lg:text-lg font-bold"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Um pouco sobre a
          </motion.p>
          <motion.h1
            className={`text-xl text-[#059CC6] font-bold lg:text-3xl ${racingSansOne.className} flex items-center justify-between`}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            American Dream Cars
          </motion.h1>
          <motion.span
            className="absolute top-12 right-2 lg:top-20 lg:right-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Image src={Logo2} alt="American Dream Cars" className="w-20 lg:w-40" />
          </motion.span>
          <motion.p
            className="text-sm mt-2 lg:text-base"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            Fundada por um grupo de amantes de carros clássicos, a American Dream Cars nasceu do desejo de compartilhar a beleza e a potência dos muscle cars, sedãs de luxo e outros ícones automotivos americanos com entusiastas em todo o Brasil. Com anos de experiência no setor automotivo e um profundo conhecimento das nuances do mercado de importação, estamos prontos para atender às necessidades mais exigentes dos nossos clientes.
          </motion.p>
          <motion.h2
            className="text-[#059CC6] font-bold text-lg mt-6 lg:text-xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            Missão e Valores
          </motion.h2>
          <motion.p
            className="text-sm mt-2 lg:text-base"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            A nossa missão é compartilhar a emoção e a história por trás de
            cada veículo clássico com os verdadeiros entusiastas. Acreditamos que cada carro tem uma
            alma única, e estamos dedicados a preservar e celebrar essa herança automotiva. Nossos
            valores fundamentais são a <span className="text-[#059CC6]">excelência</span>, a <span className="text-[#059CC6]">autenticidade</span> e o <span className="text-[#059CC6]">atendimento personalizado</span>, para
            que você possa desfrutar da experiência completa de possuir um ícone do automobilismo
            americano.
          </motion.p>
          <motion.div
            className="mt-6 flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            <div className="max-w-72">
              <div className="flex items-center gap-2 text-[#059CC6] font-bold lg:text-lg">
                <FaMedal className="lg:text-xl" />
                <h3>Excelência</h3>
              </div>
              <p className="text-sm mt-2 lg:text-base">
                Trabalhamos com padrões
                rigorosos de qualidade em
                cada etapa do processo,
                desde a seleção do veículo,
                com nossa rede
                especializada de
                fornecedores nos EUA, até a
                entrega final, garantindo
                que apenas os exemplares
                mais autênticos e bem
                preservados façam parte
                de nossa coleção.
              </p>
            </div>
            <div className="max-w-72">
              <div className="flex items-center gap-2 text-[#059CC6] font-bold lg:text-lg">
                <GiArchiveRegister className="lg:text-xl" />
                <h3>Autenticidade</h3>
              </div>
              <p className="text-sm mt-2 lg:text-base">
                Respeitamos a
                autenticidade de cada
                carro clássico, preservando
                suas características
                originais e evitando
                modificações
                desnecessárias. Nosso
                objetivo é trazer a
                verdadeira essência desses
                clássicos para você.
              </p>
            </div>
            <div className="max-w-72">
              <div className="flex items-center gap-2 text-[#059CC6] font-bold lg:text-lg">
                <FaUserFriends className="lg:text-xl" />
                <h3>Atendimento Personalizado</h3>
              </div>
              <p className="text-sm mt-2 lg:text-base">
                Compreendemos que cada
                cliente tem desejos e
                necessidades únicos. Por
                isso, oferecemos um
                atendimento personalizado,
                desde a consultoria inicial
                até o suporte pós-venda,
                para garantir uma
                experiência excepcional.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
