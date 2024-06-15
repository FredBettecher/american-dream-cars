import Header from "@/components/Header";
import Whatsapp from "@/components/Whatsapp";
import HomePage from "@/pages/home";
import ServicesPage from "@/pages/services";

export default function Home() {
  return (
    <main>
      <Header />
      <Whatsapp />
      <HomePage />
      <ServicesPage />
    </main>
  );
}
