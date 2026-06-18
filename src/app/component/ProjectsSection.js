"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProjectsSection() {
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

  const [active, setActive] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [heights, setHeights] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  const itemRefs = useRef([]);
  const cursorRef = useRef(null);
  const cursorPosRef = useRef({ x: 0, y: 0 });
  const targetPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const router = useRouter();

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
    <section className="projects relative py-20 z-2">
      <div className="min-[992px]:px-[87px] px-10 max-[576px]:px-6">
        <div className="container relative max-w-full pb-16 overflow-hidden" style={{
          background: 'linear-gradient(182deg, #01010100 0%, #01010169 100%)', backdropFilter: 'blur(15px)'
        }}>
          <div className="grid grid-cols-1 mt-6">
            <div className="flex justify-between items-start gap-y-5 min-[1000px]:items-end min-[1000px]:flex-row flex-col">
              <div className="">
                <div className="text-white max-[576px]:text-4xl min-[780px]:text-4xl min-[1200px]:text-6xl font-normal font-['Michroma'] max-[576px]:leading-[53px] leading-[88px]">Recent Digital Creations</div>
                <p className="text-white text-lg leading-7 mt-8 max-[576px]:text-base">Innovative platforms, brand experiences, and digital products designed to help modern businesses grow.</p>
              </div>

              <Link href={'/portfolio'} aria-label="View all projects">
                <img src="/viewAll.svg" alt="View all projects" width={170} height={62}/>
              </Link>
            </div>
          </div>
        </div>
      </div>

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
                x: e.clientX - rect.left - 75, 
                y: e.clientY - rect.top - 24, 
              };
            }}
            onClick={() => router.push(`/detail/${project.slug}`)}
            className={`border-t overflow-hidden border-b min-[992px]:px-[87px] px-10 max-[576px]:px-6 relative py-10 min-[1200px]:py-16 transition-colors duration-500 bg-[#140505] z-2 cursor-none ${active === index ? "border-red-500" : "border-gray-500"
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
                          Learn more  <span className="sr-only">about {project.title}</span> <FaArrowRightLong />
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
                              <div className="relative w-full" style={{ paddingBottom: "49.42%" }}>
                                <video
                                  src={img}
                                  autoPlay
                                  muted
                                  loop
                                  playsInline preload="none"
                                  className="absolute inset-0 w-full h-full object-cover min-[1400px]:rounded-[34px] min-[1200px]:rounded-[34px] min-[992px]:rounded-[30px] max-[992px]:rounded-[22px]"
                                />
                              </div>
                            ) : (
                              <div className="relative w-full">
                                <Image width={1046} height={517}
                                  src={img}
                                  alt=""
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
  );
}
