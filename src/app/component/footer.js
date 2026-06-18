"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {

    const pathname = usePathname();

    return (
        <div className="footer_bg bottom-0 w-full z-2 relative">
            <footer className='self-stretch min-[992px]:px-[87px] px-10 max-[576px]:px-6 relative overflow-hidden footer_section py-10 '>
                <div className='container max-w-full '>
                    <div className='min-[1400px]:p-16 p-12 max-[576px]:p-5 max-[768px]:p-8 bg-black/0 rounded-[40px] footer_wrapper'>
                        <div className="grid grid-cols-1 min-[1230px]:grid-cols-[1.8fr_1.2fr] justify-between items-center gap-7 min-[1200px]:gap-10" >
                            <div className="">
                                <div className="justify-start text-white max-[576px]:text-4xl text-5xl min-[780px]:text-6xl min-[1200px]:text-[60px] min-[1530px]:text-7xl font-normal font-['Michroma'] max-[576px]:leading-[53px]">Stay in the loop</div>
                                <div className="self-stretch justify-start mt-3 text-white text-lg font-medium font-['Inter'] leading-7">Get insights delivered straight to your inbox</div>
                            </div>
                            <div className="">
                                <div className="flex justify-start min-[1230px]:justify-end items-center gap-2 ">
                                    <input type="text" className="form-control ps-3 w-88 px-3 py-2 bg-Opacity-Transparent/0 rounded-[56px]  outline-1 outline-white h-15 max-[480px]:w-1/2" name="" id="" aria-describedby="helpId" placeholder="Your email" />
                                    <button className="main_btn">
                                        <Image src="/getInTouch_btn.svg" alt="Get in touch" width={137} height={62} className="relative w-full h-full" />
                                    </button>
                                </div>
                                <p className='text-white text-start min-[1230px]:text-end mt-3'>We respect your privacy. Unsubscribe anytime.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 min-[1100px]:grid-cols-[2.4fr_0.6fr] justify-between items-end mt-3 footer_tabs gap-6 min-[1100px]:gap-0">
                            <div className="">
                                <Image src="/main_logo.svg" alt="Skynetech" width={240} height={80} className="relative" />

                                <ul className="flex-1 flex justify-start flex-wrap gap-y-4 items-center gap-12 m-0 p-0">
                                    <li>
                                        <Link href="/" className={`text-white text-decoration-none ${pathname === "/" ? "active" : ""}`}>
                                            Home
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

                                    <li>
                                        <Link href="/contact" className={`text-white text-decoration-none ${pathname === "" ? "active" : ""}`}>
                                            Get in Touch
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/terms" className={`text-white text-decoration-none ${pathname === "/terms" ? "active" : ""}`}>
                                            Terms
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/privacy" className={`text-white text-decoration-none ${pathname === "/privacy" ? "active" : ""}`}>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <div className="flex min-[1100px]:justify-end justify-center items-center gap-6">
                                    <Link href="https://twitter.com/skynetech" target="_blank" aria-label="Follow us on Twitter">
                                        <FaTwitter fill="#fff" size={24} />
                                    </Link>
                                    <Link href="https://facebook.com/skynetech" target="_blank" aria-label="Follow us on Facebook">
                                        <FaFacebook fill="#fff" size={24} />
                                    </Link>
                                    <Link href="https://linkedin.com/company/skynetech" target="_blank" aria-label="Follow us on LinkedIn">
                                        <FaLinkedin fill="#fff" size={24} />
                                    </Link>
                                    <Link href="https://instagram.com/skynetech" target="_blank" aria-label="Follow us on Instagram">
                                        <FaInstagram fill="#fff" size={24} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="copyright_text mt-3">
                            <p className="min-[1100px]:text-end text-center text-white pt-2 mt-3">
                                ©2026 Skynetech. All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer-circle-1 blur-circle"></div>
                <div className="footer-circle-2 blur-circle"></div>
                <div className="footer-circle-3 blur-circle max-[768px]:hidden"></div>
            </footer >
        </div>
    )
}

export default Footer