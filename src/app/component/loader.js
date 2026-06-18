"use client";
import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [slideUp, setSlideUp] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Monitor document loading state
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        setIsLoaded(true);
      } else {
        const handleLoad = () => setIsLoaded(true);
        window.addEventListener("load", handleLoad);
        window.addEventListener("hero-loaded", handleLoad);
        
        // Safety fallback: if page assets take too long, force loaded state after 6 seconds
        const fallbackTimer = setTimeout(() => {
          setIsLoaded(true);
        }, 6000);

        return () => {
          window.removeEventListener("load", handleLoad);
          window.removeEventListener("hero-loaded", handleLoad);
          clearTimeout(fallbackTimer);
        };
      }
    }
  }, []);

  // Update progress animation
  useEffect(() => {
    let currentProgress = 0;
    let timer;

    const updateProgress = () => {
      if (!isLoaded) {
        // Not loaded yet: increment steadily but slow down near 90%
        if (currentProgress < 75) {
          currentProgress += Math.floor(Math.random() * 3) + 2; // 2-5%
        } else if (currentProgress < 90) {
          currentProgress += Math.floor(Math.random() * 2) + 1; // 1-2%
        } else {
          // Hold at 90% until page loads
          currentProgress = 90;
        }
      } else {
        // Page loaded: finish to 100% very rapidly
        currentProgress += Math.floor(Math.random() * 6) + 6; // 6-12%
        if (currentProgress >= 100) {
          currentProgress = 100;
        }
      }

      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearTimeout(timer);
        // Wait 350ms at 100% to let the user see the completed state
        setTimeout(() => {
          setSlideUp(true);
        }, 350);
        // Complete the loader animation and unmount after slide-up ends (800ms duration)
        setTimeout(() => {
          onFinish?.();
        }, 1150);
      } else {
        const nextInterval = isLoaded ? 10 : 30; // 10ms when finishing, 30ms when loading
        timer = setTimeout(updateProgress, nextInterval);
      }
    };

    timer = setTimeout(updateProgress, 30);
    return () => clearTimeout(timer);
  }, [isLoaded, onFinish]);

  return (
    <div
      className="fixed inset-0 bg-[#070707] flex flex-col items-center justify-center z-[9999] overflow-hidden"
      style={{
        transform: slideUp ? "translateY(-100%)" : "translateY(0)",
        transition: slideUp
          ? "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)"
          : "none",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Background overlay design (premium subtle details) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,6,19,0.04)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="relative flex flex-col items-center select-none z-10">
        {/* Subtle Label */}
        <span className="text-[10px] font-bold tracking-[0.4em] text-neutral-600 mb-6 uppercase">
          SKYNETECH
        </span>

        {/* Large percentage text with bottom-to-top color fill */}
        <h1
          className="tabular-nums font-bold tracking-tighter clip-text-fill"
          style={{
            fontSize: "clamp(5rem, 14vw, 12rem)",
            lineHeight: 0.9,
            fontFamily: "var(--font-michroma), sans-serif",
            background: `linear-gradient(to top, #E30613 ${progress}%, rgba(255, 255, 255, 0.08) ${progress}%)`,
            transition: "background 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
            willChange: "background",
          }}
        >
          {progress}
          <span 
            className="font-sans font-light"
            style={{ 
              fontSize: "0.6em", 
              marginLeft: "2px",
            }}
          >
            %
          </span>
        </h1>

        {/* Mini progress bar container */}
        <div className="w-[100px] min-[768px]:w-[140px] h-[1px] bg-neutral-900 mt-8 relative overflow-hidden rounded-full">
          <div
            className="h-full bg-[#E30613] transition-all duration-150"
            style={{
              width: `${progress}%`,
              boxShadow: "0 0 8px #E30613",
            }}
          />
        </div>
      </div>
    </div>
  );
}