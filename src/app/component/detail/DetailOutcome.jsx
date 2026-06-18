import Link from 'next/link';

export default function DetailOutcome({ project }) {
  if (!project) return null;

  return (
    <section 
      className='card relative rounded-[53px] p-[34px] mb-[80px] max-[768px]:mb-[50px] max-[576px]:p-6' 
      style={{
        boxShadow: '0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45', 
        background: "#14050538"
      }}
    >
      <div className='flex items-center justify-between mb-12 max-[576px]:mb-6 flex-wrap '>
        <div className="opacity-60 flex items-center gap-4 justify-start text-white text-xs font-bold uppercase leading-4 tracking-tight">
          <div className='w-1.5 h-1.5 bg-white rounded-4xl'></div>
          Outcome
        </div>
        <p>/</p>
        <div className='max-[335px]:mt-5'>
          <Link href={project.liveUrl} aria-label="Live website" className='flex items-center gap-10 text-white'>
            Live Website
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6001 5.59961L11.6001 0.599609M16.6001 5.59961L11.6001 10.5996M16.6001 5.59961H0.600098" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="justify-center min-[1250px]:w-[1160px] text-white text-2xl min-[992px]:text-3xl min-[1200px]:text-4xl font-normal font-['Michroma'] min-[1400px]:pb-[106px] pb-15 leading-[48px] max-[576px]:leading-[25px] max-[576px]:text-base">
        {project.outcome}
      </div>

      <div className='grid max-[700px]:grid-cols-[0.8fr_1.2fr_1.0fr] pt-3 min-[700px]:grid-cols-[0.8fr_0.6fr_1.6fr] mt-[10px]' style={{ borderTop: '1px solid #42474C' }}>
        <p className='text-white text-base font-medium'>{project.award.name}</p>
        <p className='text-white text-base font-medium'>{project.award.title}</p>
        <p className='text-white text-base font-medium text-end'>{project.award.year}</p>
      </div>
      <div className="feedback-circle-6 blur-circle"></div>
    </section>
  );
}
