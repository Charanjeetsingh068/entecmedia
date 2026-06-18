import Image from 'next/image';

export default function DetailHero({ project }) {
  if (!project) return null;

  return (
    <section className="header_banner relative">
      <Image 
        src="/portfolioDetails.png" 
        alt="About us" 
        width={1920} 
        height={950} 
        className='w-full h-full object-cover max-[1500px]:h-[750px] max-[768px]:h-[850px] max-[420px]:h-[930px]' 
      />

      <div className='absolute bottom-0 w-full min-[1400px]:pb-20 min-[992px]:pb-14 pb-8 min-[992px]:px-[87px] px-10 max-[576px]:px-6'>
        <div className='container max-w-full'>
          <div 
            className="text-white min-[1850px]:text-[120px] min-[1600px]:text-[102px] min-[1400px]:text-[85px] text-5xl min-[1030px]:text-[65px] max-[385px]:text-[40px] font-['Michroma'] min-[1700px]:leading-[140px] min-[1400px]:leading-[85px] min-[992px]:leading-[85px] leading-[60px] min-[992px]:pb-[66px] pb-10" 
            style={{ borderBottom: '1px solid #DEE0E2' }}
          >
            {project.title}
          </div>

          <div className='flex items-center relative z-1 justify-between min-[1600px]:mt-[81px] min-[992px]:mt-[60px] mt-10 gap-14 max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-5'>
            <div className='grid min-[1400px]:grid-cols-[0.8fr_0.6fr_1.6fr] min-[992px]:grid-cols-[0.8fr_2.2fr] grid-cols-1'>
              <div>
                <div className="opacity-60 mb-4 flex items-center gap-4 justify-start text-white text-xs font-bold uppercase leading-4 tracking-tight">
                  <div className='w-1.5 h-1.5 bg-white rounded-4xl'></div>
                  services &nbsp; &nbsp; /
                </div>
                <ul className="text-white projects_type mt-5 min-[1000px]:mt-0">
                  {project.services.map((s, i) => (
                    <li className='mb-2' key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className='max-[1400px]:hidden'>
                <div className="opacity-60 mb-4 flex items-center gap-4 justify-start text-white text-xs font-bold uppercase leading-4 tracking-tight">
                  <div className='w-1.5 h-1.5 bg-white rounded-4xl'></div>
                  location &nbsp; &nbsp; /
                </div>
                <p className='text-white text-base font-medium'>{project.location}</p>
              </div>

              <p className="w-full justify-start text-white font-medium leading-7 max-[992px]:mt-5">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
