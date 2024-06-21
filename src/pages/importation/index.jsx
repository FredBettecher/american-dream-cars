import { racingSansOne } from "@/fonts/fonts";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiShipFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

function ImportationPage() {
  return (
    <section id="importation" className="w-screen h-full my-16 flex flex-col items-center justify-center text-[#046076]">
      <h1 className={`text-3xl uppercase ${racingSansOne.className}`}>processo de importação</h1>
      <p className="text-xl mt-6 px-24">Nosso processo de importação é meticuloso e detalhado, garantindo que cada veículo clássico chegue em perfeitas condições.</p>
      <div className="mt-12 grid grid-cols-2 px-20 gap-x-48 gap-y-10">
        <div className="w-80">
          <RiVerifiedBadgeFill className="text-4xl mb-2" />
          <h3 className="font-bold text-lg mb-2">1. Seleção</h3>
          <p>Selecionamos cuidadosamente cada veículo, avaliando sua autenticidade, condição e histórico.</p>
        </div>
        <div className="w-80">
          <FaMagnifyingGlass className="text-4xl mb-2" />
          <h3 className="font-bold text-lg mb-2">2. Inspeção</h3>
          <p>Realizamos uma inspeção detalhada, identificando possíveis necessidades de restauração e garantindo a qualidade do veículo.</p>
        </div>
        <div className="w-80">
          <RiShipFill className="text-4xl mb-2" />
          <h3 className="font-bold text-lg mb-2">3. Importação</h3>
          <p>Gerenciamos todo o processo de importação, incluindo documentação, transporte e seguro, mantendo você informado em cada etapa.</p>
        </div>
        <div className="w-80">
          <TbTruckDelivery className="text-4xl mb-2" />
          <h3 className="font-bold text-lg mb-2">4. Entrega</h3>
          <p>Entregamos o seu veículo pronto para proporcionar a você momentos inesquecíveis nas estradas.</p>
        </div>
      </div>
    </section>
  );
}

export default ImportationPage;
