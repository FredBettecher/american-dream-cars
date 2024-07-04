"use client";
import { racingSansOne } from "@/fonts/fonts";
import Image from "next/image";
import BelAir from "../../../public/images/car2.webp";
import { motion } from "framer-motion";

function CallToAction() {
  const scrollIntoTheView = (id) => {
    let element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <motion.section
      id="howItWorks"
      className="w-scree h-full flex flex-col items-center justify-center text-[#046076] my-8 lg:my-16"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <h1 className={`text-xl uppercase lg:text-3xl ${racingSansOne.className}`}>pronto para realizar o seu sonho?</h1>
      <div className="flex flex-col lg:flex-row">
        <p className="text-[#333333] text-justify px-2 mt-4 lg:mt-6 lg:px-24 lg:w-[75%] lg:text-xl">Na American Dream Cars, cada carro clássico é tratado como uma obra-prima automotiva, cheia de histórias e emoções únicas. Com nossa expertise e dedicação, trazemos essas lendas do automobilismo para você, preservando sua autenticidade. Deixe-nos transformar seu sonho em realidade e experimente a emoção de possuir um ícone que transcende gerações. Junte-se a nós nessa jornada emocionante!</p>
        <div className="bg-[#046076] flex items-center justify-center mt-20 m-auto w-[10rem] h-[6rem] lg:m-0 lg:mt-20 lg:w-[14rem] lg:h-[10rem]">
          <Image src={BelAir} alt="Chevrolet Bel Air" className="lg:w-[12rem] w-[8rem] shadow-[0px_5px_10px_rgba(0,0,0,0.5)]" />
        </div>
      </div>
      <motion.button
      onClick={() => scrollIntoTheView('contact')}
      type="submit"
      className={`flex justify-center text-[#FFFCF5] ${racingSansOne.className} uppercase bg-[#046076] rounded h-fit p-2 cursor-pointer hover:bg-[#059CC6] active:scale-95 transition-transform duration-[30ms] ease-linear w-48 mt-20 text-lg lg:text-2xl lg:w-64 lg:my-6`}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      >
        solicite<br />um orçamento
      </motion.button>
    </motion.section>
  );
}

export default CallToAction;
