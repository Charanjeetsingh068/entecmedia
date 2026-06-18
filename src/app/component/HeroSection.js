"use client";

import Script from "next/script";
import { useState, useEffect, useRef } from "react";

export default function HeroSection() {
  const [canLoadSpline] = useState(true);
  const splineViewerRef = useRef(null);

  useEffect(() => {
    const viewer = splineViewerRef.current;
    if (!viewer) return;

    const handleLoadComplete = () => {
      window.dispatchEvent(new CustomEvent("hero-loaded"));
    };

    viewer.addEventListener("load-complete", handleLoadComplete);
    return () => {
      viewer.removeEventListener("load-complete", handleLoadComplete);
    };
  }, [canLoadSpline]);

  return (
    <section className="header_banner relative max-[768px]:mt-[100px] max-[576px]:mt-[70px]">
      <div className="max-[600px]:hidden">
        {canLoadSpline && (
          <>
            <Script
              type="module"
              src="https://unpkg.com/@splinetool/viewer@1.12.69/build/spline-viewer.js"
              strategy="afterInteractive"
            />
            <spline-viewer
              ref={splineViewerRef}
              url="https://prod.spline.design/6PPzV2EcRbTTLY32/scene.splinecode"
            ></spline-viewer>
          </>
        )}
      </div>

      <div className="hidden max-[600px]:block">
        <video
          src="/main-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          onLoadedData={() => {
            window.dispatchEvent(new CustomEvent('hero-loaded'));
          }}
          className="w-full min-[480px]:h-full object-cover max-[480px]:h-[230px] max-[400px]:h-[210px]"
        />
      </div>

      <div className="spline_overlay2 absolute"></div>
    </section>
  );
}
