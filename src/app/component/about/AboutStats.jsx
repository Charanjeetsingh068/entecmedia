import Image from 'next/image';

export default function AboutStats() {
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

          <p className="self-stretch justify-start max-[576px]:text-base text-white text-lg font-medium leading-7 mt-[25px]">
            At ENTECMEDIA, we believe a great digital product is more than just a website it's an experience. Our team blends modern design, powerful development, and smart strategy to build digital solutions that help brands connect with people and grow online. We focus on creating high-performance websites, apps, and digital platforms that are visually strong, technically reliable, and built to scale with your business. As a growing digital startup, we move fast, think creatively, and collaborate closely with our clients to turn ideas into impactful digital experiences.
          </p>
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
  );
}
