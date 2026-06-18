import "./globals.css";
import { Michroma, Inter } from "next/font/google";
import Script from "next/script";
import MainWrapper from "./component/mainWrapper";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "ENTECMEDIA — Digital Agency for Modern Brands",
    template: "%s | ENTECMEDIA",
  },
  description:
    "ENTECMEDIA is a modern digital agency specializing in brand strategy, web design, web development, and creative media for startups and growing businesses.",
  keywords: [
    "digital agency",
    "web design",
    "web development",
    "brand strategy",
    "UI UX design",
    "Next.js agency",
    "startup agency",
    "ENTECMEDIA",
  ],
  authors: [{ name: "ENTECMEDIA" }],
  creator: "ENTECMEDIA",
  metadataBase: new URL("https://skytech-dga.pages.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skytech-dga.pages.dev",
    siteName: "ENTECMEDIA",
    title: "ENTECMEDIA — Digital Agency for Modern Brands",
    description:
      "We combine creativity, technology, and strategy to design digital experiences that help businesses launch, scale, and stand out.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ENTECMEDIA Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ENTECMEDIA — Digital Agency for Modern Brands",
    description:
      "We combine creativity, technology, and strategy to design digital experiences that help businesses launch, scale, and stand out.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${michroma.variable} ${inter.variable}`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X6KC5RDSXS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-X6KC5RDSXS');
          `}
        </Script>
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  );
}