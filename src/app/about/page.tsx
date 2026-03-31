import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutApproach from "@/components/about/AboutApproach";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "GoldBit Solutions is a software development company focused on building practical, business-driven technology for small to mid-sized businesses.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutApproach />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
