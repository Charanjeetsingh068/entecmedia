"use client";

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import "@splidejs/splide/dist/css/splide.min.css";
import { useRouter } from "next/navigation";

export default function Home() {

  const [active, setActive] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [canLoadSpline, setCanLoadSpline] = useState(true);

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


  const about = [
    {
      img: '/Quality_img.svg',
      title: 'Quality-Driven Work',
      content: 'Even as a startup, we believe quality should never be compromised. Every project we deliver is designed with attention to detail and performance in mind.'
    },
    {
      img: '/digital_img.svg',
      title: 'Smart Digital Strategy',
      content: "We don't just design   we plan. Every project starts with understanding the brand, the audience, and the long-term vision."
    },
    {
      img: '/fast_img.svg',
      title: 'Fast & Focused Execution',
      content: 'Startups move fast, and so do we. Our agile workflow helps us deliver modern digital solutions quickly and efficiently.'
    },
  ]

  const statistics = [
    {
      img: '/project_stat.webp',
      number: '25+',
      title: 'Projects Completed'
    },
    {
      img: '/clients_stat.webp',
      number: '15+',
      title: 'Happy Clients'
    },
    {
      img: '/creators_stat.webp',
      number: '5+',
      title: 'Digital Creators'
    },
    {
      img: '/innovation_stat.webp',
      number: '100%',
      title: 'Passion for Innovation'
    },
  ]

  const services = [
    {
      heading: 'Brand Strategy & Identity',
      content: 'We help businesses define their brand identity through strategy, logo design, visual systems, and brand guidelines. Our approach ensures a distinctive, consistent, and memorable presence that resonates with the right audience.',
      path: '',
      img: '/strategy_img.svg'
    },
    {
      heading: 'Web & App Design',
      content: 'We design modern, user-focused digital experiences that blend aesthetics with usability. Our intuitive and responsive designs enhance engagement, improve accessibility, and deliver seamless interactions across all devices.',
      path: '',
      img: '/design_img.svg'
    },
    {
      heading: 'Development & Digital Platforms',
      content: 'We build fast, scalable, and secure websites and applications using modern technologies. Our solutions are optimized for performance, reliability, and future growth to support your evolving business needs.',
      path: '',
      img: '/development_img.svg'
    },
    {
      heading: 'Creative Media & Digital Marketing',
      content: 'We create impactful digital campaigns that strengthen brand visibility and drive engagement. From content creation to SEO and social media marketing, we deliver measurable results that fuel business growth.',
      path: '',
      img: '/media_img.svg'
    },
  ]

  const companies = [
    { img: '/company_1.svg' },
    { img: '/company_2.svg' },
    { img: '/company_3.svg' },
    { img: '/company_4.svg' },
    { img: '/company_5.svg' },
    { img: '/company_7.svg' },
    { img: '/company_8.svg' },
    { img: '/company_9.svg' },
    { img: '/company_1.svg' },
    { img: '/company_2.svg' },
    { img: '/company_3.svg' },
    { img: '/company_4.svg' },
    { img: '/company_5.svg' },
    { img: '/company_7.svg' },
    { img: '/company_8.svg' },
    { img: '/company_9.svg' },
  ]

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

  const splideRef = useRef(null);
  const splineViewerRef = useRef(null);

  useEffect(() => {
    const viewer = splineViewerRef.current;
    if (!viewer) return;

    const handleLoadComplete = () => {
      window.dispatchEvent(new CustomEvent("hero-loaded"));
    };

    viewer.addEventListener("load-complete", handleLoadComplete);
    return () => {
      viewer.removeEventListener("load-complete", handleLoadComplete);
    };
  }, [canLoadSpline]);

  useEffect(() => {
    if (!splideRef.current) return;

    const splide = new Splide(splideRef.current, {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 6,
      gap: "3rem",
      arrows: false,
      pagination: false,
      waitForTransition: false,
      easing: "linear",
      speed: 600,
      autoScroll: {
        speed: 0.8,
        pauseOnHover: false,
        pauseOnFocus: false,
        rewind: false,
      },
      breakpoints: {
        1300: { perPage: 4, gap: "0" },
        1024: { perPage: 5, gap: "2rem" },
        768: { perPage: 4, gap: "1.5rem" },
        480: { perPage: 4, gap: "1rem" },
        0: { perPage: 2, gap: "1rem" },
      },
    });

    splide.mount({ AutoScroll }); // ✅ must be inside useEffect

    return () => splide.destroy();
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
    <main className="relative">
      <section className="header_banner relative max-[768px]:mt-[100px] max-[576px]:mt-[70px]">
        <div className="max-[600px]:hidden">
          {canLoadSpline && (
            <>
              <Script
                type="module"
                src="https://unpkg.com/@splinetool/viewer@1.12.69/build/spline-viewer.js"
                strategy="afterInteractive"
              />
              <spline-viewer
                ref={splineViewerRef}
                url="https://prod.spline.design/6PPzV2EcRbTTLY32/scene.splinecode"
              ></spline-viewer>
            </>
          )}
        </div>

        <div className="hidden max-[600px]:block">
          <video
            src="/main-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls={false}
            onLoadedData={() => {
              window.dispatchEvent(new CustomEvent('hero-loaded'));
            }}
            className="w-full min-[480px]:h-full object-cover max-[480px]:h-[230px] max-[400px]:h-[210px]"
          />
        </div>

        <div className="spline_overlay2 absolute"></div>
      </section>

      {/* <div></div> */}

      <section className="homeBg pt-20 max-[576px]:pt-14">
        <section className="about_us pb-20 relative min-[992px]:px-[87px] px-10 max-[576px]:px-6">
          <div className="container relative max-w-full">
            <div className="p-4 bg-black/0 rounded-[40px] inline-flex justify-center items-center gap-2.5"
              style={{
                boxShadow: '0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45'
              }}>
              <div className=" text-white font-bold font-['Inter'] leading-5">Discover our Story</div>
            </div>

            <div className=" text-white mt-4 max-[576px]:mt-1 text-4xl min-[780px]:text-6xl min-[1200px]:text-7xl font-normal font-['Michroma'] leading-[88px} max-[576px]:leading-[65px]">About Us</div>
            <p className="text-white mt-7 max-[576px]:mt-2 text-lg max-[576px]:text-base relative z-1">SKYNETECH is a growing digital agency built for the new generation of brands. We combine creativity, technology, and strategy to design digital experiences that help businesses launch, scale, and stand out. As a startup team, we move fast, adapt quickly, and focus on building smart solutions that create real impact. From websites and applications to branding and digital content, our goal is simple   help businesses grow in the digital world.</p>

            <div className="grid min-[1300px]:grid-cols-[2.2fr_0.8fr] min-[1300px]:items-center gap-4 mt-10 z-1 relative">
              <div>
                <img src="/about_us.webp" alt="About us" width={1305} height={706} className="w-full max-[600px]:hidden" />
                <img src="/about_us1.webp" alt="About us" width={934} height={706} className="w-full min-[600px]:hidden" />
              </div>
              <div className="max-[1100px]:grid grid-rows-3 max-[1100px]:gap-y-5 gap-8 flex flex-col justify-center">
                {about.map((item, index) => (
                  <div key={index} className="h-fit">
                    <div className="flex items-center gap-2">
                      <img src={item.img} alt="" width="53" height="54" loading="lazy" />
                      <div className=" text-white text-xl font-bold leading-6">{item.title}</div>
                    </div>
                    <p className=" text-white mt-2 text-base min-[1400px]:text-[18px] font-light">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-circle-1 blur-circle" ></div>
            <div className="about-circle-2 blur-circle" ></div>
          </div>

          <div className="statistics relative z-2 mt-10">
            <div className="container max-w-full">
              <div className="grid min-[1250px]:grid-cols-4 min-[600px]:grid-cols-2 gap-6">
                {statistics.map((item, index) => (
                  <div className="card min-[1360px]:px-16 px-12 py-6 bg-black/0 rounded-[40px]" style={{
                    boxShadow: '0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45', background: "#14050538"
                  }} key={index}>
                    <div className="text-center">
                      <img src={item.img} className="mx-auto" alt={item.title} width="64" height="64" loading="lazy" />
                      <div className="text-center text-white min-[700px]:text-4xl text-3xl font-normal font-['Michroma'] leading-[48px] mt-3">{item.number}</div>
                      <p className="text-center font-light text-white text-base leading-6 mt-1">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 mt-6">
                <div className="card min-[1200px]:px-15 px-10 max-[576px]:p-6 relative z-2 py-10 bg-black/0 rounded-[40px] max-[1000px]:flex-col flex justify-between min-[1100px]:items-center promotion max-[1100px]:gap-6" style={{
                  boxShadow: '0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45', background: "#14050538"
                }}>
                  <div className="">
                    <div className="text-white text-2xl min-[780px]:text-3xl min-[1200px]:text-4xl font-normal font-['Michroma'] leading-[48px] max-[576px]:leading-[40px]">Ready to grow your brand digitally?</div>
                    <p className="text-white text-lg leading-7 mt-2 max-[576px]:text-base">Let's work together to create something impactful.</p>
                  </div>

                  <Link href={'/contact'} aria-label="Get in Touch">
                    <img src="/getinTouch_2.svg" alt="Get in Touch" width={137} height={62}/>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="about-circle-3 blur-circle"></div>
          <div className="about-circle-4 blur-circle z-1"></div>
        </section>

        <section className="services relative min-[992px]:px-[87px] px-10 max-[576px]:px-6">
          <div className="container relative z-1 max-w-full">
            <div className="text-white text-3xl min-[780px]:text-4xl min-[1200px]:text-6xl font-['Michroma'] font-normal leading-[45px] min-[780px]:leading-[55px] min-[1200px]:leading-[76px]">We don't just build digital products, we create experiences that help brands grow.</div>

            <p className=" text-white text-lg font-medium font-['Inter'] leading-7 mt-7 mb-16 max-[576px]:text-base max-[576px]:mb-10">At SKYNETECH, we combine design, technology, and strategy to help startups and businesses launch powerful digital experiences.</p>

            <div className="grid grid-cols-1 max-[1100px]:grid-cols-2 max-[768px]:grid-cols-1 gap-6">
              {services.map((item, index) => (
                <div key={index} className="card p-2.5 bg-black/0 rounded-[53px] max-[576px]:rounded-[24px] relative services_card">
                  <div className="grid min-[1100px]:grid-cols-[1.0fr_1.2fr_0.8fr] grid-cols-1 max-[1100px]:pb-5 pt-2 items-start min-[1280px]:items-center max-[1400px]:items-center min-[1400px]:items-start">
                    <div className="hidden justify-center max-[1100px]:flex ">
                      <img src={item.img} className="max-[768px]:w-full max-[768px]:px-1" alt={item.heading} width="441" height="348" style={{ height: 'auto' }} loading="lazy" />
                    </div>

                    <div className="flex items-start min-[1600px]:mt-12 max-[1600px]:mt-8 ps-5 max-[1400px]:mt-1 max-[1100px]:mt-4 max-[576px]:px-2">
                      <div className="text-white font-normal text-3xl min-[1280px]:text-4xl min-[1580px]:text-5xl font-['Michroma'] leading-[44px] min-[1280px]:leading-[58px] min-[1580px]:leading-[68px] ">
                        {item.heading}<br />
                      </div>
                    </div>

                    <div className="flex items-start justify-start max-[1100px]:mt-6 max-[1600px]:mt-2 min-[1600px]:mt-12 flex-col px-6 max-[576px]:px-2">
                      <p className="self-stretch text-white text-lg font-medium leading-7 max-[576px]:text-base">
                        {item.content}
                      </p>

                      {/* <div className="mt-9 max-[1100px]:mt-6">
                        <Link href={item.path} aria-label={`Learn more about ${item.heading}`}>
                          <img src="/learn_more.svg" alt="Learn more" />
                        </Link>
                      </div> */}
                    </div>

                    <div className="flex justify-end max-[1100px]:hidden">
                      <img src={item.img} className="" alt={item.heading} width={403} height={308} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="services-circle-1 blur-circle"></div>
          <div className="services-circle-2 blur-circle"></div>
          <div className="services-circle-3 blur-circle"></div>
          <div className="services-circle-4 blur-circle"></div>
        </section>

        <section className="partners mt-20 min-[992px]:px-[87px] px-10 max-[576px]:px-6">
          <div className="container max-w-full">
            <div className="mt-16 relative">
              <div className="overflow-hidden w-full">
                <div ref={splideRef} className="splide">
                  <div className="splide__track">
                    <ul className="splide__list">
                      {companies.map((item, index) => (
                        <li key={index} className="splide__slide m-0">
                          <div className="relative flex items-center justify-center">
                            <Image
                              src={item.img}
                              alt="company logo"
                              width={112}
                              height={70}
                            />
                            <div className="overlay"></div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="fade-left"></div>
              <div className="fade-right"></div>
            </div>
          </div>
        </section>

        <section className="projects relative py-20 z-2">
          <div className="min-[992px]:px-[87px] px-10 max-[576px]:px-6">
            <div className="container relative max-w-full pb-16 overflow-hidden" style={{
              background: 'background: linear-gradient(182deg, #01010100 0%, #01010169 100%)', backdropFilter: 'blur(15px)'
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
                                  <div className="relative w-full" style={{ paddingBottom: "49.42%" }}> {/* matches 1046/517 ratio */}
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
                                  <div
                                    className="relative w-full">
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

        <section className="clients_feedback relative pb-15 min-[992px]:px-[87px] px-10 max-[576px]:px-6">
          <div className="container max-w-full z-1 relative">
            <div className="p-4 bg-black/0 rounded-[40px] inline-flex justify-center items-center gap-2.5" style={{
              boxShadow: '0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45'
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
                    <img src={item.img} width={65} height={65} alt={item.name} loading="lazy" />

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
      </section>
    </main>
  );
}