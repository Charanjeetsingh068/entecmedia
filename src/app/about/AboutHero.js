import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="header_banner relative">
      <Image 
        src="/aboutHero.png" 
        alt="About SKYNETECH digital agency" 
        width={1920} 
        height={1080} 
        priority 
        className='w-full h-full object-cover max-[1100px]:h-[600px]' 
      />

      <div className='absolute bottom-0 w-full min-[1400px]:pb-20 min-[992px]:pb-10 pb-6 min-[992px]:px-[87px] px-10 max-[576px]:px-6'>
        <div className='container max-w-full'>
          <div className="text-white min-[1600px]:text-[120px] min-[1300px]:text-[100px] text-5xl min-[1030px]:text-[65px] max-[670px]:text-[40px] max-[500px]:text-[30px] font-['Michroma'] min-[1600px]:leading-[140px] min-[1300px]:leading-[100px] min-[992px]:leading-[85px] leading-[60px] max-[500px]:leading-[40px] min-[992px]:w-[850px] min-[1300px]:w-[1000px] min-[1400px]:w-[1250px] ">
            Not Your Typical Agency
          </div>

          <div className='flex items-center relative z-1 justify-between min-[1600px]:mt-[60px] min-[992px]:mt-[30px] mt-5 gap-14 max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-5'>
            <p className="w-full max-w-[1250px] justify-start text-white min-[992px]:font-semibold font-medium leading-5">
              A modern digital agency built for the next generation of businesses. SKYNETECH blends creative design, advanced development, and strategic thinking to create digital experiences that engage users, strengthen brands, and drive real business growth. We build high-performance websites, applications, and digital products that help startups and businesses launch, scale, and succeed in the digital world.
            </p>

            <Image src="/startProject.svg" alt="project" width={100} height={100} className='w-auto h-auto cursor-pointer' />
          </div>
        </div>
      </div>
    </section>
  );
}
