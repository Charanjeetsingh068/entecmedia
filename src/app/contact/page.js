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

import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactFeedback from './ContactFeedback';

const page = () => {
  return (
    <main className='relative wholeBg'>
      <ContactHero />
      <ContactForm />
      <ContactFeedback />
    </main>
  );
}

export default page;