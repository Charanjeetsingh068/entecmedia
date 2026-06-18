"use client";

import React from 'react'
import DetailHero from './DetailHero'
import DetailScreenshots from './DetailScreenshots'
import DetailOutcome from './DetailOutcome'
import DetailFeedback from './DetailFeedback'

const page = ({ slug }) => {
    const projects = [
        {
            slug: "meridian",
            title: "Meridian",
            services: ["Branding", "Web Design", "Development", "Strategy"],
            location: "US",
            description: "The first Visibility Engine that gets your brand ranked #1 by AI. In a nutshell, Meridian helps brands see what AI is saying about them, uncover opportunities to improve, and take action before anyone else. We worked with Meridian to build their brand from the ground up starting with strategy, shaping their identity, and designing and developing their website in Webflow.We began by understanding the business and audience, finding the emotional connection between the two, and defining what makes Meridian stand apart as the category leader in AI search visibility. From there, we built a clear positioning, a visual identity, and a brand that feels bold, credible, orward-thinking.",
            bgColor: "#311300",
            accentColor: "#F75D00",
            mockups: [
                { img: '/mockup_1.webp' },
                { img: '/mockup_2.webp' },
                { img: '/mockup_3.webp' },
                { img: '/mockup_4.webp' },
                { img: '/mockup_5.webp' },
                { img: '/mockup_6.webp' },
            ],
            websiteImg: "/website_1.webp",
            outcome: "Staged for the stratosphere the new Meridian website & brand went viral on launch, resulting in massive demand for trial requests of the platform. Our design & development was robust and intentionally scalable, blending a unique identity with a back end to support the ambitious plans for expansion.",
            award: { name: "CSSDA", title: "Site of the Day", year: "2025" },
            liveUrl: "https://trymeridian.com/",
        },
        {
            slug: "heimdall-power",
            title: "Heimdall Power",
            services: ["3D Animation", "Branding", "Creative Development", "Web Design", "Webflow Development"],
            location: "Norway",
            description: "The Heimdall Power website is a meeting point of technology, Scandinavian roots, high-end design, and a vision of improving the efficiency of grid systems around the world. Our process was deeply rooted in strategic workshops that enabled us to deliver narrative pieces that combined with precision storytelling, technical specifications, and high-end development.",
            bgColor: "#355060",
            accentColor: "#ff5c39",
            mockups: [
                { img: '/heimdall-mockup-1.webp' },
                { img: '/heimdall-mockup-2.webp' },
                { img: '/heimdall-mockup-3.webp' },
                { img: '/heimdall-mockup-4.webp' },
                { img: '/heimdall-mockup-5.webp' },
                { img: '/heimdall-mockup-6.webp' },
            ],
            websiteImg: "/heimdall-website.webp",
            outcome: "The Heimdall Power platform launched to critical acclaim, earning recognition for its cutting-edge design and seamless user experience across all devices.",
            award: { name: "Awwwards", title: "Honorable Mention", year: "2025" },
            liveUrl: "https://www.heimdallpower.com/",
        },
        {
            slug: "cula",
            title: "Cula",
            services: ["Web Design", "Webflow Development", "Creative Development", "3D Animations"],
            location: "Berlin, Germany",
            description: "We've had a ton of fun creating a new website for Cula! This time, we immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates. The web experience sets the brand apart from competitors through visual storytelling, using a giant interactive 3D animated map to illustrate Cula’s carbon removal approach.",
            bgColor: "#203A62",
            accentColor: "#4a576b",
            mockups: [
                { img: '/cula-mockup-1.webp' },
                { img: '/cula-mockup-2.webp' },
                { img: '/cula-mockup-3.webp' },
                { img: '/cula-mockup-4.webp' },
                { img: '/cula-mockup-5.webp' },
            ],
            websiteImg: "/cula-website.webp",
            outcome: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            award: { name: "CSSDA", title: "Special Kudos", year: "2024" },
            liveUrl: "https://www.cula.tech/",
        },
        {
            slug: "arqitel",
            title: "Arqitel",
            services: ["3D Animations", "Web Design", "Webflow Development", "Creative Development"],
            location: "Beverly Hills, California, USA",
            description: "We had an ambitious goal for Arqitel's new website: Reduce the complexity of their industry through stunning 3D visualisations that combine interaction and story telling. We wanted to be able to tell what they do in a single page, while positioning their brand as a leader in their sector. The site's scrolling allows the user to feel in control of the experience, as the 3D graphics show how Arqitel's team works with data science and real estate.",
            bgColor: "#424af1",
            accentColor: "#20275d",
            mockups: [
                { img: '/arqitel-mockup-1.webp' },
                { img: '/arqitel-mockup-2.webp' },
                { img: '/arqitel-mockup-3.webp' },
                { img: '/arqitel-mockup-4.webp' },
                { img: '/arqitel-mockup-5.webp' },
            ],
            websiteImg: "/arqitel-website.webp",
            outcome: "We delivered a striking website that weaves data, real state, tax efficiency, and a wide portfolio of services in the investment sector while keeping the message clear and precise with 3D visualizations and introducing the team members as a reliable group of experts ready to take over the market.",
            award: { name: "Awwwards", title: "Honors", year: "2023" },
            liveUrl: "https://www.arqitel.com/",
        },
    ];

    const project = projects.find((p) => p.slug === slug);
    if (!project) return null;

    return (
        <main className='relative wholeBg'>
            <DetailHero project={project} />
            <DetailScreenshots project={project} />

            <section className="clients_feedback relative pt-[107px] pb-15 min-[992px]:px-[87px] px-10 max-[576px]:px-6">
                <div className="container max-w-full z-1 relative">
                    <DetailOutcome project={project} />
                    <DetailFeedback />
                </div>
                <div className="feedback-bg absolute w-full h-[300px] top-0 left-0 -z-1"></div>
                <div className="feedback-circle-1 blur-circle max-[768px]:hidden"></div>
                <div className="feedback-circle-2 blur-circle max-[1400px]:hidden"></div>
                <div className="feedback-circle-3 blur-circle"></div>
                <div className="feedback-circle-4 blur-circle"></div>
                <div className="feedback-circle-5 blur-circle"></div>
            </section>
        </main>
    )
}

export default page