'use client';
import { racingSansOne } from "@/fonts/fonts";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

function Carousel() {
  return (
    <>
      <Splide className="bg-[#046076] text-[#FFFCF5] max-w-[25rem] rounded shadow shadow-[#046076]">
        <SplideSlide className="flex flex-col items-center">
          <img src="/images/carousel/car1.webp" className="w-[25rem] rounded"/>
          <h3 className={`font-bold text-xl my-2 ${racingSansOne.className}`}>Dodge Charger</h3>
          <p className="text-justify p-2 mb-4">O Dodge Charger é um ícone do automobilismo americano, conhecido por seu design musculoso e desempenho poderoso. Este clássico dos muscle cars combina estilo arrojado com uma herança de velocidade e força, tornando-se uma verdadeira lenda nas estradas.</p>
        </SplideSlide>
        <SplideSlide className="flex flex-col items-center">
          <img src="/images/carousel/car2.webp" className="w-[25rem] rounded"/>
          <h3 className={`font-bold text-xl my-2 ${racingSansOne.className}`}>Chevrolet Bel Air</h3>
          <p className="text-justify p-2 mb-4">O Chevrolet Bel Air é um carro revolucionário, destacando-se pelo seu design elegante e cromo brilhante. Este clássico automotivo oferece um charme vintage incomparável, capturando a essência e o glamour de sua época.</p>
        </SplideSlide>
        <SplideSlide className="flex flex-col items-center">
          <img src="/images/carousel/car3.webp" className="w-[25rem] rounded"/>
          <h3 className={`font-bold text-xl my-2 ${racingSansOne.className}`}>Ford Mustang</h3>
          <p className="text-justify p-2 mb-4">O Ford Mustang é um ícone atemporal, conhecido por seu estilo esportivo e desempenho excepcional. Desde seu lançamento na década de 60, este muscle car tornou-se um símbolo de liberdade e potência, conquistando entusiastas em todo o mundo.</p>
        </SplideSlide>
      </Splide>
    </>
  );
}

export default Carousel;
