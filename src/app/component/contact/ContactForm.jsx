"use client";

import Image from 'next/image';

export default function ContactForm() {
  return (
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
                        <p className='text-[16px] text-white font-medium my-1'>info@entecmedia.ca</p>
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
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447.8671423111672!2d-122.89381636179313!3d49.13615273799861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d95df59639d7%3A0x47e1c8d2abb824fb!2s11902%2073a%20Ave%2C%20Delta%2C%20BC%20V4C%201C9%2C%20Canada!5e1!3m2!1sen!2sin!4v1774791814380!5m2!1sen!2sin" 
                        height="350" 
                        style={{ border: 0, mixBlendMode: 'diffusion' }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        className="w-full rounded-[10px]" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
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
                  <form className='contact_form' onSubmit={(e) => e.preventDefault()}>
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
                        <option value='Select your budget' hidden>Select your budget</option>
                        <option value='$2000-$5000'>$2000-$5000</option>
                        <option value='$5000-$10000'>$5000-$10000</option>
                        <option value='$10000-$20000'>$10000-$20000</option>
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
  );
}
