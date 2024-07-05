"use client";
import { racingSansOne } from "@/fonts/fonts";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiShipFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { motion } from "framer-motion";

function ImportationPage() {
  return (
    <section id="importation" className="w-screen h-full flex flex-col items-center justify-center text-[#046076] my-8 lg:my-16">
      <motion.h1 
      className={`text-xl uppercase lg:text-3xl ${racingSansOne.className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.3 }}
      >
        processo de importação
      </motion.h1>
      <motion.p 
      className="text-[#333333] mt-4 px-2 text-justify lg:text-start lg:text-xl lg:px-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.4 }}
      >
        Nosso processo de importação é meticuloso e detalhado, garantindo que cada veículo clássico chegue em perfeitas condições.
        </motion.p>
      <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:px-20 lg:mt-12 lg:gap-x-48 lg:gap-y-10">
        <motion.div 
        className="w-80"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{duration: 0.3, delay: 0.5}}
        >
          <RiVerifiedBadgeFill className="text-2xl lg:text-4xl mb-2" />
          <h3 className="font-bold lg:text-lg mb-2">1. Seleção</h3>
          <p className="text-[#333333] text-sm lg:text-base">Selecionamos cuidadosamente cada veículo, avaliando sua autenticidade, condição e histórico.</p>
        </motion.div>
        <motion.div 
        className="w-80"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{duration: 0.3, delay: 0.6}}
        >
          <FaMagnifyingGlass className="text-2xl lg:text-4xl mb-2" />
          <h3 className="font-bold lg:text-lg mb-2">2. Inspeção</h3>
          <p className="text-[#333333] text-sm lg:text-base">Realizamos uma inspeção detalhada, identificando possíveis necessidades de restauração e garantindo a qualidade do veículo.</p>
        </motion.div>
        <motion.div 
        className="w-80"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{duration: 0.3, delay: 0.7}}
        >
          <RiShipFill className="text-2xl lg:text-4xl mb-2" />
          <h3 className="font-bold lg:text-lg mb-2">3. Importação</h3>
          <p className="text-[#333333] text-sm lg:text-base">Gerenciamos todo o processo de importação, incluindo documentação, transporte e seguro, mantendo você informado em cada etapa.</p>
        </motion.div>
        <motion.div 
        className="w-80"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{duration: 0.3, delay: 0.8}}
        >
          <TbTruckDelivery className="text-2xl lg:text-4xl mb-2" />
          <h3 className="font-bold lg:text-lg mb-2">4. Entrega</h3>
          <p className="text-[#333333] text-sm lg:text-base">Entregamos o seu veículo pronto para proporcionar a você momentos inesquecíveis nas estradas.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default ImportationPage;
