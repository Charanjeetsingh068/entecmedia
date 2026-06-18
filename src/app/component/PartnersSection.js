"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import "@splidejs/splide/dist/css/splide.min.css";

export default function PartnersSection() {
  const companies = [
    { img: '/company_1.svg' },
    { img: '/company_2.svg' },
    { img: '/company_3.svg' },
    { img: '/company_4.svg' },
    { img: '/company_5.svg' },
    { img: '/company_7.svg' },
    { img: '/company_8.svg' },
    { img: '/company_9.svg' },
    { img: '/company_1.svg' },
    { img: '/company_2.svg' },
    { img: '/company_3.svg' },
    { img: '/company_4.svg' },
    { img: '/company_5.svg' },
    { img: '/company_7.svg' },
    { img: '/company_8.svg' },
    { img: '/company_9.svg' },
  ];

  const splideRef = useRef(null);

  useEffect(() => {
    if (!splideRef.current) return;

    const splide = new Splide(splideRef.current, {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 6,
      gap: "3rem",
      arrows: false,
      pagination: false,
      waitForTransition: false,
      easing: "linear",
      speed: 600,
      autoScroll: {
        speed: 0.8,
        pauseOnHover: false,
        pauseOnFocus: false,
        rewind: false,
      },
      breakpoints: {
        1300: { perPage: 4, gap: "0" },
        1024: { perPage: 5, gap: "2rem" },
        768: { perPage: 4, gap: "1.5rem" },
        480: { perPage: 4, gap: "1rem" },
        0: { perPage: 2, gap: "1rem" },
      },
    });

    splide.mount({ AutoScroll });

    return () => splide.destroy();
  }, []);

  return (
    <section className="partners mt-20 min-[992px]:px-[87px] px-10 max-[576px]:px-6">
      <div className="container max-w-full">
        <div className="mt-16 relative">
          <div className="overflow-hidden w-full">
            <div ref={splideRef} className="splide">
              <div className="splide__track">
                <ul className="splide__list">
                  {companies.map((item, index) => (
                    <li key={index} className="splide__slide m-0">
                      <div className="relative flex items-center justify-center">
                        <Image
                          src={item.img}
                          alt="company logo"
                          width={112}
                          height={70}
                        />
                        <div className="overlay"></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="fade-left"></div>
          <div className="fade-right"></div>
        </div>
      </div>
    </section>
  );
}
