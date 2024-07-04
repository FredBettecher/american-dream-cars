'use client';
import { racingSansOne } from "@/fonts/fonts";
import Cars from "@/components/Cars";
import BackgroundComponent from "@/components/Background";

function HomePage() {
  const imagesDesktop = [
    '/images/desktop-bg/bg1.webp',
    '/images/desktop-bg/bg2.webp',
    '/images/desktop-bg/bg3.webp',
    '/images/desktop-bg/bg4.webp',
  ];
  const imagesMobile = [
    '/images/mobile-bg/bg1.webp',
    '/images/mobile-bg/bg2.webp',
    '/images/mobile-bg/bg3.webp',
    '/images/mobile-bg/bg4.webp',
  ];

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
    <>
      <BackgroundComponent imagesDesktop={imagesDesktop} imagesMobile={imagesMobile} />
      <section id="home" className="w-full h-screen absolute top-0 left-0">
        <div className="w-full h-screen flex flex-col px-2 justify-start lg:flex-row lg:justify-center lg:px-12 lg:gap-40 bg-[#059CC666]">
          <div className="flex flex-col justify-center h-full lg:w-[60%] mt-32 lg:mt-40">
            <h1 className={`font-bold ${racingSansOne.className} uppercase text-xl lg:text-5xl`}>importação de <span className="animate-text-color-change">carros clássicos</span> americanos com simplicidade e confiança</h1>
            <p className="mt-4 lg:mt-6 lg:text-lg">Cuidamos de todo o processo para você, desde a seleção até a entrega. Então, se acomode no banco do carona que nos encarregamos do resto.</p>
            <button
              onClick={() => scrollIntoTheView('contact')}
              className={`flex text-center lg:text-3xl ${racingSansOne.className} uppercase border-2 border-white bg-[#046076] rounded h-fit p-3 cursor-pointer m-auto lg:mt-12 shadow-[0px_5px_1px_rgba(4,96,118,1)] hover:bg-[#059CC6] hover:shadow-[0px_5px_1px_rgba(5,156,198,1)] active:scale-95 active:shadow-[0px_0px_1px_rgba(5,156,198,1)] transition-transform duration-[50ms] ease-linear`}>
              solicite<br />um orçamento
            </button>
          </div>
          {/* <Cars /> */}
        </div>
      </section>
    </>
  );
}

export default HomePage;
