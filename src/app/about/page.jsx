import Image from 'next/image'
import Link from 'next/link';

export const metadata = {
  title: "About Us",
  description:
    "Learn about ENTECMEDIA — a modern digital agency combining creativity, technology, and strategy to help startups and businesses grow online.",
  openGraph: {
    title: "About Us | ENTECMEDIA",
    description:
      "A modern digital agency built for the next generation of businesses. We blend creative design, advanced development, and strategic thinking.",
  },
};

import AboutHero from '../component/about/AboutHero';
import AboutStats from '../component/about/AboutStats';
import AboutDesign from '../component/about/AboutDesign';

const page = () => {
  return (
    <main className='relative wholeBg'>
      <AboutHero />
      <AboutStats />
      <AboutDesign />
    </main>
  );
}

export default page;