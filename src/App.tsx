import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StagesSection } from "./components/StagesSection";
import { DefenseLines } from "./components/DefenseLines";
import { AboutSection } from "./components/AboutSection";
import { CasesSection } from "./components/CasesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { PanicButton } from "./components/PanicButton";

export function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <StagesSection />
      <DefenseLines />
      <AboutSection />
      <CasesSection />
      <ContactSection />
      <Footer />
      <PanicButton />
    </div>
  );
}
