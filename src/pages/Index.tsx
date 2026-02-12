import { Header } from "../components/Header";
import { HeroSlider } from "../components/HeroSlider";
import { TrustBadges } from "../components/sections/TrustBadges";
import { AboutSection } from "../components/sections/AboutSection";
import { PlatformsMarquee } from "../components/sections/PlatformsMarquee";
import { ProcessSection } from "../components/sections/ProcessSection";
import { JourneySection } from "../components/sections/JourneySection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { ProductsSection } from "../components/sections/ProductsSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { FAQSection } from "../components/sections/FAQSection";
import { ContactSection } from "../components/sections/ContactSection";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ChatBot } from "../components/ChatBot";
import { ContactPopup } from "../components/ContactPopup";
import { AnimationWrapper } from "../components/AnimationWrapper";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <AnimationWrapper type="slideUp" threshold={0.2}>
          <TrustBadges />
        </AnimationWrapper>
        <AnimationWrapper type="fadeIn" threshold={0.2}>
          <AboutSection />
        </AnimationWrapper>
        <AnimationWrapper type="slideUp" threshold={0.2}>
          <PlatformsMarquee />
        </AnimationWrapper>
        <AnimationWrapper type="slideUp" threshold={0.2}>
          <ProcessSection />
        </AnimationWrapper>
        <AnimationWrapper type="fadeIn" threshold={0.2}>
          <JourneySection />
        </AnimationWrapper>
        <AnimationWrapper type="slideUp" threshold={0.2}>
          <ServicesSection />
        </AnimationWrapper>
        <AnimationWrapper type="slideUp" threshold={0.2}>
          <ProductsSection />
        </AnimationWrapper>
        <AnimationWrapper type="fadeIn" threshold={0.2}>
          <TestimonialsSection />
        </AnimationWrapper>
        <AnimationWrapper type="slideUp" threshold={0.2}>
          <FAQSection />
        </AnimationWrapper>
        <AnimationWrapper type="slideUp" threshold={0.2}>
          <ContactSection />
        </AnimationWrapper>
      </main>
      <Footer />
      
      {/* Floating Widgets */}
      <WhatsAppButton />
      <ChatBot />
      <ContactPopup />
    </div>
  );
};

export default Index;
