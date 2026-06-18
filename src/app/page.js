"use client";

import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import ServicesSection from "./component/ServicesSection";
import PartnersSection from "./component/PartnersSection";
import ProjectsSection from "./component/ProjectsSection";
import FeedbackSection from "./component/FeedbackSection";

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