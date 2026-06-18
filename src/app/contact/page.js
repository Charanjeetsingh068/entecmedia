import Image from 'next/image'

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SKYNETECH. Start your digital project today — web design, branding, development, and creative media services.",
  openGraph: {
    title: "Contact Us | SKYNETECH",
    description:
      "Let's create something amazing together. Contact SKYNETECH for web design, development, and digital branding services.",
  },
};

const page = () => {

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
  ]

  return (
    <main className='relative wholeBg'>
      <section className="header_banner relative">
        <Image src="/serviceHero.png" alt="Contact SKYNETECH digital agency" width={1920} height={650} priority className='w-full h-full object-cover max-[1300px]:h-[450px]' />

        <div className='absolute bottom-0 w-full min-[1400px]:pb-20 min-[992px]:pb-14 pb-8 min-[992px]:px-[87px] px-10 max-[576px]:px-6'>
          <div className='container max-w-full'>
            <div className="text-white min-[1850px]:text-[120px] min-[1600px]:text-[102px] min-[1400px]:text-[85px] text-5xl min-[1030px]:text-[65px] max-[385px]:text-[40px] font-['Michroma'] min-[1700px]:leading-[140px] min-[1400px]:leading-[85px] min-[992px]:leading-[85px] leading-[60px] min-[992px]:w-full min-[768px]:w-[760px]">It's time to Skynetech</div>

            <div className='flex items-center relative z-1 justify-between min-[1600px]:mt-[30px] min-[992px]:mt-[30px] mt-5 gap-14 max-[992px]:flex-col max-[992px]:items-start max-[992px]:gap-5'>
              <p className="w-full max-w-[1250px] justify-start text-white min-[992px]:font-semibold font-medium leading-5">Let's create something amazing, together.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='conatct_us relative pt-20 max-[768px]:pt-14 pb-15 max-[768px]:pb-10 min-[992px]:px-[87px] px-10 max-[576px]:px-6'>
        <div className='container max-w-full z-1 relative'>
          <div className='grid min-[1400px]:grid-cols-[1.6fr_1.4fr] min-[1200px]:grid-cols-[1.5fr_1.5fr] grid-cols-1 gap-6'>
            <div className='card rounded-[20px] p-[10px]'>
              <div className='grid grid-cols-1 gap-[10px] z-2 relative h-full'>
                <div className='card p-5 rounded-[10px] promotion'>
                  <div className="text-white min-[1250px]:text-5xl text-4xl font-normal font-['Michroma'] leading-[58px] pb-6">Visit Our Office</div>

                  <div className='mt-[28px]'>
                    <ul>
                      <li className='flex items-start gap-4'>
                        <Image src={'/location.svg'} width={40} height={40} alt='Location' />
                        <div>
                          <p className='text-[14px] text-white font-medium'>Head Office</p>
                          <p className='text-[16px] text-white font-medium my-1'>11902 73a Ave, Delta, BC V4C 1C9</p>
                          <span className='text-[12px] font-bold rounded-md py-[2px] px-2 bg-[#B8050F]'>Real Physical Office</span>
                        </div>
                      </li>

                      <li className='flex items-start gap-4 mt-6'>
                        <Image src={'/contact.svg'} width={40} height={40} alt='Contact' />
                        <div>
                          <p className='text-[14px] text-white font-medium'>Phone Support</p>
                          <p className='text-[16px] text-white font-medium my-1'>+1 2366326560</p>
                        </div>
                      </li>

                      <li className='flex items-start gap-4 mt-6'>
                        <Image src={'/email.svg'} width={40} height={40} alt='Email' />
                        <div>
                          <p className='text-[14px] text-white font-medium'>Email Us</p>
                          <p className='text-[16px] text-white font-medium my-1'>info@skynetech.ca</p>
                        </div>
                      </li>

                      <li className='flex items-start gap-4 mt-6'>
                        <Image src={'/timing.svg'} width={40} height={40} alt='Timing' />
                        <div>
                          <p className='text-[14px] text-white font-medium'>Working Hours</p>
                          <p className='text-[16px] text-white font-medium my-1'>Mon - Fri: 10:00 AM - 5:00 PM</p>
                        </div>
                      </li>

                      <li className='mt-[28px] relative'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447.8671423111672!2d-122.89381636179313!3d49.13615273799861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d95df59639d7%3A0x47e1c8d2abb824fb!2s11902%2073a%20Ave%2C%20Delta%2C%20BC%20V4C%201C9%2C%20Canada!5e1!3m2!1sen!2sin!4v1774791814380!5m2!1sen!2sin" height="350" style={{ border: 0, mixBlendMode: 'diffusion' }} allowFullScreen="" loading="lazy" className="w-full rounded-[10px]" referrerPolicy="no-referrer-when-downgrade"></iframe>

                        {/* <div className='absolute map_overlay top-0 left-0 w-full h-full rounded-[10px]'></div> */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='card rounded-[20px] p-[10px]'>
              <div className='grid grid-cols-1 flex-col gap-[10px] z-2 relative'>
                <div className='card p-5 rounded-[10px] promotion'>
                  <div className="text-white min-[1250px]:text-5xl text-4xl font-normal font-['Michroma'] leading-[58px] pb-6">Start Your Project With Us</div>
                  <p className='text-white text-[18px] font-medium'>Tell us about your idea and our team will get back to you quickly with the best solution tailored to your needs.</p>
                  <div className='mt-8'>
                    <form className='contact_form'>
                      <div className='grid grid-cols-2 max-[576px]:grid-cols-1 gap-3 max-[576px]:gap-7'>
                        <div className=''>
                          <label htmlFor='fname' className='text-[14px] font-semibold block'>Full Name</label>
                          <input type='text' className='bg-white h-[48px] rounded-2xl w-full mt-2 ps-4' placeholder='John doe' id='fname' />
                        </div>
                        <div className=''>
                          <label htmlFor='number' className='text-[14px] font-semibold block'>Phone Number</label>
                          <input type='number' className='bg-white h-[48px] rounded-2xl w-full mt-2 ps-4' placeholder='+1 2366326560' id='number' />
                        </div>
                      </div>
                      <div className='mt-7'>
                        <label htmlFor='type' className='text-[14px] font-semibold block'>Project Type</label>
                        <input type='text' className='bg-white h-[48px] rounded-2xl w-full mt-2 ps-4' placeholder='Select service (Web Design, App Development, Branding, Marketing, etc.)' id='type' />
                      </div>
                      <div className='mt-7 relative'>
                        <label htmlFor='range' className='text-[14px] font-semibold block'>Budget Range</label>
                        <select className='bg-white h-[48px] rounded-2xl w-full mt-2 px-4'>
                          <option defaultValue={'Select your budget'}  hidden>Select your budget</option>
                          <option defaultValue={'$2000-$5000'}>$2000-$5000</option>
                          <option defaultValue={'$5000-$10000'}>$5000-$10000</option>
                          <option defaultValue={'$10000-$20000'}>$10000-$20000</option>
                        </select>
                        <Image src={'/down.svg'} width={14} height={5} alt='down' className='absolute top-[50px] right-[16px]'/>
                      </div>
                      <div className='mt-7'>
                        <label htmlFor='details' className='text-[14px] font-semibold block'>Project Details</label>
                        <textarea className='bg-white rounded-2xl w-full mt-2 resize-none ps-4 pt-4' rows={4} placeholder='Tell us about your project, goals, and requirements…'></textarea>
                      </div>

                      <button className='mt-7 w-full' type='submit'>
                        <Image src={'/contact_btn.svg'} width={'702'} height={62} alt='Contact btn' className='w-full max-[500px]:hidden'/>
                        <Image src={'/contact_btn 2.svg'} width={'370'} height={62} alt='Contact btn' className='w-full min-[500px]:hidden'/>
                      </button>

                      <div className='flex justify-center mt-2 items-center gap-1'>
                        <Image src={'/lock.svg'} width={9} height={12} alt='lock'/>
                        <p className='text-[12px] text-[#E30613]'>Your details are safe with us. No spam.</p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="clients_feedback relative pt-16 pb-15 min-[1400px]:px-[87px] px-14 max-[768px]:px-8">
        <div className="container max-w-full z-1 relative">
          <div className="p-4 bg-black/0 rounded-[40px] inline-flex justify-center items-center gap-2.5" style={{
            boxShadow: '0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45'
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
    </main>
  )
}

export default page