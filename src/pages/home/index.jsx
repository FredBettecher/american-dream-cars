import { racingSansOne } from "@/fonts/fonts";

function HomePage() {
  return (
    <section id="home" className="w-screen h-screen bg-cover"
      style={{ backgroundImage: `url(/images/bg-home.webp)` }}>
      <div className="w-screen h-dvh flex justify-between px-12 bg-[#059CC680]">
        <div className="w-[50%] mt-40">
          <h1 className="font-bold text-4xl uppercase ml-16">importação de <span className="text-[#7B170F]">carros clássicos</span> americanos com simplicidade e confiança</h1>
          <p className="ml-16 mt-6 text-lg">Cuidamos de todo o processo para você, desde a seleção até a entrega. Então, se acomode no banco do carona que nos encarregamos do resto.</p>
          <button className={`flex text-center text-3xl ${racingSansOne.className} uppercase border-2 border-white bg-[#7B170F] rounded h-fit p-3 cursor-pointer mt-12 ml-16 shadow-[0px_5px_1px_rgba(123,23,15,1)] hover:bg-[#CD3837] hover:shadow-[0px_5px_1px_rgba(205,56,55,1)] active:scale-95 active:shadow-[0px_0px_1px_rgba(205,56,55,1)] transition-transform duration-[50ms] ease-linear`}>
            solicite<br />um orçamento
          </button>
        </div>
        <div className="bg-[#7B170F] w-[30rem] h-[15rem] flex items-center justify-center mt-56 relative">
          <img src="/images/car1.webp" alt="ford mustang" className="w-[27rem] mb-[6rem] shadow-[0px_5px_10px_rgba(0,0,0,0.5)]" />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
