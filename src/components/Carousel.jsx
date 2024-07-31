'use client';
import { racingSansOne } from "@/fonts/fonts";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import Image from "next/image";
import Dodge from "../../public/images/carousel/car1.webp";
import BelAir from "../../public/images/carousel/car2.webp";
import Mustang from "../../public/images/carousel/car3.webp";
import F100 from "../../public/images/carousel/car4.webp";
import Chayenne from "../../public/images/carousel/car5.webp";
import Stingray from "../../public/images/carousel/car6.webp";
import Lincoln from "../../public/images/carousel/car7.webp";

function Carousel() {
  return (
    <>
      <Splide className="bg-[#046076] text-[#FFFCF5] w-[17rem] lg:w-[25rem] rounded shadow shadow-[#046076]">
        {/* Car 01 */}
        <SplideSlide className="flex flex-col items-center">
          <Image src={Dodge} className="lg:w-[25rem] w-[17rem] rounded" alt="Dodge Charger" />
          <h3 className={`font-bold my-2 lg:text-xl ${racingSansOne.className}`}>Dodge Charger</h3>
          <p className="text-justify p-2 mb-4 text-sm lg:text-base">O Dodge Charger é um ícone do automobilismo americano, conhecido por seu design musculoso e desempenho poderoso. Este clássico dos muscle cars combina estilo arrojado com uma herança de velocidade e força, tornando-se uma verdadeira lenda nas estradas.</p>
        </SplideSlide>
        {/* Car 02 */}
        <SplideSlide className="flex flex-col items-center">
          <Image src={BelAir} className="lg:w-[25rem] w-[17rem] rounded" alt="Chevrolet Bel Air" />
          <h3 className={`font-bold my-2 lg:text-xl ${racingSansOne.className}`}>Chevrolet Bel Air</h3>
          <p className="text-justify p-2 mb-4 text-sm lg:text-base">O Chevrolet Bel Air é um carro revolucionário, destacando-se pelo seu design elegante e cromo brilhante. Este clássico automotivo oferece um charme vintage incomparável, capturando a essência e o glamour de sua época.</p>
        </SplideSlide>
        {/* Car 03 */}
        <SplideSlide className="flex flex-col items-center">
          <Image src={Mustang} className="lg:w-[25rem] w-[17rem] rounded" alt="Ford Mustang" />
          <h3 className={`font-bold my-2 lg:text-xl ${racingSansOne.className}`}>Ford Mustang</h3>
          <p className="text-justify p-2 mb-4 text-sm lg:text-base">O Ford Mustang é um ícone atemporal, conhecido por seu estilo esportivo e desempenho excepcional. Desde seu lançamento na década de 60, este muscle car tornou-se um símbolo de liberdade e potência, conquistando entusiastas em todo o mundo.</p>
        </SplideSlide>
        {/* Car 04 */}
        <SplideSlide className="flex flex-col items-center">
          <Image src={F100} className="lg:w-[25rem] w-[17rem] rounded" alt="Ford F-100" />
          <h3 className={`font-bold my-2 lg:text-xl ${racingSansOne.className}`}>Ford F-100</h3>
          <p className="text-justify p-2 mb-4 text-sm lg:text-base">O Ford F-100 é uma emblemática caminhonete americana, famosa por seu estilo clássico e resistente. Com uma carroceria de linhas arredondadas e um motor potente, o modelo representa uma era de durabilidade e estilo na indústria automobilística. É um símbolo do auge das picapes vintage, é bastante apreciado por colecionadores e amantes de veículos antigos.</p>
        </SplideSlide>
        {/* Car 05 */}
        <SplideSlide className="flex flex-col items-center">
          <Image src={Chayenne} className="lg:w-[25rem] w-[17rem] rounded" alt="Chevrolet C-10 Cheyenne" />
          <h3 className={`font-bold my-2 lg:text-xl ${racingSansOne.className}`}>Chevrolet C-10 Cheyenne</h3>
          <p className="text-justify p-2 mb-4 text-sm lg:text-base">A Chevrolet C-10 Cheyenne é uma picape clássica da década de 1970, conhecida por seu design elegante e conforto superior. Com detalhes cromados e suspensão refinada, o modelo alia robustez e luxo, tornando-se um favorito entre os entusiastas de picapes vintage. O Cheyenne é apreciado pela sua versatilidade e estilo, marcando uma era de excelência no design automóvel Chevrolet.</p>
        </SplideSlide>
        {/* Car 06 */}
        <SplideSlide className="flex flex-col items-center">
          <Image src={Stingray} className="lg:w-[25rem] w-[17rem] rounded" alt="Chevrolet Corvette Stingray" />
          <h3 className={`font-bold my-2 lg:text-xl ${racingSansOne.className}`}>Chevrolet Corvette Stingray</h3>
          <p className="text-justify p-2 mb-4 text-sm lg:text-base">O Chevrolet Corvette Stingray é um carro esportivo icônico conhecido por seu design aerodinâmico e desempenho excepcional. Lançado na década de 1960, o Stingray combina linhas elegantes com a mais recente engenharia, oferecendo uma experiência de condução emocionante e poderosa. É uma lenda automotiva, conhecida por sua estética marcante e por seu status como símbolo da cultura americana de carros esportivos.</p>
        </SplideSlide>
        {/* Car 07 */}
        <SplideSlide className="flex flex-col items-center">
          <Image src={Lincoln} className="lg:w-[25rem] w-[17rem] rounded" alt="Lincoln Continental" />
          <h3 className={`font-bold my-2 lg:text-xl ${racingSansOne.className}`}>Lincoln Continental</h3>
          <p className="text-justify p-2 mb-4 text-sm lg:text-base">O Lincoln Continental é um símbolo de luxo e elegância, especialmente icônico na década de 1960. Conhecido por suas linhas elegantes, este conversível oferece uma experiência de direção sofisticada e confortável. Representando o auge da riqueza automotiva americana, o Continental é apreciado por colecionadores e admiradores de carros clássicos por sua presença elegante e imponente.</p>
        </SplideSlide>
      </Splide>
    </>
  );
}

export default Carousel;
