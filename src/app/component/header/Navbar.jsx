"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    return (
        <>
            <section className="hero-banner fixed w-full min-[992px]:px-[87px] px-10 max-[576px]:px-6 z-6">
                <div className="container max-w-full">
                    <div className="link_section rounded-[123px]">
                        <div className="flex min-[992px]:justify-start justify-between items-center gap-6">
                            <Link href="/" className="logo">
                                <Image src="/main_logo.svg" alt="Skynetech" width={200} height={80} className="relative max-[576px]:w-[140px]" />
                            </Link>

                            <ul className="flex-1 max-[992px]:hidden flex justify-center items-center gap-12 m-0 p-0">
                                <li>
                                    <Link href="/" className={`text-white text-decoration-none ${pathname === "/" ? "active" : ""}`}>
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/about" className={`text-white text-decoration-none ${pathname === "/about" ? "active" : ""}`}>
                                        About Us
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/portfolio" className={`text-white text-decoration-none ${pathname === "/portfolio" ? "active" : ""}`}>
                                        Portfolio
                                    </Link>
                                </li>

                                {/* <li>
                                    <Link href="/services" className={`text-white text-decoration-none ${pathname === "/services" ? "active" : ""}`}>
                                        Services
                                    </Link>
                                </li> */}
                            </ul>

                            <Link href={'/contact'} className="main_btn max-[992px]:hidden">
                                <Image src="/getInTouch_btn.svg" alt="Get in touch" width={130} height={50} className="relative" />
                            </Link>
                            
                            <div className="min-[992px]:hidden cursor-pointer" onClick={() => setOpen(true)}>
                                <FaBarsStaggered size={24} fill="#fff"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {open && (
                <div
                    className="fixed inset-0 backdrop-blur-md bg-black/40 z-40"
                    onClick={() => setOpen(false)}
                ></div>
            )}

            <div className={`fixed top-0 right-0 h-full w-[300px] bg-[#111] z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
                
                <div className="flex justify-end p-6">
                    <FaXmark
                        size={28}
                        className="cursor-pointer text-white"
                        onClick={() => setOpen(false)}
                    />
                </div>

                <ul className="flex flex-col gap-8 px-8 text-white text-lg">
                    <li>
                        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                    </li>

                    <li>
                        <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
                    </li>

                    <li>
                        <Link href="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
                    </li>

                   {/*  <li>
                        <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
                    </li> */}
                </ul>

                <div className="px-8 mt-10">
                    <Link href={'/contact'} className="main_btn w-full" onClick={() => setOpen(false)}>
                        <Image src="/getInTouch_btn.svg" alt="Get in touch" width={130} height={50} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar