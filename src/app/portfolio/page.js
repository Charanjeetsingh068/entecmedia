"use client";

import PortfolioHero from '../component/portfolio/PortfolioHero';
import PortfolioProjects from '../component/portfolio/PortfolioProjects';
import PortfolioFeedback from '../component/portfolio/PortfolioFeedback';

const page = () => {
  return (
    <main className='relative wholeBg'>
      <PortfolioHero />
      <PortfolioProjects />
      <PortfolioFeedback />
    </main>
  );
}

export default page;