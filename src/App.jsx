import { useRef } from "react";
import Header from "./components/organism/Header";
import HeroDonationSection from "./components/organism/HeroDonationSection";
import ProgressSection from "./components/organism/ProgressSection";
import TrustSection from "./components/organism/TrustSection";
import FAQSection from "./components/organism/FAQSection";
import Footer from "./components/organism/Footer";
import DonationFormPanel from "./components/organism/DonationFormPanel";

/**
 * App - Componente principal
 * Orquesta todos los organisms para crear la landing page
 * ZONA DE CAMBIO: Agregar rutas reales con React Router, integración con backend
 */
function App() {
  const donationFormRef = useRef(null);

  const handleDonateClick = () => {
    donationFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDonationSubmit = (formData) => {
    console.log("Donación procesada:", formData);
    alert("¡Gracias por tu donación! 💙");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onDonateClick={handleDonateClick} />
      <HeroDonationSection onDonateClick={handleDonateClick} />
      <div className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ProgressSection
                currentAmount={250000}
                goalAmount={500000}
                donorCount={1250}
              />
            </div>
            <div ref={donationFormRef} className="lg:col-span-1 lg:sticky lg:top-24 lg:h-fit">
              <DonationFormPanel onSubmit={handleDonationSubmit} />
            </div>
          </div>
        </div>
      </div>
      <TrustSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
