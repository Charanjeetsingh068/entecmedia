"use client";

import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const page = () => {

    const [active, setActive] = useState(null);
    const [isDesktop, setIsDesktop] = useState(false);

    const projects = [
        {
            slug: "meridian",
            title: "Meridian",
            description:
                "An AI-powered analytics platform designed to help brands understand how AI is influencing their digital presence.",
            services: ["Branding", "Web Design", "Web Development", "Strategy", "UI"],
            location: "US",
            images: [
                "/project_1.png",
                "/project_2.png",
            ],
        },
        {
            slug: "heimdall-power",
            title: "Heimdall Power",
            description:
                "A modern digital platform created to present Heimdall Power’s technology.",
            services: [
                "3D Animation",
                "Graphic Design",
                "UI/UX Design",
                "Web Development",
                "Motion",
            ],
            location: "US",
            images: [
                "/heimdall-1.png",
                "/heimdall-2.png",
            ],
        },
        {
            slug: "cula",
            title: "Cula",
            description:
                "A futuristic digital experience designed to explore carbon management solutions through immersive visuals, interactive dashboards, and modern product storytelling.",
            services: ["Branding", "Web Design", "Web Development", "Strategy", "UI"],
            location: "US",
            images: [
                "/cula-1.mp4",
                "/cula-2.png",
            ],
        },
        {
            slug: "arqitel",
            title: "Arqitel",
            description:
                "A visually driven website experience that showcases architectural innovation through immersive layouts, interactive elements, and modern web technology.",
            services: [
                "3D Animation",
                "Graphic Design",
                "UI/UX Design",
                "Web Development",
                "Motion",
            ],
            location: "US",
            images: [
                "/arqitel-1.mp4",
                "/arqitel-2.png",
            ],
        },
    ];

    const feedback = [
        {
            review: 'Working with SKYNETECH completely transformed our online presence. Their team delivered a modern website and a strong brand identity that truly represents our business.',
            img: '/client-1.png',
            name: 'Amit Sharma',
            profession: 'Startup Founder'
        },
        {
            review: 'The SKYNETECH team understands design and technology extremely well. They built our platform with great performance and a clean user experience.',
            img: '/client-2.png',
            name: 'Sarah Johnson',
            profession: 'Product Manager'
        },
        {
            review: 'From branding to development, the process was smooth and professional. SKYNETECH helped us launch a digital product that our users love.',
            img: '/client-3.png',
            name: 'Daniel Carter',
            profession: 'Business Owner'
        },
        {
            review: 'Their creativity and technical expertise helped elevate our brand. The final result exceeded our expectations.',
            img: '/client-4.png',
            name: 'Priya Mehta',
            profession: 'Marketing Director'
        },
    ]

    useEffect(() => {
        const checkScreen = () => {
            setIsDesktop(window.innerWidth >= 992);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => {
            window.removeEventListener("resize", checkScreen);
        };
    }, []);

    const itemRefs = useRef([]);
    const [heights, setHeights] = useState([]);

    useEffect(() => {
        const measured = itemRefs.current.map((el) => el?.scrollHeight || 0);
        setHeights(measured);

        const handleResize = () => {
            const remeasured = itemRefs.current.map((el) => el?.scrollHeight || 0);
            setHeights(remeasured);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const router = useRouter();
    const cursorRef = useRef(null);
    const cursorPosRef = useRef({ x: 0, y: 0 });
    const targetPosRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef(null);
    const [hoveredProject, setHoveredProject] = useState(null);

    useEffect(() => {
        const lerp = (start, end, factor) => start + (end - start) * factor;

        const animate = () => {
            cursorPosRef.current.x = lerp(cursorPosRef.current.x, targetPosRef.current.x, 0.12);
            cursorPosRef.current.y = lerp(cursorPosRef.current.y, targetPosRef.current.y, 0.12);

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${cursorPosRef.current.x}px, ${cursorPosRef.current.y}px)`;
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    return (
        <main className='relative wholeBg'>
            <section className="header_banner relative">
                <Image src="/portfolioHero.png" alt="SKYNETECH portfolio showcase" width={1920} height={650} priority className='w-full h-full object-cover max-[1300px]:h-[450px]' />

                <div className='absolute bottom-0 w-full min-[1400px]:pb-10 pb-8 min-[992px]:px-[87px] px-10 max-[576px]:px-6'>
                    <div className='container max-w-full'>
                        <div className="text-white min-[1850px]:text-[120px] min-[1600px]:text-[102px] min-[1400px]:text-[85px] text-5xl min-[1030px]:text-[65px] max-[670px]:text-[40px] max-[500px]:text-[30px] font-['Michroma'] min-[1700px]:leading-[140px] min-[1400px]:leading-[115px] min-[992px]:leading-[85px] leading-[60px] max-[500px]:leading-[45px] min-[992px]:w-full min-[768px]:w-[700px]">Crafting Meaningful Digital Products</div>

                        <div className='flex items-center relative z-1 justify-between min-[1600px]:mt-[30px] min-[992px]:mt-[30px] mt-5 gap-14 max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-5'>
                            <p className="w-full max-w-[1250px] justify-start text-white min-[992px]:font-semibold font-medium leading-5">Branding, web design, Webflow, creative development, and beyond—focused on clarity, performance, and user experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="projects relative pb-20 pt-10">
                <div>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => {
                                if (!isDesktop) return;
                                setActive(index);
                                setHoveredProject(index);
                            }}
                            onMouseLeave={() => {
                                if (!isDesktop) return;
                                setActive(null);
                                setHoveredProject(null);
                            }}
                            onMouseMove={(e) => {
                                if (!isDesktop) return;
                                const rect = e.currentTarget.getBoundingClientRect();
                                targetPosRef.current = {
                                    x: e.clientX - rect.left - 75, // offset by half button width
                                    y: e.clientY - rect.top - 24,  // offset by half button height
                                };
                            }}
                            onClick={() => router.push(`/detail/${project.slug}`)}
                            className={`border-t  bg-[#140505] z-2 overflow-hidden border-b min-[992px]:px-[87px] px-10 max-[576px]:px-6 relative py-10 min-[1200px]:py-16 transition-colors duration-500 cursor-none ${active === index ? "border-red-500" : "border-gray-500"
                                }`}
                        >
                            <div className="max-[768px]:hidden">
                                {hoveredProject === index && isDesktop && (
                                    <div
                                        ref={cursorRef}
                                        className="absolute z-50 pointer-events-none top-0 left-0"
                                        style={{ willChange: "transform" }}
                                    >
                                        <div
                                            className="flex items-center gap-2 text-white text-base font-bold leading-5 px-6 py-4 rounded-[31px]"
                                            style={{
                                                boxShadow: "0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45",
                                                background: "rgba(0,0,0,0.4)",
                                                backdropFilter: "blur(8px)",
                                                WebkitBackdropFilter: "blur(8px)",
                                            }}
                                        >
                                            Learn more <FaArrowRightLong />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="container max-w-full">
                                <div className="grid relative z-1 min-[1400px]:grid-cols-[1.2fr_1.2fr_0.6fr] min-[1000px]:grid-cols-[0.9fr_1.5fr_0.6fr] grid-cols-1">
                                    <div className="text-white text-3xl min-[780px]:text-4xl min-[1200px]:text-6xl font-normal font-['Michroma'] leading-[56px] min-[1200px]:leading-[76px]">
                                        {project.title}
                                    </div>

                                    <p className="w-[450px] hidden min-[1000px]:block text-white text-lg font-medium leading-7">
                                        {project.description}
                                    </p>

                                    <ul className="text-white projects_type mt-5 min-[1000px]:mt-0">
                                        {project.services.map((service, i) => (
                                            <li key={i}>{service}</li>
                                        ))}
                                        <li className="mt-7">{project.location}</li>
                                    </ul>
                                </div>

                                <div
                                    style={{
                                        height: isDesktop
                                            ? active === index
                                                ? `${heights[index] || 0}px`
                                                : "0px"
                                            : `${heights[index] || 0}px`,
                                        opacity: isDesktop ? (active === index ? 1 : 0) : 1,
                                        transition: "height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease",

                                    }}
                                >
                                    <div
                                        ref={(el) => (itemRefs.current[index] = el)}
                                        className="projects_image relative flex flex-col max-[992px]:flex-col-reverse mt-6"
                                    >
                                        <div className="max-[992px]:mt-3 relative z-2 min-[768px]:hidden">
                                            <Link href={`/detail/${project.slug}`} aria-label={`Learn more about ${project.title}`}>
                                                <div
                                                    className="min-[992px]:p-5 p-4 bg-black/0 rounded-[31px] inline-flex justify-center items-center gap-2.5 w-auto"
                                                    style={{
                                                        boxShadow: "0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45",
                                                    }}
                                                >
                                                    <div className="flex items-center gap-2 text-white text-base font-bold leading-5">
                                                        Learn more <FaArrowRightLong />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="grid grid-cols-[2.0fr_1.0fr] max-[768px]:grid-cols-1 projects_showcase gap-6 mt-3 projects_img relative z-2 items-start">
                                            {project.images.map((img, i) => {
                                                const isVideo = img.endsWith(".webm") || img.endsWith(".mp4");
                                                return (
                                                    <div
                                                        key={i}
                                                        className={`relative projet-mockups ${i === 1 ? "max-[768px]:hidden" : ""}`}
                                                    >
                                                        <div
                                                            className="min-[1400px]:rounded-[40px] p-2 min-[1200px]:rounded-[34px] min-[992px]:rounded-[30px] max-[992px]:rounded-[28px]"
                                                            style={{
                                                                boxShadow: "0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45",
                                                            }}
                                                        >
                                                            {isVideo ? (
                                                                 <div className="relative w-full" style={{ paddingBottom: "49.42%" }}> {/* matches 1046/517 ratio */}
                                                                 <video
                                                                   src={img}
                                                                   autoPlay
                                                                   muted
                                                                   loop
                                                                   playsInline
                                                                   className="absolute inset-0 w-full h-full object-cover min-[1400px]:rounded-[34px] min-[1200px]:rounded-[34px] min-[992px]:rounded-[30px] max-[992px]:rounded-[22px]"
                                                                 />
                                                               </div>
                                                            ) : (
                                                                <div
                                                                    className="relative w-full">
                                                                    <Image width={1046} height={517}
                                                                        src={img}
                                                                        alt="projects"
                                                                        className="object-cover min-[1400px]:rounded-[34px] min-[1200px]:rounded-[34px] min-[992px]:rounded-[30px] max-[992px]:rounded-[22px]"
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="inner-projects-circle-1 blur-circle"></div>
                                    <div className="inner-projects-circle-2 blur-circle"></div>
                                    <div className="inner-projects-circle-3 blur-circle max-[992px]:hidden"></div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </section>

            <section className="clients_feedback relative pb-15 min-[992px]:px-[87px] px-10 max-[576px]:px-6">
                <div className="container max-w-full z-1 relative">
                    <div className="p-4 bg-black/0 rounded-[40px] inline-flex justify-center items-center gap-2.5" style={{
                        boxShadow: '0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45', background: "#14050538"
                    }}>
                        <div className="justify-start text-white font-bold font-['Inter'] leading-5">Client Feedback</div>
                    </div>

                    <div className="mt-4 text-white max-[576px]:text-4xl text-5xl min-[969px]:text-6xl min-[1125px]:text-7xl font-normal font-['Michroma'] min-[1200px]:leading-[88px] leading-[68px] max-[576px]:leading-[53px]">What Our Clients Say</div>
                    <p className="text-white mt-7 text-lg max-[576px]:text-[16px]">Real feedback from businesses and startups that have partnered with SKYNETECH to build modern digital experiences and powerful online platforms.</p>

                    <div className="grid grid-cols-1 min-[576px]:grid-cols-2 min-[1400px]:grid-cols-4 mt-16 gap-6">
                        {feedback.map((item, index) => (
                            <div className="p-7 rounded-[20px] feedback_class  flex flex-col justify-between" key={index}>
                                <p className="text-white text-sm sm:text-base md:text-lg lg:text-lg font-medium">
                                    "{item.review}"
                                </p>

                                <div className="mt-7 flex items-center gap-3">
                                    <img src={item.img} width={65} height={65} alt={item.name} />

                                    <div>
                                        <div className="text-white text-lg font-medium">{item.name}</div>
                                        <div className="justify-center text-gray-500 text-[12px] mt-2 font-medium leading-3">{item.profession}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="feedback-bg absolute w-full h-[300px] top-0 left-0 -z-1"></div>
                <div className="feedback-circle-1 blur-circle max-[768px]:hidden"></div>
                <div className="feedback-circle-2 blur-circle max-[1400px]:hidden"></div>
                <div className="feedback-circle-3 blur-circle"></div>
                <div className="feedback-circle-4 blur-circle"></div>
            </section>
        </main>
    )
}

export default page