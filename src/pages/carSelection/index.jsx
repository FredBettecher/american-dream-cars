import Carousel from "@/components/Carousel";
import { racingSansOne } from "@/fonts/fonts";

function CarSelectionPage() {
  return (
    <section id="cars" className="w-screen h-full flex flex-col items-center justify-center text-[#046076] my-8 lg:my-16">
      <h1 className={`text-xl lg:text-3xl uppercase ${racingSansOne.className}`}>seleções exclusivas de veículos</h1>
      <p className="px-2 mt-4 text-justify my-6 lg:text-xl lg:px-24">Na American Dream Cars, oferecemos uma coleção exclusiva de veículos clássicos selecionados e personalizados, com acesso aos modelos mais icônicos e raros do automobilismo americano.
      </p>
      <Carousel />
    </section>
  );
}

export default CarSelectionPage;
