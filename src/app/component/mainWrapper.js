"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import Navbar from "./navbar";
import Footer from "./footer";
import Loader from "./loader";
import { FaLongArrowAltUp } from "react-icons/fa";

export default function mainWrapper({ children }) {
    const pathname = usePathname();
    const lenis = useLenis();
    const [showLoader, setShowLoader] = useState(pathname === "/");
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        if (pathname === "/") {
            setShowLoader(true);
        }
    }, [pathname]);

    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        }
    }, [pathname, lenis]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.history.scrollRestoration = "manual";
        }
    }, []);

    // Show button after 400px scroll
    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top using Lenis smooth scroll
    const scrollToTop = () => {
        if (lenis) {
            lenis.scrollTo(0, { duration: 1.5, easing: (t) => 1 - Math.pow(1 - t, 4) });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    useEffect(() => {
        let currentX = 0, currentY = 0;
        let targetX = 0, targetY = 0;
        let animationId;

        const circles = document.querySelectorAll(".blur-circle");
        if (!circles.length) return;

        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            targetX = (e.clientX / innerWidth - 0.5) * 2;
            targetY = (e.clientY / innerHeight - 0.5) * 2;
        };

        window.addEventListener("mousemove", handleMouseMove);

        function animate() {
            currentX += (targetX - currentX) * 0.08;
            currentY += (targetY - currentY) * 0.08;

            circles.forEach((circle) => {
                circle.style.transform = `translate(${-currentX * 30}px, ${-currentY * 30}px)`;
            });

            animationId = requestAnimationFrame(animate);
        }

        animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, [pathname]);

    return (
        <>
            {showLoader && (
                <Loader onFinish={() => setShowLoader(false)} />
            )}
            <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
                <Navbar />
                {children}
                <Footer />

                <button
                    onClick={scrollToTop}
                    className={`scroll fixed bottom-8 right-8 z-50 cursor-pointer p-3 rounded-full transition-all duration-500 ${
                        showScroll 
                            ? "opacity-100 translate-y-0 pointer-events-auto" 
                            : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                    aria-label="Scroll to top"
                >
                    <FaLongArrowAltUp size={22} color="#fff" />
                </button>
            </ReactLenis>
        </>
    );
}