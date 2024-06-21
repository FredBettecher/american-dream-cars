import { racingSansOne } from "@/fonts/fonts";
import { FaClipboardUser, FaPeopleGroup, FaHandshakeSimple } from "react-icons/fa6";

function ServicesPage() {
  return (
    <section id="section" className="w-screen h-full my-16 flex flex-col items-center justify-center text-[#046076]">
      <h1 className={`text-3xl uppercase ${racingSansOne.className}`}>nossos serviços</h1>
      <p className="text-xl mt-6 px-24">Oferecemos consultoria especializada e suporte contínuo para transformar a aquisição de um carro clássico em um investimento de paixão e história.</p>
      <div className="flex items-center gap-20 mt-12">
        <div className="w-80 text-justify">
          <FaClipboardUser className="text-4xl mb-2" />
          <h3 className="font-bold mb-2 text-lg">Consultoria Personalizada</h3>
          <p>Nossa equipe de especialistas trabalha em conjunto com você para identificar o veículo ideal que se alinha com suas preferências e necessidades específicas.</p>
        </div>
        <div className="w-80 text-justify">
          <FaHandshakeSimple className="text-4xl mb-2" />
          <h3 className="font-bold mb-2 text-lg">Suporte Pós-Venda</h3>
          <p>Mesmo após a entrega do seu carro clássico, contamos com uma rede de parceiros para fornecer suporte técnico, dicas de manutenção e recomendações de eventos e exposições relacionadas.</p>
        </div>
        <div className="w-80 text-justify">
          <FaPeopleGroup className="text-4xl mb-2" />
          <h3 className="font-bold mb-2 text-lg">Comunidade de Entusiastas</h3>
          <p>Ao se juntar à American Dream Cars, você faz parte de uma comunidade de entusiastas de veículos clássicos, onde pode compartilhar experiências, conhecimentos e participar de eventos exclusivos.</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
