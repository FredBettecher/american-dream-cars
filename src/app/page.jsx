import Header from "@/components/Header";
import Whatsapp from "@/components/Whatsapp";
import HomePage from "@/pages/home";
import CallToAction from "@/pages/callToAction";
import ImportationPage from "@/pages/importation";
import Footer from "@/components/Footer";
import ContactPage from "@/pages/contact";
import ServicesPage from "@/pages/services";
import CarSelectionPage from "@/pages/carSelection";

export default function Home() {
  return (
    <main className="animate-fade animate-ease-in-out animate-duration-[1000ms]">
      <Header />
      <Whatsapp />
      <HomePage />
      <ImportationPage />
      <ServicesPage />
      <CarSelectionPage />
      <CallToAction />
      <ContactPage />
      <Footer />
    </main>
  );
}
