"use client";

import Link from "next/link";

export default function AboutSection() {
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
  ];

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
  ];

  return (
    <section className="about_us pb-20 relative min-[992px]:px-[87px] px-10 max-[576px]:px-6">
      <div className="container relative max-w-full">
        <div className="p-4 bg-black/0 rounded-[40px] inline-flex justify-center items-center gap-2.5"
          style={{
            boxShadow: '0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45'
          }}>
          <div className=" text-white font-bold font-['Inter'] leading-5">Discover our Story</div>
        </div>

        <div className=" text-white mt-4 max-[576px]:mt-1 text-4xl min-[780px]:text-6xl min-[1200px]:text-7xl font-normal font-['Michroma'] leading-[88px] max-[576px]:leading-[65px]">About Us</div>
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
  );
}
