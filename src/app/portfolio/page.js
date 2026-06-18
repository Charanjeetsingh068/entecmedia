"use client";

import PortfolioHero from '../component/PortfolioHero';
import PortfolioProjects from '../component/PortfolioProjects';
import PortfolioFeedback from '../component/PortfolioFeedback';

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