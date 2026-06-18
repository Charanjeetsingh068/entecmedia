"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import "@splidejs/splide/dist/css/splide.min.css";

export default function DetailScreenshots({ project }) {
  const splideRef = useRef(null);

  useEffect(() => {
    if (!splideRef.current || !project || !project.mockups) return;

    const splide = new Splide(splideRef.current, {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 6,
      gap: "3rem",
      arrows: false,
      pagination: false,
      autoScroll: {
        speed: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
      },
      breakpoints: {
        1024: { perPage: 5, gap: "2rem" },
        768: { perPage: 5, gap: "1.5rem" },
        480: { perPage: 4, gap: "1rem" },
        0: { perPage: 2, gap: "1rem" },
      },
    });

    splide.mount({ AutoScroll });

    return () => splide.destroy();
  }, [project]);

  if (!project) return null;

  return (
    <section className='app_screenshot relative pt-0 pb-6' style={{ backgroundColor: project.bgColor }}>
      <div className='min-[1400px]:py-[106px] min-[992px]:py-[70px] py-[40px] overflow-hidden w-full' style={{ backgroundColor: project.accentColor }}>
        <div ref={splideRef} className="splide">
          <div className="splide__track">
            <ul className="splide__list">
              {project.mockups && project.mockups.map((item, index) => (
                <li key={index} className="splide__slide">
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={item.img}
                      alt="mockup"
                      width={260}
                      height={520}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='container max-w-full z-1 relative px-4 min-[1400px]:pt-[106px] min-[992px]:pt-[70px] pt-[40px]'>
        <Image src={project.websiteImg} alt="mockup" width={1024} height={1200} className='mx-auto' />
      </div>
    </section>
  );
}
