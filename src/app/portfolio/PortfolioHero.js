import Image from 'next/image';

export default function PortfolioHero() {
  return (
    <section className="header_banner relative">
      <Image 
        src="/portfolioHero.png" 
        alt="SKYNETECH portfolio showcase" 
        width={1920} 
        height={650} 
        priority 
        className='w-full h-full object-cover max-[1300px]:h-[450px]' 
      />

      <div className='absolute bottom-0 w-full min-[1400px]:pb-10 pb-8 min-[992px]:px-[87px] px-10 max-[576px]:px-6'>
        <div className='container max-w-full'>
          <div className="text-white min-[1850px]:text-[120px] min-[1600px]:text-[102px] min-[1400px]:text-[85px] text-5xl min-[1030px]:text-[65px] max-[670px]:text-[40px] max-[500px]:text-[30px] font-['Michroma'] min-[1700px]:leading-[140px] min-[1400px]:leading-[115px] min-[992px]:leading-[85px] leading-[60px] max-[500px]:leading-[45px] min-[992px]:w-full min-[768px]:w-[700px]">
            Crafting Meaningful Digital Products
          </div>

          <div className='flex items-center relative z-1 justify-between min-[1600px]:mt-[30px] min-[992px]:mt-[30px] mt-5 gap-14 max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-5'>
            <p className="w-full max-w-[1250px] justify-start text-white min-[992px]:font-semibold font-medium leading-5">
              Branding, web design, Webflow, creative development, and beyond—focused on clarity, performance, and user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
