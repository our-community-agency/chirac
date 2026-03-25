import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
