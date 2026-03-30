import { Navbar } from "@/components/organisms/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/organisms/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ServicesShowcase />
        <HowItWorks />
        <WhyUs />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
