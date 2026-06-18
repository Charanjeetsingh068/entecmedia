"use client";

export default function ServicesSection() {
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
  ];

  return (
    <section className="services relative min-[992px]:px-[87px] px-10 max-[576px]:px-6">
      <div className="container relative z-1 max-w-full">
        <div className="text-white text-3xl min-[780px]:text-4xl min-[1200px]:text-6xl font-['Michroma'] font-normal leading-[45px] min-[780px]:leading-[55px] min-[1200px]:leading-[76px]">We don't just build digital products, we create experiences that help brands grow.</div>

        <p className=" text-white text-lg font-medium font-['Inter'] leading-7 mt-7 mb-16 max-[576px]:text-base max-[576px]:mb-10">At ENTECMEDIA, we combine design, technology, and strategy to help startups and businesses launch powerful digital experiences.</p>

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
  );
}
