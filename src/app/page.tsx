import { Navbar } from "@/components/organisms/Navbar";
import { Hero } from "@/components/sections/Hero";
import { QuienesSomos } from "@/components/sections/QuienesSomos";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { FactsBento } from "@/components/sections/FactsBento";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/organisms/Footer";
import { IntroText } from "@/components/sections/IntroText";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroText />
        {/* <QuienesSomos /> */}
        <ServicesShowcase />
        <HowItWorks />
        <FactsBento />
        {/* <WhyUs /> */}
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
