"use client";
import Carousel from "@/components/Carousel";
import { racingSansOne } from "@/fonts/fonts";
import { motion } from "framer-motion";

function CarSelectionPage() {
  return (
    <section id="cars" className="w-screen h-full flex flex-col items-center justify-center text-[#046076] my-8 lg:my-16">
      <motion.h1
        className={`text-xl lg:text-3xl uppercase ${racingSansOne.className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        seleções exclusivas de veículos
      </motion.h1>
      <motion.p
        className="text-[#333333] px-2 mt-4 text-justify my-6 lg:text-xl lg:px-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        Na American Dream Cars, podemos te auxiliar na escolha de veículos clássicos exclusivos e personalizados, proporcionando o acesso aos modelos mais icônicos e raros do automobilismo americano.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Carousel />
      </motion.div>
    </section>
  );
}

export default CarSelectionPage;
