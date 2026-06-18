"use client";

export default function PortfolioFeedback() {
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
  ];

  return (
    <section className="clients_feedback relative pb-15 min-[992px]:px-[87px] px-10 max-[576px]:px-6">
      <div className="container max-w-full z-1 relative">
        <div className="p-4 bg-black/0 rounded-[40px] inline-flex justify-center items-center gap-2.5" style={{
          boxShadow: '0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45', background: "#14050538"
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
                <img src={item.img} width={65} height={65} alt={item.name} />

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
  );
}
