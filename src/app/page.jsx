import Header from "@/components/Header";
import Whatsapp from "@/components/Whatsapp";
import HomePage from "@/pages/home";
import CallToAction from "@/pages/callToAction";
import ServicesPage from "@/pages/services";

export default function Home() {
  return (
    <main>
      <Header />
      <Whatsapp />
      <HomePage />
      <ServicesPage />
      <CallToAction />
    </main>
  );
}
