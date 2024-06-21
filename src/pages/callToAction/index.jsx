import { racingSansOne } from "@/fonts/fonts";

function CallToAction() {
  return (
    <section id="howItWorks" className="w-scree h-full my-16 flex flex-col items-center justify-center text-[#046076]">
      <h1 className={`text-3xl uppercase ${racingSansOne.className}`}>pronto para realizar o seu sonho?</h1>
      <div className="flex">
        <p className="text-xl mt-6 px-24 text-justify w-[75%]">Na American Dream Cars, cada carro clássico é tratado como uma obra-prima automotiva, cheia de histórias e emoções únicas. Com nossa expertise e dedicação, trazemos essas lendas do automobilismo para você, preservando sua autenticidade. Deixe-nos transformar seu sonho em realidade e experimente a emoção de possuir um ícone que transcende gerações Junte-se a nós nessa jornada emocionante!</p>
        <div className="bg-[#046076] w-[14rem] h-[10rem] flex items-center justify-center mt-20">
          <img src="/images/car2.webp" alt="chevrolet bel air" className="w-[12rem] shadow-[0px_5px_10px_rgba(0,0,0,0.5)]" />
        </div>
      </div>
      <button type="submit" className={`flex justify-center text-[#FFFCF5] text-2xl ${racingSansOne.className} uppercase bg-[#046076] rounded w-64 h-fit p-2 cursor-pointer my-6 hover:bg-[#059CC6] active:scale-95 transition-transform duration-[30ms] ease-linear`}>
        solicite<br />um orçamento
      </button>
    </section>
  );
}

export default CallToAction;
