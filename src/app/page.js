"use client";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import PartnersSection from "./PartnersSection";
import ProjectsSection from "./ProjectsSection";
import FeedbackSection from "./FeedbackSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />

      <section className="homeBg pt-20 max-[576px]:pt-14">
        <AboutSection />
        <ServicesSection />
        <PartnersSection />
        <ProjectsSection />
        <FeedbackSection />
      </section>
    </main>
  );
}