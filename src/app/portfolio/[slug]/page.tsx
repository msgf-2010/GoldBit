import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CaseStudy from "@/components/portfolio/CaseStudy";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";
import { PROJECTS, getProject } from "@/components/portfolio/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: project.cardTitle,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <CaseStudy project={project} />
        <PortfolioCTA />
      </main>
      <Footer />
    </>
  );
}
