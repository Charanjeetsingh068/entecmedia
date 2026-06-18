import Image from 'next/image'
import Link from 'next/link';

export const metadata = {
  title: "About Us",
  description:
    "Learn about SKYNETECH — a modern digital agency combining creativity, technology, and strategy to help startups and businesses grow online.",
  openGraph: {
    title: "About Us | SKYNETECH",
    description:
      "A modern digital agency built for the next generation of businesses. We blend creative design, advanced development, and strategic thinking.",
  },
};

const page = () => {

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

  const companyAbout = [
    {
      number: '01',
      title: 'Design Led, Technology Driven',
      content: 'We believe great digital products start with thoughtful design and are powered by strong technology. Our approach combines creative thinking with modern development to build solutions that are visually compelling and technically reliable.'
    },
    {
      number: '02',
      title: 'Modern Web Development',
      content: 'We build high-performance websites and applications using modern tools and frameworks. Our focus is on speed, scalability, and seamless user experience across all devices.'
    },
    {
      number: '03',
      title: 'Team Collaboration',
      content: 'Great ideas come from collaboration. Our designers, developers, and strategists work closely together to transform ideas into powerful digital solutions.'
    },
    {
      number: '04',
      title: 'Client Collaboration',
      content: 'We treat our clients as partners in the creative process. By maintaining clear communication and transparency, we ensure every project aligns with business goals and delivers measurable results.'
    },
    {
      number: '05',
      title: 'Human-Centered Design',
      content: 'Our design process focuses on people first. We create intuitive interfaces and engaging experiences that make technology simple, accessible, and enjoyable to use.'
    },
  ]

  return (
    <main className='relative wholeBg'>
      <section className="header_banner relative">
        <Image src="/aboutHero.png" alt="About SKYNETECH digital agency" width={1920} height={1080} priority className='w-full h-full object-cover max-[1100px]:h-[600px]' />

        <div className='absolute bottom-0 w-full min-[1400px]:pb-20 min-[992px]:pb-10 pb-6 min-[992px]:px-[87px] px-10 max-[576px]:px-6'>
          <div className='container max-w-full'>
            <div className="text-white min-[1600px]:text-[120px] min-[1300px]:text-[100px] text-5xl min-[1030px]:text-[65px] max-[670px]:text-[40px] max-[500px]:text-[30px] font-['Michroma'] min-[1600px]:leading-[140px] min-[1300px]:leading-[100px] min-[992px]:leading-[85px] leading-[60px] max-[500px]:leading-[40px] min-[992px]:w-[850px] min-[1300px]:w-[1000px] min-[1400px]:w-[1250px] ">Not Your Typical Agency</div>

            <div className='flex items-center relative z-1 justify-between min-[1600px]:mt-[60px] min-[992px]:mt-[30px] mt-5 gap-14 max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-5'>
              <p className="w-full max-w-[1250px] justify-start text-white min-[992px]:font-semibold font-medium leading-5">A modern digital agency built for the next generation of businesses. SKYNETECH blends creative design, advanced development, and strategic thinking to create digital experiences that engage users, strengthen brands, and drive real business growth. We build high-performance websites, applications, and digital products that help startups and businesses launch, scale, and succeed in the digital world.</p>

              <Image src="/startProject.svg" alt="project" width={100} height={100} className='w-auto h-auto cursor-pointer' />
            </div>
          </div>
        </div>
      </section>

      <section className='about_us stat_section mt-0 pb-20 max-[576px]:pb-10 relative min-[992px]:px-[87px] px-10 max-[576px]:px-6'>
        <div className="statistics relative z-2">
          <div className="container max-w-full">
            <div className="grid min-[1250px]:grid-cols-4 min-[600px]:grid-cols-2 gap-6">
              {statistics.map((item, index) => (
                <div className="card min-[1360px]:px-16 px-12 py-6 bg-black/0 rounded-[40px]" style={{
                  boxShadow: '0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45', background: "#14050538"
                }} key={index}>
                  <div className="text-center">
                    <Image src={item.img} alt={item.title} className="mx-auto" width={60} height={60} />
                    <div className="text-center text-white min-[700px]:text-4xl text-3xl font-normal font-['Michroma'] leading-[48px] mt-3">{item.number}</div>
                    <p className="text-center font-light text-white text-base leading-6 mt-1">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="self-stretch justify-start max-[576px]:text-base text-white text-lg font-medium leading-7 mt-[25px]">At SKYNETECH, we believe a great digital product is more than just a website it's an experience. Our team blends modern design, powerful development, and smart strategy to build digital solutions that help brands connect with people and grow online. We focus on creating high-performance websites, apps, and digital platforms that are visually strong, technically reliable, and built to scale with your business. As a growing digital startup, we move fast, think creatively, and collaborate closely with our clients to turn ideas into impactful digital experiences.</p>

          </div>

          <div className='relative'>
            <Image src="/aboutMain.png" alt="About us" width={1920} height={1080} className='w-full h-full object-cover max-[800px]:hidden' />
            <Image src="/aboutMain1.png" alt="About us" width={863} height={624} className='w-full h-full object-cover min-[800px]:hidden' />
            <Image src="/glass_ball.png" alt="About us" width={114} height={114} className='absolute top-[131px] w-auto left-[-40px] max-[1100px]:h-[100px] max-[992px]:h-[80px] max-[992px]:top-[100px] max-[768px]:h-[70px] max-[768px]:top-[80px] max-[768px]:left-[-20px] max-[576px]:h-[50px] max-[576px]:top-[60px] max-[576px]:left-[-10px]' />
          </div>
        </div>

        <div className='circle-1 blur-circle'></div>
        <div className='circle-2 blur-circle max-[992px]:hidden'></div>
        <div className='circle-3 blur-circle'></div>
        <div className='circle-4 blur-circle'></div>
        <div className='circle-5 blur-circle max-[1400px]:hidden'></div>
      </section>

      <section className='company_about mt-0 pb-16 relative min-[992px]:px-[87px] px-10 max-[576px]:px-6'>
        <div className="container max-w-full">
          <div className='grid min-[1350px]:grid-cols-2 grid-cols-1 gap-6'>
            <div>
              <div className="justify-start min-[1620px]:w-[709px] min-[970px]:text-7xl max-[969px]:text-6xl max-[768px]:text-5xl max-[576px]:text-4xl font-normal font-['Michroma'] leading-[88px] max-[576px]:leading-[55px] text-white">Design Thinking</div>
              <p className="w-full min-[1560px]:pr-10 justify-start text-white font-bold leading-5 mt-[25px] max-[576px]:mt-2">At SKYNETECH, our work is driven by design, powered by technology, and focused on solving real problems. We combine creativity, strategy, and development to build digital experiences that are modern, scalable, and impactful.</p>

              <Image src="/discussion.png" alt='Discussion' width={821} height={527} className='mt-[25px] z-1 relative max-[1400px]:w-full' />
            </div>
            <div className='min-[1900px]:ml-[-30px]'>
              <div className='card rounded-2xl p-[10px]'>
                <div className='grid grid-cols-1 flex-col gap-[10px] z-2 relative'>
                  {companyAbout.map((item, index) => (
                    <div className='card min-[1900px]:pt-[30px] min-[1750px]:pt-[24px] px-[10px] pt-[22px] pb-[9px] rounded promotion' key={index}>
                      <div className='flex justify-start items-center gap-4'>
                        <div className="justify-start text-[#E30613] text-4xl font-normal font-['Michroma'] leading-[48px]">{item.number}</div>
                        <div className="justify-start text-white font-['Inter'] text-3xl font-medium leading-9">{item.title}</div>
                      </div>

                      <p className=" justify-start text-[#9CA3AF] text-sm min-[1750px]:mt-[25px] mt-5 leading-5">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='pt-20 z-5'>
          <div className="statistics relative z-2">
            <div className="container max-w-full">
              <div className="grid grid-cols-1">
                <div className="card min-[1200px]:px-15 px-10 max-[576px]:p-6 relative z-2 py-10 bg-black/0 rounded-[40px] max-[1000px]:flex-col flex justify-between min-[1100px]:items-center promotion max-[1100px]:gap-6" style={{
                  boxShadow: '0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45'
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
        </div>

        <div className='company-about-circle-1 blur-circle max-[768px]:hidden'></div>
        <div className='company-about-circle-2 blur-circle'></div>
        <div className='company-about-circle-3 blur-circle max-[576px]:hidden'></div>
        <div className='company-about-circle-4 blur-circle'></div>
        <div className='company-about-circle-5 blur-circle'></div>
        <div className='company-about-circle-6 blur-circle max-[1400px]:hidden'></div>
        <div className="company-about-circle-7 blur-circle max-[768px]:hidden"></div>
        {/* <div className="company-about-circle-8 blur-circle max-[768px]:hidden"></div> */}
      </section>

    </main>
  )
}

export default page;