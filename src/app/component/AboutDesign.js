import Image from 'next/image';
import Link from 'next/link';

export default function AboutDesign() {
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
  ];

  return (
    <section className='company_about mt-0 pb-16 relative min-[992px]:px-[87px] px-10 max-[576px]:px-6'>
      <div className="container max-w-full">
        <div className='grid min-[1350px]:grid-cols-2 grid-cols-1 gap-6'>
          <div>
            <div className="justify-start min-[1620px]:w-[709px] min-[970px]:text-7xl max-[969px]:text-6xl max-[768px]:text-5xl max-[576px]:text-4xl font-normal font-['Michroma'] leading-[88px] max-[576px]:leading-[55px] text-white">Design Thinking</div>
            <p className="w-full min-[1560px]:pr-10 justify-start text-white font-bold leading-5 mt-[25px] max-[576px]:mt-2">
              At SKYNETECH, our work is driven by design, powered by technology, and focused on solving real problems. We combine creativity, strategy, and development to build digital experiences that are modern, scalable, and impactful.
            </p>

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
    </section>
  );
}
