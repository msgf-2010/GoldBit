import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/home/HeroSection";
import ValuePropsSection from "@/components/home/ValuePropsSection";
import USPSection from "@/components/home/USPSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "GoldBit Solutions — Custom Software Development",
  description:
    "We design and build tailored software solutions for small to mid-sized businesses. Practical systems built around your exact workflows.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ValuePropsSection />
        <ServicesOverview />
        <USPSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
