"use client";

import React, { useState } from "react";
import Image from "next/image";
import Script from "next/script";

export default function RazorpaySection() {
  const packages = [
    {
      id: "starter",
      title: "Starter Launch",
      price: 15000,
      description: "Simple & clean brand landing page for startups.",
    },
    {
      id: "growth",
      title: "Growth Booster",
      price: 35000,
      description: "Custom corporate website with blog and CMS integration.",
    },
    {
      id: "ecommerce",
      title: "E-Commerce Portal",
      price: 75000,
      description: "Advanced online store with admin panel & dynamic catalog.",
    },
  ];

  const [selectedPkg, setSelectedPkg] = useState("starter");
  const [customAmount, setCustomAmount] = useState("");
  const [billingName, setBillingName] = useState("");
  const [billingEmail, setBillingEmail] = useState("");
  const [billingPhone, setBillingPhone] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const getFinalAmount = () => {
    if (selectedPkg === "custom") {
      return parseFloat(customAmount) || 0;
    }
    const pkg = packages.find((p) => p.id === selectedPkg);
    return pkg ? pkg.price : 0;
  };

  const handlePayment = (e) => {
    e.preventDefault();

    const finalAmount = getFinalAmount();
    if (finalAmount <= 0) {
      alert("Please enter or select a valid payment amount.");
      return;
    }

    if (!billingName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!billingEmail.trim() || !billingEmail.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!billingPhone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay payment gateway SDK is loading. Please try again in a moment.");
      return;
    }

    setIsProcessing(true);

    const options = {
      key: "rzp_test_placeholder", // Replace with your real Razorpay key in production
      amount: finalAmount * 100, // Razorpay takes amount in paise (1 INR = 100 Paise)
      currency: "INR",
      name: "SKYNETECH",
      description: projectDesc.trim() || "Digital Services Payment",
      image: "/main_logo.svg",
      handler: function (response) {
        setIsProcessing(false);
        setPaymentSuccess({
          paymentId: response.razorpay_payment_id,
          amount: finalAmount,
        });
      },
      prefill: {
        name: billingName,
        email: billingEmail,
        contact: billingPhone,
      },
      notes: {
        package: selectedPkg === "custom" ? "Custom Amount" : selectedPkg,
        description: projectDesc,
      },
      theme: {
        color: "#E30613",
      },
      modal: {
        ondismiss: function () {
          setIsProcessing(false);
        },
      },
    };

    try {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      setIsProcessing(false);
      alert("An error occurred while opening the payment gateway checkout.");
    }
  };

  if (paymentSuccess) {
    return (
      <section className="conatct_us relative pt-40 pb-20 min-h-[80vh] flex items-center justify-center min-[992px]:px-[87px] px-10 max-[576px]:px-6">
        <div className="container max-w-full z-1 relative flex justify-center">
          <div 
            className="card max-w-[600px] w-full p-8 rounded-[40px] text-center" 
            style={{
              boxShadow: "0 0 25px rgba(227, 6, 19, 0.2), inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45",
              background: "#140505b3",
              backdropFilter: "blur(15px)"
            }}
          >
            <div className="w-20 h-20 bg-[#E30613]/10 border border-[#E30613]/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="#E30613" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <h2 className="text-white text-3xl font-normal font-['Michroma'] leading-10 mb-4">Payment Successful!</h2>
            <p className="text-gray-400 text-lg leading-7 mb-6">Thank you for your business. Your payment transaction has been processed securely.</p>
            
            <div className="bg-black/20 border border-white/5 rounded-2xl p-5 mb-8 text-left">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-400 text-sm">Amount Paid:</span>
                <span className="text-white font-bold text-lg font-['Michroma']">₹{paymentSuccess.amount.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Payment ID:</span>
                <span className="text-white text-xs font-mono select-all">{paymentSuccess.paymentId}</span>
              </div>
            </div>

            <button 
              onClick={() => setPaymentSuccess(null)} 
              className="py-3 px-8 rounded-full bg-[#E30613] text-white hover:bg-[#B8050F] transition-colors font-semibold shadow-lg shadow-[#E30613]/20"
            >
              Make Another Payment
            </button>
          </div>
        </div>
        <div className="feedback-circle-3 blur-circle"></div>
      </section>
    );
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      <section className="conatct_us relative pt-40 pb-20 min-[992px]:px-[87px] px-10 max-[576px]:px-6">
        <div className="container max-w-full z-1 relative">
          <div className="grid min-[1300px]:grid-cols-[1.8fr_1.2fr] grid-cols-1 gap-10">
            {/* Left Column: Input Form and Packages */}
            <div>
              <div className="p-4 bg-black/0 rounded-[40px] inline-flex justify-center items-center gap-2.5 mb-6" style={{
                boxShadow: '0 0 13px #00000075, inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45'
              }}>
                <div className="text-white font-bold font-['Inter'] leading-5">Razorpay Gateway</div>
              </div>

              <h1 className="text-white text-4xl min-[780px]:text-6xl min-[1200px]:text-7xl font-normal font-['Michroma'] leading-[88px] max-[576px]:leading-[53px] mb-8">
                Pay Online
              </h1>
              
              <p className="text-white text-lg font-medium mb-12">
                Choose a pricing package or enter a custom billing amount. Once the payment details are filled, proceed to open the secure Razorpay Checkout modal.
              </p>

              {/* Package Cards Selector */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                {packages.map((pkg) => (
                  <div 
                    key={pkg.id}
                    onClick={() => setSelectedPkg(pkg.id)}
                    className={`card cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                      selectedPkg === pkg.id 
                        ? "border-[#E30613] bg-[#E30613]/5" 
                        : "border-white/10 hover:border-white/30"
                    }`}
                    style={{
                      boxShadow: selectedPkg === pkg.id ? "0 0 15px rgba(227, 6, 19, 0.2)" : "0 0 13px #00000075"
                    }}
                  >
                    <h3 className="text-white text-lg font-semibold mb-2">{pkg.title}</h3>
                    <div className="text-2xl font-bold text-[#E30613] mb-4 font-['Michroma']">
                      ₹{pkg.price.toLocaleString("en-IN")}
                    </div>
                    <p className="text-gray-400 text-xs leading-5">{pkg.description}</p>
                  </div>
                ))}
              </div>

              {/* Custom Package Button */}
              <div className="mb-10">
                <button 
                  onClick={() => setSelectedPkg("custom")}
                  className={`card w-full py-4 px-6 rounded-2xl border text-left transition-all duration-300 ${
                    selectedPkg === "custom" 
                      ? "border-[#E30613] bg-[#E30613]/5" 
                      : "border-white/10 hover:border-white/30"
                  }`}
                  style={{
                    boxShadow: selectedPkg === "custom" ? "0 0 15px rgba(227, 6, 19, 0.2)" : "0 0 13px #00000075"
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-white text-lg font-semibold">Custom Invoicing</h3>
                      <p className="text-gray-400 text-xs mt-1">Specify a unique amount agreed upon with our project lead.</p>
                    </div>
                    {selectedPkg === "custom" && (
                      <div className="relative max-w-[200px] w-full">
                        <span className="absolute left-4 top-[10px] text-gray-500 font-bold">₹</span>
                        <input 
                          type="number" 
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          placeholder="Amount" 
                          className="bg-white h-[40px] text-black rounded-xl w-full ps-8 pe-4 font-bold text-sm"
                        />
                      </div>
                    )}
                  </div>
                </button>
              </div>

              {/* Form Input fields */}
              <div className="card rounded-[20px] p-[10px]" style={{ boxShadow: '0 0 13px #00000075' }}>
                <div className="card p-8 rounded-[10px] promotion">
                  <h3 className="text-white text-2xl font-normal font-['Michroma'] leading-8 mb-6">Billing & Client Info</h3>
                  
                  <form onSubmit={handlePayment} className="contact_form">
                    <div className="grid grid-cols-2 max-[576px]:grid-cols-1 gap-5">
                      <div>
                        <label htmlFor="bname" className="text-[14px] font-semibold block text-white">Full Name</label>
                        <input 
                          type="text" 
                          id="bname" 
                          value={billingName}
                          onChange={(e) => setBillingName(e.target.value)}
                          placeholder="Your Name" 
                          className="bg-white h-[48px] rounded-2xl w-full mt-2 ps-4 text-black font-medium"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="bemail" className="text-[14px] font-semibold block text-white">Email Address</label>
                        <input 
                          type="email" 
                          id="bemail" 
                          value={billingEmail}
                          onChange={(e) => setBillingEmail(e.target.value)}
                          placeholder="client@company.com" 
                          className="bg-white h-[48px] rounded-2xl w-full mt-2 ps-4 text-black font-medium"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                      <div>
                        <label htmlFor="bphone" className="text-[14px] font-semibold block text-white">Phone Number</label>
                        <input 
                          type="tel" 
                          id="bphone" 
                          value={billingPhone}
                          onChange={(e) => setBillingPhone(e.target.value)}
                          placeholder="+91 98765 43210" 
                          className="bg-white h-[48px] rounded-2xl w-full mt-2 ps-4 text-black font-medium"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="project_name" className="text-[14px] font-semibold block text-white">Project Reference</label>
                        <input 
                          type="text" 
                          id="project_name" 
                          value={projectDesc}
                          onChange={(e) => setProjectDesc(e.target.value)}
                          placeholder="e.g. Website Overhaul Package" 
                          className="bg-white h-[48px] rounded-2xl w-full mt-2 ps-4 text-black font-medium"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isProcessing}
                      className="mt-8 w-full bg-[#E30613] hover:bg-[#B8050F] text-white py-4 px-6 rounded-2xl font-['Michroma'] transition-all text-center tracking-wider disabled:opacity-50 text-sm"
                      style={{ boxShadow: "0 4px 15px rgba(227, 6, 19, 0.3)" }}
                    >
                      {isProcessing ? "Opening Checkout..." : `Pay ₹${getFinalAmount().toLocaleString("en-IN")} Securely`}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Column: Live Payment Summary invoice */}
            <div className="flex items-start">
              <div 
                className="card w-full p-8 rounded-[40px] sticky top-32" 
                style={{
                  boxShadow: '0 0 25px rgba(0,0,0,0.55), inset 0 1px #ffffff99, inset 0 -1px #ffffff38, inset 2px 0 #8b8b8b45, inset -2px 0 #8b8b8b45',
                  background: "#14050538",
                  backdropFilter: "blur(15px)"
                }}
              >
                <h3 className="text-white text-2xl font-normal font-['Michroma'] leading-8 mb-6 pb-4 border-b border-white/5">
                  Order Summary
                </h3>

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-white font-medium text-lg">
                      {selectedPkg === "custom" 
                        ? "Custom Invoicing" 
                        : packages.find((p) => p.id === selectedPkg)?.title || "Starter Launch"
                      }
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">Professional Web Service Package</p>
                  </div>
                  <div className="text-white font-bold text-lg font-['Michroma']">
                    ₹{getFinalAmount().toLocaleString("en-IN")}
                  </div>
                </div>

                <div className="space-y-4 mb-8 bg-black/10 border border-white/5 rounded-2xl p-5">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Subtotal:</span>
                    <span className="text-white font-medium">₹{getFinalAmount().toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Taxes & Fees:</span>
                    <span className="text-green-500 font-medium">₹0 (Included)</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Client:</span>
                    <span className="text-white font-medium truncate max-w-[150px]">
                      {billingName || "—"}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-8 pt-4 border-t border-white/5">
                  <span className="text-white text-base font-semibold">Total Amount:</span>
                  <div className="text-[#E30613] text-3xl font-bold font-['Michroma']">
                    ₹{getFinalAmount().toLocaleString("en-IN")}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 bg-[#E30613]/5 border border-[#E30613]/20 py-3 rounded-2xl">
                  <Image src="/lock.svg" width={12} height={15} alt="lock" />
                  <span className="text-xs text-[#E30613] font-semibold">
                    128-bit Encrypted SSL Secure Checkout
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feedback-circle-1 blur-circle"></div>
        <div className="feedback-circle-2 blur-circle max-[1400px]:hidden"></div>
        <div className="feedback-circle-4 blur-circle"></div>
      </section>
    </>
  );
}
