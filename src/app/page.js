"use client";

import HeroSection from "./component/home/HeroSection";
import AboutSection from "./component/home/AboutSection";
import ServicesSection from "./component/home/ServicesSection";
import PartnersSection from "./component/home/PartnersSection";
import ProjectsSection from "./component/home/ProjectsSection";
import FeedbackSection from "./component/home/FeedbackSection";

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