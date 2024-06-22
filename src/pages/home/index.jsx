import { racingSansOne } from "@/fonts/fonts";
import Image from "next/image";
import Mustang from "../../../public/images/car1.webp";

function HomePage() {
  return (
    <section id="home" className="w-full h-screen bg-cover"
      style={{ backgroundImage: `url(/images/bg-home.webp)` }}>
      <div className="w-full h-dvh flex flex-col px-2 justify-around lg:justify-between lg:flex-row lg:px-12 bg-[#059CC680]">
        <div className="lg:w-[50%] mt-20 lg:mt-40">
          <h1 className="font-bold uppercase lg:text-4xl lg:ml-16">importação de <span className="text-[#7B170F]">carros clássicos</span> americanos com simplicidade e confiança</h1>
          <p className="mt-4 text-sm lg:ml-16 lg:mt-6 lg:text-lg">Cuidamos de todo o processo para você, desde a seleção até a entrega. Então, se acomode no banco do carona que nos encarregamos do resto.</p>
          <button className={`flex text-center lg:text-3xl ${racingSansOne.className} uppercase border-2 border-white bg-[#7B170F] rounded h-fit p-3 cursor-pointer m-auto mt-8 lg:mt-12 lg:ml-16 shadow-[0px_5px_1px_rgba(123,23,15,1)] hover:bg-[#CD3837] hover:shadow-[0px_5px_1px_rgba(205,56,55,1)] active:scale-95 active:shadow-[0px_0px_1px_rgba(205,56,55,1)] transition-transform duration-[50ms] ease-linear`}>
            solicite<br />um orçamento
          </button>
        </div>
        <div className="bg-[#7B170F] w-[20rem] h-[10rem] m-auto flex items-center justify-center relative lg:m-0 lg:w-[30rem] lg:h-[15rem] lg:mt-56">
          <Image src={Mustang} alt="Ford Mustang" className="w-[17rem] lg:w-[27rem] mb-[4rem] lg:mb-[6rem] shadow-[0px_5px_10px_rgba(0,0,0,0.5)]" />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
