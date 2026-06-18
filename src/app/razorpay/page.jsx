import React from 'react';
import RazorpaySection from '../component/razorpay/RazorpaySection';

export const metadata = {
  title: "Secure Payment",
  description:
    "Pay securely online for SKYNETECH digital services including brand strategy, web design, development, and digital marketing via Razorpay.",
  openGraph: {
    title: "Secure Payment | SKYNETECH",
    description:
      "Pay securely online for SKYNETECH digital services including brand design, web design, and developer packages.",
  },
};

const Page = () => {
  return (
    <main className="relative wholeBg">
      <RazorpaySection />
    </main>
  );
};

export default Page;
