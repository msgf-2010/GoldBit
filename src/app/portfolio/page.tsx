import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies and examples of custom software solutions built by GoldBit Solutions for operations-driven businesses.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioHero />
        <PortfolioGrid />
        <PortfolioCTA />
      </main>
      <Footer />
    </>
  );
}
