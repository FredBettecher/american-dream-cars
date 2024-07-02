import { racingSansOne } from "@/fonts/fonts";
import { FaClipboardUser, FaPeopleGroup, FaHandshakeSimple } from "react-icons/fa6";

function ServicesPage() {
  return (
    <section id="section" className="w-screen h-full flex flex-col items-center justify-center text-[#046076] my-8 lg:my-16">
      <h1 className={`text-xl uppercase lg:text-3xl ${racingSansOne.className}`}>nossos serviços</h1>
      <p className="text-[#333333] mt-4 text-justify px-2 lg:text-start lg:text-xl lg:px-24">Oferecemos consultoria especializada e suporte contínuo para transformar a aquisição de um carro clássico em um investimento de paixão e história.</p>
      <div className="flex flex-col items-center lg:flex-row gap-6 mt-8 lg:gap-20 lg:mt-12">
        <div className="w-80 text-justify">
          <FaClipboardUser className="text-2xl lg:text-4xl mb-2" />
          <h3 className="font-bold mb-2 lg:text-lg">Consultoria Personalizada</h3>
          <p className="text-[#333333] text-sm lg:text-base">Nossa equipe de especialistas trabalha em conjunto com você para identificar o veículo ideal que se alinha com suas preferências e necessidades específicas.</p>
        </div>
        <div className="w-80 text-justify">
          <FaHandshakeSimple className="text-2xl lg:text-4xl mb-2" />
          <h3 className="font-bold mb-2 lg:text-lg">Suporte Pós-Venda</h3>
          <p className="text-[#333333] text-sm lg:text-base">Mesmo após a entrega do seu carro clássico, contamos com uma rede de parceiros para fornecer suporte técnico, dicas de manutenção e recomendações de eventos e exposições relacionadas.</p>
        </div>
        <div className="w-80 text-justify">
          <FaPeopleGroup className="text-2xl lg:text-4xl mb-2" />
          <h3 className="font-bold mb-2 lg:text-lg">Comunidade de Entusiastas</h3>
          <p className="text-[#333333] text-sm lg:text-base">Ao se juntar à American Dream Cars, você faz parte de uma comunidade de entusiastas de veículos clássicos, onde pode compartilhar experiências, conhecimentos e participar de eventos exclusivos.</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
