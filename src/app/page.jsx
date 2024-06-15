import Header from "@/components/Header";
import Whatsapp from "@/components/Whatsapp";
import HomePage from "@/pages/home";
import CallToAction from "@/pages/callToAction";
import ServicesPage from "@/pages/services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Whatsapp />
      <HomePage />
      <ServicesPage />
      <CallToAction />
      <Footer />
    </main>
  );
}
