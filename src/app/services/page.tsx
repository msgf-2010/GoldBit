import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceDetail from "@/components/services/ServiceDetail";
import ProcessSection from "@/components/services/ProcessSection";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software development for small to mid-sized businesses. We build tailored systems around your exact workflows and operations.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ServiceDetail />
        <ProcessSection />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
