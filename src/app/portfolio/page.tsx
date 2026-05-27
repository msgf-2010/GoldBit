import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies of custom software built by GoldBit Solutions — from a comprehensive HRMS platform to a unified operations system for distribution and logistics.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioHero />
        <ProjectGrid />
        <PortfolioCTA />
      </main>
      <Footer />
    </>
  );
}
