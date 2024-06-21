import Carousel from "@/components/Carousel";
import { racingSansOne } from "@/fonts/fonts";

function CarSelectionPage() {
  return (
    <section id="cars" className="w-screen h-screen my-16 flex flex-col items-center justify-center text-[#046076]">
      <h1 className={`text-3xl uppercase ${racingSansOne.className}`}>seleções exclusivas de veículos</h1>
      <p className="text-xl mt-6 mb-6 px-24">Na American Dream Cars, oferecemos uma coleção exclusiva de veículos clássicos selecionados e personalizados, com acesso aos modelos mais icônicos e raros do automobilismo americano.
      </p>
      <Carousel />
    </section>
  );
}

export default CarSelectionPage;
