'use client';
import { racingSansOne } from "@/fonts/fonts";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import Image from "next/image";
import Dodge from "../../public/images/carousel/car1.webp";
import BelAir from "../../public/images/carousel/car2.webp";
import Mustang from "../../public/images/carousel/car3.webp";

function Carousel() {
  return (
    <>
      <Splide className="bg-[#046076] text-[#FFFCF5] w-[17rem] lg:w-[25rem] rounded shadow shadow-[#046076]">
        <SplideSlide className="flex flex-col items-center">
          <Image src={Dodge} className="lg:w-[25rem] w-[17rem] rounded" alt="Dodge Charger" />
          <h3 className={`font-bold my-2 lg:text-xl ${racingSansOne.className}`}>Dodge Charger</h3>
          <p className="text-justify p-2 mb-4 text-sm lg:text-base">O Dodge Charger é um ícone do automobilismo americano, conhecido por seu design musculoso e desempenho poderoso. Este clássico dos muscle cars combina estilo arrojado com uma herança de velocidade e força, tornando-se uma verdadeira lenda nas estradas.</p>
        </SplideSlide>
        <SplideSlide className="flex flex-col items-center">
          <Image src={BelAir} className="lg:w-[25rem] w-[17rem] rounded" alt="Chevrolet Bel Air" />
          <h3 className={`font-bold my-2 lg:text-xl ${racingSansOne.className}`}>Chevrolet Bel Air</h3>
          <p className="text-justify p-2 mb-4 text-sm lg:text-base">O Chevrolet Bel Air é um carro revolucionário, destacando-se pelo seu design elegante e cromo brilhante. Este clássico automotivo oferece um charme vintage incomparável, capturando a essência e o glamour de sua época.</p>
        </SplideSlide>
        <SplideSlide className="flex flex-col items-center">
          <Image src={Mustang} className="lg:w-[25rem] w-[17rem] rounded" alt="Ford Mustang" />
          <h3 className={`font-bold my-2 lg:text-xl ${racingSansOne.className}`}>Ford Mustang</h3>
          <p className="text-justify p-2 mb-4 text-sm lg:text-base">O Ford Mustang é um ícone atemporal, conhecido por seu estilo esportivo e desempenho excepcional. Desde seu lançamento na década de 60, este muscle car tornou-se um símbolo de liberdade e potência, conquistando entusiastas em todo o mundo.</p>
        </SplideSlide>
      </Splide>
    </>
  );
}

export default Carousel;
