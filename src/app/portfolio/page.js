"use client";

import PortfolioHero from './PortfolioHero';
import PortfolioProjects from './PortfolioProjects';
import PortfolioFeedback from './PortfolioFeedback';

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